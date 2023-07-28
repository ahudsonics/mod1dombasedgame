const questions = [
    {
        question: "Who am I?",
        imageSrc: "images/obama.jpg",
        answer: "Barack Obama",
        choices: [
          "King Of The United Kingdom",
          "Played Darth Vader in 'Star Wars",
          "44th President of the United States",
          "Lead Singer of The Ohio Players",
        ],
        correctChoice: 2,
      },
    {
      question: "Who am I?",
      imageSrc: "images/washington.jpg",
      answer: "George Washington",
      choices: [
        "First President of the United States",
        "Invented the telephone",
        "Discovered electricity",
        "Wrote 'Hamlet'",
      ],
      correctChoice: 0,
    },
    {
      question: "Who am I?",
      imageSrc: "images/lincoln.jpg",
      answer: "Abraham Lincoln",
      choices: [
        "16th President of the United States",
        "Founded Microsoft",
        "Invented the lightbulb",
        "Won the Nobel Peace Prize",
      ],
      correctChoice: 0,
    },
    {
      question: "Who am I?",
      imageSrc: "images/stalin.jpg",
      answer: "Joseph Stalin",
      choices: [
        "Leader of the Allied forces in World War II",
        "First man to walk on the moon",
        "Soviet dictator",
        "Discovered penicillin",
      ],
      correctChoice: 2,
    },
    {
      question: "Who am I?",
      imageSrc: "images/napoleonbonaparte.jpg",
      answer: "Napoleon Bonaparte",
      choices: [
        "Emperor of the Roman Empire",
        "Conqueror of Persia",
        "French military and political leader",
        "Invented the printing press",
      ],
      correctChoice: 2,
    },
    {
      question: "Who am I?",
      imageSrc: "images/catherinethegreat.jpg",
      answer: "Catherine The Great",
      choices: [
        "Russian revolutionary leader",
        "Empress of Russia",
        "Founded Apple Inc.",
        "Discovered gravity",
      ],
      correctChoice: 1,
    },
    {
      question: "Who am I?",
      imageSrc: "images/reagan.jpg",
      answer: "Ronald Reagan",
      choices: [
        "35th President of the United States",
        "Scientist who developed the theory of relativity",
        "Famous rock star",
        "40th President of the United States",
      ],
      correctChoice: 3,
    },
    {
      question: "Who am I?",
      imageSrc: "images/teddyroosevelt.jpg",
      answer: "Teddy Roosevelt",
      choices: [
        "Inventor of the telephone",
        "Explorer who reached the South Pole",
        "26th President of the United States",
        "Founded Facebook",
      ],
      correctChoice: 2,
    },
    {
      question: "Who am I?",
      imageSrc: "images/degaulle.jpg",
      answer: "Charles De Gaulle",
      choices: [
        "French military hero in World War I",
        "17th President of the United States",
        "First person to reach the summit of Mount Everest",
        "French general and statesman",
      ],
      correctChoice: 0,
    },
    {
      question: "Who am I?",
      imageSrc: "images/chiangkaishek.jpg",
      answer: "Chiang Kai Shek",
      choices: [
        "Chinese revolutionary leader",
        "Founder of Google",
        "Chinese military and political leader",
        "Discovered the theory of evolution",
      ],
      correctChoice: 2,
    },
    {
      question: "Who am I?",
      imageSrc: "images/churchill.jpg",
      answer: "Winston Churchill",
      choices: [
        "British Prime Minister during World War II",
        "Invented the steam engine",
        "Won the Tour de France",
        "English playwright and poet",
      ],
      correctChoice: 0,
    },
    {
      question: "Who am I?",
      imageSrc: "images/elizabethii.jpg",
      answer: "Queen Elizabeth II",
      choices: [
        "Queen of Ancient Egypt",
        "First woman to fly solo across the Atlantic Ocean",
        "Previous Queen of the United Kingdom",
        "Invented the computer",
      ],
      correctChoice: 2,
    },
    {
      question: "Who am I?",
      imageSrc: "images/clinton.jpg",
      answer: "Bill Clinton",
      choices: [
        "42nd President of the United States",
        "Discovered America",
        "Founder of Amazon",
        "Leader of the Soviet Union",
      ],
      correctChoice: 0,
    },
    {
      question: "Who am I?",
      imageSrc: "images/alexanderthegreat.jpg",
      answer: "Alexander The Great",
      choices: [
        "Ancient Egyptian Pharaoh",
        "Conqueror of the Persian Empire",
        "Invented the telescope",
        "Leader of the French Revolution",
      ],
      correctChoice: 1,
    },
    {
      question: "Who am I?",
      imageSrc: "images/juliuscaesar.jpg",
      answer: "Julius Caesar",
      choices: [
        "Roman politician and military general",
        "Discovered the theory of gravity",
        "First person to walk on the moon",
        "Invented the telephone",
      ],
      correctChoice: 0,
    },
    {
      question: "Who am I?",
      imageSrc: "images/georgewbush.jpg",
      answer: "George W. Bush",
      choices: [
        "43rd President of the United States",
        "Famous scientist who developed the theory of relativity",
        "Founder of Microsoft",
        "Dictator of North Korea",
      ],
      correctChoice: 0,
    },
    {
      question: "Who am I?",
      imageSrc: "images/louisxiv.jpg",
      answer: "King Louis XIV",
      choices: [
        "French King known as the Sun King",
        "Invented the lightbulb",
        "Explored the New World",
        "Wrote 'Romeo and Juliet'",
      ],
      correctChoice: 0,
    },
  ];
  
  
  let currentPlayer = 1;
  let currentQuestionIndex = 0;
  let player1Score = 0;
  let player2Score = 0;
  let gameMode = "human"; // "human" or "computer"


  const questionElement = document.getElementById("question");
  const answerElement = document.getElementById("answer");
  const choicesElement = document.getElementById("choices");
  const resultElement = document.getElementById("result");
  const nextQuestionButton = document.getElementById("next-question");
  
  function initializeGame() {
    currentPlayer = 1;
    currentQuestionIndex = 0;
    player1Score = 0;
    player2Score = 0;
    displayQuestion();
  }
  
  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerElement.value = "";
    choicesElement.innerHTML = "";
  
    const imageElement = document.createElement("img");
    imageElement.src = currentQuestion.imageSrc;
    imageElement.alt = "Person";
    choicesElement.appendChild(imageElement);
  
    if (currentPlayer === 1) {
      resultElement.textContent = "Player 1's Turn";
      nextQuestionButton.style.display = "none";
    } else {
      resultElement.textContent = "Player 2's Turn";
      nextQuestionButton.style.display = "none";
    }
  
    if (currentPlayer === 1) {
      for (let i = 0; i < currentQuestion.choices.length; i++) {
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "choices";
        radioInput.value = i;
        choicesElement.appendChild(radioInput);
  
        const label = document.createElement("label");
        label.textContent = currentQuestion.choices[i];
        choicesElement.appendChild(label);
  
        choicesElement.appendChild(document.createElement("br"));
      }
    }
  }
  
  function checkAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const playerAnswer = answerElement.value.trim();
    const selectedChoiceIndex = parseInt(document.querySelector('input[name="choices"]:checked').value);
  
    if (currentPlayer === 1 && playerAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      player1Score++;
      resultElement.textContent = "Player 1 is Correct!";
      nextQuestionButton.style.display = "block";
    } else if (currentPlayer === 2 && selectedChoiceIndex === currentQuestion.correctChoice) {
      player2Score++;
      resultElement.textContent = "Player 2 is Correct!";
      nextQuestionButton.style.display = "block";
    } else {
      resultElement.textContent = "Incorrect! Try again.";
    }
  }
  
  function switchPlayer() {
    if (currentPlayer === 1) {
      currentPlayer = 2;
    } else {
      currentPlayer = 1;
    }
    currentQuestionIndex++;
  
    if (currentQuestionIndex >= questions.length) {
      endGame();
    } else {
      displayQuestion();
    }
  }
  
  function endGame() {
    questionElement.textContent = "Game Over";
    choicesElement.innerHTML = "";
    resultElement.textContent = `Player 1 Score: ${player1Score} | Player 2 Score: ${player2Score}`;
    nextQuestionButton.style.display = "none";
  }
  

  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerElement.value = "";
    choicesElement.innerHTML = "";
  
    const imageElement = document.createElement("img");
    imageElement.src = currentQuestion.imageSrc;
    imageElement.alt = "Person";
    imageElement.style.maxWidth = "100%"; // Scale the image to fit the container
    choicesElement.appendChild(imageElement);
  
    if (currentPlayer === 1) {
      resultElement.textContent = "Player 1's Turn";
      nextQuestionButton.style.display = "none";
    } else {
      resultElement.textContent = "Player 2's Turn";
      nextQuestionButton.style.display = "none";
    }
  
    if (currentPlayer === 1) {
      for (let i = 0; i < currentQuestion.choices.length; i++) {
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "choices";
        radioInput.value = i;
        choicesElement.appendChild(radioInput);
  
        const label = document.createElement("label");
        label.textContent = currentQuestion.choices[i];
        choicesElement.appendChild(label);
  
        choicesElement.appendChild(document.createElement("br"));
      }
    }
  }
 
  
  function initializeGame() {
    currentPlayer = 1;
    currentQuestionIndex = 0;
    player1Score = 0;
    player2Score = 0;
    displayQuestion();
  }
  
  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerElement.value = "";
    choicesElement.innerHTML = "";
  
    const imageElement = document.createElement("img");
    imageElement.src = currentQuestion.imageSrc;
    imageElement.alt = "Person";
    imageElement.style.maxWidth = "100%"; // Scale the image to fit the container
    choicesElement.appendChild(imageElement);
  
    if (currentPlayer === 1) {
      resultElement.textContent = "Player 1's Turn";
      nextQuestionButton.style.display = "none";
    } else {
      resultElement.textContent = "Player 2's Turn";
      nextQuestionButton.style.display = "none";
    }
  
    for (let i = 0; i < currentQuestion.choices.length; i++) {
      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = "choices";
      radioInput.value = i;
      choicesElement.appendChild(radioInput);
  
      const label = document.createElement("label");
      label.textContent = currentQuestion.choices[i];
      choicesElement.appendChild(label);
  
      choicesElement.appendChild(document.createElement("br"));
    }
    if (currentPlayer === 1) {
      resultElement.textContent = "Player 1's Turn";
      nextQuestionButton.style.display = "none";
    } else if (currentPlayer === 2 && gameMode === "human") {
      resultElement.textContent = "Player 2's Turn";
      nextQuestionButton.style.display = "none";
    } else if (currentPlayer === 2 && gameMode === "computer") {
      resultElement.textContent = "Computer's Turn";
      nextQuestionButton.style.display = "none";
      setTimeout(checkComputerAnswer, 1500); // Simulate computer's answer after a 1.5-second delay
      return; // Exit the function early, so it doesn't proceed to display the "next question" button immediately
    }

  }
  
  function checkAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const playerAnswer = answerElement.value.trim();
    const selectedChoiceIndex = parseInt(document.querySelector('input[name="choices"]:checked').value);
  
    if (currentPlayer === 1 && playerAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      player1Score++;
      resultElement.textContent = "Player 1 is Correct!";
      nextQuestionButton.style.display = "block";
    } else if (currentPlayer === 2 && selectedChoiceIndex === currentQuestion.correctChoice) {
      player2Score++;
      resultElement.textContent = "Player 2 is Correct!";
      nextQuestionButton.style.display = "block";
    } else {
      resultElement.textContent = "Incorrect! Try again.";
      setTimeout(switchPlayer, 1500); // Move to the next question after a 1.5 second delay
      return; // Exit the function early, so it doesn't proceed to display the "next question" button immediately
    }
  }
  function initializeGame() {
    gameMode = prompt("Choose game mode: Type 'human' for two players or 'computer' for Player 2 to be the computer.", "human");
  
    if (gameMode !== "human" && gameMode !== "computer") {
      alert("Invalid game mode selected. Defaulting to two human players.");
      gameMode = "human";
    }
  
    currentPlayer = 1;
    currentQuestionIndex = 0;
    player1Score = 0;
    player2Score = 0;
    displayQuestion();
  }
  
  function checkComputerAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const computerChoice = Math.floor(Math.random() * currentQuestion.choices.length);
  
    if (computerChoice === currentQuestion.correctChoice) {
      player2Score++;
      resultElement.textContent = "Computer is Correct!";
      nextQuestionButton.style.display = "block";
    } else {
      resultElement.textContent = "Computer's answer is Incorrect!";
      nextQuestionButton.style.display = "block";
    }
  }
  

  function switchPlayer() {
    if (currentPlayer === 1) {
      currentPlayer = 2;
    } else {
      currentPlayer = 1;
    }
    currentQuestionIndex++;
  
    if (currentQuestionIndex >= questions.length) {
      endGame();
    } else {
      displayQuestion();
    }
  }
  
  function endGame() {
    questionElement.textContent = "Game Over";
    choicesElement.innerHTML = "";
    resultElement.textContent = `Player 1 Score: ${player1Score} | Player 2 Score: ${player2Score}`;
    nextQuestionButton.style.display = "none";
  }

  document.getElementById("submit-answer").addEventListener("click", checkAnswer);
  nextQuestionButton.addEventListener("click", switchPlayer);
  

  initializeGame();
  