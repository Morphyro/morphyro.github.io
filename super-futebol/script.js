const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const victoryButton = document.getElementById('victory-btn');
const quizScreen = document.getElementById('quiz-screen');
const startScreen = document.getElementById('start-screen');
const endScreen = document.getElementById('end-screen');
const victoryScreen = document.getElementById('victory-screen');
const questionText = document.getElementById('question-text');
const questionNumber = document.getElementById('question-number');
const answerButtons = document.getElementById('answer-buttons');

let currentQuestionIndex;
const quizData = [
  {
    question: "Qual jogador ganhou o prêmio de Melhor Jogador da FIFA em 2021?",
    answers: [
      { text: "Lionel Messi", correct: true },
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Neymar", correct: false },
      { text: "Robert Lewandowski", correct: false }
    ]
  },
  {
    question: "Quantas Copas do Mundo a Seleção Brasileira de futebol já ganhou até 2022?",
    answers: [
      { text: "3", correct: false },
      { text: "5", correct: true },
      { text: "4", correct: false },
      { text: "6", correct: false }
    ]
  },

  {
    question: "Qual país sediou a Copa do Mundo de 2018??",
    answers: [
      { text: "Rússia", correct: true },
      { text: "França", correct: false },
      { text: "Alemanha", correct: false },
      { text: "Brasil", correct: false }
    ]
  },

  {
    question: "Quem é o maior artilheiro da história da Liga dos Campeões da UEFA?",
    answers: [
      { text: "Lionel Messi", correct: false },
      { text: "Cristiano Ronaldo", correct: true },
      { text: "Neymar", correct: false },
      { text: "Robert Lewandowski", correct: false }
    ]
  },
  
  {
    question: "Qual é o único jogador a ter vencido a Bola de Ouro da FIFA oito vezes?",
    answers: [
      { text: "Lionel Messi", correct: true },
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Neymar", correct: false },
      { text: "Robert Lewandowski", correct: false }
    ]
  },

  {
    question: "Qual seleção nacional detém o recorde de mais títulos da Copa América?",
    answers: [
      { text: "Brasil", correct: false },
      { text: "Argentina", correct: true },
      { text: "Uruguai", correct: false },
      { text: "Chile", correct: false }
    ]
  },

  {
    question: "Quantas Copsadasdasdadsa d sds da ds ad adas dd asd dsas do Mundo o Brasil ganhou?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false }
    ]
  },

  {
    question: "Quantas Copsadasdasdadsa d sds da ds ad adas dd asd dsas do Mundo o Brasil ganhou?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false }
    ]
  },

  {
    question: "Quantas Copsadasdasdadsa d sds da ds ad adas dd asd dsas do Mundo o Brasil ganhou?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false }
    ]
  },

  {
    question: "Quantas Copsadasdasdadsa d sds da ds ad adas dd asd dsas do Mundo o Brasil ganhou?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false }
    ]
  },

  {
    question: "Quantas Copsadasdasdadsa d sds da ds ad adas dd asd dsas do Mundo o Brasil ganhou?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false }
    ]
  },

  {
    question: "Quantas Copsadasdasdadsa d sds da ds ad adas dd asd dsas do Mundo o Brasil ganhou?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false }
    ]
  },

  {
    question: "Quantas Copsadasdasdadsa d sds da ds ad adas dd asd dsas do Mundo o Brasil ganhou?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false }
    ]
  },

  
];

startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', restartQuiz);
victoryButton.addEventListener('click', restartQuiz);

function startQuiz() {
  startScreen.style.display = 'none';
  currentQuestionIndex = 0;
  quizScreen.style.display = 'block';
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(quizData[currentQuestionIndex]);
}

function showQuestion(question) {
  questionNumber.innerText = ` ${currentQuestionIndex + 1}`;
  questionText.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(button, answer.correct));
    answerButtons.appendChild(button);
  });
}

function resetState() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(button, correct) {
  if (correct) {
    button.classList.add('correct');
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      setTimeout(setNextQuestion, 1000);
    } else {
      showVictoryScreen();
    }
  } else {
    button.classList.add('wrong');
    // Show the red button for 1 second before going to the end screen
    setTimeout(() => {
      showEndScreen();
    }, 1000);
  }
}

function showEndScreen() {
  quizScreen.style.display = 'none';
  endScreen.style.display = 'block';
}

function showVictoryScreen() {
  quizScreen.style.display = 'none';
  victoryScreen.style.display = 'block';
}

function restartQuiz() {
  endScreen.style.display = 'none';
  victoryScreen.style.display = 'none';
  startScreen.style.display = 'block';
}
