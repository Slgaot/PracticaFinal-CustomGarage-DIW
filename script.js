
const botonMenu = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const secciones = document.querySelectorAll("main section");

// Abrir y cerrar el menu del movil
botonMenu.addEventListener("click", function () {
    const abierto = menu.classList.toggle("abierto");

    botonMenu.setAttribute("aria-expanded", abierto);
    botonMenu.setAttribute(
        "aria-label",
        abierto ? "Cerrar menú" : "Abrir menú"
    );
});

// Mostrar la pantalla seleccionada
function mostrarSeccion(id) {

    secciones.forEach(function (seccion) {
        seccion.classList.remove("activa");
    });

    const seleccionada = document.querySelector(id);

    if (seleccionada) {
        seleccionada.classList.add("activa");
    }

    // Cerrar el menu al cambiar de pantalla
    menu.classList.remove("abierto");
    botonMenu.setAttribute("aria-expanded", "false");
    botonMenu.setAttribute("aria-label", "Abrir menú");

    window.scrollTo(0, 0);
}

// Enlaces del menu y boton Ver motos
const enlaces = document.querySelectorAll('a[href^="#"]');

enlaces.forEach(function (enlace) {

    enlace.addEventListener("click", function (evento) {

        const destino = enlace.getAttribute("href");

        if (
            destino === "#inicio" ||
            destino === "#motos" ||
            destino === "#contacto"
        ) {
            evento.preventDefault();

            if (window.location.hash !== destino) {
                window.location.hash = destino;
            }

            mostrarSeccion(destino);
        }

    });

});

// Elegir la pantalla al abrir la web
function actualizarPantalla() {

    let destino = window.location.hash;

    if (
        destino !== "#inicio" &&
        destino !== "#motos" &&
        destino !== "#contacto"
    ) {
        destino = "#inicio";
    }

    mostrarSeccion(destino);
}

window.addEventListener("load", actualizarPantalla);
window.addEventListener("hashchange", actualizarPantalla);

// Formulario de demostracion
const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

if (formulario && respuesta) {

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        respuesta.textContent =
            "Mensaje preparado. Este formulario es una demostración.";

        formulario.reset();
    });

}
