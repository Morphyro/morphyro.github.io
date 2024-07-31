const questions = [
    {
        question: "Qual país ganhou a Copa do Mundo FIFA de 2018?",
        answers: [
            { text: "França", correct: true },
            { text: "Croácia", correct: false },
            { text: "Alemanha", correct: false },
            { text: "Brasil", correct: false }
        ]
    },
    {
        question: "Quem é o maior artilheiro da história da NBA?",
        answers: [
            { text: "Michael Jordan", correct: false },
            { text: "LeBron James", correct: false },
            { text: "Kareem Abdul-Jabbar", correct: true },
            { text: "Kobe Bryant", correct: false }
        ]
    },
    {
        question: "Qual é o esporte mais popular do mundo?",
        answers: [
            { text: "Futebol", correct: true },
            { text: "Basquete", correct: false },
            { text: "Críquete", correct: false },
            { text: "Tênis", correct: false }
        ]
    },
    {
        question: "Em que ano o Usain Bolt estabeleceu o recorde mundial dos 100 metros rasos?",
        answers: [
            { text: "2008", correct: false },
            { text: "2009", correct: true },
            { text: "2010", correct: false },
            { text: "2011", correct: false }
        ]
    },
    {
        question: "Qual é o nome do famoso torneio de tênis realizado em Wimbledon?",
        answers: [
            { text: "Open de Wimbledon", correct: false },
            { text: "Wimbledon Championships", correct: true },
            { text: "Wimbledon Cup", correct: false },
            { text: "Wimbledon Open", correct: false }
        ]
    },
    {
        question: "Qual atleta é conhecido como 'O Maior de Todos os Tempos' no boxe?",
        answers: [
            { text: "Mike Tyson", correct: false },
            { text: "Muhammad Ali", correct: true },
            { text: "Floyd Mayweather", correct: false },
            { text: "George Foreman", correct: false }
        ]
    },
    {
        question: "Qual esporte é conhecido como 'o rei dos esportes aquáticos'?",
        answers: [
            { text: "Natação", correct: false },
            { text: "Vôlei de Praia", correct: false },
            { text: "Surfe", correct: true },
            { text: "Remo", correct: false }
        ]
    },
    {
        question: "Quem é o piloto mais vencedor da Fórmula 1?",
        answers: [
            { text: "Lewis Hamilton", correct: true },
            { text: "Michael Schumacher", correct: false },
            { text: "Ayrton Senna", correct: false },
            { text: "Juan Manuel Fangio", correct: false }
        ]
    },
    {
        question: "Qual é o maior evento esportivo do mundo, realizado a cada quatro anos?",
        answers: [
            { text: "Copa do Mundo FIFA", correct: false },
            { text: "Olimpíadas", correct: true },
            { text: "Super Bowl", correct: false },
            { text: "Tour de France", correct: false }
        ]
    },
    {
        question: "Qual é o nome do famoso torneio de golfe realizado em Augusta, Estados Unidos?",
        answers: [
            { text: "The Masters", correct: true },
            { text: "US Open", correct: false },
            { text: "British Open", correct: false },
            { text: "PGA Championship", correct: false }
        ]
    },
    {
        question: "Quem é o jogador de futebol mais caro da história?",
        answers: [
            { text: "Neymar", correct: true },
            { text: "Cristiano Ronaldo", correct: false },
            { text: "Lionel Messi", correct: false },
            { text: "Kylian Mbappé", correct: false }
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
