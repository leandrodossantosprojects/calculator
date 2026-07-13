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
  if (b === 0) {
    return imposible;
  } else {
    return a / b;
  }
}

function remainder(a, b) {
  if (b === 0) {
    return imposible;
  } else {
    return a % b;
  }
}

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
let result = "";
let imposible = "You can't divide between zero";

let numberBtn = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
console.log(operators);
let equal = document.querySelector("#equal");
let zero = document.querySelector("#zero");
let backspace = document.querySelector("#backspace");
let display = document.querySelector("#display");
let dot = document.querySelector("#dot");
let operatorsValues = [];
for (let values of operators) {
  operatorsValues.push(values.innerText);
}
console.log(operatorsValues);
let num1 = "";
let num2 = "";
let operator = "";

function numbersInsert(value) {
  if (operator !== "") {
    display.innerText = "";
    num2 += value;
    display.innerText = num2;
  } else if (result !== "") {
    result = "";
    display.innerText = "";
    display.innerText += value;
  } else {
    display.innerText += value;
  }
}

function operatorInsert(value) {
  if (display.innerText !== "") {
    if (operator === "") {
      operator = value;
      console.log("operator is " + operator);
      num1 = display.innerText;
      display.innerText += value;
      display.style.fontSize = "64px";
    }
  }
}

function dotInsert(value) {
  if (num2 !== "") {
    if (!display.innerText.includes(value)) {
      num2 += value;
      display.innerText = num2;
    }
  } else {
    if (!display.innerText.includes(value)) {
      display.innerText += value;
    }
  }
}

function equalOp() {
  num1 = num1 === "" ? NaN : Number(num1);
  num2 = num2 === "" ? NaN : Number(num2);
  if (operator !== "" && !isNaN(num2)) {
    result = operate(operator, num1, num2);
    if (result === imposible) {
      display.style.fontSize = "24px";
      display.innerText = imposible;
      operator = "";
    } else {
      display.innerText = result;
      console.log(`${num1}${operator}${num2}=${result}`);
      num1 = "";
      num2 = "";
      operator = "";
    }
  }
}

function deleteAll() {
  display.innerText = "";
  num1 = "";
  num2 = "";
  operator = "";
  result = "";
}

function backspaceDelete() {
  if (display.innerText.endsWith(operator)) {
    operator = "";
    display.innerText = display.innerText.slice(
      0,
      display.innerText.length - 1,
    );
  } else if (num2 !== "") {
    display.innerText = display.innerText.slice(
      0,
      display.innerText.length - 1,
    );
    num2 = num2.slice(0, num2.length - 1);
  } else {
    display.innerText = display.innerText.slice(
      0,
      display.innerText.length - 1,
    );
  }
}

operators.forEach((btn) => {
  btn.addEventListener("click", () => operatorInsert(btn.innerText));
});

numberBtn.forEach((btn) => {
  btn.addEventListener("click", () => numbersInsert(btn.innerText));
});

dot.addEventListener("click", () => {
  dotInsert(dot.innerText);
  console.log(dot.innerText);
});

equal.addEventListener("click", equalOp);

zero.addEventListener("click", deleteAll);

backspace.addEventListener("click", backspaceDelete);

document.addEventListener("keyup", (e) => {
  console.log(e.key);
  if (Number.isInteger(Number(e.key))) {
    numbersInsert(e.key);
  } else if (operatorsValues.some((value) => value === e.key)) {
    operatorInsert(e.key);
  } else if (e.key === dot.innerText) {
    dotInsert(e.key);
  } else if (e.key === equal.innerText || e.key === "Enter") {
    equalOp();
  } else if (e.key === "Backspace") {
    backspaceDelete();
  } else if (e.key === "Delete" || e.key === "c") {
    deleteAll();
  }
});
