function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let num1;
let operator;
let num2;

function operate(opr, a, b) {
  switch (opr) {
    case "+":
      add(a, b);
    case "-":
      substract(a, b);
    case "x":
      multiply(a, b);
    case "/":
      divide(a, b);
  }
}
