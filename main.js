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
const choice = document.querySelector('.choice');

// Button event listeners and corresponding game functions

boulder.addEventListener('click', () => {
  playerChoice.textContent = 'Player Choice: Boulder';

  playerSelection = "Boulder";
  computerSelection = computerPlay();

  computerChoice.textContent = `Computer Choice: ${computerSelection}`;

  playerImage.src = './images/Boulder.png';
  computerImage.src = `./images/${computerSelection}.png`;

  game();
  score();

});


tarp.addEventListener('click', () => {
  playerChoice.textContent = 'Player Choice: Tarp';

  playerSelection = "Tarp";
  computerSelection = computerPlay();

  computerChoice.textContent = `Computer Choice: ${computerSelection}`;

  playerImage.src = './images/Tarp.png';
  computerImage.src = `./images/${computerSelection}.png`;

  game();
  score();

  if (playerScore == 5 || computerScore == 5) {
    tarp.addEventListener('click', reset());
  }

});


machete.addEventListener('click', () => {
  playerChoice.textContent = 'Player Choice: Machete';

  playerSelection = "Machete";
  computerSelection = computerPlay();

  computerChoice.textContent = `Computer Choice: ${computerSelection}`;

  playerImage.src = './images/Machete.png';
  computerImage.src = `./images/${computerSelection}.png`;

  game();
  score();

  if (playerScore == 5 || computerScore == 5) {
    machete.addEventListener('click', reset());
  }

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

  if (playerScore == 5) {
    winner.textContent = 'You win! You beat the computer!';
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    winner.textContent = 'You lose. The computer won :(';
    playerScore = 0;
    computerScore = 0;
  }
}

// Function to reset the game
/*
function reset() {

    playerChoice.textContent = 'Player Choice: ';
    computerChoice.textContent = 'Computer Choice: ';
    winner.textContent = '...';

    playerImage.src = '/images/Boulder.png'
    computerImage.src = '/images/Boulder.png';
};
*/
