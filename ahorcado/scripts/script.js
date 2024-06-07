const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const ahorcadoImage = document.querySelector(".ahorcado-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");

// Inicializar  variables del juego
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

const resetGame = () => {
    // Resetear variables del juego y elementos UI
    correctLetters = [];
    wrongGuessCount = 0;
    ahorcadoImage.src = "images/ahorcado-0.svg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
}

const getRandomWord = () => {
    // Seleccionar una palabra aleatoria y una pista de la lista de palabras
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word; // Hacer que currentWord sea una palabra aleatoria
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
}

const gameOver = (isVictory) => {
    // Después de completar el juego  mostramos el  modal con detalles 
    const modalText = isVictory ? `Acertaste la palabra:` : 'La palabra correcta era:';
    gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Felicitaciones!' : 'seguí aprendiendo, seguí jugando!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
}

const initGame = (button, clickedLetter) => {
    // Comprobando si la letra pulsada existe en la palabra actual
    if(currentWord.includes(clickedLetter)) {
        // Mostrando todas las letras correctas en la visualización de palabras
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        // Si la letra en la que se hizo clic no existe, actualice la imagen incorrecta de GuessCount y ahorcado.
        wrongGuessCount++;
        ahorcadoImage.src = `images/ahorcado-${wrongGuessCount}.svg`;
    }
    button.disabled = true; // Deshabilitar el botón en el que se hizo clic para que no pueda volver a hacer clic
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    // Llamar a la función gameOver si se cumple alguna de estas condiciones
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
}

// Crear botones de teclado y agregado de detectores de eventos
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);