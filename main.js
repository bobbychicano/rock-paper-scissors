let playerScore = 0;
let computerScore = 0;
let score = document.querySelector('.score h2');

let playerSelection = "";
let computerSelection = computerPlay();

const boulder = document.querySelector('.rock');
const tarp = document.querySelector('.paper');
const machete = document.querySelector('.scissors');


boulder.addEventListener('click', () => {
  document.querySelector('.person h2').textContent = 'Player Choice: Boulder';

  let playerSelection = "rock";
  let computerSelection = computerPlay();
  game();
  console.log(playerSelection, computerSelection);
});



tarp.addEventListener('click', () => {
  document.querySelector('.person h2').textContent = 'Player Choice: Tarp';

  let playerSelection = "paper";
  let computerSelection = computerPlay();
  game();
  console.log(playerSelection, computerSelection);
});



machete.addEventListener('click', () => {
  document.querySelector('.person h2').textContent = 'Player Choice: Machete';

  let playerSelection = "scissors";
  let computerSelection = computerPlay();
  game();
  console.log(playerSelection, computerSelection);
});


function computerPlay() {

    let choice = Math.random();

    if (choice < 0.33) {
      return "rock"
    }
    else if (choice < 0.66) {
      return "paper"
    }
    else if (choice < 0.99) {
      return "scissors"
    }
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
    return "Tie! Next Round!"
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return "You lose."
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return "You lose."
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return "You lose."
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return "You win!"
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return "You win!"
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return "You win!"
  }
}

function game() {

  playRound(playerSelection, computerSelection);

  let result = playRound(playerSelection, computerSelection);

  let score = "Player Score: " + playerScore + " CPU Score: " + computerScore;

}
