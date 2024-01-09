const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let selection = Math.floor(Math.random() * choices.length);
    return choices[selection];
}

function playRound(playerChoice, computerChoice) {

    playerChoice = playerChoice.toLowerCase();
    console.log(playerChoice);
    computerChoice = computerChoice.toLowerCase();
    console.log(computerChoice);

    if (playerChoice == computerChoice) {
        return "Tie!"
    }

    if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")
    ) {
        return `You win! ${playerChoice} beats ${computerChoice}`
    };
    
    if (
        (computerChoice == "rock" && playerChoice == "scissors") ||
        (computerChoice == "paper" && playerChoice == "rock") ||
        (computerChoice == "scissors" && playerChoice == "paper")
    ) {
        return `You lose! ${computerChoice} beats ${playerChoice}`
    };

}

const playerChoice = prompt("Make your choice: Rock, Paper, or Scissors.");
const computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));