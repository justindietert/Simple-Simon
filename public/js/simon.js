

// Wait for player to click start.

// Start a round, which follows these steps:
//     Add a random number (1-4) to the sequence.
//     Animate the sequence to the user.
//     Enable user interaction with the board, and register any clicks on the Simon tiles.
//     While the player has not entered an incorrect response, 
//     and the number of clicks is less than the length of the sequence, wait for player input.

// Continue adding rounds until the player loses.



var tiles = document.getElementsByClassName('tile');

// var tiles = document.getElementById('tiles');

var startButton = document.getElementById('start');

var userSelections = [];
var simonSelections = [];
var copy;
var round;
// var timeoutId;

// Start button listener
startButton.addEventListener('click', simonGenerate, false);

// add event listeners to each tile
for (var i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('mousedown', userDown, false);
    tiles[i].addEventListener('mouseup', userUp, false);
    tiles[i].addEventListener('click', userChoice, false);
}

// when user mouses down on tile, opacity is brought up to "1"
function userDown(event) {
    event.target.style.opacity = "1";
}

// when user mouses up on tile, opacity is brought back down to original opacity
function userUp(event) {
    event.target.style.opacity = "0.5";
}

// when user makes a tile selection, return that item's data-tile value
function userChoice(event) {
   var selection = this;
   // var selection = this.dataset.tile;
   userSelections.push(selection);
   console.log(userSelections);
   // return selection;
}


// -------------------------------
// randomly select a square
// -------------------------------
function getNewTile() {
    var newTile = Math.floor((Math.random() * 4));
    return newTile;
}

// light up the square
function lightUp(chosen) {
    chosen.style.opacity = "1";

    var timeoutId = setTimeout(function () {
        chosen.style.opacity = "0.5";
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
            // activateSimonBoard();
        }

   }, 800);
}


function simonGenerate(event) {
    var simonChoice = tiles[getNewTile()];
    simonSelections.push(simonChoice);
    // simonSelections.push(simonChoice.dataset.tile);
    console.log(simonSelections);
    copy = simonSelections.slice(0);
    animate(simonSelections);
}




// check if user selection matches simon's sequence
function compareSelections(simonSelections, userSelections) {

}

// continue randomly selecting squares, add selection to sequence
function continueSequence(simonSequence) {
    //generates new random square choice
    //pushes the new random choice onto the existing array
    //returns the new array
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
