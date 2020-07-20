let boulder = document.querySelector('.rock');

boulder.addEventListener('click', () => {
  document.querySelector('.person').textContent = 'Player Choice: Boulder';
});

let tarp = document.querySelector('.paper');

tarp.addEventListener('click', () => {
  document.querySelector('.person').textContent = 'Player Choice: Tarp';
});

let machete = document.querySelector('.scissors');

machete.addEventListener('click', () => {
  document.querySelector('.person').textContent = 'Player Choice: Machete';
});


let playerScore = 0;
let computerScore = 0;

function computerPlay() {

    let choice = Math.random();

    if (choice < 0.33) {
      return "rock"
    }
    else if (0.34 < choice < 0.66) {
      return "paper"
    }
    else {
      return "scissors"
    }
}

function playerChoice() {

  let response = prompt("Do you choose rock, paper, or scissors?");

  response = response.toLowerCase();

  if (response == "rock" || response == "paper" || response == "scissors") {
    return response
  } else {
    alert("Not a valid choice");
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

  playerChoice();
  computerPlay();

  let playerSelection = playerChoice();
  let computerSelection = computerPlay();

  console.log(playerSelection);
  console.log(computerSelection);

  let result = playRound(playerSelection, computerSelection);
  console.log(result);

  let score = "Player Score: " + playerScore + " CPU Score: " + computerScore;
  console.log(score);
}
