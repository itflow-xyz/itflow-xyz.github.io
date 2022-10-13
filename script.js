/*document.querySelector("nav img").addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});*/

let discoverMoreContainerOpen = false;
Document.prototype.ready = function (callback) {
  if (callback && typeof callback === 'function') {
    document.addEventListener("DOMContentLoaded", function () {
      if (document.readyState === "interactive" || document.readyState === "complete") {
        return callback();
      }
    });
  }
};

const scrollTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

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

let scrolledOnce = false;
document.ready(() => {
  loadCookie();
  document.querySelector("nav img.d").addEventListener("click", scrollTop);
  document.querySelector("nav img.m").addEventListener("click", scrollTop);

  window.addEventListener("scroll", () => {
    const header = document.querySelector("nav");
    if (window.scrollY >= 50) {
      scrolledOnce = true;
      header.classList.add("scrolled");
      header.classList.remove("no-scrolled");
    } else {
      header.classList.remove("scrolled");
      if (scrolledOnce) {
        header.classList.add("no-scrolled");
      }
    }
  });

  document.querySelector(".discover-more span").addEventListener("click", openDiscoverMoreContainer);
  document.querySelector(".discover-more-container .close").addEventListener("click", closeDiscoverMoreContainer);
  document.querySelector(".discover-more-container-close").addEventListener("click", closeDiscoverMoreContainer);
});


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

const teamMembers = [
  {
    Name: "Giulio Bosco",
    Img: "img/team-giuliobosco.JPG",
    Position: "Technical Lead",
    Scope: "I’m a curious person, always interested in learning and discovering. ",
  },
  {
    Name: "Filippo Finke",
    Img: "img/team-giuliobosco.JPG",
    Position: "System Architect and Developer",
    Scope: "Passionate about cybersecurity, reverse engineering and calisthenics. Always looking for new technologies to learn and put into practice.",
  },
  {
    Name: "Luca Di Bello",
    Img: "img/team-giuliobosco.JPG",
    Position: "Developer",
    Scope: "I have been passionate about the world of computer science since I was 6 years old. Much of my knowledge has been self-taught through personal and third party projects."
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
  document.querySelector(".team .person p").textContent = teamMembers[n].Scope;
  document.querySelector(".team-member-mobile p").textContent = teamMembers[n].Scope;

  document.querySelector(".team-member-mobile").classList.add("open");
  document.querySelector("body").classList.add("disable-scroll-mobile");

  document.querySelector("nav").classList.add("d");
}

const team = () => {
  document.querySelector(".team img").setAttribute("src", "img/team.png");
  document.querySelectorAll(".team h3").forEach(e => e.classList.remove("hide"));
  document.querySelectorAll(".team .person").forEach(e => e.classList.add("hide"));
  document.querySelectorAll(".member").forEach(e => e.classList.remove("active"));

  document.querySelector(".team-member-mobile").classList.remove("open");
  document.querySelector("body").classList.remove("disable-scroll-mobile");
  document.querySelector("nav").classList.remove("d")
}


let googleAnalytics = true;
let clarity = true;
let activeCampaign = true;

const clickGoogleAnalytics = () => googleAnalytics = !googleAnalytics;
const clickClarity = () => clarity = !clarity;
const clickActiveCampaign = () => activeCampaign = !activeCampaign;

const initGoogleAnalytics = async () => {
  console.log("g")
}

const initClarity = async () => {
  console.log("c")
}

const initActiveCampaign = async () => {
  console.log("a")
}

const GOOGLE_ANALYTICS_COOKIE = "googleAnalytics";
const CLARITY_COOKIE = "clarity";
const ACTIVE_CAMPAIGN_COOKIE = "activeCampaign";

const policyReject = () => {
  setCookie(GOOGLE_ANALYTICS_COOKIE, false);
  setCookie(CLARITY_COOKIE, false);
  setCookie(ACTIVE_CAMPAIGN_COOKIE, false)
  document.querySelector(".policy").classList.add("hide");
}

const policyAccept = () => {
  document.querySelector(".policy").classList.add("hide");
  init();
  setCookie(GOOGLE_ANALYTICS_COOKIE, googleAnalytics);
  setCookie(CLARITY_COOKIE, clarity);
  setCookie(ACTIVE_CAMPAIGN_COOKIE, activeCampaign);
};

const loadCookie = () => {
  const googleAnalyticsCookie = getCookie(GOOGLE_ANALYTICS_COOKIE);
  if (googleAnalyticsCookie === "") {
    return;
  }
  document.querySelector(".policy").classList.add("hide");

  googleAnalytics = googleAnalyticsCookie === "true";

  const clarityCookie = getCookie(CLARITY_COOKIE);
  clarity = clarityCookie === "true";

  const activeCampaignCookie = getCookie(ACTIVE_CAMPAIGN_COOKIE);
  activeCampaign = activeCampaignCookie === "true";
  init();
}

const init = () => {
  if (googleAnalytics) {
    initGoogleAnalytics().then();
  }
  if (clarity) {
    initClarity().then();
  }
  if (activeCampaign) {
    initActiveCampaign().then();
  }
}

function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let showPolicyPersonalize = false;

const policyPersonalize = () => {
  if (showPolicyPersonalize) {
    document.querySelector(".policy .policy-personalize").classList.remove("open");
    showPolicyPersonalize = false;
  } else {
    document.querySelector(".policy .policy-personalize").classList.add("open");
    showPolicyPersonalize = true;
  }
}