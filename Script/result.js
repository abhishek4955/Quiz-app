// Get the result page elements
var playerNameElement = document.getElementById("name");
var timeTakenElement = document.getElementById("time_taken");
var totalQuestionElement = document.getElementById("total_question");
var attemptElement = document.getElementById("Attempt");
var correctElement = document.getElementById("Correct");
var wrongElement = document.getElementById("Wrong");
var percentageElement = document.getElementById("Percentage");
var startAgainButton = document.querySelector(".start_again");
var homeButton = document.querySelector(".home");

// Function to get URL parameter value by name
function getUrlParam(name) {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Function to calculate percentage
function calculatePercentage(correct, total) {
  return ((correct / total) * 100).toFixed(2);
}

// Function to initialize the result page
function initializeResultPage() {
  var playerName = getUrlParam("playerName");
  var timeTaken = getUrlParam("timeTaken");
  var totalQuestions = getUrlParam("totalQuestions");
  var attempt = getUrlParam("attempt");
  var correct = getUrlParam("correct");
  var wrong = getUrlParam("wrong");

  playerNameElement.textContent = playerName;
  timeTakenElement.textContent = timeTaken + " Seconds";
  totalQuestionElement.textContent = totalQuestions;
  attemptElement.textContent = attempt;
  correctElement.textContent = correct;
  wrongElement.textContent = wrong;
  percentageElement.textContent = calculatePercentage(correct, totalQuestions) + "%";
}

// Event listener for the "Start Again" button
startAgainButton.addEventListener("click", function() {
  window.location.href = "index.html"; // Change the URL as per your requirement
});

// Event listener for the "Go To Home" button
homeButton.addEventListener("click", function() {
  window.location.href = "home.html"; // Change the URL as per your requirement
});

// Initialize the result page
initializeResultPage();
