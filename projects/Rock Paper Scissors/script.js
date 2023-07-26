// Functions

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

  if (pS === cS)
    result = `You draw! Both used ${playerSelection}`;
  else if (
    (pS === "paper" && cS === "rock")
    || (pS === "rock" && cS === "scissors")
    || (pS === "scissors" && cS === "paper"))
    result = `You Win! ${playerSelection} beats ${computerSelection}`
  else
    result = `You Lose! ${computerSelection} beats ${playerSelection}`

  return result;
}

function game() {
  for (let i = 0; i < 5; i++) {
    let user = "";
    while (user === "") {
      let answer = prompt("What do you want to play? (Rock, Paper, Scissors)");

      if (["rock", "paper", "scissors"].includes(answer.toLowerCase()))
        user = answer;
    }
    let computer = getComputerChoice();

    console.log(playRound(user, computer));
  }
}

game();
