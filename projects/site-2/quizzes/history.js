const questions = [
    {
        question: "Quem foi o primeiro imperador romano?",
        answers: [
            { text: "Júlio César", correct: false },
            { text: "Augusto", correct: true },
            { text: "Nero", correct: false },
            { text: "Calígula", correct: false }
        ]
    },
    {
        question: "Qual foi a causa principal da Primeira Guerra Mundial?",
        answers: [
            { text: "A Revolução Russa", correct: false },
            { text: "O assassinato do arquiduque Francisco Ferdinando", correct: true },
            { text: "A invasão da Polônia", correct: false },
            { text: "A guerra dos Trinta Anos", correct: false }
        ]
    },
    {
        question: "Quem descobriu a América em 1492?",
        answers: [
            { text: "Fernão de Magalhães", correct: false },
            { text: "Cristóvão Colombo", correct: true },
            { text: "Vasco da Gama", correct: false },
            { text: "Pedro Álvares Cabral", correct: false }
        ]
    },
    {
        question: "Qual foi a primeira civilização a utilizar a escrita?",
        answers: [
            { text: "Egípcios", correct: false },
            { text: "Sumérios", correct: true },
            { text: "Mesoamericanos", correct: false },
            { text: "Chineses", correct: false }
        ]
    },
    {
        question: "Qual foi o evento que marcou o fim da Idade Média?",
        answers: [
            { text: "A queda de Constantinopla", correct: true },
            { text: "A Revolução Francesa", correct: false },
            { text: "O Renascimento", correct: false },
            { text: "A Revolução Industrial", correct: false }
        ]
    },
    {
        question: "Quem foi o líder do Movimento pelos Direitos Civis nos EUA durante os anos 1960?",
        answers: [
            { text: "Malcolm X", correct: false },
            { text: "Martin Luther King Jr.", correct: true },
            { text: "Rosa Parks", correct: false },
            { text: "Nelson Mandela", correct: false }
        ]
    },
    {
        question: "Qual era o nome do navio que transportava os primeiros colonos ingleses para a América em 1620?",
        answers: [
            { text: "Mayflower", correct: true },
            { text: "Santa Maria", correct: false },
            { text: "Nina", correct: false },
            { text: "Pinta", correct: false }
        ]
    },
    {
        question: "Quem foi o principal líder da Revolução Russa de 1917?",
        answers: [
            { text: "Leon Trotsky", correct: false },
            { text: "Joseph Stalin", correct: false },
            { text: "Vladimir Lenin", correct: true },
            { text: "Nikita Khrushchev", correct: false }
        ]
    },
    {
        question: "Qual foi a grande epidemia que devastou a Europa no século XIV?",
        answers: [
            { text: "Cólera", correct: false },
            { text: "Peste Negra", correct: true },
            { text: "Gripe Espanhola", correct: false },
            { text: "Tifo", correct: false }
        ]
    },
    {
        question: "Quem foi o primeiro presidente dos Estados Unidos?",
        answers: [
            { text: "Thomas Jefferson", correct: false },
            { text: "George Washington", correct: true },
            { text: "Abraham Lincoln", correct: false },
            { text: "John Adams", correct: false }
        ]
    },
    {
        question: "Em que ano ocorreu a Revolução Francesa?",
        answers: [
            { text: "1776", correct: false },
            { text: "1789", correct: true },
            { text: "1804", correct: false },
            { text: "1815", correct: false }
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
