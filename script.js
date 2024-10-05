
let screen = document.getElementById('screen');

// Append characters to the screen
function appendToScreen(value) {
    screen.value += value;
}

// Clear the screen
function clearScreen() {
    screen.value = '';
}

// Delete the last character from the screen
function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

// Perform the calculation
function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
    }
}