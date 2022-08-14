const CHOICES = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let choice = CHOICES[Math.floor(Math.random() * 3)];
    return choice;
}