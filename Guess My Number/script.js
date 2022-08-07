'use strict';

/* Steps:
    - Define and set the secret number.
    - Get the input value and compare it to the secret number:
        - if the value is too low, change message and score--
        - if the value is too high, change message and score--
        - if no input, change message
        - if same input, change message
        - if right number: change message, show number, change background color, change width of number window, disable input edit
        - if input number out of bounds
        - if score reaches zero
    - Implement 'again' button functionality
    - Implement highscore functionality
*/

let lastInputNumber = undefined;
let score = 20;
let highScore = 0;

const inputBox = document.querySelector('.guess');
const secretNumberWindow = document.querySelector('.number');
const checkBtn = document.querySelector('.check');

const Winner = (status) => {
    secretNumberWindow.textContent = secretNumber;
    secretNumberWindow.style.width = '30rem';
    checkBtn.style.display = 'none';
    inputBox.setAttribute('disabled', 'disabled');
    if(status) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        displayMessage('You win!');
    } else {
        document.querySelector('body').style.backgroundColor = 'red';
        displayMessage('You lose!');
    }
}

const genSecretNumber = () => {
    return Math.trunc(Math.random() * 20 + 1);
};

const displayMessage = (msg) => {
    document.querySelector('.message').textContent = msg;
}

const decrementScore = () => {
    document.querySelector('.score').textContent = `${--score}`;
}

let secretNumber = genSecretNumber();

document.querySelector('.check').addEventListener('click', function() {
    let inputNumber = Number(inputBox.value);
    
    if(!inputNumber)
        displayMessage('Enter a number.');
    else if(inputNumber > 20 || inputNumber < 1)
        displayMessage('Out of bounds (1 - 20)');
    else if(inputNumber == lastInputNumber)
        displayMessage('Same input number.');
    else if(inputNumber !== secretNumber) {
        displayMessage(inputNumber > secretNumber ? 'Too high.' : 'Too low.')
        decrementScore();
    } else if(inputNumber == secretNumber) {
        Winner(true)
        if(score > highScore) {
            document.querySelector('.highscore').textContent = score;
            highScore = score;
        }
    }
    if(score == 0)
        Winner(false)
    lastInputNumber = inputNumber;
})

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = genSecretNumber();
    score = 20;
    document.querySelector('.score').textContent = '20';
    lastInputNumber = undefined;
    displayMessage('Start guessing...');
    inputBox.value = '';
    secretNumberWindow.textContent = '?';
    secretNumberWindow.style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    checkBtn.style.display = 'block';
    inputBox.removeAttribute('disabled', 'disabled');
})