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

function remainder(a, b) {
  return a % b;
}

let num1 = "";
let operator = "";
let num2 = "";

function operate(opr, a, b) {
  switch (opr) {
    case "+":
      return add(a, b);
    case "-":
      return substract(a, b);
    case "x":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    case "%":
      return remainder(a, b);
  }
}

let numberBtn = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
console.log(operators);
let equal = document.querySelector("#equal");
let zero = document.querySelector("#zero");
let display = document.querySelector("#display");

numberBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;
    display.textContent += value;
  });
});

operators.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("clickeo");
    if (operator === "") {
      num1 = Number(display.innerText);
      console.log("num1 antes:", num1);
      operator = btn.innerText;
      console.log("operator:", btn.innerText);
      display.innerText = "";
      console.log("display:", display.innerText);
    }
  });
});

equal.addEventListener("click", () => {
  console.log("click equal");
  if (display.innerText !== "") {
    num2 = Number(display.innerText);
    console.log(num2);
    console.log(`el num1 es ${num1}`);
    console.log(`el operador es ${operator}`);
    result = operate(operator, num1, num2);
    console.log(result);
    display.innerText = result;
  }
});
