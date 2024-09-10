function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let addition = add(num1, num2);
        let subtraction = subtract(num1, num2);
        let division = divide(num1, num2);
        let multiplication = multiply(num1, num2);

        // Display the result
        displayResult(addition, subtraction, division, multiplication);
    } else {
        displayResult('Please enter valid numbers');
    }
}
function add(a, b) {
    // Introduce a debugger statement to pause execution
debugger;
    // Add the numbers
    return a + b;
}
function subtract(a, b) {
    // Introduce a debugger statement to pause execution
debugger;
    // Add the numbers
    return a - b;
}
function divide(a, b) {
    // Introduce a debugger statement to pause execution
debugger;
    // Divide the numbers
    if (b !== 0) {
        return a / b;
    } else {
        return 'Division by zero error';
    }
}
function multiply(a, b) {
// Introduce a debugger statement to pause execution
debugger;

// Multiply the numbers
return a * b;
}
function displayResult(addition, subtraction, division, multiplication) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>The result of the addition is: ${addition}</p>
        <p>The result of the subtraction is: ${subtraction}</p>
        <p>The result of the division is: ${division}</p>
        <p>The result of the multiplication is: ${multiplication}</p>
    `;
}