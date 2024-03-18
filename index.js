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


var cuadros = document.querySelectorAll('.cuadro');
var contenedor = document.querySelector('.contenedor');
var distanciaSesion = 300; // Puedes ajustar esta distancia según tus necesidades

var manejarVisibilidadCuadros = () => {
    var distanciaDesdeTop = contenedor.getBoundingClientRect().top;
    var distanciaDesdeAbajo = window.innerHeight - contenedor.getBoundingClientRect().bottom;

    cuadros.forEach(cuadro => {
        var cuadroPosicion = cuadro.getBoundingClientRect().top;

        if (cuadroPosicion < window.innerHeight - distanciaSesion && cuadroPosicion > -cuadro.clientHeight) {
            cuadro.classList.remove('oculto');
            cuadro.style.opacity = '1';
        } else {
            cuadro.classList.add('oculto');
            cuadro.style.opacity = '0';
        }
    });
};

// Ejecutar al cargar la página
manejarVisibilidadCuadros();

// Agregar evento de desplazamiento
window.addEventListener('scroll', manejarVisibilidadCuadros);


