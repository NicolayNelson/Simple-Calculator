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

if (display.innerText = 0) {
    display.innerText = null;
}

let numberBtns = [];
numberBtns.push(one, two, three, four, five, six, seven, eight, nine);
function displayNumber() {
  console.log(this.innerText);
  display.innerText += this.innerText;
}
for (let i = 0; i < numberBtns.length; i++) {
  numberBtns[i].addEventListener("click", displayNumber);
}
let operatorBtns = [];
operatorBtns.push(plus, minus, multiply, divide);
function displayOperator() {
  console.log(this.innerText);
  display.innerText += this.innerText;
}
for (let j = 0; j < operatorBtns.length; j++) {
  operatorBtns[j].addEventListener("click", displayOperator);
}

zero.addEventListener ("click", displayZero);
function displayZero(){
  console.log(this.innerText);
  display.innerText += this.innerText;
}

let firstItem = [];
firstItem.push(zero,plus,multiply,divide,equals);
function firstItemNumber () {
  if (display.innerText = null); {
    window.removeEventListener("click", display.innerText);
  }
  console.log(this.innerText);
  display.innerText != this.innerText;
}

equals.addEventListener("click", displayEquals);
function displayEquals () {
  console.log(this.innerText);
  display.innerText += this.innerText; {
  window.removeEventListener("click", numberBtns)
  };
}


clear.addEventListener("click", displayClear);
function displayClear(){
  console.log(this.innerText);
  display.innerText += this.innerText;
  if(display.innerText = null) {
    displayClear.preventDefault();
  }}
  
  // for (let n = 0; n < firstItem.length; n++) {
  //   firstItem.addEventListener("click", displayNumber);
  // }
  // if (display.innerText != null); {
  //   firstItem[n].removeEventListener("click", firstItem);