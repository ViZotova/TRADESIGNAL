// Блокировка клавиш разработчика
document.addEventListener("keydown", (e) => {
  if (
    e.key === "F12" || // F12
    (e.ctrlKey && e.shiftKey && e.key === "I") || // Ctrl+Shift+I
    (e.ctrlKey && e.shiftKey && e.key === "J") || // Ctrl+Shift+J
    (e.ctrlKey && e.key === "U") // Ctrl+U — просмотр кода
  ) {
    e.preventDefault();
    alert("Доступ к инструментам разработчика запрещён 🚫");
  }
});

// Попытка отследить открытие DevTools через измерение времени
let devtools = false;
const threshold = 160;
setInterval(() => {
  const start = performance.now();
  debugger; // задержка если DevTools открыт
  const end = performance.now();
  if (end - start > threshold) {
    if (!devtools) {
      devtools = true;
      alert("Обнаружено открытие инструментов разработчика!");
      window.location.href = "about:blank"; // или можно сделать logout
    }
  } else {
    devtools = false;
  }
}, 1000);

document.addEventListener("keydown", (e) => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J"].includes(e.key)) ||
    (e.metaKey && e.altKey && ["I", "J", "U"].includes(e.key)) || // Mac: ⌘ + ⌥ + I/J/U
    (e.ctrlKey && e.key === "U") // Ctrl+U
  ) {
    e.preventDefault();
    alert("Доступ к инструментам разработчика запрещён 🚫");
  }
});
