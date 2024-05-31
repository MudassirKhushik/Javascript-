let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let totalGuesses = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value) 
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a valid Number')
    } else if(guess < 1){
        alert('Please enter a Number greater than 1')
    } else if(guess > 100){
        alert('Please Enter a Number less than 100')
    } else{
        prevGuess.push(guess);
        if(totalGuesses === 10){
            displayGuess(guess);
            displayMessage(`Game Over...!!!, The random Number was ${randomNumber}`);
            endGame();
        } else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Congratulation...!!!, You won the Game`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage(`The Guess is too low`)
    } else if(guess > randomNumber){
        displayMessage(`The Guess is too high`)
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess},   `;
    totalGuesses++;
    remaining.innerHTML = `${11 - totalGuesses}`;
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame" >New Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        totalGuesses = 1;
        lowOrHigh.innerHTML = '';
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - totalGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}