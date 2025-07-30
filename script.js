var dice1 = 0, dice2 = 0;

function diceRoll1() {
    document.querySelector(`.player-1-container .dice-face-${dice1}`).classList.toggle('notVisible');
}

function diceRoll2() {
    document.querySelector(`.player-2-container .dice-face-${dice2}`).classList.toggle('notVisible');
}

function winner() {
    setTimeout(() => {
        document.querySelector(".result-container").style.visibility = "visible";
    }, 1000);
    var result = document.querySelector(".result");
    if(dice1 > dice2) {
        result.innerHTML = "Player 1 wins"
    } else if(dice2 > dice1) {
        result.innerHTML = "Player 2 wins"
    } else {
        result.innerHTML = "DRAW"
    }
}

function diceRoll() {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;

    diceRoll1();
    diceRoll2();
    
    winner();
}

diceRoll();

document.getElementById('rerollBtn').addEventListener('click', () => {
    diceRoll1();
    diceRoll2();
    document.querySelector(".result-container").style.visibility = "hidden";

    diceRoll();
})