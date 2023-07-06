const probabilityQuestions = [
    {
      question: "What is the probability of rolling a 6 on a fair six-sided die?",
      opt1: "1/2",
      opt2: "1/3",
      opt3: "1/4",
      opt4: "1/6",
      correct: "opt4"
      },
      
      {
      question: "A bag contains 5 red balls and 3 blue balls. What is the probability of selecting a red ball?",
      opt1: "3/8",
      opt2: "2/5",
      opt3: "1/2",
      opt4: "5/8",
      correct: "opt1"
      },
      
      {
      question: "In a deck of playing cards, what is the probability of drawing a heart?",
      opt1: "1/13",
      opt2: "1/4",
      opt3: "1/3",
      opt4: "1/2",
      correct: "opt2"
      },
      
      {
      question: "A box contains 4 green marbles, 3 blue marbles, and 2 yellow marbles. What is the probability of selecting a blue marble?",
      opt1: "1/4",
      opt2: "1/3",
      opt3: "3/9",
      opt4: "3/8",
      correct: "opt4"
      },
      
      {
      question: "A fair coin is flipped twice. What is the probability of getting two heads?",
      opt1: "1/2",
      opt2: "1/3",
      opt3: "1/4",
      opt4: "1/8",
      correct: "opt4"
      },
      
      {
      question: "In a standard deck of cards, what is the probability of drawing a spade or a club?",
      opt1: "1/13",
      opt2: "1/4",
      opt3: "1/2",
      opt4: "1/3",
      correct: "opt3"
      },
      
      {
      question: "A bag contains 6 red balls, 4 blue balls, and 5 green balls. What is the probability of selecting a red or a blue ball?",
      opt1: "1/2",
      opt2: "5/15",
      opt3: "10/15",
      opt4: "2/5",
      correct: "opt4"
      },
      
      {
      question: "A jar contains 8 black marbles and 6 white marbles. What is the probability of selecting a black marble?",
      opt1: "3/8",
      opt2: "2/7",
      opt3: "8/14",
      opt4: "4/7",
      correct: "opt4"
      },
      
      {
      question: "A fair die is rolled. What is the probability of rolling an odd number?",
      opt1: "1/6",
      opt2: "1/2",
      opt3: "1/3",
      opt4: "3/6",
      correct: "opt3"
      },
      
      {
      question: "A bag contains 3 red balls, 4 blue balls, and 5 green balls. What is the probability of selecting a blue ball given that a green ball has already been selected and removed from the bag?",
      opt1: "2/12",
      opt2: "4/12",
      opt3: "4/11",
      opt4: "3/11",
      correct: "opt3"
      }      
  ];

// Variables
let currentQuestion = 0;
let score = 0;
let timer;
let startTime;

// Quiz elements
const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");

// Start the quiz timer
function startTimer() {
  const timeLimit = 120;
  const timerDisplay = document.querySelector(".timer");

  let timeRemaining = timeLimit;

  timer = setInterval(() => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    if (timeRemaining <= 0) {
      clearInterval(timer);
      checkAnswer();
      redirectToResult();
    }
    timeRemaining--;
  }, 1000);

  const initialMinutes = Math.floor(timeRemaining / 60);
  const initialSeconds = timeRemaining % 60;
  timerDisplay.textContent = `${initialMinutes.toString().padStart(2, "0")}:${initialSeconds.toString().padStart(2, "0")}`;
}


// Load the current question
function loadQuestion() {
  const question = probabilityQuestions[currentQuestion];
  document.getElementById("questionno").textContent = `${currentQuestion + 1}/${probabilityQuestions.length}`;
  document.getElementById("questiontxt").textContent = question.question;
  document.getElementById("label1").textContent = question.opt1;
  document.getElementById("label2").textContent = question.opt2;
  document.getElementById("label3").textContent = question.opt3;
  document.getElementById("label4").textContent = question.opt4;
  document.querySelector(".next-btn").style.display = "none";
}

// Check the selected answer
function checkAnswer() {
  const selectedOption = document.querySelector("input[name='option']:checked");

  if (!selectedOption) {
    alert("Please select an option!");
    return;
  }

  if (selectedOption.value === probabilityQuestions[currentQuestion].correct) {
    score++;
  }

  selectedOption.checked = false;
  currentQuestion++;

  if (currentQuestion === probabilityQuestions.length) {
    clearInterval(timer);
    redirectToResult();
  } else {
    loadQuestion();
  }
}

// Redirect to the result page
function redirectToResult() {
  const totalTime = 120 - Math.floor((new Date().getTime() - startTime) / 1000); // Calculate total time in seconds
  const totalQuestions = probabilityQuestions.length;
  const attemptedQuestions = currentQuestion;
  const correctQuestions = score;
  const wrongQuestions = attemptedQuestions - correctQuestions;
  const percentage = (correctQuestions / totalQuestions) * 100;

  const params = new URLSearchParams();
  params.append("totalTime", totalTime);
  params.append("totalQuestions", totalQuestions);
  params.append("attemptedQuestions", attemptedQuestions);
  params.append("correctQuestions", correctQuestions);
  params.append("wrongQuestions", wrongQuestions);
  params.append("percentage", percentage);


  // Redirect to the result page with query parameters
  window.location.href = `result.html?totalTime=${totalTime}&totalQuestions=${totalQuestions}&attemptedQuestions=${attemptedQuestions}&correctQuestions=${correctQuestions}&wrongQuestions=${wrongQuestions}&percentage=${percentage}`;
}

// Load the first question and start the timer
loadQuestion();
startTimer();

// Attach event listeners
document.querySelector(".next-btn").addEventListener("click", checkAnswer);
document.querySelector(".options-que").addEventListener("click", () => {
  document.querySelector(".next-btn").style.display = "block";
});

document.querySelector(".next-btn").addEventListener("click", checkAnswer);