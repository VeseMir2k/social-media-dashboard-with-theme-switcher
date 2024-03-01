const toggle = document.querySelector(".dark-mode__toggle");
const toggleSwitch = document.querySelector(".dark-mode__toggle-switch");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.classList.toggle("active");
});
