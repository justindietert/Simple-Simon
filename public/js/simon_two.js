(function() {

    'use strict';

    var tiles = document.getElementsByClassName('tile');
    var startButton = document.getElementById('start');

    startButton.addEventListener('click', start, false);

    var userSequence = [];
    var simonSequence = [];

    function start() {
        document.getElementById('game-over').innerHTML = "";
        document.getElementById('0').classList.remove('all-red');
        document.getElementById('1').classList.remove('all-red');
        document.getElementById('2').classList.remove('all-red');
        document.getElementById('3').classList.remove('all-red');
        simonSequence = [];
        newRound();
    }

    function newRound() {
        userSequence = [];
        addRandomTileToSequence();
        animate();
    }

    function addRandomTileToSequence() {
        var random = Math.floor((Math.random() * 4));
        simonSequence.push(tiles[random].id);
    }

    function animate() {
        disableUserClick();

        // update score on screen 
        document.getElementById('start').innerHTML = "Round: " + simonSequence.length;
        document.getElementById('start').classList.add('round-text');

        // tell user to watch sequence
        document.getElementById('prompt-text').classList.remove('repeat-sequence');
        document.getElementById('prompt-text').innerHTML = "Watch the sequence.";
        document.getElementById('prompt-text').classList.add('watch-sequence');

        var i = 0;

        var intervalId = setInterval(function(){
            lightUp(document.getElementById(simonSequence[i]));

            i++;

            if (i >= simonSequence.length) {
                clearInterval(intervalId);

                enableUserClick();
            }
        }, 800);
    }

    function lightUp(element) {
        element.style.opacity = "1";

        var fadeoutTimerId = setTimeout(function(){
            element.style.opacity = "0.3";
        }, 500);
    }

    function compareSequences() {
        var sequenceError = false;

        for (var i = 0; i < userSequence.length; i++) {
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
        disableUserClick();
        document.getElementById('0').classList.add('all-red');
        document.getElementById('1').classList.add('all-red');
        document.getElementById('2').classList.add('all-red');
        document.getElementById('3').classList.add('all-red');
        document.getElementById('game-over').innerHTML = "GAME<br>OVER";
        document.getElementById('prompt-text').innerHTML = "Click start to play again.";
        enableStartButton();
    }


    function userClick() {
        var userChoice = this.id;
        userSequence.push(userChoice);
        compareSequences();
    }

    function enableStartButton() {
        startButton.addEventListener('click', start, false);
        document.getElementById('prompt-text').classList.remove('repeat-sequence');
        document.getElementById('start').classList.remove('round-text');
        document.getElementById('start').innerHTML = "Start";
    }

    function enableUserClick() {
        document.getElementById('0').addEventListener('click', userClick, false);
        document.getElementById('1').addEventListener('click', userClick, false);
        document.getElementById('2').addEventListener('click', userClick, false);
        document.getElementById('3').addEventListener('click', userClick, false);

        for (var i = 0; i < tiles.length; i++) {
            tiles[i].addEventListener('mousedown', userDown, false);
            tiles[i].addEventListener('mouseup', userUp, false);
        }

        // tell user to repeat sequence.
        document.getElementById('prompt-text').classList.remove('watch-sequence');
        document.getElementById('prompt-text').innerHTML = "Repeat.";
        document.getElementById('prompt-text').classList.add('repeat-sequence');
    }

    function disableUserClick() {
        startButton.removeEventListener('click', start, false);
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
        event.target.style.opacity = "0.3";
    }

})();