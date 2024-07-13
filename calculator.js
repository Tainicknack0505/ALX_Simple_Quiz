
// Implementing Arithmetic Functions:

// Addition Function
function add(num1, num2) {
    return num1 + num2;
}

// Subtraction Function
function subtract(num1, num2) {
    return num1 - num2;
}

// Multiplication Function
function multiply(num1, num2) {
    return num1 * num2;
}

// Division Function
function divide(num1, num2) {
    if (num2 === 0) {
        return 'Error: Cannot divide by Zero';
    }
    return num1 / num2;
}

// Attaching Event Listeners:

// Event Listeners For Addition Operation
document.getElementById('add').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value) || 0;
    let num2 = parseFloat(document.getElementById('num2').value) || 0;
    let result = add(num1, num2);
    document.getElementById('calculation-result').textContent = result;
});

// Event Listeners For Subtraction Operation
document.getElementById('subtract').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value) || 0;
    let num2 = parseFloat(document.getElementById('num2').value) || 0;
    let result = subtract(num1, num2);
    document.getElementById('calculation-result').textContent = result;
});

// Event Listeners For Multiplication Operation
document.getElementById('multiply').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value) || 0;
    let num2 = parseFloat(document.getElementById('num2').value) || 0;
    let result = multiply(num1, num2);
    document.getElementById('calculation-result').textContent = result;
});

// Event Listeners For Division Operation
document.getElementById('divide').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value) || 0;
    let num2 = parseFloat(document.getElementById('num2').value) || 0;
    let result = divide(num1, num2);
    document.getElementById('calculation-result').textContent = result;
});

