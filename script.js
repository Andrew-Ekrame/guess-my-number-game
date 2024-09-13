"use strict";

let message = document.querySelector(".message");
let score = document.querySelector(".score");
let scoreValue = 20;
let highScore = document.querySelector(".highscore");
let highScoreValue = 0;
let guess = document.querySelector(".guess");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let number = document.querySelector(".number");
let body = document.querySelector("body");
document.querySelector(".check").addEventListener("click", function () {
  let guessValue = Number(guess.value);
  if (!guessValue) {
    message.textContent = "⛔ No number!";
  } else if (guessValue === secretNumber) {
    message.textContent = "🎉 Correct Number!";
    number.textContent = secretNumber;
    number.style.width = "30rem";
    body.style.backgroundColor = "#60b347";
    if (highScoreValue < scoreValue) {
        highScore.textContent = scoreValue;
        highScoreValue = scoreValue;
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
document.querySelector(".again").addEventListener("click", function () {
  scoreValue = 20;
  score.textContent = scoreValue;
  message.textContent = "Start guessing...";
  number.textContent = "?";
  number.style.width = "15rem";
  body.style.backgroundColor = "#222";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  guess.value = "";
});
