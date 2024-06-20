const questions = [
    {
        question: "¿Cuál es la velocidad máxima en una avenida?",
        image: "./img/avenida.avif",
        answers: [
            { text: "30km", correct: false },
            { text: "40km", correct: false },
            { text: "50km", correct: false },
            { text: "60km", correct: true }
        ]
    },
    {
        question: "En el caso de detenerse frente a las vias, ¿cuál es la distancia mínima que se debe mantener?",
        image: "./img/tren.jpg",
        answers: [
            { text: "2 metros", correct: false },
            { text: "5 metros", correct: true },
            { text: "10 metros", correct: false },
            { text: "No existe una distancia mínima", correct: false }
        ]
    },
    {
        question: "¿Qué indica la señal horizontal de color rojo que se encuentra demarcada sobre la calzada?",
        image: "./img/Metrobus.jpg",
        answers: [
            { text: "Cruce de metrobús", correct: true },
            { text: "Cruce exclusivo de ambulancias", correct: false },
            { text: "Cruce de bicicletas", correct: false },
            { text: "Cruce exclusivo de bomberos", correct: false }
        ]
    },
    {
        question: "¿Qué indica la señal que se presenta a continuacion?",
        image: "./img/carril.jpg",
        answers: [
            { text: "Prohibición de girar a la derecha", correct: false },
            { text: "Prohibición de cambiar de carril", correct: true },
            { text: "Prohibición de adelantar", correct: false },
            { text: "Todas son correctas", correct: false }
        ]
    },
    {
        question: "¿Qué está indicando el agente de tránsito al realizar esta señal a un conductor?",
        image: "./img/transito.jpg",
        answers: [
            { text: "Que circule con precaución", correct: false },
            { text: "Que detenga el vehículo", correct: true },
            { text: "Que continúe avanzando", correct: false },
            { text: "Ninguna es correcta", correct: false }
        ]
    },
    {
        question: "¿Los ocupantes de este vehículo viajan de manera segura?",
        image: "./img/perro.jpg",
        answers: [
            { text: "Si, tienen cinturón de seguridad", correct: false },
            { text: "No, no pueden viajar animales", correct: false },
            { text: "No, el perro debe viajar atras atado", correct: true },
            { text: "Si, el perro está sobre la persona", correct: false }
        ]
    },
    {
        question: "Que significa la siguiente señal:",
        image: "./img/sinuoso.jpg",
        answers: [
            { text: "Camino resbaladizo", correct: false },
            { text: "Camino cuesta arriba", correct: false },
            { text: "Camino cuesta abajo", correct: false },
            { text: "Camino sinuoso", correct: true }
        ]
    },
    {
        question: "Que significa la siguiente señal:",
        image: "./img/minima.jpg",
        answers: [
            { text: "Mínima 35km", correct: true },
            { text: "Máxima 35km", correct: false },
            { text: "Velocidad precautorio 35km", correct: false },
            { text: "Ninguna es correcta", correct: false }
        ]
    },
    {
        question: "Que significa la siguiente señal:",
        image: "./img/noEstacionar.jpg",
        answers: [
            { text: "Prohibido estacionar", correct: true },
            { text: "Estacionamiento exclusivo", correct: false },
            { text: "Prohibido detenerse", correct: false },
            { text: "Ninguna es correcta", correct: false }
        ]
    },
    {
        question: "¿cómo debe proceder frente a esta señal de PARE?",
        image: "./img/pare.jpg",
        answers: [
            { text: "Reducir velocidad y seguir", correct: false },
            { text: "Reducir velocidad y detenerse", correct: true },
            { text: "Avanzar", correct: false },
            { text: "Estacionarse", correct: false }
        ]
    },
    {
        question: "Determine qué indica la señal que a continuación se presenta:",
        image: "./img/escolar.jpg",
        answers: [
            { text: "Zona escolar", correct: true },
            { text: "Niños jugando", correct: false },
            { text: "Venta de libros", correct: false },
            { text: "Ninguna es correcta", correct: false }
        ]
    },
    {
        question: "Determine qué indica la señal que a continuación se presenta:",
        image: "./img/rotonda.jpg",
        answers: [
            { text: "Rotonda", correct: true },
            { text: "Girar a la izquierda", correct: false },
            { text: "Girar en U", correct: false },
            { text: "Ninguna es correcta", correct: false }
        ]
    },
    {
        question: "Determine qué indica la señal que a continuación se presenta:",
        image: "./img/calzada.jpg",
        answers: [
            { text: "Estrechamiento (en las dos manos)", correct: false },
            { text: "Inicio doble mano", correct: false },
            { text: "Fin doble mano", correct: false },
            { text: "Calzada dividida", correct: true }
        ]
    },
    {
        question: "Determine qué indica la señal vertical que a continuación se presenta:",
        image: "./img/peaton.jpg",
        answers: [
            { text: "Cruce de peatones (peligro máximo)", correct: true },
            { text: "Peatones a la izquierda", correct: false },
            { text: "Zona exclusiva peatonal", correct: false },
            { text: "Ninguna es correcta", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta demarcación amarilla en la calzada?",
        image: "./img/ruta.jpg",
        answers: [
            { text: "Únicamente divide los carriles", correct: false },
            { text: "Ningún sentido pueden traspasar", correct: true },
            { text: "Ambos sentido pueden traspasar", correct: false },
            { text: "Ninguna es correcta", correct: false }
        ]
    },
    {
        question: "Determine qué indica la señal que a continuación se presenta:",
        image: "./img/puente.jpg",
        answers: [
            { text: "Proximidad de un paso a nivel", correct: false },
            { text: "Presencia de una rampa", correct: false },
            { text: "Aproximación a un puente levadizo", correct: true },
            { text: "Ninguna es correcta", correct: false }
        ]
    },
    {
        question: "¿Puede una moto circular por el carril señalizado en esta imagen?",
        image: "./img/bicisenda.jpg",
        answers: [
            { text: "Si, es un vehículo de 2 ruedas", correct: false },
            { text: "Si, cuando no circulen bicicletas", correct: false },
            { text: "No, es de uso exclusivo de bicicletas", correct: true },
            { text: "Si, mientras vaya despacio", correct: false }
        ]
    },
    {
        question: "Determine qué indica la señal que a continuación se presenta:",
        image: "./img/autopista.jpg",
        answers: [
            { text: "Inicio de autopista", correct: true },
            { text: "Inicio de ruta", correct: false },
            { text: "Aproximación a un puente", correct: false },
            { text: "Ninguna es correcta", correct: false }
        ]
    },
    {
        question: "Determine qué indica la señal que a continuación se presenta:",
        image: "./img/doble.jpg",
        answers: [
            { text: "Camino sinuoso", correct: false },
            { text: "Inicio doble mano", correct: true },
            { text: "Fin doble mano", correct: false },
            { text: "Ninguna es correcta", correct: false }
        ]
    },
    {
        question: "Determine qué indica la señal que a continuación se presenta:",
        image: "./img/altura.jpg",
        answers: [
            { text: "Máximo largo permitido", correct: false },
            { text: "Máxima altura permitida", correct: true },
            { text: "Máximo peso permitido", correct: false },
            { text: "Todas son correctas", correct: false }
        ]
    },
    {
        question: "Determine qué indica la señal que a continuación se presenta:",
        image: "./img/ancho.jpg",
        answers: [
            { text: "Máximo largo permitido", correct: false },
            { text: "Máxima altura permitida", correct: false },
            { text: "Máximo peso permitido", correct: false },
            { text: "Máximo ancho permitido", correct: true }
        ]
    },
    {
        question: "Determine qué indica la señal que a continuación se presenta:",
        image: "./img/encrucijada.jpg",
        answers: [
            { text: "Inicio doble mano", correct: false },
            { text: "Encrucijada(bifurcación)", correct: true },
            { text: "Estrechamiento(una sola mano)", correct: false },
            { text: "Ninguna es correcta", correct: false }
        ]
    },
    {
        question: "¿Se puede traspasar en ruta con la siguiente señal?",
        image: "./img/traspaso.jpg",
        answers: [
            { text: "Si, un solo sentido", correct: false },
            { text: "Si, ambos sentidos", correct: true },
            { text: "No, un solo sentido", correct: false },
            { text: "No, ningún sentido", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "./img/tunel.jpg",
        answers: [
            { text: "Calzada estrecha", correct: false },
            { text: "Túnel vehicular", correct: true },
            { text: "Puente angosto", correct: false },
            { text: "Ninguna es correcta", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "./img/jugando.jpg",
        answers: [
            { text: "Precaución niños jugando", correct: true },
            { text: "Zona escolar", correct: false },
            { text: "Cruce de peatones", correct: false },
            { text: "Cruce de futbolistas", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "./img/obras.jpg",
        answers: [
            { text: "Precaución niños jugando", correct: false },
            { text: "Zona escolar", correct: false },
            { text: "Cruce de peatones", correct: false },
            { text: "Obras", correct: true }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "./img/giroU.jpg",
        answers: [
            { text: "Prohibido girar a la izquierda", correct: false },
            { text: "Prohibido girar en U", correct: true },
            { text: "Precaución curva", correct: false },
            { text: "Ninguna es correcta", correct: false }
        ]
    }
    
];

const startButton = document.getElementById('start-button');
const homeContainer = document.getElementById('home-container');
const gameContainer = document.getElementById('game-container');
const alertContainer = document.getElementById('alert-container');
const alertMessage = document.getElementById('alert-message');
const restartButton = document.getElementById('restart-button');
const homeButton = document.getElementById('home-button');
const comodinButton = document.getElementById('comodin-button');

const questionText = document.getElementById('question-text');
const questionImage = document.getElementById('question-image');
const answerButtons = document.querySelectorAll('.btn');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');

let shuffledQuestions, currentQuestionIndex;
let score = 0;
let totalQuestions = 0;
let timeLeft = 120;
let timer;
let comodinCount = 3;
let comodinUsedThisQuestion = false;

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);
homeButton.addEventListener('click', () => {
    homeContainer.classList.remove('hidden');
    gameContainer.classList.add('hidden');
    alertContainer.classList.add('hidden');
});

comodinButton.addEventListener('click', useComodin);

/*Inicializa el juego*/
function startGame() {
    homeContainer.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    alertContainer.classList.add('hidden');
    score = 0;
    totalQuestions = 0;
    timeLeft = 120;
    comodinCount = 3;
    comodinUsedThisQuestion = false;
    comodinButton.innerText = `Comodín (${comodinCount})`;
    comodinButton.disabled = false;
    scoreDisplay.innerText = `Aciertos: ${score}/${totalQuestions}`;
    timerDisplay.innerText = `Tiempo: ${timeLeft}s`;
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    timer = setInterval(updateTimer, 1000);
    showNextQuestion();
}

/*Carga la siguiente imagen, pregunta y respuestas*/
function showNextQuestion() {
    resetState();
    if (currentQuestionIndex < shuffledQuestions.length) {
        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        questionText.innerText = currentQuestion.question;
        questionImage.src = currentQuestion.image;
        answerButtons.forEach((button, index) => {
            button.innerText = currentQuestion.answers[index].text;
            button.dataset.correct = currentQuestion.answers[index].correct;
            button.addEventListener('click', selectAnswer, { once: true });
        });
        comodinUsedThisQuestion = false;
        if (comodinCount > 0) {
            comodinButton.disabled = false;
        }
    } else {
        endGame();
    }
}

function resetState() {
    answerButtons.forEach(button => {
        button.classList.remove('correct', 'wrong', 'disabled');
        button.disabled = false;
    });
}

/*Seleccion de respuesta, se corrobora si es correcta y de serlo se incrementan los aciertos*/
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    totalQuestions++;
    if (correct) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('wrong');
    }
    scoreDisplay.innerText = `Aciertos: ${score}/${totalQuestions}`;
    disableButtons();
    currentQuestionIndex++;
    setTimeout(showNextQuestion, 1000);
}

function disableButtons() {
    answerButtons.forEach(button => {
        button.disabled = true;
    });
}

/*Mira si el timer llego a 0 para finalizar el juego*/
function updateTimer() {
    timeLeft--;
    timerDisplay.innerText = `Tiempo: ${timeLeft}s`;
    if (timeLeft <= 0) {
        endGame();
    }
}

/*Finaliza el juego y se muestra la cantidad de aciertos*/
function endGame() {
    clearInterval(timer);
    alertMessage.innerText = `Juego terminado! Aciertos: ${score}/${totalQuestions}`;
    gameContainer.classList.add('hidden');
    alertContainer.classList.remove('hidden');
}

/* Si se tiene algun comodin y no se uso en esta pregunta, se eligen dos respuestas incorrectas al azar y se desactivan*/
function useComodin() {
    if (comodinCount > 0 && !comodinUsedThisQuestion) {
        comodinCount--;
        comodinButton.innerText = `Comodín (${comodinCount})`;
        comodinUsedThisQuestion = true;
        const incorrectAnswers = [];
        answerButtons.forEach(button => {
            if (button.dataset.correct === 'false') {
                incorrectAnswers.push(button);
            }
        });
        const randomIncorrectAnswers = incorrectAnswers.sort(() => Math.random() - 0.5).slice(0, 2);
        randomIncorrectAnswers.forEach(button => {
            button.classList.add('disabled');
            button.disabled = true;
        });
        comodinButton.disabled = true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    homeContainer.classList.remove('hidden');
    gameContainer.classList.add('hidden');
    alertContainer.classList.add('hidden');
});
