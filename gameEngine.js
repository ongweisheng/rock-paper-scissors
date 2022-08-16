const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choice = CHOICES[Math.floor(Math.random() * 3)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "rock") {
            return "Draw! Rock draws with Rock";
        } else if (computerSelection.toLowerCase() == "paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection.toLowerCase() == "scissors") {
            return "You Win! Rock beats Scissors"
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "rock") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection.toLowerCase() == "paper") {
            return "Draw! Paper draws with Paper";
        } else if (computerSelection.toLowerCase() == "scissors") {
            return "You Lose! Scissors beats Paper"
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection.toLowerCase() == "rock") {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection.toLowerCase() == "paper") {
            return "You Win! Scissors beats Paper";
        } else if (computerSelection.toLowerCase() == "scissors") {
            return "Draw! Scissors draws with Scissors"
        }
    }
}

const resultContainer = document.querySelector(".resultContainer");
const playerScoreSpan = document.querySelector(".playerScoreSpan");
const computerScoreSpan = document.querySelector(".computerScoreSpan")
let playerScore = 0;
let computerScore = 0;
const winner = document.querySelector(".winner");

const buttonRock = document.querySelector(".buttonRock");
buttonRock.addEventListener("click", function(e) {
    const result = document.createElement("p");
    let resultString = playRound("rock", getComputerChoice());
    result.textContent = resultString;
    resultContainer.appendChild(result);
    if (resultString.includes("Win")) {
        playerScore = playerScore + 1;
    } else if (resultString.includes("Lose")) {
        computerScore = computerScore + 1;
    }
    playerScoreSpan.textContent = `Player Score: ${playerScore}`;
    computerScoreSpan.textContent = `Computer Score: ${computerScore}`;
    if (playerScore == 5) {
        winner.textContent = "Player has won"
    } else if (computerScore == 5) {
        winner.textContent = "Computer has won"
    }
});

const buttonPaper = document.querySelector(".buttonPaper");
buttonPaper.addEventListener("click", function(e) {
    const result = document.createElement("p");
    let resultString = playRound("paper", getComputerChoice());
    result.textContent = resultString;
    resultContainer.appendChild(result);
    if (resultString.includes("Win")) {
        playerScore = playerScore + 1;
    } else if (resultString.includes("Lose")) {
        computerScore = computerScore + 1;
    }
    playerScoreSpan.textContent = `Player Score: ${playerScore}`;
    computerScoreSpan.textContent = `Computer Score: ${computerScore}`;
    if (playerScore == 5) {
        winner.textContent = "Player has won"
    } else if (computerScore == 5) {
        winner.textContent = "Computer has won"
    }
});

const buttonScissors = document.querySelector(".buttonScissors");
buttonScissors.addEventListener("click", function(e) {
    const result = document.createElement("p");
    let resultString = playRound("scissors", getComputerChoice());
    result.textContent = resultString;
    resultContainer.appendChild(result);
    if (resultString.includes("Win")) {
        playerScore = playerScore + 1;
    } else if (resultString.includes("Lose")) {
        computerScore = computerScore + 1;
    }
    playerScoreSpan.textContent = `Player Score: ${playerScore}`;
    computerScoreSpan.textContent = `Computer Score: ${computerScore}`;
    if (playerScore == 5) {
        winner.textContent = "Player has won"
    } else if (computerScore == 5) {
        winner.textContent = "Computer has won"
    }
});

if (playerScore == 5) {
    console.log("Player has won");
} else if (computerScore == 5) {
    console.log("Computer has won");
}