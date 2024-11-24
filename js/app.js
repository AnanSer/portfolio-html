const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const aboutBtn = document.querySelector("#about-btn");
const projects = document.querySelector("#projects");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");

// const
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

aboutBtn.addEventListener("click", function () {
  projects.scrollIntoView({ behavior: "smooth" });
});

about.addEventListener("click", function () {
  about.scrollIntoView({ behavior: "smooth" });
});

// projects.addEventListener("click", function () {
//   projects.scrollIntoView({ behavior: "smooth" });
// });

// contact.addEventListener("click", function () {
//   contact.scrollIntoView({ behavior: "smooth" });
// });

// set year
date.innerHTML = new Date().getFullYear();
