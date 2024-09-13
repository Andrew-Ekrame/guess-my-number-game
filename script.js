"use strict";

let message = document.querySelector(".message");
let score = document.querySelector(".score");
let guess = document.querySelector(".guess");
document.querySelector(".check").addEventListener("click", function () {
  let guessValue = guess.value;
  if (!guessValue) {
    message.textContent = "⛔ No number!";
  }
});
