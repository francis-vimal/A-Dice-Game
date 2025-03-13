var dice1 = Math.floor(Math.random() * 6) + 1;
console.log("dice 1 rand: ", dice1);
var dice2 = Math.floor(Math.random() * 6) + 1;
console.log("dice 2 rand: ", dice2);

function diceRoll1() {
    document.querySelector(`.player-1-container .dice-face-${dice1}`).classList.toggle('notVisible');
}

function diceRoll2() {
    document.querySelector(`.player-2-container .dice-face-${dice2}`).classList.toggle('notVisible');
}

function winner() {
    if(dice1 > dice2) {
        console.log("player 1 wins");
    } else if(dice2 > dice1) {
        console.log("player 2 wins");
    } else {
        console.log("draw");
    }
}

diceRoll1();
diceRoll2();

winner();