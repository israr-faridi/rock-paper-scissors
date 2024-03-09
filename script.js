let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randInx = Math.floor(Math.random() * 3)
    return option[randInx]
}


const drawGame = () => {
    msg.innerHTML = "Game was Draw. Play age.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, useChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = `You win! Your ${useChoice} beat ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `You lose. ${compChoice} beat your ${useChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playgame = (userChoice) => {
    // Generate computer choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        // Draw Game
        drawGame()
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissor
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        // console.log("choice id", useChoice);
        playgame(userChoice)
    })
})