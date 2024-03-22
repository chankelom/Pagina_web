let menuToggler = document.querySelector(".mobile-menu");
let menu = document.querySelector(".nav");
let navLinks = document.querySelectorAll(".nav-links");
let header = document.querySelector(".header");

window.addEventListener('scroll', function () {
  if (window.scrollY > 0) header.classList.add('scroll-change'); // > 0 ou outro valor desejado
  else header.classList.remove('scroll-change');
});

function animateMenu() {
  navLinks.forEach((link, index) => {
    link.style.animation
      ? (link.style.animation = "")
      : (link.style.animation = `LinksFadeIn 0.5s ease forwards ${
          index / 7 + 0.5
        }s`);
  });
}

menuToggler.addEventListener("click", function () {
  menu.classList.toggle("active");
  menuToggler.classList.toggle("active");
  animateMenu();
});





