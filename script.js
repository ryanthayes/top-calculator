const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.getElementById('btn-equals')
const clearButton = document.getElementById('btn-clear')
const deleteButton = document.getElementById('btn-delete')
const pointButton = document.getElementById('btn-point')

const screenOutput = document.querySelector('screen-output');

let a = 10;
let b = 8;
let operator = '';
let firstNumber = a;
let secondNumber = b;

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
// numberButtons.addEventListener('click', function() {

// });