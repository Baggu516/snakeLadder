let currentPlayer = 1;
let messageDiv = document.createElement("div");
document.querySelector(".dice-div").appendChild(messageDiv);

let playerOneDiv = document.createElement("div");
playerOneDiv.style.height = "10px";
playerOneDiv.style.width = "10px";
playerOneDiv.style.backgroundColor = "red";
let playerOneCount = 0;

let playerTwoDiv = document.createElement("div");
playerTwoDiv.style.height = "10px";
playerTwoDiv.style.width = "10px";
playerTwoDiv.style.backgroundColor = "blue";
let playerTwoCount = 0;

function updateMessage(msg) {
  messageDiv.textContent = msg;
}

function rollDice() {
  const diceNumber = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice").src = `dice${diceNumber}.svg`;
  return diceNumber;
}

function playerOneRoll() {
  if (currentPlayer !== 1) return;

  let roll = rollDice();
  updateMessage(`Player 1 rolled a ${roll}`);

  if (playerOneCount + roll <= 100) {
    playerOneCount += roll;
  }

  // Snakes & Ladders
  if (playerOneCount === 30) playerOneCount -= 29;
  if (playerOneCount === 4) playerOneCount += 21;

  let title = document.querySelector(`.title${playerOneCount}`);
  title.appendChild(playerOneDiv);

  if (roll === 6) {
    updateMessage("Player 1 got a 6! Roll again.");
    return;
  }

  currentPlayer = 2;
  updateMessage("Player 2's turn.");
}

function playerTwoRoll() {
  if (currentPlayer !== 2) return;

  let roll = rollDice();
  updateMessage(`Player 2 rolled a ${roll}`);

  if (playerTwoCount + roll <= 100) {
    playerTwoCount += roll;
  }

  // Snakes & Ladders
  if (playerTwoCount === 30) playerTwoCount -= 29;
  if (playerTwoCount === 4) playerTwoCount += 21;
  if (playerTwoCount === 17) playerTwoCount -= 10;
  if (playerTwoCount === 9) playerTwoCount += 21;

  let title = document.querySelector(`.title${playerTwoCount}`);
  title.appendChild(playerTwoDiv);

  if (roll === 6) {
    updateMessage("Player 2 got a 6! Roll again.");
    return;
  }

  currentPlayer = 1;
  updateMessage("Player 1's turn.");
}
