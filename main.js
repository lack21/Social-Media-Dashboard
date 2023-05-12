// lear
// Social Media Dashboard

window.addEventListener("DOMContentLoaded", () => {
  const theme = document.querySelector(".theme");
  const themeBtn = document.querySelector(".theme-switcher");

  themeBtn.addEventListener("click", () => {
    theme.classList.toggle("active");
  });
});
