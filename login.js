(async () => {
  const params = new URLSearchParams(window.location.search);
  const email = params.get("email");
  const password = params.get("password");

  if (!email || !password) {
    return;
  }

  try {
    const response = await fetch("/TRADESIGNAL/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, }),
    });

    const result = await response.json();
    console.log("Ответ сервера:", result);

    if (response.ok && result.email) {
      localStorage.setItem("user", result.email);
      window.location.href = "index-lk.html";
    } else {
      alert(result.message || "Ошибка входа");
    }
  } catch (error) {
    alert("Ошибка сети или сервера: " + error.message);
  }
})();
