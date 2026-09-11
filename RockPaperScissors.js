let humanScore = 0;
let computerScore = 0;
let numberOfRounds = 0;
const NUMBER_OF_GUESS = 3;




function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors?");
    console.log(humanChoice);
    return humanChoice;

}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * NUMBER_OF_GUESS);
    if (computerChoice === 0) {
        console.log("Rock");
    }
    else if (computerChoice === 1) {
        console.log("Paper");
    }
    else {
        console.log("Scissors");
    }
    return computerChoice;
}


function compareResult(computerChoice, humanChoice) {

    if (computerChoice === 0 && humanChoice == "Paper") {
        humanScore = humanScore + 1;
    }
    else if (computerChoice === 0 && humanChoice == "Scissors") {
        computerScore = computerScore + 1;
    }
    else if (computerChoice === 0 && humanChoice == "Rock") {

    }
    else if (computerChoice === 1 && humanChoice == "Scissors") {
        humanScore = humanScore + 1;
    }
    else if (computerChoice === 1 && humanChoice == "Paper") {

    }
    else if (computerChoice === 2 && humanChoice == "Scissors") {

    }
    else if (computerChoice === 1 && humanChoice == "Rock") {
        computerScore++;
    }
    else if (computerChoice === 2 && humanChoice == "Rock") {
        humanScore++;
    }
    else if (computerChoice === 2 && humanChoice == "Paper") {
        computerScore++;
    }

}
function showResult() {
    console.log("Human Score =", humanScore, "Computer Score = ", computerScore);
}
function playRound() {

    let myHumanChoice = getHumanChoice();
    let myComputerChoice = getComputerChoice();
    compareResult(myComputerChoice, myHumanChoice);
    showResult();
    numberOfRounds++;
}
function startGame() {
    do {
        playRound();
    } while (numberOfRounds < 4);
    winnerAnnouncement();
}
function winnerAnnouncement() {
    if (humanScore > computerScore) {
        console.log("You Win!");
    }
    else if (humanScore < computerScore) {
        console.log("You Lose");
    }
    else {
        console.log("Its a Tie");
    }
}

startGame();





