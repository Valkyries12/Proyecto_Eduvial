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
        question: "En el caso de detener un vehículo en esta zona, ¿cuál es la distancia mínima que se debe mantener?",
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
            { text: "Cruce de Metrobús", correct: true },
            { text: "Cruce exclusivo de ambulancias", correct: false },
            { text: "Cruce de bicicletas", correct: false },
            { text: "Cruce exclusivo de bomberos", correct: false }
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
const lifelineButton = document.getElementById('lifeline-button');

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
let lifelineCount = 3;
let lifelineUsedThisQuestion = false;

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);
homeButton.addEventListener('click', () => {
    homeContainer.classList.remove('hidden');
    gameContainer.classList.add('hidden');
    alertContainer.classList.add('hidden');
});

lifelineButton.addEventListener('click', useLifeline);

function startGame() {
    homeContainer.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    alertContainer.classList.add('hidden');
    score = 0;
    totalQuestions = 0;
    timeLeft = 120;
    lifelineCount = 3;
    lifelineUsedThisQuestion = false;
    lifelineButton.innerText = `Comodín (${lifelineCount})`;
    lifelineButton.disabled = false;
    scoreDisplay.innerText = `Aciertos: ${score}/${totalQuestions}`;
    timerDisplay.innerText = `Tiempo: ${timeLeft}s`;
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    timer = setInterval(updateTimer, 1000);
    showNextQuestion();
}

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
        lifelineUsedThisQuestion = false;
        if (lifelineCount > 0) {
            lifelineButton.disabled = false;
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

function updateTimer() {
    timeLeft--;
    timerDisplay.innerText = `Tiempo: ${timeLeft}s`;
    if (timeLeft <= 0) {
        endGame();
    }
}

function endGame() {
    clearInterval(timer);
    alertMessage.innerText = `Juego terminado! Aciertos: ${score}/${totalQuestions}`;
    gameContainer.classList.add('hidden');
    alertContainer.classList.remove('hidden');
}

function useLifeline() {
    if (lifelineCount > 0 && !lifelineUsedThisQuestion) {
        lifelineCount--;
        lifelineButton.innerText = `Comodín (${lifelineCount})`;
        lifelineUsedThisQuestion = true;
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
        lifelineButton.disabled = true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    homeContainer.classList.remove('hidden');
    gameContainer.classList.add('hidden');
    alertContainer.classList.add('hidden');
});
