let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const gencomChoice = ()=>{
    const option = [ "rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];

}
const drawGame = () =>{
    msg.innerText = "Game was draw. play again!";
     msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin ,userChoice,comChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${comChoice} beats ${userChoice}`;
         msg.style.backgroundColor = "red";
    }

}
const playGame = (userChoice)=>{
    //gen computer choice
    const comChoice = gencomChoice();

    if(userChoice === comChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if( userChoice === "rock"){
            //scissors,paper
            userWin = comChoice === "paper"? false : true;
        }else if (userChoice === "paper"){
            //scissors,rock
           userWin = comChoice === "scissors" ? false:true;
        }else{
            //rock,paper
           userWin = comChoice === "rock"? false : true;
        }
        showWinner(userWin ,userChoice, comChoice);
    }


}

choices.forEach((choice)=>{
    choice.addEventListener( "click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

