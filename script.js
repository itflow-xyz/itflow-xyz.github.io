//OPEN POPUP
document.querySelector(".circle").addEventListener("click", () => {
  document.querySelector(".circle").classList.remove("deactive");
  document.querySelector(".circle p").classList.remove("deactive");
  document.querySelector(".popup_content").classList.remove("deactive");
  document.querySelector(".circle").classList.add("active");
  document.querySelector(".circle p").classList.add("active");
  document.querySelector(".popup_content").classList.add("active");
  document.querySelector("body").classList.add("no-scroll");
});

// CLOSE POPUP
document
  .querySelector(".popup_content .popup_close_btn")
  .addEventListener("click", () => {
    document.querySelector(".circle").classList.remove("active");
    document.querySelector(".circle p").classList.remove("active");
    document.querySelector(".popup_content").classList.remove("active");
    document.querySelector(".circle").classList.add("deactive");
    document.querySelector(".circle p").classList.add("deactive");
    document.querySelector(".popup_content").classList.add("deactive");
    document.querySelector("body").classList.remove("no-scroll");
  });

// HEADER MOBILE

window.addEventListener("scroll", () => {
  const header = document.querySelector("header img");
  if (window.scrollY >= 50) {
    header.classList.add("header_mobile");
  } else {
    header.classList.remove("header_mobile");
  }
});

const member = [
  {
    Name: "Giulio Bosco",
    Img: "img/team-giuliobosco.JPG",
    Position: "Technical Lead",
    Scope: "I’m a curious person, always interested in learning and discovering. ",
  },
  {
    Name: "Filippo Finke",
    Img: "img/ITFLOW_LOGO.png",
    Position: "Developer",
    Scope: "Hello world",
  }
]

const teamMember = (memberIndex) => {
  window.document.querySelector("#team-image").setAttribute("src", member[memberIndex].Img);
  window.document.querySelector("#team-title").setAttribute("style", "display: none;");
  window.document.querySelector(".team-member").setAttribute("style", "display: block;");
  window.document.querySelector("#team-member-name").textContent = member[memberIndex].Name;
  window.document.querySelector("#team-member-position").textContent = member[memberIndex].Position;
  window.document.querySelector("#team-member-scope").textContent = member[memberIndex].Scope;
}