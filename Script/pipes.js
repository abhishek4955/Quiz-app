// Array of pipe cistern questions
const pipeCisternQuestions = [
  {
    question: "A pipe can fill a cistern in 4 hours, while another pipe can fill the same cistern in 6 hours. If both pipes are opened simultaneously, how long will it take to fill the cistern?",
    opt1: "2 hours",
    opt2: "2.4 hours",
    opt3: "3 hours",
    opt4: "4 hours",
    correct: "opt4"
    },
    
    {
    question: "A pipe can fill a cistern in 5 hours, while another pipe can fill the same cistern in 3 hours. If both pipes are opened simultaneously, how long will it take to fill the cistern?",
    opt1: "1 hour",
    opt2: "1.5 hours",
    opt3: "2 hours",
    opt4: "2.5 hours",
    correct: "opt2"
    },
    
    {
    question: "A pipe can fill a cistern in 8 hours, while another pipe can empty the cistern in 12 hours. If both pipes are opened simultaneously, how long will it take to fill the cistern?",
    opt1: "5 hours",
    opt2: "6 hours",
    opt3: "7 hours",
    opt4: "8 hours",
    correct: "opt2"
    },
    
    {
    question: "A pipe can fill a cistern in 2 hours, while another pipe can empty the cistern in 3 hours. If both pipes are opened simultaneously, how long will it take to fill the cistern?",
    opt1: "1 hour",
    opt2: "2 hours",
    opt3: "3 hours",
    opt4: "4 hours",
    correct: "opt4"
    },
    
    {
    question: "A pipe can fill a cistern in 10 hours, while another pipe can fill the same cistern in 5 hours. If both pipes are opened simultaneously, how long will it take to fill the cistern?",
    opt1: "2 hours",
    opt2: "3 hours",
    opt3: "4 hours",
    opt4: "5 hours",
    correct: "opt2"
    },
    
    {
    question: "A pipe can fill a cistern in 6 hours, while another pipe can empty the cistern in 8 hours. If both pipes are opened simultaneously, how long will it take to fill the cistern?",
    opt1: "3 hours",
    opt2: "4 hours",
    opt3: "5 hours",
    opt4: "6 hours",
    correct: "opt3"
    },
    
    {
    question: "A pipe can fill a cistern in 12 hours, while another pipe can fill the same cistern in 8 hours. If both pipes are opened simultaneously, how long will it take to fill the cistern?",
    opt1: "4 hours",
    opt2: "5 hours",
    opt3: "6 hours",
    opt4: "7 hours",
    correct: "opt1"
    },
    
    {
    question: "A pipe can fill a cistern in 15 hours, while another pipe can fill the same cistern in 10 hours. If both pipes are opened simultaneously, how long will it take to fill the cistern?",
    opt1: "4 hours",
    opt2: "5 hours",
    opt3: "6 hours",
    opt4: "7 hours",
    correct: "opt2"
    },
    
    {
    question: "A pipe can fill a cistern in 7 hours, while another pipe can empty the cistern in 14 hours. If both pipes are opened simultaneously, how long will it take to fill the cistern?",
    opt1: "6 hours",
    opt2: "8 hours",
    opt3: "10 hours",
    opt4: "12 hours",
    correct: "opt4"
    },
    
    {
    question: "A pipe can fill a cistern in 9 hours, while another pipe can empty the cistern in 12 hours. If both pipes are opened simultaneously, how long will it take to fill the cistern?",
    opt1: "6 hours",
    opt2: "7 hours",
    opt3: "8 hours",
    opt4: "9 hours",
    correct: "opt3"
    }
  ];
  

  
// Variables to track current question and score
var currentQuestion = 0;
var score = 0;
var timer;

// Function to start the timer
function startTimer() {
  var timeLimit = 60; // 60 seconds timer
  var timerDisplay = document.getElementsByClassName("timer")[0];
  timerDisplay.textContent = timeLimit + "s";

  timer = setInterval(function() {
    timeLimit--;
    timerDisplay.textContent = timeLimit + "s";

    if (timeLimit <= 0) {
      clearInterval(timer);
      checkAnswer();
      redirectToResult();
    }
  }, 1000);
}

// Function to load the current question
function loadQuestion() {
  var question = pipeCisternQuestions[currentQuestion];
  document.getElementById("questionno").textContent = (currentQuestion + 1) + "/10";
  document.getElementById("questiontxt").textContent = question.question;
  document.getElementById("label1").textContent = question.opt1;
  document.getElementById("label2").textContent = question.opt2;
  document.getElementById("label3").textContent = question.opt3;
  document.getElementById("label4").textContent = question.opt4;
  document.getElementsByClassName("next-btn")[0].style.display = "none";
}

// Function to check the selected answer
function checkAnswer() {
  var selectedOption = document.querySelector("input[name='option']:checked");
  if (!selectedOption) {
    alert("Please select an option!");
    return;
  }

  if (selectedOption.value === pipeCisternQuestions[currentQuestion].correct) {
    score++;
  }

  selectedOption.checked = false;
  currentQuestion++;

  if (currentQuestion === pipeCisternQuestions.length) {
    clearInterval(timer);
    redirectToResult();
  } else {
    loadQuestion();
  }
}

// Function to redirect to the result page
function redirectToResult() {
  window.location.href = "../result.html";
}

// Load the first question and start the timer
loadQuestion();
startTimer();

// Event listener for the next button
document.getElementsByClassName("next-btn")[0].addEventListener("click", checkAnswer);

// Event listener for selecting an option
document.getElementsByClassName("options-que")[0].addEventListener("click", function() {
  document.getElementsByClassName("next-btn")[0].style.display = "block";
});