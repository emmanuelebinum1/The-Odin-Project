let humanScore = 0;
let computerScore = 0;
let numberOfRounds = 0;
const NUMBER_OF_ROUNDS = 3; // renamed for clarity — this isn't "number of guesses"

let humanChoice = null;

const rockButton = document.querySelector('.Rock-btn');
rockButton.addEventListener('click', choseRock);

const paperButton = document.querySelector('.Paper-btn');
paperButton.addEventListener('click', chosePaper);

const scissorsButton = document.querySelector('.Scissors-btn');
scissorsButton.addEventListener('click', choseScissors);

const playerOne = document.querySelector(".Player1");
const newParagraph = document.createElement("p");

function choseRock() {
    displayHumanChoice("Rock");
    humanChoice = 'Rock';
    playRound();
}
function chosePaper() {
    displayHumanChoice("Paper");
    humanChoice = 'Paper';
    playRound();
}
function choseScissors() {
    displayHumanChoice("Scissors");
    humanChoice = 'Scissors';
    playRound();
}

function displayHumanChoice(choice) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = `You chose ${choice}`;
    playerOne.appendChild(newParagraph);
}

function getHumanChoice() {
    return humanChoice;
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    const choiceNames = ["Rock", "Paper", "Scissors"];

    const newParagraph = document.createElement("p");
    newParagraph.textContent = `Computer chose ${choiceNames[computerChoice]}`;
    playerOne.appendChild(newParagraph);

    return computerChoice;
}

function compareResult(computerChoice, humanChoice) {
    if (computerChoice === 0 && humanChoice === "Paper") humanScore++;
    else if (computerChoice === 0 && humanChoice === "Scissors") computerScore++;
    else if (computerChoice === 1 && humanChoice === "Scissors") humanScore++;
    else if (computerChoice === 1 && humanChoice === "Rock") computerScore++;
    else if (computerChoice === 2 && humanChoice === "Rock") humanScore++;
    else if (computerChoice === 2 && humanChoice === "Paper") computerScore++;
    // any other combination (computerChoice === humanChoice type match) is a tie
}
const scoreboard = document.querySelector(".scoreboard");
function showResult() {
    scoreboard.textContent = `Human Score = ${humanScore} Computer Score = ${computerScore}`;
}

function playRound() {
    let myHumanChoice = getHumanChoice();
    let myComputerChoice = getComputerChoice();
    compareResult(myComputerChoice, myHumanChoice);
    showResult();
    numberOfRounds++;

    if (numberOfRounds > NUMBER_OF_ROUNDS) {
        winnerAnnouncement();
    }
}
const message = document.querySelector(".message");
function winnerAnnouncement() {
    if (humanScore > computerScore) {

        message.textContent = `You win!`;

    } else if (humanScore < computerScore) {

        message.textContent = `You Lose!`;

    } else {

        message.textContent = `Its a Tie`;

    }
    newParagraph.textContent = "";

}

// starting the game
const newGame = document.querySelector(".newGame-btn");
newGame.addEventListener("click", startGame);

function startGame() {
    humanScore = 0;
    computerScore = 0;
    numberOfRounds = 0;
    message.textContent = "";
    scoreboard.textContent = "";
    newParagraph.textContent = "";
    newGame.textContent = `New Game starts`;

}