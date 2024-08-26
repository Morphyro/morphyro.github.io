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
    question: "Quantas Copas do Mundo a seleção brasileira de futebol já ganhou até 2022?",
    answers: [
      { text: "3", correct: false },
      { text: "5", correct: true },
      { text: "7", correct: false },
      { text: "2", correct: false }
    ]
  },
  {
    question: "Qual país sediou a Copa do Mundo de 2018?",
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
      { text: "Raúl", correct: false },
      { text: "Robert Lewandowski", correct: false }
    ]
  },
  {
    question: "Qual é o único jogador a ter vencido a Bola de Ouro da FIFA oito vezes?",
    answers: [
      { text: "Lionel Messi", correct: true },
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Neymar", correct: false },
      { text: "Zinedine Zidane", correct: false }
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
    question: "Em que ano o Brasil sediou a última Copa do Mundo antes de 2014?",
    answers: [
      { text: "2002", correct: false },
      { text: "1998", correct: false },
      { text: "1950", correct: true },
      { text: "1978", correct: false }
    ]
  },
  {
    question: "Quem era o técnico da seleção da Alemanha em 2022?",
    answers: [
      { text: "Joachim Löw", correct: false },
      { text: "Jurgen Klopp", correct: false },
      { text: "Hansi Flick", correct: true },
      { text: "Oliver Bierhoff", correct: false }
    ]
  },
  {
    question: "Qual país ganhou a primeira edição da Copa do Mundo Feminina da FIFA em 1991?",
    answers: [
      { text: "Brasil", correct: false },
      { text: "Alemanha", correct: false },
      { text: "Estados Unidos", correct: true },
      { text: "Suécia", correct: false }
    ]
  },
  {
    question: "Quem é o maior goleiro artilheiro da história do futebol?",
    answers: [
      { text: "Dida", correct: false },
      { text: "Buffon", correct: false },
      { text: "Manuel Neuer", correct: false },
      { text: "Rogerio Ceni", correct: true }
    ]
  },
  {
    question: "Quantas vezes a seleção italiana de futebol venceu a Eurocopa até 2021?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "4", correct: false }
    ]
  },
  {
    question: "Em que ano a Inglaterra venceu sua única Copa do Mundo?",
    answers: [
      { text: "1966", correct: true },
      { text: "1974", correct: false },
      { text: "1982", correct: false },
      { text: "1990", correct: false }
    ]
  },
  {
    question: "Quem é o único jogador a ter vencido a Liga dos Campeões com três clubes diferentes?",
    answers: [
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Lionel Messi", correct: false },
      { text: "Clarence Seedorf", correct: true },
      { text: "Zlatan Ibrahimović", correct: false }
    ]
  },
  {
    question: "Qual é o estádio com maior capacidade de espectadores do mundo?",
    answers: [
      { text: "Camp Nou (Espanha)", correct: false },
      { text: "Maracanã (Brasil)", correct: false },
      { text: "Melbourne Cricket Ground (Austrália)", correct: false },
      { text: "Rungrado 1st of May Stadium (Coreia do Norte)", correct: true }
    ]
  },
  {
    question: "Quem foi o artilheiro da Copa do Mundo de 2018 na Rússia?",
    answers: [
      { text: "Harry Kane", correct: true },
      { text: "Kylian Mbappé", correct: false },
      { text: "Antoine Griezmann", correct: false },
      { text: "Romelu Lukaku", correct: false }
    ]
  },
  {
    question: "Em que país nasceu o lendário jogador de futebol Diego Maradona?",
    answers: [
      { text: "Brasil", correct: false },
      { text: "Espanha", correct: false },
      { text: "Suécia", correct: false },
      { text: "Argentina", correct: true }
    ]
  },
  {
    question: "Quem foi o artilheiro da Copa do Mundo de 2002, realizada no Japão e na Coreia do Sul?",
    answers: [
      { text: "Ronaldo Nazário", correct: true },
      { text: "Zinedine Zidane", correct: false },
      { text: "Thierry Henry", correct: false },
      { text: "Rivaldo", correct: false }
    ]
  },
  {
    question: "Quantas seleções participam da fase de grupos na Copa do Mundo?",
    answers: [
      { text: "24", correct: false },
      { text: "32", correct: true },
      { text: "48", correct: false },
      { text: "36", correct: false }
    ]
  },
  {
    question: "Quem era o técnico da seleção argentina de futebol em 2022?",
    answers: [
      { text: "Diego Simeone", correct: false },
      { text: "Lionel Scaloni", correct: true },
      { text: "Jorge Sampaoli", correct: false },
      { text: "Gerardo Martino", correct: false }
    ]
  },
  {
    question: "Qual jogador foi apelidado de 'Rei' e é considerado um dos maiores jogadores brasileiros de todos os tempos?",
    answers: [
      { text: "Romário", correct: false },
      { text: "Rivaldo", correct: false },
      { text: "Pelé", correct: true },
      { text: "Zico", correct: false }
    ]
  },
  {
    question: "Quem é o único jogador a ter vencido o prêmio Puskás da FIFA três vezes?",
    answers: [
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Lionel Messi", correct: false },
      { text: "Neymar", correct: false },
      { text: "Nenhum Jogador", correct: true }
    ]
  },
  {
    question: "Quem era o treinador do Liverpool F.C. em 2022?",
    answers: [
      { text: "Jürgen Klopp", correct: true },
      { text: "Pep Guardiola", correct: false },
      { text: "Carlo Ancelotti", correct: false },
      { text: "Ole Gunnar Solskjær", correct: false }
    ]
  },
  {
    question: "Quem foi o treinador da seleção brasileira de futebol na Copa do Mundo de 2010 na África do Sul?",
    answers: [
      { text: "Tite", correct: false },
      { text: "Dunga", correct: true },
      { text: "Luiz Felipe Scolari", correct: false },
      { text: "Mano Menezes", correct: false }
    ]
  },
  {
    question: "Qual destes clubes ganhou a tríplice coroa (Campeonato Nacional, Copa Nacional e Liga dos Campeões) na mesma temporada?",
    answers: [
      { text: "Todas As Opções", correct: true },
      { text: "Barcelona", correct: false },
      { text: "Bayern de Munique", correct: false },
      { text: "Manchester United", correct: false }
    ]
  },
  {
    question: "Quem é o maior artilheiro da história da seleção argentina de futebol?",
    answers: [
      { text: "Diego Maradona", correct: false },
      { text: "Gabriel Batistuta", correct: false },
      { text: "Lionel Messi", correct: true },
      { text: "Hernán Crespo", correct: false }
    ]
  },
  {
    question: "Em que ano o futebol foi incluído pela primeira vez nos Jogos Olímpicos modernos?",
    answers: [
      { text: "1896", correct: false },
      { text: "1900", correct: true },
      { text: "1920", correct: false },
      { text: "1936", correct: false }
    ]
  },
  {
    question: "Qual jogador detém o recorde de mais gols marcados em uma única temporada da Liga dos Campeões da UEFA?",
    answers: [
      { text: "Lionel Messi", correct: false },
      { text: "Cristiano Ronaldo", correct: true },
      { text: "Neymar", correct: false },
      { text: "Robert Lewandowski", correct: false }
    ]
  },
  {
    question: "Quem foi o artilheiro da Copa do Mundo de 2014 no Brasil?",
    answers: [
      { text: "Thomas Müller", correct: false },
      { text: "James Rodríguez", correct: true },
      { text: "Lionel Messi", correct: false },
      { text: "Neymar", correct: false }
    ]
  },
  {
    question: "Qual país detém o recorde de mais títulos da Copa Africana de Nações (CAN)?",
    answers: [
      { text: "Camarões", correct: false },
      { text: "Nigéria", correct: false },
      { text: "Egito", correct: true },
      { text: "Gana", correct: false }
    ]
  },
  {
    question: "Quem é o único jogador a ter marcado em três finais de Copa do Mundo diferentes?",
    answers: [
      { text: "Diego Maradona", correct: false },
      { text: "Pelé", correct: false },
      { text: "Ninguém Conseguiu", correct: true },
      { text: "Lionel Messi", correct: false }
    ]
  }
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
