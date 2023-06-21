const WIN = 1;
const LOSE = -1;
const DRAW = 0;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    return ["Rock", "Paper", "Scissors"][randomChoice];
}

function playRound(computerChoice, playerSelection) {
    // Convert input into a standard format
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
    let playerScore = 0;
    let computerScore = 0;

    const resetGame = function() {
        playerScore = 0;
        computerScore = 0;

        playerScoreDisplay.innerText = `Player Score: ${playerScore}`;
        computerScoreDisplay.innerText = `Computer Score: ${computerScore}`;
    }

    const playerScoreDisplay = document.querySelector(".playerScore");
    const computerScoreDisplay = document.querySelector(".pcScore");
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let score = playRound(getComputerChoice(), button.innerText);
            if (score === WIN) playerScore += 1;
            if (score === LOSE) computerScore += 1;

            playerScoreDisplay.innerText = `Player Score: ${playerScore}`;
            computerScoreDisplay.innerText = `Computer Score: ${computerScore}`;

            if (playerScore === 5) {
                alert("YOU WIN!");
                resetGame();
            }
            if (computerScore === 5) {
                alert("YOU LOSE!")
                resetGame();
            }
        });
    });

    const resetButton = document.querySelector(".reset");
    resetButton.addEventListener('click', resetGame);
}

game();