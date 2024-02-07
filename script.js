let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")


const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win")
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You Lose")
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () =>{
    console.log("Game is Draw")
    msg.innerText = "Game Draw. PlayAgain"
    msg.style.backgroundColor = "#081b31";

}

const gencompChoice = () =>{
    const options = ['rock','paper','scissor']
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx];
}

const playGame = (userChoice) => {
    // console.log("User choice is " ,userChoice)
    const compChoice = gencompChoice()
    // console.log("Comp choice is " ,compChoice)

    if(userChoice===compChoice){
        drawGame()
    }
    else{

    let userWin = true;
    if(userChoice==="rock"){
        //scissor,paper
        userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice==="paper"){
        //rock,scissor
        userWin = compChoice === "scissor" ? false : true;
    }
    else{
        //rock,paper
        userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice)
}


}

choices.forEach((choice) => {
 choice.addEventListener("click",() =>{
    const userChoice = choice.getAttribute("id")
    playGame(userChoice);
 })
})