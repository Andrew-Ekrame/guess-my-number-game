"use strict";

let message = document.querySelector(".message");
let score = document.querySelector(".score");
let scoreValue = 20;
let highScore = document.querySelector(".highscore");
let highScoreValue = 0;
let guess = document.querySelector(".guess");
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let number = document.querySelector(".number");
number.textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  let guessValue = Number(guess.value);
  if (!guessValue) {
    message.textContent = "⛔ No number!";
  } else if (guessValue === secretNumber) {
    message.textContent = "🎉 Correct Number!";
    number.textContent = secretNumber;
    if (Number(highScore.textContent) < scoreValue) {
      highScore.textContent = scoreValue;
    }
  } else if (guessValue > secretNumber) {
    if (scoreValue > 1) {
      message.textContent = "📈 Too high!";
      scoreValue--;
      score.textContent = scoreValue;
    } else {
      message.textContent = "💥 You lost the game!";
      scoreValue = 0;
      score.textContent = scoreValue;
    }
  } else if (guessValue < secretNumber) {
    if (scoreValue > 1) {
      message.textContent = "📉 Too low!";
      scoreValue--;
      score.textContent = scoreValue;
    } else {
      message.textContent = "💥 You lost the game!";
      scoreValue = 0;
      score.textContent = scoreValue;
    }
  }
});
