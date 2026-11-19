
const botonMenu = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", function () {
    const abierto = menu.classList.toggle("abierto");

    botonMenu.setAttribute("aria-expanded", abierto);
    botonMenu.setAttribute(
        "aria-label",
        abierto ? "Cerrar menú" : "Abrir menú"
    );
});

// Cerrar el menú cuando se selecciona un apartado
const enlaces = menu.querySelectorAll("a");

enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        menu.classList.remove("abierto");
        botonMenu.setAttribute("aria-expanded", "false");
        botonMenu.setAttribute("aria-label", "Abrir menú");
    });
});

// Formulario de demostración
const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    respuesta.textContent =
        "Mensaje preparado. Este formulario es una demostración.";

    formulario.reset();
});
