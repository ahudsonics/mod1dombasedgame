const questions = [
    {
      question: "Who am I?",
      imageSrc: "images/obama.jpg", // Replace with the image URL
      answer: "Barack Obama",
      choices: ["Famous Person 1", "Famous Person 2", "Famous Person 3", "Famous Person 4"],
      correctChoice: 0 // Index of the correct choice in the choices array
    },
    // Add more questions here...
  ];
  
  let currentPlayer = 1;
  let currentQuestionIndex = 0;
  let player1Score = 0;
  let player2Score = 0;
  
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
  
  document.getElementById("submit-answer").addEventListener("click", checkAnswer);
  nextQuestionButton.addEventListener("click", switchPlayer);
  
  initializeGame();
  