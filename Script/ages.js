// Array of age problems questions

const ageProblemsQuestions = [
    {
      question: "The sum of the present ages of a father and his son is 36 years. Five years ago, the father's age was four times the age of the son. What are their present ages?",
      opt1: "Father: 30 years, Son: 6 years",
      opt2: "Father: 32 years, Son: 4 years",
      opt3: "Father: 28 years, Son: 8 years",
      opt4: "Father: 34 years, Son: 2 years",
      correct: "opt1"
      },
      
      {
      question: "The ratio of the ages of Ram and Shyam is 4:7. After 10 years, the ratio of their ages will be 3:5. What are their present ages?",
      opt1: "Ram: 16 years, Shyam: 28 years",
      opt2: "Ram: 12 years, Shyam: 21 years",
      opt3: "Ram: 20 years, Shyam: 35 years",
      opt4: "Ram: 8 years, Shyam: 14 years",
      correct: "opt2"
      },
      
      {
      question: "The ages of A and B are in the ratio 5:3. After 8 years, the sum of their ages will be 56. What are their present ages?",
      opt1: "A: 20 years, B: 12 years",
      opt2: "A: 25 years, B: 15 years",
      opt3: "A: 15 years, B: 9 years",
      opt4: "A: 30 years, B: 18 years",
      correct: "opt3"
      },
      
      {
      question: "The present age of a father is three times the age of his son. After 10 years, the father's age will be twice the age of his son. What are their present ages?",
      opt1: "Father: 36 years, Son: 12 years",
      opt2: "Father: 42 years, Son: 14 years",
      opt3: "Father: 30 years, Son: 10 years",
      opt4: "Father: 48 years, Son: 16 years",
      correct: "opt2"
      },
      
      {
      question: "The sum of the present ages of a mother and her daughter is 44 years. The ratio of their ages is 7:3. What are their present ages?",
      opt1: "Mother: 28 years, Daughter: 16 years",
      opt2: "Mother: 35 years, Daughter: 9 years",
      opt3: "Mother: 42 years, Daughter: 18 years",
      opt4: "Mother: 24 years, Daughter: 20 years",
      correct: "opt1"
      },
      
      {
      question: "The ages of three friends are in the ratio 2:3:4. The sum of their ages is 45 years. What are their present ages?",
      opt1: "10 years, 15 years, 20 years",
      opt2: "8 years, 12 years, 16 years",
      opt3: "6 years, 9 years, 12 years",
      opt4: "12 years, 18 years, 24 years",
      correct: "opt2"
      },
      
      {
      question: "The present age of a mother is four times the age of her daughter. After 10 years, the mother's age will be three times the age of her daughter. What are their present ages?",
      opt1: "Mother: 40 years, Daughter: 10 years",
      opt2: "Mother: 36 years, Daughter: 9 years",
      opt3: "Mother: 32 years, Daughter: 8 years",
      opt4: "Mother: 44 years, Daughter: 11 years",
      correct: "opt3"
      },
      
      {
      question: "The ages of two friends are in the ratio 3:5. The difference between their ages is 10 years. What are their present ages?",
      opt1: "15 years, 25 years",
      opt2: "18 years, 30 years",
      opt3: "12 years, 20 years",
      opt4: "21 years, 35 years",
      correct: "opt1"
      },
      
      {
      question: "The sum of the present ages of a father and his son is 50 years. Five years ago, the father's age was twice the age of the son. What are their present ages?",
      opt1: "Father: 35 years, Son: 15 years",
      opt2: "Father: 40 years, Son: 10 years",
      opt3: "Father: 45 years, Son: 5 years",
      opt4: "Father: 30 years, Son: 20 years",
      correct: "opt2"
      },
      
      {
      question: "The ages of A, B, and C are in the ratio 2:3:4. The sum of their ages is 54 years. What are their present ages?",
      opt1: "12 years, 18 years, 24 years",
      opt2: "8 years, 12 years, 16 years",
      opt3: "6 years, 9 years, 12 years",
      opt4: "10 years, 15 years, 20 years",
      correct: "opt1"
      }
  ];

  
// Variables
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

// load the current question
function loadQuestion() {
const question = ageProblemsQuestions[currentQuestion];
document.getElementById("questionno").textContent = `${currentQuestion + 1}/${ageProblemsQuestions.length}`;
document.getElementById("questiontxt").textContent = question.question;
document.getElementById("label1").textContent = question.opt1;
document.getElementById("label2").textContent = question.opt2;
document.getElementById("label3").textContent = question.opt3;
document.getElementById("label4").textContent = question.opt4;
document.querySelector(".next-btn").style.display = "none";
}


function checkAnswer() {
  var selectedOption = document.querySelector("input[name='option']:checked");
  if (!selectedOption) {
    alert("Please select an option!");
    return;
  }

  if (selectedOption.value === ageProblemsQuestions[currentQuestion].correct) {
    score++;
  }

  selectedOption.checked = false;
  currentQuestion++;

  if (currentQuestion === ageProblemsQuestions.length) {
    clearInterval(timer);
    redirectToResult();
  } else {
    loadQuestion();
  }
}

function redirectToResult() {

    const totalTime = 120 - Math.floor((new Date().getTime() - startTime) / 1000); // Calculate total time in seconds
    const totalQuestions = ageProblemsQuestions.length;
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