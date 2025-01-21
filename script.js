let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset")
let win = document.querySelector(".win");
let turn = true;
let count = 0;
let winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let resetGame = () => {
    turn = true;
    start();
    win.classList.add("hide");
    count=0;

}

let end = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
let start = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn === true) {
            box.innerText = "O";
            turn = false;
        }
        else {
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
        let winner1 = winnerChose();
        count++;
        if(count==9 && winner1 != winnerChose()){
            draw();
        }
    })
});

let winnerIs = (winner) => {
    win.innerText = `Winner is ${winner}`
    win.classList.remove("hide");
    end();
}

let winnerChose = () => {
    for (let pattern of winner) {
        let pos0 = boxes[pattern[0]].innerText;
        let pos1 = boxes[pattern[1]].innerText;
        let pos2 = boxes[pattern[2]].innerText;
        if (pos0 != "" && pos1 != "" && pos2 != "") {
            if (pos0 === pos1 && pos1 === pos2) {
                winnerIs(pos1);
            }
        }
    }
}

let draw = () => {
        console.log("none");
        win.innerText="None";
        win.classList.remove("hide");
        end();
}
resetbtn.addEventListener("click", resetGame);