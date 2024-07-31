const questions = [
    {
        question: "Qual é a fórmula química da água?",
        answers: [
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "NaCl", correct: false },
            { text: "O2", correct: false }
        ]
    },
    {
        question: "Qual é a unidade básica da vida?",
        answers: [
            { text: "Átomo", correct: false },
            { text: "Molécula", correct: false },
            { text: "Célula", correct: true },
            { text: "Organismo", correct: false }
        ]
    },
    {
        question: "Quem é conhecido como o pai da teoria da evolução?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Charles Darwin", correct: true },
            { text: "Albert Einstein", correct: false },
            { text: "Galileu Galilei", correct: false }
        ]
    },
    {
        question: "Qual planeta é conhecido como o Planeta Vermelho?",
        answers: [
            { text: "Terra", correct: false },
            { text: "Marte", correct: true },
            { text: "Júpiter", correct: false },
            { text: "Saturno", correct: false }
        ]
    },
    {
        question: "O que é a fotossíntese?",
        answers: [
            { text: "Processo de respiração das plantas", correct: false },
            { text: "Processo de conversão de luz solar em energia química", correct: true },
            { text: "Processo de crescimento das plantas", correct: false },
            { text: "Processo de reprodução das plantas", correct: false }
        ]
    },
    {
        question: "Qual é a partícula subatômica com carga positiva?",
        answers: [
            { text: "Elétron", correct: false },
            { text: "Nêutron", correct: false },
            { text: "Próton", correct: true },
            { text: "Neutrino", correct: false }
        ]
    },
    {
        question: "Qual é o maior órgão do corpo humano?",
        answers: [
            { text: "Coração", correct: false },
            { text: "Pulmão", correct: false },
            { text: "Fígado", correct: false },
            { text: "Pele", correct: true }
        ]
    },
    {
        question: "Qual é a teoria que explica a origem do universo?",
        answers: [
            { text: "Teoria da Relatividade", correct: false },
            { text: "Teoria do Big Bang", correct: true },
            { text: "Teoria da Evolução", correct: false },
            { text: "Teoria da Gravidade", correct: false }
        ]
    },
    {
        question: "Qual é o elemento químico com símbolo 'Au'?",
        answers: [
            { text: "Prata", correct: false },
            { text: "Ouro", correct: true },
            { text: "Cobre", correct: false },
            { text: "Platina", correct: false }
        ]
    },
    {
        question: "Quem desenvolveu a teoria da relatividade?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Niels Bohr", correct: false },
            { text: "Erwin Schrödinger", correct: false }
        ]
    },
    {
        question: "Qual é a velocidade da luz no vácuo?",
        answers: [
            { text: "300.000 km/s", correct: true },
            { text: "150.000 km/s", correct: false },
            { text: "600.000 km/s", correct: false },
            { text: "1.000.000 km/s", correct: false }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.createElement('p');
scoreElement.id = 'score';

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = 'Próxima';
    nextButton.classList.add('hidden');
    scoreElement.classList.add('hidden');
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hidden');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    if (!scoreElement.classList.contains('hidden')) {
        scoreElement.classList.add('hidden');
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    setStatusClass(selectedButton, correct);
    if (correct) {
        score++;
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
    });
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hidden');
    } else {
        showScore();
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function showScore() {
    nextButton.innerText = 'Recomeçar';
    scoreElement.innerText = `Pontuação: ${score} de ${questions.length}`;
    scoreElement.classList.remove('hidden');
    document.getElementById('quiz-container').appendChild(scoreElement);
    nextButton.classList.remove('hidden');
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        startQuiz();
    }
});

startQuiz();
