const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.getElementById('btn-equals')
const clearButton = document.getElementById('btn-clear')
const deleteButton = document.getElementById('btn-delete')
const pointButton = document.getElementById('btn-point')


const screenOutput = document.querySelector('.screen-output')

let operator = '';
let firstNumber = '';
let secondNumber = '';

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

function operate(operator, a, b) {
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

// Event listeners
// Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable
numberButtons.forEach((button) => button.addEventListener('click', function () {
    screenOutput.innerText = button.innerText;
    
}));

// function helloWorld() {
//     alert("Hello, World!");
// }