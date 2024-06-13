document.addEventListener("DOMContentLoaded", function() {
    const botonMostrar = document.getElementById("mostrarInstrucciones");
    const popupInstrucciones = document.getElementById("popupInstrucciones");
    const botonCerrar = document.getElementById("cerrarPopup");

    botonMostrar.addEventListener("click", function() {
        popupInstrucciones.style.display = "block";
    });

    botonCerrar.addEventListener("click", function() {
        popupInstrucciones.style.display = "none";
    });

    // Opcional: cerrar el popup al hacer click fuera de él
    window.addEventListener("click", function(event) {
        if (event.target === popupInstrucciones) {
            popupInstrucciones.style.display = "none";
        }
    });
});
