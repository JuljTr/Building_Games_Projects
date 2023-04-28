const selectBox = document.querySelector(".select-box");
const selectXBtn = selectBox.querySelector(".playerX");
const selectOBtn = selectBox.querySelector(".playerO");
const playBoard = document.querySelector(".play-board");
const allBox = document.querySelectorAll("section span");
const players = document.querySelector(".players");


window.onload = () => {

    for (let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute("onclick","clickedBox(this)")
        
    }
    selectXBtn.onclick = () => {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
    }
    selectOBtn.onclick = () => {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
        players.setAttribute("class", "players active player")
    }
}

let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";

function clickedBox(element){
    if(players.classList.contains("player")){
        element.inneHTML = `<i class="${playerOIcon}"></i>`;
    }else {
        element.inneHTML = `<i class="${playerXIcon}"></i>`;
    }
}