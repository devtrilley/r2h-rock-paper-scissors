/* ALGORITHM:
  - We click a button option (RPS)
  - The game begins, randomly choosing a computer move using Math.random
  - We compare the computer move to the users move using if statements
  - Depending on the comparison, different results will be listed in text.
*/

// Selecting HTML elements
// Buttons
let rockBtn = document.querySelector(".rock-btn");
let paperBtn = document.querySelector(".paper-btn");
let scissorsBtn = document.querySelector(".scissors-btn");

// Result line
let resultMesseage = document.querySelector(".result-message");

// Assigned matching string when user clicks button for comparison
let userMove;

// Computer Generated Move Function
// Use (Math.random * 3 + 1) to get a random number 1-3 everytime we click a button. 1-3 will be rock, paper, and scissors respectively.
function generateComputerMove() {
  let computerMove = Math.floor(Math.random() * 3) + 1;

  if (computerMove === 1) {
    computerMove = "Rock";
  } else if (computerMove === 2) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissors";
  }

  return computerMove;
}

// EVENT LISTNERS

// When we click the Rock Button, we run this code
rockBtn.addEventListener("click", () => {
  userMove = "Rock";
  let computerMove = generateComputerMove();
  let result; // Where we'll store string for resultMessage

  if (computerMove === "Scissors") {
    result = "You Win.";
  } else if (computerMove === "Paper") {
    result = "You Lose.";
  } else if (computerMove === "Rock") {
    result = "It's a Tie.";
  } else {
    result = "Sorry, something went wrong. :(";
  }

  resultMesseage.innerHTML = `You picked ${userMove}. Computer picked ${computerMove}. ${result}`;
});

// When we click the Rock Button, we run this code
paperBtn.addEventListener("click", () => {
  userMove = "Paper";
  let computerMove = generateComputerMove();
  let result;

  if (computerMove === "Rock") {
    result = "You Win!";
  } else if (computerMove === "Scissors") {
    result = "You Lose.";
  } else if (computerMove === "Paper") {
    result = "It's a Tie.";
  } else {
    result = "Sorry, something went wrong. :(";
  }

  resultMesseage.innerHTML = `You picked ${userMove}. Computer picked ${computerMove}. ${result}`;
});

// When we click the Rock Button, we run this code
scissorsBtn.addEventListener("click", () => {
  userMove = "Scissors";
  let computerMove = generateComputerMove();
  let result;

  if (computerMove === "Paper") {
    result = "You Win.";
  } else if (computerMove === "Rock") {
    result = "You Lose.";
  } else if (computerMove === "Scissors") {
    result = "It's a Tie.";
  } else {
    result = "Sorry, something went wrong. :(";
  }

  resultMesseage.innerHTML = `You picked ${userMove}. Computer picked ${computerMove}. ${result}`;
});
