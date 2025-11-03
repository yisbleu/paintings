// ===========================
// DARK/LIGHT MODE TOGGLE
// ===========================
const toggleButton = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

// Apply saved theme
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  toggleButton.textContent = currentTheme === "dark" ? "☀️" : "🌙";
}

// Toggle theme on click
toggleButton.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  toggleButton.textContent = newTheme === "dark" ? "☀️" : "🌙";
});
