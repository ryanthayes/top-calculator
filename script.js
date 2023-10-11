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
    currentOperand = computation;
    previousOperand = '';
    operator = '';
    updateDisplay();
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
function keyboardInput (e) {
    if (e.key >= 0 && e.key<= 9 || e.key === '.') appendNumber(e.key);
    if (e.key === '=' || e.key === 'Enter') calculate();
    if (e.key === 'Backspace') del();
    if (e.key === 'Escape') clear();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
    chooseOperation(convertOperator(e.key));
}
function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'
    if (keyboardOperator === '*') return 'x'
    if (keyboardOperator === '-') return '-'
    if (keyboardOperator === '+') return '+'
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

// Keyboard input
document.addEventListener('keydown', (e) => {
    if (e.key === '/') {
        e.preventDefault();
       }
    keyboardInput(e);
    }, false);