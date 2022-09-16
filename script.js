// scroll navbar color
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    header.classList.add("active_color");
  } else {
    header.classList.remove("active_color");
  }
});

//open popup
document.querySelector(".circle").addEventListener("click", () => {
  document.querySelector(".popup").classList.add("active");
});
document
  .querySelector(".popup .popup_close_btn")
  .addEventListener("click", () => {
    document.querySelector(".popup").classList.remove("active");
  });
