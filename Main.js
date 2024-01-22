var displayValue = "";
function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function updateDisplay() {
    const displayElement = document.getElementById('display');
    displayElement.value = displayValue;
    console.log(displayElement);
}


function calculate() {
    try {
        // Create a dynamic Function to evaluate the mathematical expression
        const expression = displayValue; // Assuming displayValue contains the mathematical expression
        const dynamicFunction = new Function('"use strict"; return ' + expression);

        // Invoke the dynamic function immediately to calculate the result
        const result = dynamicFunction();

        // Check if the result is a finite number
        if (isFinite(result)) {
            // Convert the result to a string and assign it to displayValue
            displayValue = result.toString();
        } else {
            // Handle non-finite result (e.g., division by zero)
            displayValue = "Error: Cannot divide by zero";

            // Update the display to reflect the error message
            updateDisplay();
            return; // Exit the function to avoid calling updateDisplay() again
        }
    } catch (error) {
        // Handle errors during execution (e.g., invalid mathematical expression)
        displayValue = "Error: Invalid input";
    }

    // Update the display to reflect the calculated result or error
    updateDisplay();
}

