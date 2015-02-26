var userSequence = [];
var simonSequence = [];

var tiles = document.getElementsByClassName('tile');
var startButton = document.getElementById('start');

startButton.addEventListener('click', start, false);

function start() {
    simonSequence = [];
    newRound();
}

function newRound() {
    userSequence = [];
    addRandomSquareToSequence();
    animate();
}

function addRandomSquareToSequence() {
    var random = Math.floor(Math.random() * 4);
    simonSequence.push(tiles[random].id);
}

function animate() {
    disableInput();

    // update score on screen 
    // document.getElementById('round').innerText = "Round: " + simonSequence.length;

    var i = 0;

    var intervalId = setInterval(function(){
        lightUp(document.getElementById(simonSequence[i]));

        i++;

        if (i >= simonSequence.length) {
            clearInterval(intervalId);

            enableInput();
        }
    }, 800);
}

function lightUp(element) {
    element.style.opacity = "1";

    var fadeoutTimerId = setTimeout(function(){
        element.style.opacity = "0.5";
    }, 500);
}

function compareSequences() {
    var sequenceError = false;

    for (var i = 0; i < userSequence.length; i ++) {
        if (simonSequence[i] == undefined || simonSequence[i] != userSequence[i]) {
            sequenceError = true;
            break;
        }
    }

    if (sequenceError) {
        gameOver();
    } else if (userSequence.length == simonSequence.length) {
        newRound();
    }
}

function gameOver() {
    location.reload(true);

    confirm("Game over. Play again?");

    if(confirm) {
        start();
    }
}


function userClick() {
    var userChoice = this.id;

    userSequence.push(userChoice);

    compareSequences();
}


function enableInput() {
    document.getElementById('0').addEventListener('click', userClick, false);
    document.getElementById('1').addEventListener('click', userClick, false);
    document.getElementById('2').addEventListener('click', userClick, false);
    document.getElementById('3').addEventListener('click', userClick, false);

    for (var i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener('mousedown', userDown, false);
        tiles[i].addEventListener('mouseup', userUp, false);
    }
}

function disableInput() {
    document.getElementById('0').removeEventListener('click', userClick, false);
    document.getElementById('1').removeEventListener('click', userClick, false);
    document.getElementById('2').removeEventListener('click', userClick, false);
    document.getElementById('3').removeEventListener('click', userClick, false);

    for (var i = 0; i < tiles.length; i++) {
        tiles[i].removeEventListener('mousedown', userDown, false);
        tiles[i].removeEventListener('mouseup', userUp, false);
    }
}

function userDown(event) {
    event.target.style.opacity = "1";
}

function userUp(event) {
    event.target.style.opacity = "0.5";
}

