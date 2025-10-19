const button = document.getElementById("actionBtn");
const message = document.getElementById("message");
let darkMode = false;

button.addEventListener("click", () => {
  // Toggle message visibility
  message.classList.toggle("hidden");

  if (!message.classList.contains("hidden")) {
    message.style.opacity = "1";
    button.textContent = "Change Theme 🌙";
  } else {
    message.style.opacity = "0";
    button.textContent = "Click Me ✨";
  }

  // Toggle background theme
  document.body.style.background = darkMode
    ? "linear-gradient(135deg, #667eea, #764ba2)"
    : "linear-gradient(135deg, #232526, #414345)";

  darkMode = !darkMode;
});
