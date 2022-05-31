// Global variables
let displayValue = 0;
let numFirst = 0;
let numSecond = 0;
let exists = false; 
let operator = "none";
let start = false;

// variable declarations

const container = document.getElementById('container');
const display = document.getElementById('display');

// Add event listeners to keys
function addListeners() {
    const keys = document.querySelectorAll('.key');
    keys.forEach((key) => {
        if (key.classList.contains('num')) {
            key.addEventListener('click', () => {
                handleNumber(key.textContent);
            });
        }
        else if (key.classList.contains('oper')) {
            key.addEventListener('click', () => {
                handleOper(key.textContent);
            });
        }
        else if (key.id === 'ac-button') {
            key.addEventListener('click', () => {
                handleAc();
            });
        }
        else if (key.id === 'clear-button') {
            key.addEventListener('click', () => {
                handleClear();
            });
        }
        else if (key.id === 'equals-button') {
            key.addEventListener('click', () => {
                handleEquals();
            });
        }
    })

    document.addEventListener('keypress', (e) => {
        if (e.key == "1" || e.key == "2" || e.key == "3" || 
        e.key == "4" || e.key == "5" || e.key == "6" ||
        e.key == "7" || e.key == "8" || e.key == "9" || 
        e.key == "0" || e.key == ".") handleNumber(e.key);
        if (e.key == "+" || e.key == "-"  || e.key == "*" ||
        e.key == "/") handleOper(e.key);
        if (e.key == "Enter") handleEquals();
        if (e.key == "backspace") handleClear();
    })
}

// Handle the keypresses
function handleNumber(num) {
    displayValue *= 10;
    displayValue += parseInt(num);
    changeDisplay();
    start = true;
}

function handleOper(oper) {
    if (start) {
        if (!exists) {
            numFirst = displayValue;
            displayValue = 0;
            exists = true;
            operator = oper;
            changeDisplay();
        }
        else {
            numFirst = operate(operator, numFirst, displayValue);
            operator = oper;
            displayValue = 0;
            changeDisplay();
        }
    }
}

function handleAc() {
    displayValue = 0;
    numFirst = 0;
    numSecond = 0;
    exists = false; 
    operator = "none";
    start = false;
    changeDisplay();
}

function handleClear() {
    console.log('Clear');
}

function handleEquals() {
    if (start) {
        if (operator === "none") {
            displayValue = 0;
            changeDisplay();
            return;
        }

        displayValue = operate(operator, numFirst, displayValue);
        operator = "none";
        exists = false;
        changeDisplay();
    }
}

// Function to change display value
function changeDisplay() {
    display.textContent = displayValue;
}


// Operator Functions

function operate(operation, num1, num2) {
    switch(operation) {
        case '+':
            return addNumbers(num1, num2);
            break;
        case '-':
            return subNumbers(num1, num2);
            break;
        case '*':
            return multiNumbers(num1, num2);
            break;
        case '/':
            return divNumbers(num1, num2);
            break;
        default:
            return NaN;
    }
}

function addNumbers(num1, num2) {
    return num1 + num2;
}

function subNumbers(num1, num2) {
    return num1 - num2;
}

function multiNumbers(num1, num2) {
    return num1 * num2;
}

function divNumbers(num1, num2) {
    return num1 / num2;
}

// Main
window.onload = () => {
    changeDisplay();
    addListeners();
}