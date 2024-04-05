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

function playGame() {
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        let myChoice = prompt("Make a choice: Rock, Paper, or Scissors.", "rock");
        let compChoice = getComputerChoice();
        let result = playRound(myChoice, compChoice);
        console.log(result);
        if (result.slice(0, 7) == "You win") {
            playerScore += 1;
        } else if (result.slice(0, 8) == "You lose") {
            compScore += 1;
        } else {
            continue;
        }
    }

    return `Player score: ${playerScore}, Computer score: ${compScore}`
}

console.log(playGame());

// const playerChoice = prompt("Make a choice: Rock, Paper, or Scissors.", "rock");
// const computerChoice = getComputerChoice();

// console.log(playRound(playerChoice, computerChoice));