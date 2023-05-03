const selectBox = document.querySelector(".select-box");
const selectBtnX = selectBox.querySelector(".playerX");
const selectBtnO = selectBox.querySelector(".playerO");
const playBoard = document.querySelector(".play-board");
const allBox = document.querySelectorAll("section span");
const players = document.querySelector(".players");


window.onload = () => {

    for (let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute("onclick", "clickedBox(this)")

    }
    selectBtnX.onclick = () => {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
    }
    selectBtnO.onclick = () => {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
        players.setAttribute("class", "players active player")
    }
}

let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";

function clickedBox(element) {
    if (players.classList.contains("player")) {
        element.innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.add("active");
    } else {
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        players.classList.add("active");
    }
    element.style.pointerEvents = "none";
    let randomDelayTime = ((Math.random() * 1000) + 200).toFixed()
    setTimeout(() => {
        bot();
    }, randomDelayTime);
}

function bot() {
    let array = [];
    for (let i = 0; i < allBox.length; i++) {
        if (allBox[i].childElementCount == 0) {
            array.push(i);
        }
    }
    let randomBox = array[Math.floor(Math.random() * array.length)]
    if (array.length > 0) {
        if (players.classList.contains("player")) {
            allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
            players.classList.add("active");
        } else {
            allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
            players.classList.add("active");
        }
    }
}