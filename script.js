const choices = document.querySelectorAll('.choice');
const resultMessage = document.getElementById('result-message');
const scoreBoard = document.getElementById('score');

let playerScore = 0;
let computerScore = 0;

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.getAttribute('data-choice');
        const computerChoice = getComputerChoice();
        const winner = determineWinner(playerChoice, computerChoice);
        updateScore(winner);
        displayResult(winner, playerChoice, computerChoice);
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
    scoreBoard.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function displayResult(winner, playerChoice, computerChoice) {
    if (winner === 'draw') {
        resultMessage.textContent = `It's a draw! You both chose ${playerChoice}.`;
    } else if (winner === 'player') {
        resultMessage.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        resultMessage.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
}
