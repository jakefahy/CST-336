var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "http://code.jquery.com/jquery-2.2.1.min.js";


var randomNumber = Math.floor(Math.random() *99) + 1;
var guesses = document.querySelector('#guesses');
var lastResult = document.querySelector('#lastResult');
var lowOrHi = document.querySelector('#lowOrHi');


var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

// var gamesWonLabel =  document.querySelector('#gamesWon');
// var gamesLostLabel = document.querySelector('#gamesLost');

var gamesWonLabel = $("#gamesWon");
var gamesLostLabel = $("#gamesLost");


var gamesWon = 0;
var gamesLost = 0;

var guessCount = 1;
guessField.focus();

var resetButton = document.querySelector('#reset');


resetButton.style.display = 'none';

guessSubmit.addEventListener('click',checkGuess);

function checkGuess() {
    var userGuess = Number(guessField.value);
    if(userGuess < 1 || userGuess > 99 || isNaN(userGuess)) {
        alert("Invalid Guess");
        guessField.value = '';
        guessField.focus();
        return;
    }
    if(guessCount === 1) {
        guesses.innerHTML = "Previous Guess: ";
    }
    guesses.innerHTML += userGuess + " ";
    if(userGuess === randomNumber) {
        lastResult.innerHTML = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = 'green';
        lowOrHi.innerHTML = " ";
        gamesWon+=1;
        gamesWonLabel.html("Games Won:" + gamesWon);
        gamesWonLabel.css('backgroundColor', 'green');
        setGameOver();
    } else if(guessCount === 7) {
        lastResult.innerHTML = "Sorry, you lost!";
        gamesLost+=1;
        gamesLostLabel.html("Games Lost:" + gamesLost);
        gamesLostLabel.css('backgroundColor', 'red');
        setGameOver();
    } else {
        lastResult.innerHTML = "Wrong!";
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
            lowOrHi.innerHTML = "Last guess was too low";
        } else {
            lowOrHi.innerHTML = "Last guess was too high";
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
}



function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.style.display = 'inline';
    resetButton.addEventListener('click', resetGame);
}


function resetGame() {
    guessCount = 1;
    
    var resetParas = document.querySelectorAll('.resultParas');
    for(var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    
    resetButton.style.display = 'none';
    
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    
    lastResult.style.backgroundColor = 'white';
    guesses.textContent = "Previous Guesses: ";
    lowOrHi.textContent = " ";
    lastResult.textContent = " ";
    
    randomNumber = Math.floor(Math.random() * 99) + 1;
    
}