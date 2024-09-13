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
const displayMessage = function (messageText) {
  message.textContent = messageText;
};
const scoreValueController = function (value) {
  score.textContent = value;
  scoreValue = value;
};
const secretNumberGenerator = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};
const styleChange = function () {
  number.style.width = "30rem";
  body.style.backgroundColor = "#60b347";
};
const styleReset = function () {
  number.style.width = "15rem";
  body.style.backgroundColor = "#222";
};
const textContentReset = function () {
  guess.value = "";
  number.textContent = "?";
  score.textContent = scoreValue;
};
const checkHighScore = function () {
  if (highScoreValue < scoreValue) {
    highScore.textContent = scoreValue;
    highScoreValue = scoreValue;
  }
};
document.querySelector(".check").addEventListener("click", function () {
  let guessValue = Number(guess.value);
  if (!guessValue) {
    displayMessage("⛔ No number!");
  } else if (guessValue === secretNumber) {
    displayMessage("🎉 Correct Number!");
    number.textContent = secretNumber;
    styleChange();
    checkHighScore();
  } else {
    if (scoreValue > 1) {
      displayMessage(
        guessValue > secretNumber ? "📈 Too high!" : "📉 Too low!"
      );
      scoreValueController(scoreValue - 1);
    } else {
      displayMessage("💥 You lost the game!");
      scoreValueController(0);
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  scoreValue = 20;
  displayMessage("Start guessing...");
  styleReset();
  secretNumberGenerator();
  textContentReset();
});
