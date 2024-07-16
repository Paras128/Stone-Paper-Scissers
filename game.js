let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const getcompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const playGame = (userChoice) => {
  const compChoice = getcompChoice();
  
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

const drawGame = () => {
  msg.innerText = "It's a Draw! Try Again.";
  msg.style.backgroundColor = "#081b31";
  msg.classList.remove('winner', 'loser');
};

const showWinner = (userWin, userChoice, compChoice) => {
  msg.classList.remove('winner', 'loser');  // Reset classes
  if (userWin) {
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = `You Win! ${capitalize(userChoice)} beats ${capitalize(compChoice)}.`;
    msg.classList.add('winner');
    msg.style.backgroundColor = "#27ae60"
  } else {
    compScore++;
    compScorepara.innerText = compScore;
    msg.innerText = `You Lose! ${capitalize(compChoice)} beats ${capitalize(userChoice)}.`;
    msg.classList.add('loser');
    msg.style.backgroundColor = "#c0392b"
  }
};

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});