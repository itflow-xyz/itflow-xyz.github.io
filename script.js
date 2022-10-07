/*document.querySelector("nav img").addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});*/

let discoverMoreContainerOpen = false;
Document.prototype.ready = function(callback) {
  if(callback && typeof callback === 'function') {
    document.addEventListener("DOMContentLoaded", function() {
      if(document.readyState === "interactive" || document.readyState === "complete") {
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
window.addEventListener('touchstart',function(e){
  if (discoverMoreContainerOpen) {
    //e.preventDefault()
    for (let i = 0; i < e.touches.length; i++) {
      gesture.x.push(e.touches[i].clientX)
      gesture.y.push(e.touches[i].clientY)
    }
  }
});
window.addEventListener('touchmove',function(e){
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

window.addEventListener('touchend',function(e){
  let xTravel = gesture.x[gesture.x.length-1] - gesture.x[0];
  let yTravel = gesture.y[gesture.y.length-1] - gesture.y[0];
  if (yTravel<tolerance && yTravel>-tolerance && xTravel<-tolerance){
    if (discoverMoreIndex < 3) {
      discoverMoreIndex++;
    }
    discoverMore();
  }
  if (yTravel<tolerance && yTravel>-tolerance && xTravel>tolerance){
    if (discoverMoreIndex > 0) {
      discoverMoreIndex--;
    }
    discoverMore();
  }
  gesture.x = []
  gesture.y = []
  gesture.match = xTravel = yTravel = '';
})

/*
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
    Img: "img/itflow-logo.png",
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
}*/