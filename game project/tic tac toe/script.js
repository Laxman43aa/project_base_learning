let boxes = document.querySelectorAll(".cell");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true; // true for player 1, false for player 2
let count = 0; // To keep track of the number of turns taken
const winpatterns = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
];

const resetGame = () => {
        turn0 = true;   
        count = 0; // Reset the turn count
        enableboxes();
        msgcontainer.classList.add("hide");
    
}
const disabledboxes = () => {
    for (let cell of boxes) {
        cell.disabled = true; // Disable all cells
    }
}
const enableboxes = () => {
    for (let cell of boxes) {
        cell.disabled = false; // Disable all cells
        cell.innerText = ""; // Clear the text in each cell
    }
}

boxes.forEach((cell) => {
    cell.addEventListener("click", () => {
        if(turn0 ){
            cell.innerText = "o";
            turn0 = false;

        }else {
            cell.innerText = "x";
            turn0 = true;
        }
        cell.disabled = true;
        count++;

        let iswinner = checkWinner();
        if(count === 9 && !iswinner) {
            checkDraw();
        }
    });
});
const checkDraw = () => {
        msg.innerText = `It's a draw! No winner this time.`;
        msgcontainer.classList.remove("hide");
        disabledboxes();
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations! , winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();

};

const checkWinner = () =>{
    for (let patterns  of winpatterns) {
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText; 
        let pos3val = boxes[patterns[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);
            return true; // A winner is found
        }
    }  
}

};
newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame);

