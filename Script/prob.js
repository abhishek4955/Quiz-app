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

  
  var currentQuestion = 0;
  var score = 0;
  var timer;
  
  function startTimer() {
    var timeLimit = 60; // 60 seconds timer
    var timerDisplay = document.getElementsByClassName("timer")[0];
    timerDisplay.textContent = timeLimit + "s";
  
    timer = setInterval(function () {
      timeLimit--;
      timerDisplay.textContent = timeLimit + "s";
  
      if (timeLimit <= 0) {
        clearInterval(timer);
        checkAnswer();
        redirectToResult();
      }
    }, 1000);
  }
  
  function loadQuestion() {
    var question = probabilityQuestions[currentQuestion];
    document.getElementById("questionno").textContent = (currentQuestion + 1) + "/10";
    document.getElementById("questiontxt").textContent = question.question;
    document.getElementById("label1").textContent = question.opt1;
    document.getElementById("label2").textContent = question.opt2;
    document.getElementById("label3").textContent = question.opt3;
    document.getElementById("label4").textContent = question.opt4;
    document.getElementsByClassName("next-btn")[0].style.display = "none";
  }
  
  function checkAnswer() {
    var selectedOption = document.querySelector("input[name='option']:checked");
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
  
  function redirectToResult() {

    window.location.href = "../result.html";
  }
  
  loadQuestion();
  startTimer();
  
  document.getElementsByClassName("next-btn")[0].addEventListener("click", checkAnswer);
  
  document.getElementsByClassName("options-que")[0].addEventListener("click", function () {
    document.getElementsByClassName("next-btn")[0].style.display = "block";
  });
  