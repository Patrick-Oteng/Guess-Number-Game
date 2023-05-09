'use strict';

let randomNum = Math.trunc(Math.random() * 50 + 1);

let score = 25;
let highscore = 0;

// console.log(randomNum);

// document.querySelector('.guess').textContent = randomNum;

//reusable messages
const Messages = function (message) {
  document.querySelector('.message').textContent = message;
};

const score_value = function (score) {
  document.querySelector('.score').textContent = score;
};
//end of reusable function

//reset logic

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#171717';
  document.querySelector('body').style.color = '#cccccc';
  score = 25;
  document.querySelector('.score').textContent = score;
  randomNum = Math.trunc(Math.random() * 50 + 1);
  Messages('Start Guessing ...');
  document.querySelector('.guess').textContent = '?';
  document.querySelector('.number').value = '';
});

//game logic
document.querySelector('.check').addEventListener('click', function () {
  const guessNum = Number(document.querySelector('.number').value);
  if (!guessNum) {
    Messages('⛔ No number entered');
  } else if (guessNum === randomNum) {
    Messages('Yesss 👍 Correct Number');
    document.querySelector('body').style.backgroundColor = '#fff';
    document.querySelector('body').style.color = '#171717';
    document.querySelector('.guess').style.width = '15rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessNum !== randomNum) {
    if (score > 1) {
      Messages(
        guessNum > randomNum ? '📈Number is too high' : '📉Number is too low'
      );
      score--;
      score_value(score);
    } else {
      Messages('💥💥💥Game Over💥💥💥');
      score_value(0);
    }
  }
});

//end of game logic
