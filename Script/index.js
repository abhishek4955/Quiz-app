var playerName = "";
var categories = [
  { name: "Pipes and Cisterns", id: "pipesCisterns", file: "../pipes.html" },
  { name: "Probability", id: "probability", file: "../prob.html" },
  { name: "Problem on Ages", id: "problemAges", file: "../ages.html" },
  { name: "Profit and Loss", id: "profitLoss", file: "../profitloss.html" }
];

// Function to create category buttons dynamically
function createCategoryButtons() {
  var categoryOptions = document.querySelector(".category .options");
  categoryOptions.innerHTML = ""; // Clear existing buttons

  categories.forEach(function(category) {
    var button = document.createElement("button");
    button.classList.add("button");
    button.textContent = category.name;
    button.addEventListener("click", function() {
      selectCategory(category.file);
    });
    categoryOptions.appendChild(button);
  });
}

// Function to start the quiz

function startQuiz() {
  playerName = document.getElementById("nameInput").value.trim();
  if (playerName.trim() === "") {
    alert("Please enter your name to continue the quiz.");
    return;
  }

  console.log("Player name:", playerName);
  createCategoryButtons(); // Call createCategoryButtons() here to display category buttons
}

// Function to handle category selection
function selectCategory(file) {
  // Construct the file path based on the current location and the selected category file
  var currentLocation = window.location.href;
  var newPath = currentLocation.substring(0, currentLocation.lastIndexOf("/")) + "/" + file;
  // Open the selected category file in a new tab/window
  window.open(newPath, "_self");
}

// Event listener for the "Enter" button
document.addEventListener("DOMContentLoaded", function() {
  var enterButton = document.querySelector(".form .enter-btn");
  enterButton.addEventListener("click", startQuiz);
});

