
var sequence, copy, round;
var active = true;

function startGame() {
    sequence = [];
    copy = [];
    round = 0;
    newRound();
}

function newRound() {
    sequence.push(randomNumber());
    copy = sequence.slice(0);
    animate(sequence);
}

