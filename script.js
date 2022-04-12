'use strict';
//element selecting
const active1 = document.querySelector(`.player--0`);
const active2 = document.querySelector(`.player--1`);
const score1eL = document.querySelector(`#score--0`);
const score2eL = document.getElementById(`score--1`);
const diseEL = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const player1 = document.querySelector(`#current--0`);
const player2 = document.querySelector(`#current--1`);
let playing = true;
//insilising value to score
const score = [0, 0];
score1eL.textContent = 0;
score2eL.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
const swich = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  active1.classList.toggle(`player--active`);
  active2.classList.toggle(`player--active`);
};
diseEL.classList.add(`hidden`);

//Runnig Dice
btnRoll.addEventListener(`click`, function () {
  if (playing) {
    const dise = Math.trunc(Math.random() * 6) + 1;
    diseEL.classList.remove(`hidden`);

    diseEL.src = `dice-${dise}.png`;
    if (dise !== 1) {
      currentScore += dise;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Giving to second player
      swich();
    }
  }
});

btnHold.addEventListener(`click`, function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      swich();
    }
  }
});
btnNew.addEventListener(`click`, function () {
  diseEL.classList.add(`hidden`);
  document.querySelector(`#score--0`).textContent = 0;
  document.querySelector(`#score--1`).textContent = 0;
  document.querySelector(`#current--0`).textContent = 0;
  document.querySelector(`#current--1`).textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove(`player--winner`);
  document.querySelector(`.player--0`).classList.add(`player--active`);
});
