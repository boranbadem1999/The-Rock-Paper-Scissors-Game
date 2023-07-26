"use strict";
const gameH1 = document.querySelector(".h1-game");
const playTheGame = document.querySelector(".play-click");
const gameButtons = document.querySelectorAll(".game-buttons");
const gameParagraph = document.querySelector(".game-paragraph");
const resultDisplay = document.querySelector(".result-display");

let choiceOfUser;
let choiceOfComputer;

const ourResult = () => {
  switch (choiceOfUser + choiceOfComputer) {
    case "ScissorsPaper":
    case "RockScissors":
    case "PaperRock":
      resultDisplay.innerHTML = "YOU WIN";
      break;
    case "PaperScissors":
    case "ScissorsRock":
    case "RockPaper":
      resultDisplay.innerHTML = "YOU LOSE";
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      resultDisplay.innerHTML = "NO ONE WINS !!";
      break;
  }

  resultDisplay.classList.remove("display-negative");
};

playTheGame.addEventListener("click", function () {
  playTheGame.classList.add("display-negative");
  gameParagraph.classList.add("display-negative");

  const choices = ["Rock", "Paper", "Scissors"];

  const handleClick = (e) => {
    choiceOfUser = e.target.textContent.trim();
    choiceOfComputer = choices[Math.floor(Math.random() * choices.length)];
    gameH1.innerHTML = `Our Choice : ${choiceOfUser} <br><br> Computer's Choice: ${choiceOfComputer}`;
    ourResult();
  };

  gameButtons.forEach((button) => {
    button.classList.remove("negative-buttons");
    button.addEventListener("click", handleClick);
  });
});
