// Functions
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  let selection = "Rock";

  if (number === 1)
    selection = "Paper";
  else if (number === 2)
    selection = "Scissors";

  return selection;
}

function playRound(playerSelection, computerSelection) {
  let pS = playerSelection.toLowerCase();
  let cS = computerSelection.toLowerCase();
  let result = "";

  if (pS === cS) {
    result = `You draw! You both used ${playerSelection}`;
    winner = null;
  }
  else if (
    (pS === "paper" && cS === "rock")
    || (pS === "rock" && cS === "scissors")
    || (pS === "scissors" && cS === "paper")) {
    result = `You Win! ${capitalize(playerSelection)} beats ${computerSelection}`
    winner = 'player';
  }
  else {
    result = `You Lose! ${computerSelection} beats ${capitalize(playerSelection)}`
    winner = 'computer';
  }

  return [result, winner];
}

function game(user) {
  if (finished) return; // Do nothing, the game has already finished

  // Play round
  let [result, winner] = playRound(user, getComputerChoice());

  // Update the scores
  if (winner !== null) scores[winner] += 1;
  updateScores();

  // Check if the game has finished
  if (scores['player'] >= MAX_SCORE || scores['computer'] >= MAX_SCORE) {
    finished = true;

    // Disable option buttons
    buttons.forEach(button => {
      button.setAttribute('disabled', '');
      button.classList.add('disabledButton');
    });

    // Check who has won
    let text = '';
    if (scores['player'] === MAX_SCORE)
      text = 'You have won! Congratulations';
    else
      text = 'You have lost!';

    writeResult(text);
  }
  else {
    writeResult(result);
  }
}

function writeResult(text) {
  result.innerText = text;
}

// Using this for the sake of getting familiar with it 
const updateScores = () => {
  playerScore.innerText = scores['player'];
  computerScore.innerText = scores['computer'];
};


// Constant
const MAX_SCORE = 5;

// DOM Nodes
const buttons = document.querySelectorAll('.main > button');
const playerScore = document.querySelector('#player');
const computerScore = document.querySelector('#computer');
const result = document.querySelector('#result');
const reset = document.querySelector('#reset');

// Variables
let finished = false;
let scores = {'player': 0, 'computer': 0};

// Event listener for each button
buttons.forEach(button => button.addEventListener('click', e => game(e.target.id)));

reset.addEventListener('click', () => {
  finished = false;

  scores['player'] = 0;
  scores['computer'] = 0;
  updateScores();

  // Reenable option buttons
  buttons.forEach(button => {
    button.removeAttribute('disabled');
    // button.classList.remove('disabledButton');
    button.removeAttribute('class');
  });
});

// Set scores initially
updateScores();
