let winCount = 0;
let lossCount = 0;
let tieCount = 0;
let final = "?";
let playerPick = "";

const results = document.querySelector("#results");
const winDisplay = document.createElement("h4");
const lossDisplay = document.createElement("h4");
const tieDisplay = document.createElement("h4");
const fiveGames = document.createElement("h3");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", pickId);
});

function pickId(e) {
  console.log(e.path[0].id);
  playerPick = `${e.path[0].id}`;
  playRound();
}

function playRound() {
  let compPick = compChoice();
  console.log(compPick);

  if (playerPick === compPick) {
    tieCount = tieCount + 1;
    console.log(`You tied. Both chose ${compPick}.`);
  } else if (
    (playerPick === "rock" && compPick === "scissors") ||
    (playerPick === "paper" && compPick === "rock") ||
    (playerPick === "scissors" && compPick === "paper")
  ) {
    winCount = winCount + 1;
    console.log(
      `You won. You chose ${playerPick} and the computer chose ${compPick}.`
    );
  } else {
    lossCount = lossCount + 1;
    console.log(
      `You lost. You chose ${playerPick} and the computer chose ${compPick}.`
    );
  }

  winDisplay.classList.add("roundResult");
  winDisplay.textContent = `Number of wins "${winCount}".`;

  lossDisplay.classList.add("roundResult");
  lossDisplay.textContent = `Number of losses "${lossCount}".`;

  tieDisplay.classList.add("roundResult");
  tieDisplay.textContent = `Number of ties "${tieCount}".`;

  results.appendChild(winDisplay);
  results.appendChild(lossDisplay);
  results.appendChild(tieDisplay);

  if (winCount + tieCount + lossCount == 5 && winCount > lossCount) {
    final = "won,";
    winCount = 0;
    tieCount = 0;
    lossCount = 0;
  } else if (winCount + tieCount + lossCount == 5 && lossCount > winCount) {
    final = "lost,";
    winCount = 0;
    tieCount = 0;
    lossCount = 0;
  } else if (winCount + tieCount + lossCount == 5 && lossCount == winCount) {
    final = "tied,";
    winCount = 0;
    tieCount = 0;
    lossCount = 0;
  }

  fiveGames.classList.add("finalResult");
  fiveGames.textContent = `You ${final} at five rounds rps.`;

  results.appendChild(fiveGames);
}

function compChoice() {
  let compOptions = ["rock", "paper", "scissors"];
  return compOptions[Math.floor(Math.random() * compOptions.length)];
}
