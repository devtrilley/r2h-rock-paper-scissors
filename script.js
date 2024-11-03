/* ALGORITHM/PSEUDOCODE:
  - We click a button option (RPS)
  - The game begins, randomly choosing a computer move using Math.random
  - We compare the computer move to the users move using if statements
  - Depending on the comparison, different results will be listed in text.
*/

// Selecting HTML elements
// Inputs
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const throwBtn = document.querySelector(".throw-btn");
const resetBtn = document.querySelector(".reset-btn");
const throwInput = document.querySelector(".throw-input");

// Result line, Score line
const resultMesseage = document.querySelector(".result-message");
const scoreMesseage = document.querySelector(".score-message");

// Assigned matching string when user clicks button for comparison
let userMove;

// Score Object that we update
const score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

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

// Function to update game score dynamically on page
function updateScore() {
  scoreMesseage.innerHTML = `Score: Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// Function to update resultMessage
function updateResult(userMove, computerMove, result) {
  resultMesseage.innerHTML = `You picked ${userMove}.
  Computer picked ${computerMove}.
  ${result}`;
}

// EVENT LISTNERS

// When we click the Rock Button, we run this code
rockBtn.addEventListener("click", () => {
  userMove = "Rock";
  let computerMove = generateComputerMove();
  let result; // Where we'll store string for resultMessage

  if (computerMove === "Scissors") {
    result = "You Win.";
    score.wins++;
  } else if (computerMove === "Paper") {
    result = "You Lose.";
    score.losses++;
  } else if (computerMove === "Rock") {
    result = "It's a Tie.";
    score.ties++;
  } else {
    result = "Sorry, something went wrong. :(";
  }

  updateResult(userMove, computerMove, result);
  updateScore();
});

// When we click the Paper Button, we run this code
paperBtn.addEventListener("click", () => {
  userMove = "Paper";
  let computerMove = generateComputerMove();
  let result;

  if (computerMove === "Rock") {
    result = "You Win!";
    score.wins++;
  } else if (computerMove === "Scissors") {
    result = "You Lose.";
    score.losses++;
  } else if (computerMove === "Paper") {
    result = "It's a Tie.";
    score.ties++;
  } else {
    result = "Sorry, something went wrong. :(";
  }

  updateResult(userMove, computerMove, result);
  updateScore();
});

// When we click the Scissors Button, we run this code
scissorsBtn.addEventListener("click", () => {
  userMove = "Scissors";
  let computerMove = generateComputerMove();
  let result;

  if (computerMove === "Paper") {
    result = "You Win.";
    score.wins++;
  } else if (computerMove === "Rock") {
    result = "You Lose.";
    score.losses++;
  } else if (computerMove === "Scissors") {
    result = "It's a Tie.";
    score.ties++;
  } else {
    result = "Sorry, something went wrong. :(";
  }

  updateResult(userMove, computerMove, result);
  updateScore();
});

// When we click the Throw Button, we run this code
throwBtn.addEventListener("click", () => {
  if (throwInput.value.toLowerCase() === "rock") {
    userMove = "Rock";
  } else if (throwInput.value.toLowerCase() === "paper") {
    userMove = "Paper";
  } else if (throwInput.value.toLowerCase() === "scissors") {
    userMove = "Scissors";
  } else {
    userMove = null;
    alert("Please enter only Rock, Paper, or Scissors!");
    return;
  }

  let computerMove = generateComputerMove();
  let result;

  if (userMove === "Scissors") {
    if (computerMove === "Paper") {
      result = "You Win.";
      score.wins++;
    } else if (computerMove === "Rock") {
      result = "You Lose.";
      score.losses++;
    } else if (computerMove === "Scissors") {
      result = "It's a Tie.";
      score.ties++;
    } else {
      result = "Sorry, something went wrong. :(";
    }
  } else if (userMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You Win.";
      score.wins++;
    } else if (computerMove === "Scissors") {
      result = "You Lose.";
      score.losses++;
    } else if (computerMove === "Paper") {
      result = "It's a Tie.";
      score.ties++;
    } else {
      result = "Sorry, something went wrong. :(";
    }
  } else if (userMove === "Rock") {
    if (computerMove === "Scissors") {
      result = "You Win.";
      score.wins++;
    } else if (computerMove === "Paper") {
      result = "You Lose.";
      score.losses++;
    } else if (computerMove === "Rock") {
      result = "It's a Tie.";
      score.ties++;
    } else {
      result = "Sorry, something went wrong. :(";
    }
  }

  updateResult(userMove, computerMove, result);
  updateScore();
});

// When we hit 'Enter", we run this code
throwInput.addEventListener("keyup", (event) => {
  // If the Enter Key is released, run the same code as the throwBtn onclick
  if (event.key === "Enter") {
    if (throwInput.value.toLowerCase() === "rock") {
      userMove = "Rock";
    } else if (throwInput.value.toLowerCase() === "paper") {
      userMove = "Paper";
    } else if (throwInput.value.toLowerCase() === "scissors") {
      userMove = "Scissors";
    } else {
      userMove = null;
      alert("Please enter only Rock, Paper, or Scissors!");
      return;
    }

    let computerMove = generateComputerMove();
    let result;

    if (userMove === "Scissors") {
      if (computerMove === "Paper") {
        result = "You Win.";
        score.wins++;
      } else if (computerMove === "Rock") {
        result = "You Lose.";
        score.losses++;
      } else if (computerMove === "Scissors") {
        result = "It's a Tie.";
        score.ties++;
      } else {
        result = "Sorry, something went wrong. :(";
      }
    } else if (userMove === "Paper") {
      if (computerMove === "Rock") {
        result = "You Win.";
        score.wins++;
      } else if (computerMove === "Scissors") {
        result = "You Lose.";
        score.losses++;
      } else if (computerMove === "Paper") {
        result = "It's a Tie.";
        score.ties++;
      } else {
        result = "Sorry, something went wrong. :(";
      }
    } else if (userMove === "Rock") {
      if (computerMove === "Scissors") {
        result = "You Win.";
        score.wins++;
      } else if (computerMove === "Paper") {
        result = "You Lose.";
        score.losses++;
      } else if (computerMove === "Rock") {
        result = "It's a Tie.";
        score.ties++;
      } else {
        result = "Sorry, something went wrong. :(";
      }
    }

    updateResult(userMove, computerMove, result);
    updateScore();
  }
});

// When we click the Reset Button, we run this code
resetBtn.addEventListener("click", () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  resultMesseage.innerHTML =
    "Game resetted. Click any option to begin playing...";
  updateScore();
});
