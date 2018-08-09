// cache main content areas from dom
const aboutBtnCache = document.querySelector(".about-btn");
const projectsBtnCache = document.querySelector(".projects-btn");
const contactBtnCache = document.querySelector(".contact-btn");
const aboutCache = document.querySelector(".about");
const projectsCache = document.querySelector(".projects");
const contactCache = document.querySelector(".contact");

// TODO: refactor these into one function
aboutBtnCache.addEventListener("click", function() {
  if (window.location.href !== "http://localhost:3000/about") {
    history.pushState({}, null, "http://localhost:3000/about");
    aboutCache.style.display = "block";
    projectsCache.style.display = "none";
    contactCache.style.display = "none";
    console.log(location.href.match(/([^\/]*)\/*$/)[1])
  }
});
projectsBtnCache.addEventListener("click", function() {
  if (window.location.href !== "http://localhost:3000/projects") {
    history.pushState({}, null, "http://localhost:3000/projects");
    projectsCache.style.display = "block";
    aboutCache.style.display = "none";
    contactCache.style.display = "none";
  }
});
contactBtnCache.addEventListener("click", function() {
  if (window.location.href !== "http://localhost:3000/contact") {
    history.pushState({}, null, "http://localhost:3000/contact");
    contactCache.style.display = "block";
    aboutCache.style.display = "none";
    projectsCache.style.display = "none";
  }
});

// render main content on page load depending on what "route" is hit
document.addEventListener('DOMContentLoaded', renderMainContent);

// render main content on forward/back navigation
window.onpopstate = renderMainContent;

function renderMainContent(event) {
  // This will return the last segment of the URL
  windowLocation = location.href.match(/([^\/]*)\/*$/)[1];
  if (windowLocation === "about") {
    aboutCache.style.display = "block";
    projectsCache.style.display = "none";
    contactCache.style.display = "none";
  }
  else if (windowLocation === "projects") {
    projectsCache.style.display = "block";
    aboutCache.style.display = "none";
    contactCache.style.display = "none";
  }
  else if (windowLocation === "contact") {
    contactCache.style.display = "block";
    aboutCache.style.display = "none";
    projectsCache.style.display = "none";
  }
}

