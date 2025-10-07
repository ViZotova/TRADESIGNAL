(async () => {
  const params = new URLSearchParams(window.location.search);
  const email = params.get("email");
  const password = params.get("password");

  if (!email || !password) return;

  try {
    const response = await fetch("/TRADESIGNAL/users.json");
    const users = await response.json();

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem("user", user.email);
      window.location.href = "index-lk.html";
    } else {
      alert("Неверный email или пароль");
    }
  } catch (error) {
    alert("Ошибка сети или сервера: " + error.message);
  }
})();
