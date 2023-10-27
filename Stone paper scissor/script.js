let userScore = 0;
let computerScore = 0;
let roundCount = 0;


function chooseOption(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";
    let roundResult = "";

    if (playerChoice === computerChoice) {
        result = "It's a draw!";
        roundResult = "Draw";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        // result = "You win this round!";
        roundResult = "Player";
        userScore++;
    } else {
        // result = "Computer wins this round!";
        roundResult = "Computer";
        computerScore++;
    }

    document.getElementById("result").innerText = result;
    document.getElementById("round").innerText = `Round ${roundCount} - ${roundResult === "Draw" ? "It's a draw!" : `${roundResult} wins`}`;
    document.getElementById("score").innerText = `Score: You ${userScore} - Computer ${computerScore}`;
    
    roundCount++;
    if (roundCount === 5) {
        let finalResult = "";
        if (userScore > computerScore) {
            finalResult = "You win the game!";
        } else if (userScore < computerScore) {
            finalResult = "Computer wins the game!";
        } else {
            finalResult = "It's a draw!";
        }

        finalResult += ` Overall Score: You ${userScore} - Computer ${computerScore}`;

        document.getElementById("result").innerText = finalResult;
        document.querySelector('.btn-group').classList.add('d-none');
        document.querySelector('.restart-btn').style.display = 'block';
    }
}


function restartMatch() {
    userScore = 0;
    computerScore = 0;
    roundCount = 0;

    document.getElementById("result").innerText = "";
    document.getElementById("round").innerText = "";
    document.getElementById("score").innerText = "";

    document.querySelector('.btn-group').classList.remove('d-none');
    document.querySelector('.restart-btn').style.display = 'none';
}
