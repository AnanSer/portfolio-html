const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");

const date = document.querySelector("#date");
const aboutBtn = document.querySelector("#about-btn");
const heroBtn = document.querySelector(".hero-btn");
// const about = document.querySelector("#about");
const contact = document.querySelector("#contact");

const navLinks = document.querySelectorAll(".nav-link");

// Add smooth scrolling to each link
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor click behavior
    const targetId = this.getAttribute("href").substring(1); // Get the target section ID
    const targetSection = document.getElementById(targetId);

    // Scroll to the target section smoothly
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

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

heroBtn.addEventListener("click", function () {
  contact.scrollIntoView({ behavior: "smooth" });
});

date.innerHTML = new Date().getFullYear();
