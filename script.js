let container = document.getElementById("container");
let calculator = document.getElementById("calculator");

let display = document.getElementById("display");

let zero = document.getElementById("button-0");
let one = document.getElementById("button-1");
let two = document.getElementById("button-2");
let three = document.getElementById("button-3");
let four = document.getElementById("button-4");
let five = document.getElementById("button-5");
let six = document.getElementById("button-6");
let seven = document.getElementById("button-7");
let eight = document.getElementById("button-8");
let nine = document.getElementById("button-9");
let plus = document.getElementById("button-plus");
let minus = document.getElementById("button-minus");
let multiply = document.getElementById("button-multiply");
let divide = document.getElementById("button-divide");
let equals = document.getElementById("button-equals");
let clear = document.getElementById("button-clear");

let last = document.getElementById("last-result");
let lastDis = document.getElementById("last-result-display");

let numberBtns = [];
numberBtns.push(zero, one, two, three, four, five, six, seven, eight, nine);

let operatorBtns = [];
operatorBtns.push(plus, minus, multiply, divide);

equals.addEventListener("click", displayEquals);

clear.addEventListener("click", displayClear);

enableNumberBtns();
enableOperatorBtns();

let firstItem = "";
let secondItem = "";
let operator = "";
let firstNumberEntered = false;
let isOperator = false;
let secondNumberEntered = false;
let result = null;

function displayNumber() {
  console.log(this.innerText);
  display.innerText += this.innerText;
  if (firstNumberEntered) {
    secondNumberEntered = true;
    secondItem += this.innerText;
  } else {
    firstItem += this.innerText;
  }
}

function displayOperator() {
  console.log(this.innerText);
  if (firstItem != "") {
    display.innerText += this.innerText;
    operator = this.innerText;
    firstNumberEntered = true;
    isOperator = true;
    disableOperatorBtns();
  }
}

function displayEquals() {
  if (secondNumberEntered) {
    console.log(this.innerText);
    display.innerText += this.innerText;
    disableNumberBtns();
    disableOperatorBtns();
    disableEquals();

    calculate();
  }
}
function calculate() {
  if (operator == "-") {
    result = parseInt(firstItem) - parseInt(secondItem);
  } else if (operator == "+") {
    result = parseInt(firstItem) + parseInt(secondItem);
  } else if (operator == "/") {
    result = parseInt(firstItem) / parseInt(secondItem);
  } else if (operator == "*") {
    result = parseInt(firstItem) * parseInt(secondItem);
  }
  display.innerText += result;
}

function firstItemNumber() {
  if (display.innerText == null);
  {
    window.removeEventListener("click", display.innerText);
  }
  console.log(this.innerText);
  display.innerText != this.innerText;
}

function enableNumberBtns() {
  for (let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener("click", displayNumber);
  }
}

function disableNumberBtns() {
  for (let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].removeEventListener("click", displayNumber);
  }
}

function enableOperatorBtns() {
  for (let j = 0; j < operatorBtns.length; j++) {
    operatorBtns[j].addEventListener("click", displayOperator);
  }
}

function disableOperatorBtns() {
  for (let j = 0; j < operatorBtns.length; j++) {
    operatorBtns[j].removeEventListener("click", displayOperator);
  }
}

function enableEquals() {
  equals.addEventListener("click", displayEquals);
}

function disableEquals() {
  equals.removeEventListener("click", displayEquals);
}

function displayClear() {
  display.innerText = "";
  enableNumberBtns();
  enableOperatorBtns();
  enableEquals();
  firstItem = "";
  secondItem = "";
  operator = "";
  firstNumberEntered = false;
  
}

// for (let n = 0; n < firstItem.length; n++) {
//   firstItem.addEventListener("click", displayNumber);
// }
// if (display.innerText != null); {
//   firstItem[n].removeEventListener("click", firstItem);
