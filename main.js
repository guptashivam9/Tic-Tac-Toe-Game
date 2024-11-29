let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let msgContainer = document.querySelector(".msg-container");
let newGame = document.querySelector("#Ngame");
let message = document.querySelector('#msg');


let turnO = true;/*playerX, playerO */
let count = 0; 

const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turnO = true;
    count = 0;
    enabledBoxes();
    msgContainer.classList.add("hide");

}
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log('button was clicked!');
        if(turnO){
            box.innerText="O";
            turnO = false;
        }else{
            box.innerText ='X';
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
    });
});
const disabledBoxes =()=>{
    for(box of boxes){
        box.disabled = true;
    }
}
const enabledBoxes =()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
}

const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log('winner!');
                showWinner(pos1Val);
            }

        }
    }
    if (count === 9) {
        message.innerText = "It's a Draw!";
        msgContainer.classList.remove("hide");
      }
};
const showWinner=(winner)=>{
    message.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();

 }

newGame.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);