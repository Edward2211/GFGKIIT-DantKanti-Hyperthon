const questions = {
    
        gk: {
            easy: [
                { question: "Who was the first president of the United States?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], answer: "George Washington" },
                { question: "What is the capital of Canada?", options: ["Ottawa", "Toronto", "Vancouver", "Montreal"], answer: "Ottawa" },
                { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Ganges"], answer: "Nile" },
                // { question: "Which country invented paper?", options: ["China", "Egypt", "Greece", "India"], answer: "China" },
                // { question: "Who was the first woman to fly solo across the Atlantic?", options: ["Amelia Earhart", "Bessie Coleman", "Rosie the Riveter", "Hannah Reitsch"], answer: "Amelia Earhart" },
                // { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
                // { question: "Which animal is known as the king of the jungle?", options: ["Lion", "Tiger", "Elephant", "Giraffe"], answer: "Lion" },
                // { question: "Who painted the Mona Lisa?", options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"], answer: "Leonardo da Vinci" },
                // { question: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], answer: "Yen" },
                // { question: "Which country is famous for kangaroos?", options: ["Australia", "Canada", "Brazil", "Russia"], answer: "Australia" },
                // { question: "Who discovered America?", options: ["Christopher Columbus", "Ferdinand Magellan", "Marco Polo", "Vasco da Gama"], answer: "Christopher Columbus" },
                // { question: "Which is the smallest country in the world?", options: ["Monaco", "Vatican City", "Nauru", "San Marino"], answer: "Vatican City" },
                // { question: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "H2O2"], answer: "H2O" },
                // { question: "Which element is denoted by the symbol ‘Fe’?", options: ["Iron", "Fluorine", "Francium", "Fermium"], answer: "Iron" },
                // { question: "Which country is known as the land of the rising sun?", options: ["Japan", "China", "South Korea", "Vietnam"], answer: "Japan" },
                // { question: "What is the largest continent?", options: ["Asia", "Africa", "North America", "Europe"], answer: "Asia" },
              ],
              medium: [
                { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra" },
                { question: "Who was the first female Prime Minister of the United Kingdom?", options: ["Margaret Thatcher", "Theresa May", "Harriet Harman", "Angela Merkel"], answer: "Margaret Thatcher" },
                { question: "What is the tallest mountain in the world?", options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"], answer: "Mount Everest" },
                // { question: "Who is known as the father of modern physics?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Max Planck"], answer: "Albert Einstein" },
                // { question: "Which war ended in 1945?", options: ["World War I", "World War II", "Vietnam War", "Cold War"], answer: "World War II" },
                // { question: "What is the largest desert in the world?", options: ["Sahara", "Arabian", "Gobi", "Antarctic"], answer: "Antarctic" },
                // { question: "Who wrote the play Romeo and Juliet?", options: ["William Shakespeare", "George Bernard Shaw", "Anton Chekhov", "Tennessee Williams"], answer: "William Shakespeare" },
                // { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Diamond", "Iron", "Platinum"], answer: "Diamond" },
                // { question: "What is the longest running TV show in the US?", options: ["Friends", "The Simpsons", "The Office", "Saturday Night Live"], answer: "The Simpsons" },
                // { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "James Watt"], answer: "Alexander Graham Bell" },
                // { question: "What is the name of the first artificial satellite?", options: ["Sputnik", "Hubble", "Apollo 11", "Vostok"], answer: "Sputnik" },
                // { question: "Which country is famous for making chocolates?", options: ["Switzerland", "Belgium", "Germany", "France"], answer: "Switzerland" },
                // { question: "Who was the first man on the Moon?", options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"], answer: "Neil Armstrong" },
                // { question: "Which city is known as the Big Apple?", options: ["Los Angeles", "Chicago", "New York", "Boston"], answer: "New York" },
                // { question: "What is the smallest bone in the human body?", options: ["Stapes", "Femur", "Ulna", "Tibia"], answer: "Stapes" },
              ],
              hard: [
                { question: "Who was the first female president of a country?", options: ["Ellen Johnson Sirleaf", "Indira Gandhi", "Margaret Thatcher", "Golda Meir"], answer: "Indira Gandhi" },
                { question: "Which element has the highest atomic number?", options: ["Oganesson", "Neptunium", "Uranium", "Plutonium"], answer: "Oganesson" },
                { question: "What is the first element in the periodic table?", options: ["Hydrogen", "Oxygen", "Carbon", "Helium"], answer: "Hydrogen" },
                // { question: "Who was the first person to reach the South Pole?", options: ["Roald Amundsen", "Robert Scott", "Ernest Shackleton", "Douglas Mawson"], answer: "Roald Amundsen" },
                // { question: "What is the largest moon in the Solar System?", options: ["Titan", "Ganymede", "Callisto", "Io"], answer: "Ganymede" },
                // { question: "Who was the first president of the United States of America?", options: ["George Washington", "Thomas Jefferson", "John Adams", "James Madison"], answer: "George Washington" },
                // { question: "What was the name of the ship that sank after hitting an iceberg in 1912?", options: ["Titanic", "Lusitania", "Carpathia", "Olympic"], answer: "Titanic" },
                // { question: "Which famous scientist developed the theory of general relativity?", options: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Stephen Hawking"], answer: "Albert Einstein" },
                // { question: "Who is known as the father of modern chemistry?", options: ["Marie Curie", "Dmitri Mendeleev", "Robert Boyle", "Antoine Lavoisier"], answer: "Antoine Lavoisier" },
                // { question: "What year did World War I begin?", options: ["1914", "1912", "1920", "1939"], answer: "1914" },
                // { question: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Amazon" },
                // { question: "Which is the largest land animal?", options: ["Elephant", "Rhino", "Giraffe", "Hippo"], answer: "Elephant" },
                // { question: "Who invented the theory of evolution?", options: ["Charles Darwin", "Gregor Mendel", "Albert Einstein", "Louis Pasteur"], answer: "Charles Darwin" },
                // { question: "Which is the most populous country in the world?", options: ["China", "India", "USA", "Indonesia"], answer: "China" },
                // { question: "What is the smallest planet in our solar system?", options: ["Mercury", "Mars", "Venus", "Earth"], answer: "Mercury" },
                // { question: "Who painted the Sistine Chapel?", options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Vincent van Gogh"], answer: "Michelangelo" },
              ]
            },
          
            maths: {
                easy: [
                  { question: "What is 5 + 3?", options: [8, 7, 6, 9], answer: 8 },
                  { question: "What is 12 - 4?", options: [8, 7, 6, 9], answer: 8 },
                  { question: "What is 3 * 3?", options: [6, 7, 8, 9], answer: 9 },
                  { question: "What is 10 / 2?", options: [5, 4, 3, 6], answer: 5 },
                  { question: "What is the square of 5?", options: [25, 20, 15, 30], answer: 25 },
                  { question: "What is the cube root of 8?", options: [2, 3, 4, 5], answer: 2 },
                  { question: "What is the perimeter of a square with side length 4?", options: [16, 12, 14, 18], answer: 16 },
                  { question: "What is the area of a circle with radius 7?", options: [154, 140, 150, 160], answer: 154 },
                  { question: "What is 6 + 7?", options: [12, 13, 14, 15], answer: 13 },
                  { question: "What is 20 - 7?", options: [12, 13, 14, 15], answer: 13 },
                  // Add more easy questions here...
                ],
                medium: [
                  { question: "What is 12 * 15?", options: [180, 150, 175, 200], answer: 180 },
                  { question: "What is 144 ÷ 12?", options: [11, 10, 12, 14], answer: 12 },
                  { question: "What is the area of a triangle with base 6 and height 8?", options: [24, 28, 32, 36], answer: 24 },
                  { question: "What is 8 raised to the power of 2?", options: [64, 56, 72, 80], answer: 64 },
                  { question: "What is 81 ÷ 9?", options: [9, 10, 8, 11], answer: 9 },
                  // Add more medium questions here...
                ],
                hard: [
                  { question: "What is the square root of 225?", options: [15, 14, 13, 16], answer: 15 },
                  { question: "What is 15 × 14?", options: [210, 220, 200, 190], answer: 210 },
                  { question: "What is the sum of angles in a triangle?", options: [180, 160, 190, 170], answer: 180 },
                  { question: "What is 9! (9 factorial)?", options: [362880, 2880, 540, 100], answer: 362880 },
                  { question: "What is the solution to x^2 - 4 = 0?", options: [2, -2, 0, 4], answer: 2 },
                  // Add more hard questions here...
                ]
              },
              sports: {
                easy: [
                  { question: "Which sport is known as the 'King of Sports'?", options: ["Soccer", "Basketball", "Tennis", "Cricket"], answer: "Soccer" },
                  { question: "Which country won the 2018 FIFA World Cup?", options: ["France", "Brazil", "Germany", "Argentina"], answer: "France" },
                  { question: "How many players are there on a basketball team?", options: [5, 6, 7, 8], answer: 5 },
                  { question: "Which country hosted the 2008 Summer Olympics?", options: ["China", "Brazil", "United States", "Russia"], answer: "China" },
                  { question: "Which sport uses a shuttlecock?", options: ["Badminton", "Tennis", "Soccer", "Baseball"], answer: "Badminton" },
                  { question: "Who holds the record for the most goals in a World Cup?", options: ["Marta", "Pele", "Ronaldo", "Miura"], answer: "Marta" },
                  { question: "In which sport would you perform a slam dunk?", options: ["Basketball", "Tennis", "Football", "Hockey"], answer: "Basketball" },
                  { question: "Which sport has a position called a quarterback?", options: ["Football", "Baseball", "Basketball", "Soccer"], answer: "Football" },
                  { question: "Which sport is famous for its Grand Slam tournaments?", options: ["Tennis", "Cricket", "Soccer", "Boxing"], answer: "Tennis" },
                  { question: "In which sport is the term 'offside' used?", options: ["Soccer", "Tennis", "Baseball", "Basketball"], answer: "Soccer" },
                ],
                medium: [
                  { question: "Which country won the 2016 Summer Olympics?", options: ["United States", "China", "Russia", "Brazil"], answer: "United States" },
                  { question: "Who won the 2019 ICC Cricket World Cup?", options: ["England", "India", "Australia", "New Zealand"], answer: "England" },
                  { question: "In which sport do you compete in a decathlon?", options: ["Athletics", "Boxing", "Basketball", "Football"], answer: "Athletics" },
                  { question: "Which sport features the Stanley Cup?", options: ["Hockey", "Football", "Tennis", "Baseball"], answer: "Hockey" },
                  { question: "Who holds the record for the most Olympic gold medals?", options: ["Michael Phelps", "Usain Bolt", "Simone Biles", "Larisa Latynina"], answer: "Michael Phelps" },
                  // Add more medium sports questions here...
                ],
                hard: [
                  { question: "Who won the FIFA World Cup in 1986?", options: ["Argentina", "Germany", "Brazil", "France"], answer: "Argentina" },
                  { question: "Who has the most Grand Slam singles titles in tennis?", options: ["Roger Federer", "Rafael Nadal", "Serena Williams", "Novak Djokovic"], answer: "Rafael Nadal" },
                  { question: "Which country hosted the 2014 Winter Olympics?", options: ["Russia", "Canada", "United States", "Japan"], answer: "Russia" },
                  { question: "Who is known as the 'Fastest Man in the World'?", options: ["Usain Bolt", "Tyson Gay", "Asafa Powell", "Yohan Blake"], answer: "Usain Bolt" },
                  { question: "In which country were the first modern Olympic Games held?", options: ["Greece", "France", "United States", "England"], answer: "Greece" },
                  // Add more hard sports questions here...
                ]
              },
              technical: {
                easy: [
                  { question: "What does HTML stand for?", options: ["HyperText Markup Language", "Hyper Tool Markup Language", "Home Tool Markup Language", "Hyper Text Multiple Language"], answer: "HyperText Markup Language" },
                  { question: "Which programming language is known as the mother of all languages?", options: ["C", "Java", "Python", "Assembly"], answer: "C" },
                  { question: "What is the main function in a C program?", options: ["main()", "start()", "init()", "begin()"], answer: "main()" },
                  { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Color Style Sheets"], answer: "Cascading Style Sheets" },
                  { question: "Which symbol is used for comments in C programming?", options: ["//", "#", "/*", "--"], answer: "//" },
                  { question: "Which of these is a database management system?", options: ["MySQL", "PHP", "JavaScript", "HTML"], answer: "MySQL" },
                  { question: "What does URL stand for?", options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Retrieval Locator", "Universal Retrieval Locator"], answer: "Uniform Resource Locator" },
                  { question: "Which language is used to create Android apps?", options: ["Java", "Python", "Swift", "Ruby"], answer: "Java" },
                  { question: "Which of the following is used for styling a web page?", options: ["CSS", "JavaScript", "HTML", "XML"], answer: "CSS" },
                  { question: "Which company developed JavaScript?", options: ["Netscape", "Microsoft", "Google", "Apple"], answer: "Netscape" },
                ],
                medium: [
                  { question: "Which of these is used for version control?", options: ["Git", "Node.js", "React", "MongoDB"], answer: "Git" },
                  { question: "What does API stand for?", options: ["Application Programming Interface", "Automated Programming Interface", "Application Process Integration", "Application Program Integration"], answer: "Application Programming Interface" },
                  { question: "What is the default port number for HTTP?", options: [80, 443, 8080, 21], answer: 80 },
                  { question: "Which is a front-end JavaScript framework?", options: ["Angular", "Node.js", "Django", "Spring"], answer: "Angular" },
                  { question: "Which is used for managing large datasets in databases?", options: ["SQL", "Excel", "Notepad", "Word"], answer: "SQL" },
                  // Add more medium technical questions here...
                ],
                hard: [
                  { question: "What is the time complexity of binary search?", options: ["O(log n)", "O(n)", "O(n^2)", "O(1)"], answer: "O(log n)" },
                  { question: "Which algorithm is used for finding the shortest path in a graph?", options: ["Dijkstra", "QuickSort", "MergeSort", "BubbleSort"], answer: "Dijkstra" },
                  { question: "Which of the following is not a NoSQL database?", options: ["MongoDB", "Redis", "PostgreSQL", "Cassandra"], answer: "PostgreSQL" },
                  { question: "Which language was used to write the Linux kernel?", options: ["C", "C++", "Python", "Java"], answer: "C" },
                  { question: "What is the purpose of a constructor in object-oriented programming?", options: ["Initialize objects", "Define classes", "Run code before the program starts", "Handle errors"], answer: "Initialize objects" },
                  // Add more hard technical questions here...
                ]
              }
            };
    
            
  
  let quiz = [];
  let currentQuestion = 0;
  let score = 0;
  let selectedDomain = '';
  let isGameOver = false;
  let currentLevel = 0;
  let levelMessages = ['Easy Level Cleared!', 'Medium Level Cleared!', 'Hard Level Cleared!'];
  
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
  
  function randomSelect(questionsArray, num) {
    const shuffled = [...questionsArray].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, num);
  }
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function showQuestion() {
    if (currentQuestion >= quiz.length) {
      endGame(true); // Player wins when all questions are answered
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
    document.getElementById("progress-bar").value = ((currentQuestion + 1) / quiz.length) * 100;
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
    
    // Check if the player cleared the current level
    if (currentQuestion === 5 * (currentLevel + 1)) {
      showLevelClearedMessage();
      currentLevel++;
    }
  
    if (currentQuestion < quiz.length) {
      showQuestion();
      document.getElementById("next-btn").classList.add("hidden");
    } else {
      endGame(true); // Player wins when all questions are answered
    }
  }
  
  function showLevelClearedMessage() {
    document.getElementById("level-cleared-msg").innerText = levelMessages[currentLevel];
    document.getElementById("level-cleared-msg").classList.remove('hidden');
    
    setTimeout(() => {
      document.getElementById("level-cleared-msg").classList.add('hidden');
    }, 2000); // Hide the message after 2 seconds
  }
  
  function endGame(won) {
    isGameOver = true;
    document.getElementById('quiz-game').classList.add('hidden');
    document.getElementById('game-over').classList.remove('hidden');
  
    if (won) {
      document.getElementById("final-score").innerText = `Congratulations, You Win! Your final score is: ${score}`;
      document.getElementById("winner-msg").innerText = "Congratulations, You Win!";
    } else {
      document.getElementById("final-score").innerText = `Game Over! Your score is: ${score}`;
      document.getElementById("loss-msg").innerText = "You Lost!";
    }
  }
  
  function gameOver(success) {
    if (!success) {
      isGameOver = true;
      document.getElementById('quiz-game').classList.add('hidden');
      document.getElementById('game-over').classList.remove('hidden');
      document.getElementById("final-score").innerText = `Game Over! Your score is: ${score}`;
      document.getElementById("loss-msg").innerText = "You Lost!";
    }
  }
  
  function restartGame() {
    location.reload();
  }
  