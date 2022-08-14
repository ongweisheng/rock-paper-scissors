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

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your selection");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("Win")) {
            score = score + 1;
        } else if (result.includes("Lose")) {
            score = score - 1;
        }
    }
    // Keep track of winner without exact score
    if (score > 0) {
        return alert("You win");
    } else if (score < 0) {
        return alert("You lose");
    } else {
        return alert("You Drew");
    }
}

game();