const questions = [
    {
        question: "Qual é a capital do Brasil?",
        answers: [
            { text: "São Paulo", correct: false },
            { text: "Rio de Janeiro", correct: false },
            { text: "Brasília", correct: true },
            { text: "Salvador", correct: false }
        ]
    },
    {
        question: "Qual é o maior oceano do mundo?",
        answers: [
            { text: "Oceano Atlântico", correct: false },
            { text: "Oceano Pacífico", correct: true },
            { text: "Oceano Índico", correct: false },
            { text: "Oceano Ártico", correct: false }
        ]
    },
    {
        question: "Qual é o país mais extenso do mundo?",
        answers: [
            { text: "Estados Unidos", correct: false },
            { text: "China", correct: false },
            { text: "Brasil", correct: false },
            { text: "Rússia", correct: true }
        ]
    },
    {
        question: "Qual é o ponto mais alto da Terra?",
        answers: [
            { text: "Monte Everest", correct: true },
            { text: "Monte Kilimanjaro", correct: false },
            { text: "Monte McKinley", correct: false },
            { text: "Monte Fuji", correct: false }
        ]
    },
    {
        question: "Qual é o maior deserto do mundo?",
        answers: [
            { text: "Deserto do Saara", correct: false },
            { text: "Deserto de Gobi", correct: false },
            { text: "Deserto da Arábia", correct: false },
            { text: "Antártida", correct: true }
        ]
    },
    {
        question: "Qual país tem a maior população do mundo?",
        answers: [
            { text: "Índia", correct: false },
            { text: "Estados Unidos", correct: false },
            { text: "China", correct: true },
            { text: "Brasil", correct: false }
        ]
    },
    {
        question: "Qual é o menor país do mundo?",
        answers: [
            { text: "Mônaco", correct: false },
            { text: "San Marino", correct: false },
            { text: "Vaticano", correct: true },
            { text: "Liechtenstein", correct: false }
        ]
    },
    {
        question: "Qual é o rio mais longo do mundo?",
        answers: [
            { text: "Rio Nilo", correct: true },
            { text: "Rio Amazonas", correct: false },
            { text: "Rio Yangtze", correct: false },
            { text: "Rio Mississippi", correct: false }
        ]
    },
    {
        question: "Qual é a montanha mais alta da América do Sul?",
        answers: [
            { text: "Aconcágua", correct: true },
            { text: "Monte Roraima", correct: false },
            { text: "Monte Fitz Roy", correct: false },
            { text: "Monte Elbrus", correct: false }
        ]
    },
    {
        question: "Qual país é conhecido como a terra dos Kiwis?",
        answers: [
            { text: "Austrália", correct: false },
            { text: "Nova Zelândia", correct: true },
            { text: "Estados Unidos", correct: false },
            { text: "Canadá", correct: false }
        ]
    },
    {
        question: "Qual é o nome do maior lago de água doce do mundo?",
        answers: [
            { text: "Lago Baikal", correct: true },
            { text: "Lago Vitória", correct: false },
            { text: "Lago Superior", correct: false },
            { text: "Lago Michigan", correct: false }
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
