//open popup
document.querySelector(".circle").addEventListener("click", () => {
  document.querySelector(".popup").classList.add("active");
});
document
  .querySelector(".popup .popup_close_btn")
  .addEventListener("click", () => {
    document.querySelector(".popup").classList.remove("active");
  });
