let displayValue = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';
let result = '';

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

function setOperator(op) {
  operator = op;
  firstOperand = displayValue;
  displayValue = '';
}

function calculate() {
  secondOperand = displayValue;
  firstOperand = parseFloat(firstOperand);
  secondOperand = parseFloat(secondOperand);

  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      if (secondOperand !== 0) {
        result = firstOperand / secondOperand;
      } else {
        result = 'Ошибка';
      }
      break;
    default:
      result = '';
  }

  displayValue = result.toString();
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  firstOperand = '';
  secondOperand = '';
  operator = '';
  result = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}
