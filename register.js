window.addEventListener("DOMContentLoaded", () => {
  const cross = document.getElementById("cross");
  if (cross) {
    cross.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("userEmail");
      window.location.href = "index.html"; 
    });
  }

  const registerBtn = document.getElementById("register-btn");
  if (!registerBtn) {
    console.error("Кнопка не найдена!");
    return;
  }

  document.addEventListener("submit", (e) => e.preventDefault());

  registerBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Кнопка нажата");

    const email = document.querySelector('input[name="email"]').value.trim();
    const password = document.querySelector('input[name="password"]').value;
    const confirm = document.querySelector('input[name="confirmPassword"]').value;
    const enteredId = document.querySelector('input[name="referralId"]')?.value || "";

    if (!email || !password) {
      return;
    }

    if (password !== confirm) {
      alert("Пароли не совпадают");
      return;
    }

    console.log("Отправка запроса...", { email, password });

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("Ошибка от сервера:", response.status, text);
        alert("Ошибка от сервера: " + text);
        return;
      }

      const loginResponse = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const loginResult = await loginResponse.json();

      if (loginResponse.ok) {
        localStorage.setItem("userEmail", email);
        console.log("Автовход успешен:", loginResult);

        if (enteredId) {
          const res = await fetch("/set-id", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, id: enteredId }),
          });

          const data = await res.json();
          console.log("ID сохранён:", data);
        }

        window.location.href = "confirm-email.html";
      } else {
        alert("Ошибка входа: " + loginResult.message);
      }
    } catch (err) {
      console.error("Ошибка запроса:", err);
      alert("Ошибка: " + err.message);
    }
  });
});
