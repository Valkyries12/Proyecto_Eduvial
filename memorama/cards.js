
let errors = 0;
let cardList = [
    "memorama_img/senial1",
    "memorama_img/senial2",
    "memorama_img/senial3",
    "memorama_img/senial4",
    "memorama_img/senial5",
    "memorama_img/senial6",
    "memorama_img/senial7",
    "memorama_img/senial8",
    "memorama_img/senial9",
    "memorama_img/senial10"
];

let cardListDescription = [
    "Se coloca en entradas de calles de sentido único, salidas de estacionamientos, y cualquier lugar donde el acceso está restringido en una dirección específica. Es una señal de prohibición clara y sencilla que ayuda a evitar el tráfico en direcciones no permitidas",
    "Esta señal indica a los conductores que deben detenerse completamente antes de continuar. Es una instrucción obligatoria para detener el vehículo en la línea de detención marcada, en el cruce de peatones, o antes de entrar en la intersección.",
    "Se coloca en áreas donde el estacionamiento puede obstruir el tráfico, crear situaciones peligrosas o estar reservado para otros usos específicos. La prohibición de estacionar ayuda a mantener el flujo del tráfico y asegura que se respeten las áreas designadas para otros fines, como paradas de autobús, entradas y salidas de emergencia, y zonas de carga y descarga.",
    "Esta señal indica que está prohibido adelantar a otros vehículos. Se utiliza para asegurar la seguridad en tramos de carretera donde adelantar sería peligroso debido a la visibilidad reducida, curvas, cambios de rasante, o cualquier otra condición que haga riesgoso el acto de adelantar.",
    "Se utiliza para alertar a los conductores sobre la presencia de curvas cerradas sucesivas en la carretera, la primera de las cuales es hacia la izquierda, seguida de una hacia la derecha. ",
    "Indica que los conductores deben reducir la velocidad y estar preparados para detenerse si es necesario, cediendo el paso a otros vehículos.",
    "Esta señal indica que el área designada es un lugar donde los vehículos pueden estacionarse.",
    "Esta señal indica la proximidad de un hospital, clínica o cualquier otro tipo de servicio médico. Está diseñada para informar a los conductores y peatones sobre la disponibilidad de asistencia médica cercana.",
    "Esta señal advierte a los conductores que están aproximándose a una zona donde es común la presencia de niños, como en las cercanías de una escuela, un parque infantil, o un cruce frecuentado por escolares. Indica que los conductores deben reducir la velocidad y estar especialmente atentos para evitar accidentes.",
    "Esta señal indica la ubicación de un cruce peatonal. Informa a los conductores que deben estar preparados para detenerse y ceder el paso a los peatones que estén cruzando la calle en ese punto."
];

let cardListTitle = [
    "Prohibido el paso",
    "Pare",
    "Prohibido estacionar",
    "Prohibido adelantar",
    "Doble curva peligrosa",
    "Ceda el paso",
    "Estacionamiento",
    "Hospital o Servicios médicos",
    "Zona escolar",
    "Paso de peatones",
];


let cardSet;
let board = [];
let rows = 4;
let columns = 5;

let card1Selected;
let card2Selected;


const shuffleCards = () => {
    cardSet = cardList.concat(cardList); //creo un nuevo array en base al existente y le agrego una copia para tener dos veces la misma carta
    console.log(cardSet);
    //mezclo
    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length); //creo un indice aleatorio basado en la longitud del array de cartas
        //swap
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
    console.log(cardSet);
}

const startGame = () => {
    //Creo un tablero de 4x5 (definido arriba) en base a los nombres de las imagenes y le agrego atributos como id, src, etc
    //tmb a cada carta le agrego un evento al hacer click
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let cardImg = cardSet.pop();
            row.push(cardImg); //JS

            // <img id="0-0" class="card" src="water.jpg">
            let card = document.createElement("img");
            card.id = r.toString() + "-" + c.toString();
            card.src = cardImg + ".png";
            card.classList.add("card");
            card.addEventListener("click", selectCard);
            document.getElementById("board").append(card);

        }
        board.push(row);
    }

    console.log(board);
    setTimeout(hideCards, 1000);
}

const hideCards = () => {
    //itero por la matriz de cartas con el id 0-1, 0-2, etc y le cambio la imagen por la del reverso
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString());
            card.src = "memorama_img/carta_eduvial_reverso_black.png";
        }
    }
}

const selectCard = (e) => {

    if (e.target.src.includes("memorama_img/carta_eduvial_reverso_black")) {
        if (!card1Selected) {
            card1Selected = e.target;

            let coords = card1Selected.id.split("-"); //"0-1" -> ["0", "1"]
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card1Selected.src = board[r][c] + ".png";
        }
        else if (!card2Selected && e.target != card1Selected) {
            card2Selected = e.target;

            let coords = card2Selected.id.split("-"); //"0-1" -> ["0", "1"]
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card2Selected.src = board[r][c] + ".png";
            setTimeout(update, 1000);
        } 
    }

}

const update = () => {
    //si la scartas no son iguales las doy vuelta sino muestro popup con descripcion de la señal
    if (card1Selected.src != card2Selected.src) {
        card1Selected.src = "memorama_img/carta_eduvial_reverso_black.png";
        card2Selected.src = "memorama_img/carta_eduvial_reverso_black.png";
        errors += 1;
        document.getElementById("errors").innerText = errors;
    } else {
        showPopup();
    }

    card1Selected = null;
    card2Selected = null;
}

const showPopup = () => {
    const popup = document.querySelector(".overlay");
    popup.style.display = "flex";
    const src = card1Selected.src;

    // Extraer la parte relevante del string
    const target = src.substring(src.lastIndexOf("memorama_img/"), src.lastIndexOf(".png"));

    // Encontrar el índice en el array
    const indice = cardList.findIndex(item => item === target);
    const descripcion = document.querySelector(".popup_description");
    descripcion.textContent = cardListDescription[indice];
    const imagen = document.querySelector(".popup_img");
    imagen.src = `${cardList[indice]}.png`;
    const titulo = document.querySelector(".popup_title");
    titulo.textContent = cardListTitle[indice];
}

const closePopup = () => {
    const popup = document.querySelector(".overlay");
    popup.style.display = "none";
}

/********************************************************************* */
/********************************************************************* */


window.onload = function () {
    shuffleCards();
    startGame();
}

const btn_popup_close = document.querySelector(".btn_popup_close");
const btn_popup_accept = document.querySelector(".btn_popup_accept");

btn_popup_close.addEventListener("click", closePopup);
btn_popup_accept.addEventListener("click", closePopup);