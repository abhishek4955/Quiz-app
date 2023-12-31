
const profitLossQuestions = [
    {
      question: "A shopkeeper bought an item for $50 and sold it for $70. What is the profit percentage?",
      opt1: "20%",
      opt2: "30%",
      opt3: "40%",
      opt4: "50%",
      correct: "opt2"
      },
      
      {
      question: "A person sold an item for $400, incurring a loss of 20%. What was the cost price of the item?",
      opt1: "$480",
      opt2: "$400",
      opt3: "$500",
      opt4: "$320",
      correct: "opt1"
      },
      
      {
      question: "A shopkeeper offers a discount of 25% on the marked price of an item. If the marked price is $200, what is the selling price after the discount?",
      opt1: "$150",
      opt2: "$175",
      opt3: "$180",
      opt4: "$225",
      correct: "opt3"
      },
      
      {
      question: "A person bought an item for $80 and sold it for $100. What is the profit percentage?",
      opt1: "20%",
      opt2: "25%",
      opt3: "30%",
      opt4: "40%",
      correct: "opt3"
      },
      
      {
      question: "A shopkeeper sells an item for $900, making a profit of 20%. What was the cost price of the item?",
      opt1: "$750",
      opt2: "$800",
      opt3: "$850",
      opt4: "$1,000",
      correct: "opt2"
      },
      
      {
      question: "A person sold an item for $120, incurring a loss of 25%. What was the cost price of the item?",
      opt1: "$100",
      opt2: "$110",
      opt3: "$125",
      opt4: "$160",
      correct: "opt4"
      },
      
      {
      question: "A shopkeeper offers a discount of 15% on the marked price of an item. If the selling price after the discount is $255, what was the marked price?",
      opt1: "$300",
      opt2: "$275",
      opt3: "$340",
      opt4: "$300",
      correct: "opt4"
      },
      
      {
      question: "A person bought an item for $200 and sold it for $180. What is the loss percentage?",
      opt1: "10%",
      opt2: "8%",
      opt3: "9%",
      opt4: "12%",
      correct: "opt1"
      },
      
      {
      question: "A shopkeeper sells an item for $750, making a profit of 25%. What was the cost price of the item?",
      opt1: "$500",
      opt2: "$600",
      opt3: "$650",
      opt4: "$700",
      correct: "opt3"
      },
      
      {
      question: "A person sold an item for $80, incurring a loss of 20%. What was the cost price of the item?",
      opt1: "$96",
      opt2: "$90",
      opt3: "$100",
      opt4: "$75",
      correct: "opt1"
      }
    ];


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
  const question = profitLossQuestions[currentQuestion];
  document.getElementById("questionno").textContent = `${currentQuestion + 1}/${profitLossQuestions.length}`;
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
    
      if (selectedOption.value === profitLossQuestions[currentQuestion].correct) {
        score++;
      }
    
      selectedOption.checked = false;
      currentQuestion++;
    
      if (currentQuestion === profitLossQuestions.length) {
        clearInterval(timer);
        redirectToResult();
      } else {
        loadQuestion();
      }
    }
    
    function redirectToResult() {

        const totalTime = 120 - Math.floor((new Date().getTime() - startTime) / 1000); // Calculate total time in seconds
        const totalQuestions = profitLossQuestions.length;
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