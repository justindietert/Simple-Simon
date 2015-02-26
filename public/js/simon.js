

// Wait for player to click start.

// Start a round, which follows these steps:
//     Add a random number (1-4) to the sequence.
//     Animate the sequence to the user.
//     Enable user interaction with the board, and register any clicks on the Simon tiles.
//     While the player has not entered an incorrect response, 
//     and the number of clicks is less than the length of the sequence, wait for player input.

// Continue adding rounds until the player loses.



var tiles = document.getElementsByClassName('tile');

var startButton = document.getElementById('start');

var simonSelections;
var copy;
var round = 0;
var active = true;

// Start button listener
startButton.addEventListener('click', startGame, false);

// add activate event listeners on each tile
function activateListeners() {
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener('mousedown', userDown, false);
        tiles[i].addEventListener('mouseup', userUp, false);
        tiles[i].addEventListener('click', userChoice, false);
    }

    userChoice();
}

// deactivate event listeners on each tile
function deactivateListeners() {
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].removeEventListener('mousedown', userDown, false);
        tiles[i].removeEventListener('mouseup', userUp, false);
        tiles[i].removeEventListener('click', userChoice, false);
    }
}

// remove the start button from screen
function removeStartButton() {
    startButton.removeEventListener('click', startGame, false);
    startButton.innerHTML = '';
    startButton.className = '';
}

function activateStartButton() {
    startButton.addEventListener('click', startGame, false);
    // startButton.innerHTML = 'Start';
    startButton.className = 'button small round medium-grey button-text';
}


// when user mouses down on tile, opacity is brought up to "1"
function userDown(event) {
    event.target.style.opacity = "1";
    var d = event.target;
    d.classList.add('active');
    // d.className = d.className + ' active';
}

// when user mouses up on tile, opacity is brought back down to original opacity
function userUp(event) {
    event.target.style.opacity = "0.5";
    var d = event.target;
    d.classList.remove('active');
    // d.className = d.className - ' active';
}

function startGame() {
    simonSelections = [];
    copy = [];
    round = 0;
    newRound();
}

function newRound(event) {
    deactivateListeners();
    removeStartButton();
    var simonChoice = getNewTile();
    simonSelections.push(simonChoice);
    console.log(simonChoice);
    // console.log(simonSelections);
    copy = simonSelections.slice(0);
    animate(simonSelections);
    // console.log(copy);
}

// when user makes a tile selection, return that tile
function userChoice(event) {
   var selection = tiles[this];
   var desiredResponse = copy.shift();
   var actualResponse = selection;
   active = (desiredResponse === actualResponse);
   checkLose();
   // console.log(desiredResponse);
   // console.log(active);
   console.log(selection);
}

function checkLose() {
    if (copy.length === 0 && active) {
        deactivateListeners();
        newRound();
    } else if (!active) { // player loses
        // deactivateListeners();
        // endGame();
    }
}

// function activateSimonForUser() {
//     userChoice();
// }

// function deactivateSimon() {

// }

function endGame() {
    alert("you lose");
    // activateStartButton();
}

// -------------------------------
// randomly select a square
// -------------------------------
function getNewTile() {
    // between 0 and 3;
    return Math.floor((Math.random() * 4));
}

// light up the square
function lightUp(chosen) {
    tiles[chosen].style.opacity = "1";

    var timeoutId = setTimeout(function () {
        tiles[chosen].style.opacity = "0.5";
    }, 500);
}

// animate the simonSelections array
function animate(simonSelections) {
    var i = 0;
    var interval = setInterval(function() {
    
        lightUp(simonSelections[i]);

        i++;

        if (i >= simonSelections.length) {
            clearInterval(interval);
            activateListeners();
            // userChoice();
        }

   }, 800);
}





// count the number of rounds the user has gone.
    // arrayName.length













// --- use this code below if want to set timer for ending game if user does not click in 3 seconds

// function userChoice(event) {
//    var selection = this.id;
//    console.log(selection);
//    // return selection;
//    listenForUserChoice(selection);
// }

// function listenForUserChoice(selection) {
//     clearInterval(timeoutId);
//     userSelections.push(selection);

//     console.log(userSelections);

//     timeoutId = setTimeout(function(){
//         alert("time over");
//     }, 3000);
// }
