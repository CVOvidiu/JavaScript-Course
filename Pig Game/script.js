'use strict';

const diceImage = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

let activePlayer = 0;
let current = 0;
let scores = [0, 0];

const stateStart = () => {
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    diceImage.style.display = 'none';
    score0.textContent = 0;
    score1.textContent = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    if(activePlayer === 1) switchPlayers();
    current = 0;
    scores = [0, 0];
    activePlayer = 0;
    if(btnHold.style.display === 'none') {
        btnHold.style.display = 'block';
        btnRoll.style.display = 'block';
    }
}

stateStart();

const switchPlayers = () => {
    current = 0;
    document.getElementById(`current--${activePlayer}`).textContent = current;
    activePlayer = activePlayer == 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

const genDice = () => {
    if(diceImage.style.display === 'none')
        diceImage.style.display = 'block';
    const diceNum = Math.trunc(Math.random() * 6 + 1);
    diceImage.setAttribute('src', `dice-${diceNum}.png`);
    if(diceNum !== 1) {
        current += diceNum;
        document.getElementById(`current--${activePlayer}`).textContent = current;
    } else switchPlayers();
}
btnRoll.addEventListener('click', genDice);

btnHold.addEventListener('click', function () {
    scores[activePlayer] += current;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 10) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        btnHold.style.display = 'none';
        btnRoll.style.display = 'none';
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        diceImage.style.display = 'none';
    } else switchPlayers();
})

btnNew.addEventListener('click', function () {
    stateStart();
})