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


// Function to load the current question

function loadQuestion() {
  const question = pipeCisternQuestions[currentQuestion];
  document.getElementById("questionno").textContent = `${currentQuestion + 1}/${pipeCisternQuestions.length}`;
  document.getElementById("questiontxt").textContent = question.question;
  document.getElementById("label1").textContent = question.opt1;
  document.getElementById("label2").textContent = question.opt2;
  document.getElementById("label3").textContent = question.opt3;
  document.getElementById("label4").textContent = question.opt4;
  document.querySelector(".next-btn").style.display = "none";
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

function redirectToResult() {

    const totalTime = 120 - Math.floor((new Date().getTime() - startTime) / 1000); // Calculate total time in seconds
    const totalQuestions = pipeCisternQuestions.length;
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
  
    window.location.href = `result.html?totalTime=${totalTime}&totalQuestions=${totalQuestions}&attemptedQuestions=${attemptedQuestions}&correctQuestions=${correctQuestions}&wrongQuestions=${wrongQuestions}&percentage=${percentage}`;
  
}

loadQuestion();
startTimer();

// Attach event listeners
document.querySelector(".next-btn").addEventListener("click", checkAnswer);
document.querySelector(".options-que").addEventListener("click", () => {
document.querySelector(".next-btn").style.display = "block";
});

document.querySelector(".next-btn").addEventListener("click", checkAnswer);