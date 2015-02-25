
var tiles = document.getElementsByClassName('tile');

var startButton = document.getElementById('start');

var userSelections = [];
var simonSelections = [];
var timeoutId;

// Start button listener
startButton.addEventListener('click', simonSequence, false);

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

// when user makes a tile selection, return that item's ID
function userChoice(event) {
   var selection = this.id;
   console.log(selection);
   // return selection;
   listenForUserChoice(selection);
}


function listenForUserChoice(selection) {
    clearInterval(timeoutId);
    userSelections.push(selection);

    console.log(userSelections);

    timeoutId = setTimeout(function(){
        alert("time over");
    }, 3000);
}


// -------------------------------
// randomly select a square
// -------------------------------
function getNewTile() {
    var newTile = Math.floor(Math.random() * 4);
    return tiles[newTile];
}

// animate the square
function animateSquare(chosen) {
    chosen.style.opacity = "1";

    var timeoutId = setTimeout(function () {
        chosen.style.opacity = "0.5";
    }, 400);
}


function simonGenerate(event) {
    var simonChoice = getNewTile();
    animateSquare(simonChoice);
    simonSelections.push(simonChoice.id);
    console.log(simonSelections);
}

function simonSequence() { 
    simonGenerate();

    var count = 0;
    var max = simonSelections.length;
    var interval = 1000; // interval time in milliseconds

    var intervalId = setInterval(function () {
        if (count >= max) {
            clearInterval(intervalId);
            console.log('All done');
        } else {
            count++;
        }
    }, interval);
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

