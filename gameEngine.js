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

const buttonRock = document.querySelector(".buttonRock");
buttonRock.addEventListener("click", function(e) {
    playRound("rock", getComputerChoice())
});

const buttonPaper = document.querySelector(".buttonPaper");
buttonPaper.addEventListener("click", function(e) {
    playRound("paper", getComputerChoice())
});

const buttonScissors = document.querySelector(".buttonScissors");
buttonScissors.addEventListener("click", function(e) {
    playRound("scissors", getComputerChoice())
});