const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.getElementById('btn-equals')
const clearButton = document.getElementById('btn-clear')
const deleteButton = document.getElementById('btn-delete')
const pointButton = document.getElementById('btn-point')

const screenOutput = document.querySelector('screen-output');

let a = 2;
let b = 3;
let firstNumber = a;
let secondNumber = b;
let operator = '';

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

console.log(`a + b = ${add(a, b)}`);
console.log(`a - b = ${subtract(a, b)}`);
console.log(`a * b = ${multiply(a, b)}`);
console.log(`a / b = ${divide(a, b)}`);

function operate(operator, firstNumber, secondNumber) {
    subtract();
}

// Event listeners
// numberButtons.addEventListener('click', function() {

// });