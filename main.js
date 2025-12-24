// Initializing two varaibles to keep track of the scores

let humanScore = 0;
let computerScore = 0;

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
    const humanChoice = prompt("Rock, Paper, Scissors: ")
    return humanChoice;
}


// Function for the playing the round 

function playRound(humanChoice, computerChoice) { 
    const humanString = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    console.log(`${humanString} ⚔️ ${computerChoice}`)

    // Game Logic 

    if (humanString == computerChoice) {
        console.log("Tie!")

    } else if (humanString == "Rock" && computerChoice == "Paper") {
        console.log("You lost! Paper beats Rock");
        computerScore = ++computerScore

    } else if (computerChoice == "Rock" && humanString == "Paper") { 
        console.log("You won! Rock beats Paper");
        humanScore = ++humanScore

    } else if (humanString == "Scissors" && computerChoice == "Rock") {
        console.log("You lost! Rock destroys Scissors");
        computerScore = ++computerScore

    } else if (computerChoice == "Scissors" && humanString == "Rock") {
        console.log("You won! Rock destroys Scissors");
        humanScore = ++humanScore

    } else if (humanString == "Scissors" && computerChoice == "Paper") {
        console.log("You won! Scissors cuts up Paper")
        humanScore = ++humanScore

    } else if (computerChoice == "Scissors" && humanString == "Paper") {
        console.log("You lost! Paper gets cut up by Scissors")
        computerScore = ++computerScore

    } else {
        console.error(new Error("Use Rock, Paper or Scissors"))
    }
}

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);