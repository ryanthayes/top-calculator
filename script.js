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

function calculate() {
    let computation 
    let a = parseFloat(previousOperand);
    let b = parseFloat(currentOperand);
    if (isNaN(a) || isNaN(b)) return
    if (operator === '+') {
        computation = a + b;
    }
    if (operator === '-') {
        computation = a - b;
    }
    if (operator === 'x') {
        computation = a * b;
    }
    if (operator === '÷') {
        if (b === 0) {
            displayValue.textContent = 'Error Will Robinson';
            return
        }
        computation = a / b;
    }
    if (operator === '%') {
        computation = a % b;
    }
    currentOperand = computation;
    previousOperand = '';
    operator = '';
    updateDisplay();
    console.log(currentOperand);
};

function appendNumber(number) {
    if(currentOperand.length<= 10) {
        if (number === '.' && currentOperand.includes('.')) return // Prevents multiple decimals from being typed
        currentOperand += number; // += displays each additional number 
    }
    updateDisplay();
}

function chooseOperation(operation) {
    if (operator != null) calculate();
    operator = operation;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function clear() {
    displayValue.textContent = 0;
    currentOperand = '';
    previousOperand = '';
    operator = undefined;
}

function del() {
    currentOperand = currentOperand
        .toString()
        .slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    displayValue.textContent = currentOperand || operator;
}

// Event listeners
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
    calculate();
});
allClearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', del);