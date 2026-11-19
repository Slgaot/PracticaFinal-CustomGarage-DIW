
const botonMenu = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

const secciones = document.querySelectorAll("main section");

// Abrir y cerrar el menu
botonMenu.addEventListener("click", function () {
    const abierto = menu.classList.toggle("abierto");

    botonMenu.setAttribute("aria-expanded", abierto);
    botonMenu.setAttribute(
        "aria-label",
        abierto ? "Cerrar menú" : "Abrir menú"
    );
});

// Mostrar una pantalla en movil
function mostrarSeccion(id) {

    if (window.innerWidth > 600) {
        return;
    }

    secciones.forEach(function (seccion) {
        seccion.classList.remove("activa");
    });

    const seleccionada = document.querySelector(id);

    if (seleccionada) {
        seleccionada.classList.add("activa");
    }

    // Cerrar el menu despues de elegir
    menu.classList.remove("abierto");
    botonMenu.setAttribute("aria-expanded", "false");
    botonMenu.setAttribute("aria-label", "Abrir menú");

    window.scrollTo(0, 0);
}

// Enlaces de Inicio, Motos y Contacto
const enlaces = document.querySelectorAll('a[href^="#"]');

enlaces.forEach(function (enlace) {

    enlace.addEventListener("click", function (evento) {

        const destino = enlace.getAttribute("href");

        if (window.innerWidth <= 600) {
            evento.preventDefault();

            if (window.location.hash !== destino) {
                window.location.hash = destino;
            }

            mostrarSeccion(destino);

        } else {
            // En ordenador funciona como antes
            menu.classList.remove("abierto");
        }

    });

});

// Mostrar la pantalla correcta
function actualizarPantalla() {

    if (window.innerWidth <= 600) {

        let destino = window.location.hash;

        if (
            destino !== "#inicio" &&
            destino !== "#motos" &&
            destino !== "#contacto"
        ) {
            destino = "#inicio";
        }

        mostrarSeccion(destino);

    } else {

        // En ordenador se ven todas las secciones
        secciones.forEach(function (seccion) {
            seccion.classList.remove("activa");
        });

        menu.classList.remove("abierto");
        botonMenu.setAttribute("aria-expanded", "false");
        botonMenu.setAttribute("aria-label", "Abrir menú");
    }
}

window.addEventListener("load", actualizarPantalla);
window.addEventListener("resize", actualizarPantalla);
window.addEventListener("hashchange", actualizarPantalla);

// Formulario de demostracion
const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    respuesta.textContent =
        "Mensaje preparado. Este formulario es una demostración.";

    formulario.reset();
});
