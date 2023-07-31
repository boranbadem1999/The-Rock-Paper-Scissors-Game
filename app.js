"use strict";
const gameH1 = document.querySelector(".h1-game");
const playTheGame = document.querySelector(".play-click");
const gameButtons = document.querySelectorAll(".game-buttons");
const gameParagraph = document.querySelector(".game-paragraph");
const resultDisplay = document.querySelector(".result-display");
const plyAgain = document.querySelector(".play-again");

let choiceOfUser;
let choiceOfComputer;

let userScore = 0;
let computerScore = 0;
plyAgain.classList.add("display-negative");

const ourResult = () => {
  switch (choiceOfUser + choiceOfComputer) {
    case "ScissorsPaper":
    case "RockScissors":
    case "PaperRock":
      resultDisplay.innerHTML = "YOU WIN";
      userScore++;
      break;
    case "PaperScissors":
    case "ScissorsRock":
    case "RockPaper":
      resultDisplay.innerHTML = "YOU LOSE";
      computerScore++;
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      resultDisplay.innerHTML = "NO ONE WINS !!";
      break;
  }

  gameH1.innerHTML = `Your Choice : ${choiceOfUser} <br><br> Computer's Choice: ${choiceOfComputer}`;
  resultDisplay.innerHTML += `<br><br> Your Score: ${userScore} <br> Computer Score: ${computerScore}`;

  if (userScore === 10) {
    resultDisplay.innerHTML +=
      "<br><br> Congratulations! You reached 10 points. You WON!";
    plyAgain.classList.remove("display-negative");
  } else if (computerScore === 10) {
    resultDisplay.innerHTML += "<br><br> Computer reached 10 points. You LOST!";
    plyAgain.classList.remove("display-negative");
  }
  resultDisplay.classList.remove("display-negative");
};

const disableButtons = () => {
  gameButtons.forEach((button) => {
    button.removeEventListener("click", handleClick);
    button.classList.add("negative-buttons");
  });
};

playTheGame.addEventListener("click", function () {
  playTheGame.classList.add("display-negative");
  gameParagraph.classList.add("display-negative");
  userScore = 0;
  computerScore = 0;

  const choices = ["Rock", "Paper", "Scissors"];

  const handleClick = (e) => {
    if (userScore < 10 && computerScore < 10) {
      choiceOfUser = e.target.textContent.trim();
      choiceOfComputer = choices[Math.floor(Math.random() * choices.length)];
      ourResult();

      if (userScore === 10 || computerScore === 10) {
        disableButtons();
      }
    }
  };

  gameButtons.forEach((button) => {
    button.classList.remove("negative-buttons");
    button.addEventListener("click", handleClick);
  });
});

plyAgain.addEventListener("click", function () {
  userScore = 0;
  computerScore = 0;
  resultDisplay.innerHTML = " ";
  gameH1.innerHTML = "";
  plyAgain.classList.add("display-negative");
});
