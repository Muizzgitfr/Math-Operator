function performMathOperation() {
    // Get user inputs
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    // Check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }

    // Get the user's choice of operation
    let operation = prompt("Choose an operation: +, -, *, /");

    let result;

    // Perform the chosen operation
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero";
            break;
        default:
            alert("Invalid operation chosen. Please choose +, -, *, or /.");
            return;
    }

    // Show the result in an alert box
    alert(`Result of ${num1} ${operation} ${num2} is: ${result}`);
}