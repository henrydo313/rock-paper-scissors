const WIN = 1;
const LOSE = -1;
const DRAW = 0;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    return ["Rock", "Paper", "Scissors"][randomChoice];
}

function playRound(computerChoice, playerSelection) {
    // Convert input standard format
    playerSelection = playerSelection.toLowerCase();
    let playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    // Draw outcome
    if (computerChoice === playerChoice) {
        console.log(`You Draw! ${computerChoice} draws ${computerChoice}.`);
        return DRAW;
    }

    // Winning outcome
    if (computerChoice === "Rock" && playerChoice === "Paper" ||
        computerChoice === "Paper" && playerChoice === "Scissors" ||
        computerChoice === "Scissors" && playerChoice === "Rock") {
        console.log(`You Win! ${playerChoice} beats ${computerChoice}.`);
        return WIN;
    }

    // Losing outcome
    console.log(`You Lose! ${computerChoice} beats ${playerChoice}.`);
    return LOSE;
}

// Check if input is a valid option
function validateChoice(choice) {
    return ["Rock", "Paper", "Scissors"].
        includes(choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase());
}

function game() {
    let round = 1;
    let playerChoice;
    let computerChoice;
    let playerScore = 0;
    let computerScore = 0;
    let roundOutcome;

    while (round < 6) {
        // Check input
        playerChoice = prompt("Rock, Paper or Scissors?");
        while (validateChoice(playerChoice) === false) {
            playerChoice = prompt("Invalid option. Rock, Paper or Scissors?");
        }
        computerChoice = getComputerChoice(); 

        roundOutcome = playRound(computerChoice, playerChoice);
        if (roundOutcome === DRAW) {
            console.log(`ROUND ${round}\nPlayer: ${playerScore}\tComputer: ${computerScore}.`);
            round++;
            continue;
        }

        if (roundOutcome === WIN) playerScore += 1;
        if (roundOutcome === LOSE) computerScore += 1;
        console.log(`ROUND ${round}\nPlayer: ${playerScore}\tComputer: ${computerScore}.`);
        round++;
    }

    // Draw outcome
    if (playerScore === computerScore) console.log(`It's a Draw! ${playerScore} - ${computerScore}.`);

    // Win or Lose outcome
    playerScore > computerScore ? console.log(`You Win! ${playerScore} - ${computerScore}.`) 
                                : console.log(`You Lose! ${playerScore} - ${computerScore}.`);

    return 1;
}

game();