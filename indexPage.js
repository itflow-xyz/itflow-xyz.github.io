
// logo scroll top
const scrollTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
// nav modifier
const navModifierInit = () => {
  document.querySelector("nav img.d").addEventListener("click", scrollTop);
  document.querySelector("nav img.m").addEventListener("click", scrollTop);
}


// discover more
let discoverMoreContainerOpen = false;

const discoverMoreInit = () => {
  document.querySelector(".discover-more span").addEventListener("click", openDiscoverMoreContainer);
  document.querySelector(".discover-more-container .close").addEventListener("click", closeDiscoverMoreContainer);
  document.querySelector(".discover-more-container-close").addEventListener("click", closeDiscoverMoreContainer);
}

const openDiscoverMoreContainer = () => {
  discoverMoreContainerOpen = true;
  document.querySelector(".discover-more-container").classList.add("open");
  document.querySelector("body").classList.add("disable-scroll");
  document.querySelector("ul.dots").classList.add("open");
  document.querySelector(".discover-more-container-close").classList.add("open");
}

const closeDiscoverMoreContainer = () => {
  discoverMoreContainerOpen = false;
  discoverMoreIndex = 0;
  discoverMore();
  document.querySelector(".discover-more-container").classList.remove("open")
  document.querySelector("body").classList.remove("disable-scroll")
  document.querySelector("ul.dots").classList.remove("open");
  document.querySelector(".discover-more-container-close").classList.remove("open");
}

var gesture = {
    x: [],
    y: [],
    match: ''
  },
  tolerance = 100;
window.addEventListener('touchstart', function (e) {
  if (discoverMoreContainerOpen) {
    //e.preventDefault()
    for (let i = 0; i < e.touches.length; i++) {
      gesture.x.push(e.touches[i].clientX)
      gesture.y.push(e.touches[i].clientY)
    }
  }
});
window.addEventListener('touchmove', function (e) {
  if (discoverMoreContainerOpen) {
    //e.preventDefault()
    for (let i = 0; i < e.touches.length; i++) {
      gesture.x.push(e.touches[i].clientX)
      gesture.y.push(e.touches[i].clientY)
    }
  }
});

let discoverMoreIndex = 0;
const discoverMore = () => {
  if (!discoverMoreContainerOpen) {
    return;
  }

  let x = discoverMoreIndex * 25;
  document.querySelectorAll("ul.dots li").forEach(e => e.classList.remove("active"));
  document.querySelectorAll("ul.dots li")[discoverMoreIndex].classList.add("active");
  setTimeout(() => {
    document.querySelector(".discover-more-container").style.transform = 'translate(-' + x + '%)';
  }, 1000);
  document.querySelector(".discover-more-container").style.animationName = 'discoverMoreHorizontalScroll' + x;
}

const setDiscoverMore = (n) => {
  discoverMoreIndex = n;
  discoverMore();
}

window.addEventListener('touchend', function (e) {
  let xTravel = gesture.x[gesture.x.length - 1] - gesture.x[0];
  let yTravel = gesture.y[gesture.y.length - 1] - gesture.y[0];
  if (yTravel < tolerance && yTravel > -tolerance && xTravel < -tolerance) {
    if (discoverMoreIndex < 3) {
      discoverMoreIndex++;
    }
    discoverMore();
  }
  if (yTravel < tolerance && yTravel > -tolerance && xTravel > tolerance) {
    if (discoverMoreIndex > 0) {
      discoverMoreIndex--;
    }
    discoverMore();
  }
  gesture.x = []
  gesture.y = []
  gesture.match = xTravel = yTravel = '';
});

// team

const teamMembers = [
  {
    Name: "Giulio Bosco",
    Img: "img/team-giuliobosco.JPG",
    Position: "Technical Lead",
    Scope: "I’m a curious person, always interested in learning and discovering new things. Since I’ve been a kid I’ve always been interested in technology. A few years back I had the opportunity to start it flow and since there I’m investing all my time developing it flow’s projects.<br/>I do really like to deeply understand companies and organisations, analysing their business, procedures, products and markets. ",
  },
  {
    Name: "Filippo Finke",
    Img: "img/team-filippofinke.jpg",
    Position: "System Architect and Software Engineer",
    Scope: "Passionate about cybersecurity, reverse engineering and calisthenics. Always looking for new technologies to learn and put into practice. Software Developer responsible for creating and maintaining iOS and android apps.",
  },
  {
    Name: "Luca Di Bello",
    Img: "img/team-lucadibello.jpg",
    Position: "Software Engineer",
    Scope: "Since childhood, I've had a strong interest in technology, which has pushed me to expand my knowledge in the field of software engineering.<br />At it flow, I get to work with a young and dynamic team while using cutting-edge technologies in mobile, web, and software development."
  },
  {
    Name: "Fadil Smajilbasic",
    Img: "img/team-fadilsmajilbasic.jpg",
    Position: "Developer",
    Scope: "I am 21 years old and I study Computer Science. I have been working parttime as a Full stack developer at itflow since March 2021. I find it a very peaceful working environment that has helped me to increase my professional skills and to learn new technologies and approaches."
  },
  {
    Name: "Simone Bovino",
    Img: "img/team-simonebovino.jpg",
    Position: "Developer",
    Scope: ""
  }
];

const teamMember = (n) => {
  document.querySelector(".team img").setAttribute("src", teamMembers[n].Img);
  document.querySelectorAll(".team h3").forEach(e => e.classList.add("hide"));
  document.querySelectorAll(".team .person").forEach(e => e.classList.remove("hide"));
  document.querySelectorAll(".member").forEach(e => e.classList.remove("active"));
  document.querySelectorAll(".p" + (n + 1)).forEach(e => e.classList.add("active"));

  document.querySelector(".team-member-mobile img.team-profile").setAttribute("src", teamMembers[n].Img);
  document.querySelector(".team .person h4").textContent = teamMembers[n].Name;
  document.querySelector(".team-member-mobile h4").textContent = teamMembers[n].Name;
  document.querySelector(".team .person h5").textContent = teamMembers[n].Position;
  document.querySelector(".team-member-mobile h5").textContent = teamMembers[n].Position;
  document.querySelector(".team .person p"). innerHTML = teamMembers[n].Scope;
  document.querySelector(".team-member-mobile p").innerHTML = teamMembers[n].Scope;

  document.querySelector(".team-member-mobile").classList.add("open");
  document.querySelector("body").classList.add("disable-scroll-mobile");

  document.querySelector("nav").classList.add("d");
}

const team = () => {
  document.querySelector(".team img").setAttribute("src", "img/team.jpg");
  document.querySelectorAll(".team h3").forEach(e => e.classList.remove("hide"));
  document.querySelectorAll(".team .person").forEach(e => e.classList.add("hide"));
  document.querySelectorAll(".member").forEach(e => e.classList.remove("active"));

  document.querySelector(".team-member-mobile").classList.remove("open");
  document.querySelector("body").classList.remove("disable-scroll-mobile");
  document.querySelector("nav").classList.remove("d")
}
