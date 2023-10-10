// Global variables
let operator = '';
let currentOperand = '';
let previousOperand = '';

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-clear]')
const deleteButton = document.querySelector('[data-delete]')

const displayValue = document.querySelector('[data-screen-output]')

// Basic math functions
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate() {
    let a = previousOperand;
    let b = currentOperand;
    console.log("a = ", a)
    console.log("b = ", b)

    if (operator === '+') {
        return add(a, b);
    }
    if (operator === '-') {
        return subtract(a, b);
    }
    if (operator === '*') {
        return multiply(a, b);
    }
    if (operator === '/') {
        return divide(a, b);
    }
};

function clear() {
    displayValue.textContent = 0;
    currentOperand = '';
    previousOperand = '';
    operator = undefined;
}
function del() {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay();
}
function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return
    currentOperand += number; // += displays additional numbers as they are clicked
    updateDisplay();
}
function chooseOperation(operation) {
    if (currentOperand === '') return
    if (previousOperand !== '') {
        operate();
    }
    operator = operation;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function updateDisplay() {
    displayValue.textContent = currentOperand || operator;
}

// Event listeners
// Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable
numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
    appendNumber(e.target.textContent);
})
});

operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        chooseOperation(e.target.textContent);
})
});
equalsButton.addEventListener('click', () => {
    operate();
});
allClearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', del);

// function helloWorld() {
//     alert("Hello, World!");
// }