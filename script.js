"use strict";

// When guess is too high
//   else if (guess > secret_Number) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📈 Too High! ";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "🥲 You Lose the Game!";
//       document.querySelector(".score").textContent = 0;
//     }
//     // When guess  is too low
//   } else if (guess < secret_Number) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📉 Too Low  ";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "🥲 You Lose the Game!";
//       document.querySelector(".score").textContent = 0;
//     }
//   }

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "🥳 Correct Number";

// document.querySelector(".number").textContent = 13;

// document.querySelector(".score").textContent = 12;

// document.querySelector(".guess").value = 23;

// console.log(document.querySelector(".guess").value);
let secret_Number = Math.random();
secret_Number = secret_Number * 20 + 1;
secret_Number = Math.floor(secret_Number);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".number").textContent = "?";
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);
  // When there is no number
  if (!guess) {
    // document.querySelector(".message").textContent = "😒 No Number!";

    displayMessage("😒 No Number!");
    // When player Wins
  } else if (guess === secret_Number) {
    // document.querySelector(".message").textContent = "🥳 Correct Number";

    displayMessage("🥳 Correct Number");

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  // When guess is wrong
  else if (guess != secret_Number) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secret_Number ? "📈 Too High! " : "📉 Too Low! ";

      displayMessage(guess > secret_Number ? "📈 Too High! " : "📉 Too Low! ");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage('"🥲 You Lose the Game!"');
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // Resetting the score
  score = 20;
  document.querySelector(".score").textContent = score;

  //  Updaing the message

  displayMessage("Start guessing...");

  //  Hiding the secret number again

  document.querySelector(".number").textContent = "?";

  // Updaing the value of the guess

  document.querySelector(".guess").textContent = " ";
  // Resetting backgroud color
  document.querySelector("body").style.backgroundColor = "#222";
  // Resetting width
  document.querySelector(".number").style.width = "15rem";
});
