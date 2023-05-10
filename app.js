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
let playerSign = "X"

function clickedBox(element) {
    if (players.classList.contains("player")) {
        element.innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.add("active");
        playerSign = "O";
        element.setAttribute("id",playerSign);
    } else {
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        players.classList.add("active");
    }
    selectWinner();
    element.style.pointerEvents = "none";
    let randomDelayTime = ((Math.random() * 1000) + 200).toFixed()
    setTimeout(() => {
        bot();
    }, randomDelayTime);
}

function bot() {
    playerSign = "O";
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
            players.classList.remove("active");
            playerSign = "X";
            allBox[randomBox].setAttribute("id", playerSign);
        } else {
            allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
            players.classList.remove("active");
            allBox[randomBox].setAttribute("id", playerSign);
        }
        selectWinner();
    }
    allBox[randomBox].style.pointerEvents = "none";
    playerSign = "X";
}

function getClass(idname){
    return document.querySelector(".box" + idname).id;
}

function checkClass(val1, val2, val3, sign){
    if(getClass(val1) == sign && getClass(val2) == sign && getClass(val3) == sign){
        return true;
    }
}

function selectWinner(){
    if(checkClass(1,2,3,playerSign) 
    || checkClass(4,5,6,playerSign) 
    || checkClass(6,7,8,playerSign) 
    || checkClass(1,4,7,playerSign) 
    || checkClass(2,5,8,playerSign)
    || checkClass(3,6,9,playerSign)
    || checkClass(1,5,9,playerSign)
    || checkClass(3,5,7,playerSign)
    ){
        console.log(playerSign + " winner")
    }
}