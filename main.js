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
    return "Imposible dvidir por zero";
  } else {
    return a / b;
  }
}

function remainder(a, b) {
  return a % b;
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

let numberBtn = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
console.log(operators);
let equal = document.querySelector("#equal");
let zero = document.querySelector("#zero");
let backspace = document.querySelector("#backspace");
let display = document.querySelector("#display");
let operatorsValues = [];
for (let values of operators) {
  operatorsValues.push(values.innerText);
}
console.log(operatorsValues);

numberBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;
    display.innerText += value;
  });
});

operators.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("clickeo");
    if (!operatorsValues.some((value) => display.innerText.includes(value))) {
      display.innerText += btn.textContent;
    }
  });
});

equal.addEventListener("click", () => {
  let operator = operatorsValues.find((value) =>
    display.innerText.includes(value),
  );
  console.log(operator);
  console.log("click equal");
  let num1extract = display.innerText.slice(
    0,
    display.innerText.indexOf(`${operator}`),
  );
  let num2extract = display.innerText.slice(
    display.innerText.indexOf(`${operator}` + 1),
  );
  num1 = num1extract === "" ? Nan : Number(num1extract);
  num2 = num2extract === "" ? Nan : Number(num2extract);
  console.log(`el operador es ${operator}`);
  console.log(`num1 es ${num1}`);
  console.log(`num2 es ${num2}`);
  if (operator !== "" && !isNaN(num2)) {
    result = operate(operator, num1, num2);
    console.log(result);
    display.innerText = result;
    operator = "";
  }
});

zero.addEventListener("click", () => {
  display.innerText = "";
});

backspace.addEventListener("click", () => {
  display.innerText = display.innerText.slice(0, display.innerText.length - 1);
});
