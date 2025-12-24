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

function playGame() { 

    // Function for the playing the round 

    function playRound(humanChoice, computerChoice) { 
        const humanString = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
        console.log(`${humanString} ⚔️ ${computerChoice}`)

        // Game Logic 

        if (humanString == computerChoice) {
            alert("Tie!")

        } else if (humanString == "Scissors" && computerChoice == "Paper") {
            alert("You won! Scissors cuts up Paper")
            humanScore = ++humanScore

        } else if (computerChoice == "Rock" && humanString == "Paper") { 
            alert("You won! Rock beats Paper");
            humanScore = ++humanScore

        } else if (computerChoice == "Scissors" && humanString == "Rock") {
            alert("You won! Rock destroys Scissors");
            humanScore = ++humanScore

        } else if (humanString == "Scissors" && computerChoice == "Rock") {
            alert("You lost! Rock destroys Scissors");
            computerScore = ++computerScore

        } else if (computerChoice == "Scissors" && humanString == "Paper") {
            alert("You lost! Paper gets cut up by Scissors")
            computerScore = ++computerScore

        } else if (humanString == "Rock" && computerChoice == "Paper") {
            alert("You lost! Paper beats Rock");
            computerScore = ++computerScore

        } else {
            console.error(new Error("Use Rock, Paper or Scissors"))
        }
    }

    if (humanScore != 5 && computerScore != 5) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        playGame()
    } else if (humanScore == 5) {
        console.log("VICTORY! YOU WON")
    } else if (computerScore == 5) {
        console.log("DEFEAT! Computer won")
    }
}

playGame()