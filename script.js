const button = document.querySelector(".form");
const info = document.querySelector(".info");
button.addEventListener("submit", (e) => {
  e.preventDefault();
  info.classList.remove("info--hidden");
});
