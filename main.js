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

function playGame() { 

    const getHumanChoiceBtn = document.querySelector("#btn-container");
    const showStats =  document.querySelector("#winner-text-container");
    const showScores = document.createElement("p");
    const showResults = document.createElement("p");
    const showWinner = document.createElement("p");

    showStats.appendChild(showResults);
    showStats.appendChild(showScores);
    showStats.appendChild(showWinner);


    // Function for the playing the round 

    function playRound(humanChoice, computerChoice) { 
        const humanString = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

        // Game Logic 

        if (humanString == computerChoice) {
            return `Tie! Both chose ${humanString}`;
        }

        const humanWins =   (humanString === "Rock" && computerChoice === "Scissors") ||
                            (humanString === "Paper" && computerChoice === "Rock") ||
                            (humanString === "Scissors" && computerChoice === "Paper");

        if (humanWins) { 
            humanScore++;
            return `You win! ${humanString} beats ${computerChoice}`
        } else {
            computerScore++; 
            return `You lose! ${computerChoice} beats ${humanString}`
        }
    }

    getHumanChoiceBtn.addEventListener("click", (event) => { 
        
        if (event.target.tagName !== "BUTTON") return; 
        if (humanScore >= 5 || computerScore >= 5) return;
        
        showResults.textContent = playRound(event.target.id, getComputerChoice())

        showScores.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`

        if (humanScore === 5) { 
            showWinner.textContent = "🏆 YOU WON THE GAME!";
            showWinner.style["color"] = "green";
        } else if (computerScore === 5) { 
            showWinner.textContent = "❌ YOU LOST THE GAME!";
            showWinner.style["color"] = "red";
        }

    })
}

playGame()