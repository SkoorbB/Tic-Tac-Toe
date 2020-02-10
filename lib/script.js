
//event lisener for the squares if clicked
//run function based on player one or two
//if evens = red if odds = blue
let winningArrays = [
    [0, 1, 2], 
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let playerRed = [];
let playerBlue = [];
let reset = document.querySelector(".button");
let squares = document.querySelectorAll(".square");
let turn = 0;
let ttt = document.querySelector(".ttt")
//let color = "grey";

squares.forEach(square => square.addEventListener("click", changeColor));

function changeColor(e) {
    e.target.style.backgroundColor = "red";
    e.target.removeEventListener("click", changeColor);
    turn += 1;
    console.log("1")
    //everytime it goe up 1 use if 
    //for (i = 0; turn > 9; i++)
    if (turn % 2 == 0) {
        e.target.style.backgroundColor = "blue";
        e.target.removeEventListener("click", changeColor);
        /*if (turn > 9) {
            e.target.removeEventListener("click", changeColor);
        }*/
    }
}





reset.addEventListener("click", function(e) {
    e.preventDefault()
    window.location.reload()
})
            /*//squares[i].style.backgroundColor = "red";
removeEventListener("click", changeColor);
//squares[i].style.backgroundColor = "blue";
e.target.style.color = "blue";
console.log("test")
}*/


//clickable square from each array
// for loop for colors 
