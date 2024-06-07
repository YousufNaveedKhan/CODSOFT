document.addEventListener('DOMContentLoaded', () => {
    // Get references to the display and operator divs
    const display = document.getElementById('display');
    const operatorDiv = document.getElementById('operator');
    const buttons = document.querySelectorAll('.btn');

    // Initialize calculator state
    let firstOperand = null;
    let operator = null;
    let shouldOverwriteDisplay = true;

    // Add event listeners to number and decimal buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;
            if (value >= '0' && value <= '9') {
                handleNumber(value);
            } else if (value === '.') {
                handleDecimal();
            }
        });
    });

    // Add event listeners to operator buttons
    document.querySelectorAll('.operators').forEach(button => {
        button.addEventListener('click', () => {
            const op = button.textContent;
            chooseOperator(op);
        });
    });

    // Add event listeners to equal and clear buttons
    document.querySelector('.equal').addEventListener('click', calculate);
    document.querySelector('.clear').addEventListener('click', clearDisplay);

    // Handle number button click
    function handleNumber(number) {
        if (shouldOverwriteDisplay) {
            display.value = number;
            shouldOverwriteDisplay = false;
    } else {
        display.value += number;
        }
    }

    // Handle decimal button click
    function handleDecimal() {
        if (shouldOverwriteDisplay) {
            display.value = '0.';
            shouldOverwriteDisplay = false;
        } else if (!display.value.includes('.')) {
            display.value += '.';
        }
    }

    // Handle operator button click
    function chooseOperator(op) {
        if (firstOperand === null) {
            firstOperand = parseFloat(display.value);
        } else if (!shouldOverwriteDisplay) {
            firstOperand = calculate();
        }

        operator = op;
        operatorDiv.textContent = operator;
        shouldOverwriteDisplay = true;
    }

    // Perform calculations
    function calculate() {
        if (firstOperand === null || operator === null) return;
        const secondOperand = parseFloat(display.value);
        let result;
        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
            default:
                return;
        }

        display.value = result;
        firstOperand = result;
        operator = null;
        operatorDiv.textContent = '';
        shouldOverwriteDisplay = true;
        return result;
    }

    // Clear the display and reset calculator state
    function clearDisplay() {
        display.value = '';
        firstOperand = null;
        operator = null;
        operatorDiv.textContent = '';
        shouldOverwriteDisplay = true;
    }
});