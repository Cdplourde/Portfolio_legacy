// TODO: refactor these into one function
document.querySelector(".about-btn").addEventListener("click", function() {
  if (window.location.href !== "http://localhost:3000/about") {
    history.pushState({}, null, "http://localhost:3000/about");
  }
});
document.querySelector(".contact-btn").addEventListener("click", function() {
  if (window.location.href !== "http://localhost:3000/contact") {
    history.pushState({}, null, "http://localhost:3000/contact");
  }
});
document.querySelector(".projects-btn").addEventListener("click", function() {
  if (window.location.href !== "http://localhost:3000/projects") {
    history.pushState({}, null, "http://localhost:3000/projects");
  }
});