var simon = {};

simon.tiles = document.getElementsByClassName('tile');

simon.red = document.getElementById('red');
simon.yellow = document.getElementById('yellow');
simon.green = document.getElementById('green');
simon.blue = document.getElementById('blue');

simon.userSelection = [];
simon.simonSelection = [];


// add event listeners to each tile
for (var i = 0; i < simon.tiles.length; i++) {
    simon.tiles[i].addEventListener('mousedown', userClick, false);
    simon.tiles[i].addEventListener('mouseup', userUp, false);
}

// randomly select a square
function getNewTile() {
    simon.newTile = Math.floor(Math.random() * 4);
    return simon.newTile;
}

simon.simonSequence = getNewTile();

// when user mouses down on tile, opacity is brought up to "1"
function userClick(event) {
    event.target.style.opacity = "1";
    var userChoice = event.target.id;
    console.log(userChoice);   
}

// when user mouses up on tile, opacity is brought back down to original opacity
function userUp(event) {
    event.target.style.opacity = "0.6";
}

// check if user selection matches simon's sequence
function compareSelection(simonSelection, userSelection) {

}

// continue randomly selecting squares, add selection to sequence
function continueSequence(simonSequence) {
    //generates new random square choice
    //pushes the new random choice onto the existing array
    //returns the new array
}

// count the number of rounds the user has gone.
    // arrayName.length
