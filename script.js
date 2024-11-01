let historyDisplay = document.getElementById("history");
let resultDisplay = document.getElementById("result");
let currentInput = "";
let history = "";

function appendNumber(number) {
  if (number === ".") {
    if (currentInput === "" || currentInput.includes(".")) return;
  }
  currentInput += number;
  resultDisplay.innerText = currentInput;
}

function appendOperator(operator) {
  if (currentInput === "") return;
  history += currentInput + " " + operator + " ";
  currentInput = "";
  historyDisplay.innerText = history;
}

function clearDisplay() {
  currentInput = "";
  history = "";
  resultDisplay.innerText = "0";
  historyDisplay.innerText = "";
}

function calculateResult() {
  history += currentInput;
  historyDisplay.innerText = history;
  try {
    resultDisplay.innerText = eval(history);
  } catch (error) {
    resultDisplay.innerText = "Error";
  }
  history = "";
  currentInput = resultDisplay.innerText;
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  resultDisplay.innerText = currentInput || "0";
}

function toggleSign() {
  if (currentInput === "") return;
  currentInput = -currentInput + "";
  resultDisplay.innerText = currentInput;
}
