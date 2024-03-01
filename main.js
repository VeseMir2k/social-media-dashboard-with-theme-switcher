// Selecting the dark mode toggle button element
const toggle = document.querySelector(".dark-mode__toggle");

// Checking if the user prefers a dark color scheme
const isPrefersColorDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

// Initializing theme based on user's preference
let theme = isPrefersColorDark;

// Adding an event listener to the toggle button for toggling the theme
toggle.addEventListener("click", () => {
  // Toggling between light and dark themes
  if (theme) {
    // Setting the data-theme attribute to dark
    document.documentElement.setAttribute("data-theme", "dark");
    // Updating theme variable
    theme = !theme;
  } else {
    // Removing the data-theme attribute for light theme
    document.documentElement.removeAttribute("data-theme", "dark");
    // Updating theme variable
    theme = !theme;
  }
  // Toggling the active class on the toggle button
  toggle.classList.toggle("active");
});

// Applying the initial theme based on user preference
if (theme) {
  // Setting the data-theme attribute to dark if the user prefers dark mode
  document.documentElement.setAttribute("data-theme", "dark");
  // Updating theme variable
  theme = !theme;
  // Toggling the active class on the toggle button
  toggle.classList.toggle("active");
} else {
  // Updating theme variable if the user prefers light mode
  theme = !theme;
}
