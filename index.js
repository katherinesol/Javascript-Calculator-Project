// **Array to store calculation history-calculator is empty intially**
let calculationHistory = [];

/**
 **Adds a calculation to the history array**
 **parameter {number} num1 - uses your first input number**
 **parameter {string} operator - uses math symbol (+, -, *, /)**
 **parameter {number} num2 - Uses your second input number**  
 **parameter {number} result - Saves your calculated result*
 */
function addToHistory(num1, operator, num2, result) {
    const calcObj = {
        operands: [num1, num2],
        operator: operator,
        result: result
    };
    calculationHistory.push(calcObj);
}

/**
 **Addition and history tracking**
 */
function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
        return "Error: Invalid input";
    }
    const result = num1 + num2;
    addToHistory(num1, '+', num2, result);
    return result;
}

/**
 **Subtraction and history tracking**
 */
function subtract(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
        return "Error: Invalid input";
    }
    const result = num1 - num2;
    addToHistory(num1, '-', num2, result);
    return result;
}

/**
 **Multiplication and history tracking**
 */
function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
        return "Error: Invalid input";
    }
    const result = num1 * num2;
    addToHistory(num1, '*', num2, result);
    return result;
}

/**
 **Division and history tracking**
 */
function divide(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
        return "Error: Invalid input";
    }
    if (num2 === 0) {
        return "Error: Division by zero";
    }
    const result = num1 / num2;
    addToHistory(num1, '/', num2, result);
    return result;
}

/**
 **Calculation message displays**
 */
function displayHistory() {
    if (calculationHistory.length === 0) {
        console.log("No stored calculations.");
        return;
    }
    
    console.log("Calculation History:");
    calculationHistory.forEach((calc, index) => {
        const { operands, operator, result } = calc;
        console.log(`${index + 1}. ${operands[0]} ${operator} ${operands[1]} = ${result}`);
    });
}

