// Initializing two varaibles to keep track of the scores

const humanScore = 0;
const computerScore = 0;

// Function for getting Computer's turn

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 0) {
        return "Rock"
    } else if (randomNumber === 1) {
        return "Paper"
    } else if (randomNumber === 2) {
        return "Scissors"
    }

}

// Function for User's input prompt

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors: ")
}
