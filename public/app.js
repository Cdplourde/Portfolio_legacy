// cache main content areas from dom
var aboutBtnCache = document.querySelector(".about-btn");
var projectsBtnCache = document.querySelector(".projects-btn");
var contactBtnCache = document.querySelector(".contact-btn");
var aboutCache = document.querySelector(".about");
var projectsCache = document.querySelector(".projects");
var contactCache = document.querySelector(".contact");
var homeCache = document.querySelector(".home");
var noRouteCache = document.querySelector(".no-route");

// tracker for currently selected project
var currentProject = 0;

// TODO: refactor
function renderMainContent() {
  // This will store the last segment of the URL
  windowLocation = location.href.match(/([^\/]*)\/*$/)[1];
  if (windowLocation === "about") {
    aboutCache.style.display = "block";
    projectsCache.style.display = "none";
    contactCache.style.display = "none";
    homeCache.style.display = "none";
    noRouteCache.style.display = "none";
  }
  else if (windowLocation === "projects") {
    projectsCache.style.display = "block";
    aboutCache.style.display = "none";
    contactCache.style.display = "none";
    homeCache.style.display = "none";
    noRouteCache.style.display = "none";
  }
  else if (windowLocation === "contact") {
    contactCache.style.display = "block";
    aboutCache.style.display = "none";
    projectsCache.style.display = "none";
    homeCache.style.display = "none";
    noRouteCache.style.display = "none";
  }
  // TODO: update location for live server
  else if (windowLocation === "localhost:3000") {
    contactCache.style.display = "none";
    aboutCache.style.display = "none";
    projectsCache.style.display = "none";
    homeCache.style.display = "block";
    noRouteCache.style.display = "none";
  }
  else {
    contactCache.style.display = "none";
    aboutCache.style.display = "none";
    projectsCache.style.display = "none";
    homeCache.style.display = "none";
    noRouteCache.style.display = "block";
  }
}

// TODO: refactor these into one function. maybe combine it with renderMainContent()? Also need to update locations for live server
aboutBtnCache.addEventListener("click", function() {
  if (window.location.href !== "http://localhost:3000/about") {
    history.pushState({}, null, "http://localhost:3000/about");
    aboutCache.style.display = "block";
    projectsCache.style.display = "none";
    contactCache.style.display = "none";
    homeCache.style.display = "none";
    noRouteCache.style.display = "none";
  }
});
projectsBtnCache.addEventListener("click", function() {
  if (window.location.href !== "http://localhost:3000/projects") {
    history.pushState({}, null, "http://localhost:3000/projects");
    projectsCache.style.display = "block";
    aboutCache.style.display = "none";
    contactCache.style.display = "none";
    homeCache.style.display = "none";
    noRouteCache.style.display = "none";
  }
});
contactBtnCache.addEventListener("click", function() {
  if (window.location.href !== "http://localhost:3000/contact") {
    history.pushState({}, null, "http://localhost:3000/contact");
    contactCache.style.display = "block";
    aboutCache.style.display = "none";
    projectsCache.style.display = "none";
    homeCache.style.display = "none";
    noRouteCache.style.display = "none";
  }
});

// render main content on page load depending on what "route" is hit
document.addEventListener('DOMContentLoaded', renderMainContent);

// render main content on forward/back navigation
window.onpopstate = renderMainContent;


