// Declare all global variables

let playerScore = 0;
let computerScore = 0;

let playerSelection = "";
let computerSelection = computerPlay();

const boulder = document.querySelector('.rock');
const tarp = document.querySelector('.paper');
const machete = document.querySelector('.scissors');
const tally = document.querySelector('.score h2');
const playerImage = document.querySelector('.player-choice');
const computerImage = document.querySelector('.computer-choice');
const playerChoice = document.querySelector('.person h2');
const computerChoice = document.querySelector('.computer h2');
const winner = document.querySelector('.winner h2');

// Button event listeners and corresponding game functions

boulder.addEventListener('click', () => {
  playerChoice.textContent = 'Player Choice: Boulder';

  playerSelection = "Boulder";
  computerSelection = computerPlay();

  computerChoice.textContent = `Computer Choice: ${computerSelection}`;

  // update the vs. images

  playerImage.src = '/images/Boulder.png';
  computerImage.src = `./images/${computerSelection}.png`;

  // Run the game function

  game();
  score();

  if (playerScore == 6 || computerScore == 6) {
    reset();
  }

});



tarp.addEventListener('click', () => {
  document.querySelector('.person h2').textContent = 'Player Choice: Tarp';

  playerSelection = "Tarp";
  computerSelection = computerPlay();
  game();

});



machete.addEventListener('click', () => {
  document.querySelector('.person h2').textContent = 'Player Choice: Machete';

  playerSelection = "Machete";
  computerSelection = computerPlay();
  game();

});

// Random Computer choice function

function computerPlay() {

    let choice = Math.random();

    if (choice < 0.33) {
      return "Boulder"
    }
    else if (choice < 0.66) {
      return "Tarp"
    }
    else if (choice < 0.99) {
      return "Machete"
    }
}

// Function to compare choices and decide winner

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
      winner.textContent = 'It is a tie. Play the next round.';
      return;
  } else if (playerSelection == "Boulder" && computerSelection == "Tarp") {
    computerScore++;
    winner.textContent = "You lose. Tarp envelops Boulder.";
    return;
  } else if (playerSelection == "Tarp" && computerSelection == "Machete") {
    computerScore++;
    winner.textContent = "You lose. Machete slices Tarp.";
    return;
  } else if (playerSelection == "Machete" && computerSelection == "Boulder") {
    computerScore++;
    winner.textContent = "You lose. Boulder crushes Machete.";
    return;
  } else if (playerSelection == "Boulder" && computerSelection == "Machete") {
    playerScore++;
    winner.textContent = "You win! Boulder crushes Machete.";
    return;
  } else if (playerSelection == "Tarp" && computerSelection == "Boulder") {
    playerScore++;
    winner.textContent = "You win! Tarp envelops Boulder.";
    return;
  } else if (playerSelection == "Machete" && computerSelection == "Tarp") {
    playerScore++;
    winner.textContent = "You win. Machete slices Tarp.";
    return;
  }
}

// Function to run the game

function game() {
  playRound(playerSelection, computerSelection);
}

// Global function to compare and keep track of Score

function score() {
  tally.textContent = "Score: Player - " + playerScore + " CPU - " + computerScore;
}

function reset() {
  playerScore = 0;
  computerScore = 0;

  score();

  playerChoice.textContent = 'Player Choice: ';
  computerChoice.textContent = 'Computer Choice: ';
  winner.textContent = '...';

  computerImage.src = `./images/Boulder.png`;
}
