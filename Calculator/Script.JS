const inputBox = document.getElementById('input');
const expressionDiv = document.getElementById('expression');
const resultDiv = document.getElementById('result');
const clearBtn = document.getElementById('clear');
const negateBtn = document.getElementById('negate');
const modBtn = document.getElementById('mod');
const divisionBtn = document.getElementById('division');
const numberBtn = document.querySelectorAll('.number'); 
const multipicationBtn = document.getElementById('multipication');
const subtractionBtn = document.getElementById('subtraction');
const additionBtn = document.getElementById('addition');
const decimalBtn = document.getElementById('decimal');
const backSpaceBtn = document.getElementById('backspace');
const equalBtn = document.getElementById('equal');

let expression = "";

function updateDisplay() {
    expressionDiv.textContent = expression;
}

function clear() {
    expression = "";
    resultDiv.textContent = "";
    updateDisplay();
}

function negate() {
    if (expression) {
        expression = `-(${expression})`;
        updateDisplay();
    }
}

function mod() {
    expression += '%';
    updateDisplay();
}

function division() {
    expression += '/';
    updateDisplay();
}

function multipication() {
    expression += '*';
    updateDisplay();
}

function subtraction() {
    expression += '-';
    updateDisplay();
}

function addition() {
    expression += '+';
    updateDisplay();
}

function equal() {
    try {
        resultDiv.textContent = eval(expression);
    } catch {
        resultDiv.textContent = "Error";
    }
}

function backspace() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function decimal() {
    expression += '.';
    updateDisplay();
}

clearBtn.addEventListener('click', clear);
negateBtn.addEventListener('click', negate);
modBtn.addEventListener('click', mod);
divisionBtn.addEventListener('click', division);
multipicationBtn.addEventListener('click', multipication);
subtractionBtn.addEventListener('click', subtraction);
additionBtn.addEventListener('click', addition);
equalBtn.addEventListener('click', equal);
backSpaceBtn.addEventListener('click', backspace);
decimalBtn.addEventListener('click', decimal);

numberBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        expression += btn.textContent;
        updateDisplay();
    });
});
