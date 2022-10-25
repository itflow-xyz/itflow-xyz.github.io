Document.prototype.ready = function (callback) {
  if (callback && typeof callback === 'function') {
    document.addEventListener("DOMContentLoaded", function () {
      if (document.readyState === "interactive" || document.readyState === "complete") {
        return callback();
      }
    });
  }
};

// nav

// navbar animation scroll check
let scrolledOnce = false;

const navInit = () => {
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
}

let googleAnalytics = true;
let clarity = true;
let activeCampaign = true;
let tagManager = true;

const clickGoogleAnalytics = () => googleAnalytics = !googleAnalytics;
const clickClarity = () => clarity = !clarity;
const clickActiveCampaign = () => activeCampaign = !activeCampaign;
const clickTagManager = () => tagManager = !tagManager;

const initGoogleAnalytics = async () => {
  console.log("g")
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-J9V6GPE9DL');
}

const initClarity = async () => {
  console.log("c");
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "e51cpim7zd");
}

const initActiveCampaign = async () => {
  console.log("a")
}

const initTagManager = async () => {
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-PHQGN8D');
}

const GOOGLE_ANALYTICS_COOKIE = "googleAnalytics";
const CLARITY_COOKIE = "clarity";
const ACTIVE_CAMPAIGN_COOKIE = "activeCampaign";
const GOOGLE_TAG_MANAGER_COOKIE = "googletagManager";

const policyReject = () => {
  setCookie(GOOGLE_ANALYTICS_COOKIE, false);
  setCookie(CLARITY_COOKIE, false);
  setCookie(ACTIVE_CAMPAIGN_COOKIE, false);
  setCookie(GOOGLE_TAG_MANAGER_COOKIE, false);
  document.querySelector(".policy").classList.add("hide");
}

const policyAccept = () => {
  document.querySelector(".policy").classList.add("hide");
  init();
  setCookie(GOOGLE_ANALYTICS_COOKIE, googleAnalytics);
  setCookie(CLARITY_COOKIE, clarity);
  setCookie(ACTIVE_CAMPAIGN_COOKIE, activeCampaign);
  setCookie(GOOGLE_TAG_MANAGER_COOKIE, tagManager);
};

const loadCookie = () => {
  const googleAnalyticsCookie = getCookie(GOOGLE_ANALYTICS_COOKIE);
  const clarityCookie = getCookie(CLARITY_COOKIE);
  const activeCampaignCookie = getCookie(ACTIVE_CAMPAIGN_COOKIE);
  const googleTagManager = getCookie(GOOGLE_TAG_MANAGER_COOKIE);
  if (googleAnalyticsCookie === "" || clarityCookie === "" || activeCampaignCookie === "" || googleTagManager === "") {
    return;
  }
  document.querySelector(".policy").classList.add("hide");

  googleAnalytics = googleAnalyticsCookie === "true";
  clarity = clarityCookie === "true";
  activeCampaign = activeCampaignCookie === "true";
  tagManager = googleAnalyticsCookie === "true";

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
  if (tagManager) {
    initTagManager().then();
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
