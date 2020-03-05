
//event lisener for the squares if clicked
//run function based on player one or two
//if evens = red if odds = blue
let winningArrays = [
    ['0', '1', '2'], 
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '4', '8'],
    ['2', '4', '6']
];

let playerRed = [];
let playerBlue = [];
let reset = document.querySelector(".button");
let squares = document.querySelectorAll(".square");
let turn = 0;
let ttt = document.querySelector(".ttt")
console.log(squares)


function winner() {
    for (let i = 0; i < winningArrays.length; i++){
        console.log("check")
        if(winningArrays[i].every(e => playerBlue.includes(e))){
            alert("blue wins")
            break;
        }
        if(winningArrays[i].every(e => playerRed.includes(e))){
            alert("red wins")
            break;
        }
    }
}


function changeColor(e) {
    if (turn % 2 == 0) {
    e.target.style.backgroundColor = "red";
    playerRed.push(e.target.id);
    e.target.removeEventListener("click", changeColor);
    console.log(turn)
} else {
        e.target.style.backgroundColor = "blue";
        playerBlue.push(e.target.id);
        e.target.removeEventListener("click", changeColor);
    }
    turn += 1;
    winner()
    console.log(playerRed)
    console.log(playerBlue)
    if(turn == 9)
    alert("tie")
}


squares.forEach(square => square.addEventListener("click", changeColor));

reset.addEventListener("click", function(e) {
    e.preventDefault()
    window.location.reload()
})
