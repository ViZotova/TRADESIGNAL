require("dotenv").config(); // подключаем .env
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

const app = express();

// ===== MIDDLEWARE =====
app.use(cors());
app.use(bodyParser.json());

// ===== ФАЙЛЫ С ПОЛЬЗОВАТЕЛЯМИ =====
const usersFile = path.join(__dirname, "users.json");
const usersExampleFile = path.join(__dirname, "users.example.json");

function readUsers() {
  try {
    return JSON.parse(fs.readFileSync(usersFile, "utf-8"));
  } catch {
    console.log("Используется пример users.example.json");
    return JSON.parse(fs.readFileSync(usersExampleFile, "utf-8"));
  }
}

function writeUsers(users) {
  try {
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
  } catch (err) {
    console.error("Не удалось записать users.json:", err);
  }
}

// ===== НАСТРОЙКА EMAIL =====
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ===== API =====

// Регистрация
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "Email и пароль обязательны" });

  const users = readUsers();
  if (users.find((u) => u.email === email)) return res.status(400).json({ message: "Пользователь уже существует" });

  users.push({ email, password });
  writeUsers(users);

  const mailOptions = {
    from: `"TRADESIGNAL" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Подтверждение регистрации",
    html: `
      <h2>Привет, ${email}!</h2>
      <p>Для активации аккаунта нажмите на кнопку ниже:</p>
      <a href="${BASE_URL}/enter-id.html" style="
        display: inline-block;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
      ">Активировать аккаунт</a>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      message: "Регистрация прошла успешно. Письмо отправлено на почту.",
      autoLogin: { email, password },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка при отправке письма." });
  }
});

// Добавление/обновление ID пользователя
app.post("/set-id", (req, res) => {
  const { email, id } = req.body;
  if (!email || !id) return res.status(400).json({ message: "Email и ID обязательны" });

  const users = readUsers();
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(404).json({ message: "Пользователь не найден" });

  user.id = id;
  writeUsers(users);

  res.json({ message: "ID успешно сохранён" });
});

// Логин
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) res.status(200).json({ email: user.email, message: "Вход выполнен" });
  else res.status(401).json({ message: "Неверный email или пароль" });
});

// Сброс пароля
app.post("/reset-password", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email обязателен" });

  const users = readUsers();
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(404).json({ message: "Пользователь не найден" });

  const newPassword = Math.random().toString(36).slice(-8);
  user.password = newPassword;
  writeUsers(users);

  const mailOptions = {
    from: `"TRADESIGNAL" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Сброс пароля",
    html: `<h2>Здравствуйте!</h2><p>Ваш новый пароль: <strong>${newPassword}</strong></p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Новый пароль отправлен на email" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Не удалось отправить письмо" });
  }
});

// Повторная отправка подтверждения
app.post("/resend-confirmation", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email обязателен" });

  const users = readUsers();
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(404).json({ message: "Пользователь не найден" });

  const mailOptions = {
    from: `"TRADESIGNAL" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Повторное подтверждение регистрации",
    html: `<h2>Здравствуйте!</h2><p>Вы запрашивали повторное письмо.</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Письмо отправлено повторно." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ошибка при отправке письма." });
  }
});

// ===== СТАТИКА =====
app.use(express.static(__dirname));

// ===== ЗАПУСК =====
app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});
