const questions = {
    gk: {
      easy: [/* Add 5 Easy GK questions here */],
      medium: [/* Add 5 Medium GK questions here */],
      hard: [/* Add 5 Hard GK questions here */],
    },
    maths: {
      easy: [/* Add 5 Easy Maths questions here */],
      medium: [/* Add 5 Medium Maths questions here */],
      hard: [/* Add 5 Hard Maths questions here */],
    },
    sports: {
      easy: [/* Add 5 Easy Sports questions here */],
      medium: [/* Add 5 Medium Sports questions here */],
      hard: [/* Add 5 Hard Sports questions here */],
    },
    technical: {
      easy: [/* Add 5 Easy Technical questions here */],
      medium: [/* Add 5 Medium Technical questions here */],
      hard: [/* Add 5 Hard Technical questions here */],
    },
  };
  
  let quiz = [];
  let currentQuestion = 0;
  let score = 0;
  let selectedDomain = '';
  let isGameOver = false;
  
  function startQuiz(domain) {
    selectedDomain = domain;
    document.getElementById('domain-selection').classList.add('hidden');
    document.getElementById('quiz-game').classList.remove('hidden');
    
    quiz = [
      ...randomSelect(questions[domain].easy, 5),
      ...randomSelect(questions[domain].medium, 5),
      ...randomSelect(questions[domain].hard, 5),
    ];
    shuffle(quiz);
    showQuestion();
  }
  
  function showQuestion() {
    if (currentQuestion >= quiz.length) {
      endGame();
      return;
    }
  
    const question = quiz[currentQuestion];
    document.getElementById("question").innerText = question.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
  
    question.options.forEach((option) => {
      const btn = document.createElement("button");
      btn.innerText = option;
      btn.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(btn);
    });
  
    document.getElementById("current").innerText = currentQuestion + 1;
    document.getElementById("progress-bar").value = (currentQuestion + 1) * (100 / quiz.length);
  }
  
  function checkAnswer(answer) {
    const correctAnswer = quiz[currentQuestion].answer;
    if (answer === correctAnswer) {
      score += 10;
      document.getElementById("points").innerText = score;
    } else {
      gameOver(false);
    }
    document.getElementById("next-btn").classList.remove("hidden");
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quiz.length) {
      showQuestion();
      document.getElementById("next-btn").classList.add("hidden");
    } else {
      endGame();
    }
  }
  
  function endGame() {
    document.getElementById('game-over').classList.remove('hidden');
    document.getElementById('final-score').innerText = score;
    if (score === 0) {
      document.getElementById('loss-msg').innerText = "Unfortunately, you lost. Better luck next time!";
    }
  }
  
  function restartGame() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("points").innerText = score;
    document.getElementById('game-over').classList.add('hidden');
    startQuiz(selectedDomain);
  }
  
  function gameOver(won) {
    isGameOver = true;
    document.getElementById("game-over").classList.remove("hidden");
    if (won) {
      document.getElementById("loss-msg").innerText = "Congratulations! You answered all questions correctly.";
    } else {
      document.getElementById("loss-msg").innerText = "You answered incorrectly. Game Over!";
    }
  }
  
  function randomSelect(array, count) {
    return array.sort(() => Math.random() - 0.5).slice(0, count);
  }
  
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  