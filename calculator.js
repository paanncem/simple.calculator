var currentValue = "";

function appendValue(value) {
    currentValue += value;
    document.getElementById('inputValue').value = currentValue;
}

function clearInput() {
    currentValue = "";
    document.getElementById('inputValue').value = currentValue;
}

function calculateConversion(operation) {
    var inputValue = parseFloat(currentValue);
    var result;

    switch (operation) {
        case 'add':
            result = inputValue + inputValue;
            break;
        case 'subtract':
            result = inputValue - inputValue;
            break;
        case 'multiply':
            result = inputValue * inputValue;
            break;
        case 'divide':
            result = inputValue / inputValue;
            break;
        case 'equals':
            result = inputValue; // You can add logic for equals operation if needed
            break;
        default:
            result = "Invalid operation";
            break;
    }

    document.getElementById('result').innerText = "Result: " + result;
    currentValue = ""; // Clear the current value after calculation
    document.getElementById('inputValue').value = currentValue;
}



