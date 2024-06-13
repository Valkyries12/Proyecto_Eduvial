const menuHamburguesa = document.querySelector(".fa-bars");
const menuMobile = document.querySelector(".navbar_items");

menuHamburguesa.addEventListener("click", function () {
    menuMobile.classList.toggle("show");
});

const showPopup = (e) => {
    const popup = document.querySelector(".overlay");
    popup.style.display = "flex";
    const id = e.target.id;
    let instrucciones;

    switch (id) {
        case "memorama-btn":
            instrucciones = `
            
                <li>Haz clic en una carta para voltear.</li>
                <li>Haz clic en otra carta para encontrar el par.</li>
                <li>Si las cartas coinciden, se quedan descubiertas.</li>
                <li>Si no coinciden, se voltean de nuevo.</li>
                <li>Repite hasta encontrar todas las parejas.</li>
            `
            break;
        case "crush-btn":
            instrucciones = `
            
                <li>Intercambia dos señales adyacentes para formar una fila de tres o más señales iguales.</li>
                <li>Las señales coincidentes desaparecerán, sumando puntos.</li>
                <li>Nuevas señales caerán desde la parte superior para llenar los espacios vacíos.</li>
                <li>Suma puntos!!</li>
            `
            break;
        case "ahorcado-btn":
            instrucciones = `
                
                    <li>Elige una letra para adivinar el nombre de la señal de tránsito.</li>
                    <li>Si la letra está en el nombre, aparecerá en su lugar correcto.</li>
                    <li>Si la letra no está, se añadirá una parte al dibujo del ahorcado.</li>
                    <li>Continúa adivinando letras hasta completar el nombre de la señal.</li>
                    <li>Evita completar el dibujo del ahorcado adivinando correctamente.</li>
                    <li>Gana cuando adivines correctamente el nombre de la señal antes de completar el ahorcado.</li>
                `
            break;
        default:
            break;
    }

    const descripcion = document.querySelector(".popup_description");
    descripcion.innerHTML = instrucciones;
    //const src = card1Selected.src;

    // Extraer la parte relevante del string
    /*const target = src.substring(src.lastIndexOf("memorama_img/"), src.lastIndexOf(".png"));

    // Encontrar el índice en el array
    const indice = cardList.findIndex(item => item === target);
    const descripcion = document.querySelector(".popup_description");
    descripcion.textContent = cardListDescription[indice];
    const imagen = document.querySelector(".popup_img");
    imagen.src = `${cardList[indice]}.png`;
    const titulo = document.querySelector(".popup_title");
    titulo.textContent = cardListTitle[indice];*/
}

const closePopup = () => {
    const popup = document.querySelector(".overlay");
    popup.style.display = "none";
}

/********************************************************************* */
/********************************************************************* */

const btn_play_array = document.querySelectorAll(".play-button");
const btn_popup_close = document.querySelector(".btn_popup_close");
const btn_popup_accept = document.querySelector(".btn_popup_accept");

btn_popup_close.addEventListener("click", closePopup);
btn_popup_accept.addEventListener("click", closePopup);

for (let i = 0; i < btn_play_array.length; i++) {
    btn_play_array[i].addEventListener("click", showPopup);
}
