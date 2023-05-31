function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    return ["Rock", "Paper", "Scissors"][randomChoice];
}

function playRound(computerChoice, playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let playerChoice = playerSelection.charAt(0) + playerSelection.slice(1);

    if (computerChoice === playerChoice) {
        return `You Draw! ${computerChoice} draws ${computerChoice}`;
    }

    if (computerChoice === "Rock" && playerChoice === "Paper" ||
        computerChoice === "Paper" && playerChoice === "Scissors" ||
        computerChoice === "Scissors" && playerChoice === "Rock") {
        return `You Win! ${playerChoice} beats ${computerChoice}`;
    }

    return `You Lose! ${computerChoice} beats ${playerChoice}`;
}