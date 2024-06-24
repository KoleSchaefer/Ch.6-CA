function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}

function calculateSin() {
    const display = document.getElementById('display');
    try {
        display.innerText = Math.sin(eval(display.innerText));
    } catch {
        display.innerText = 'Error';
    }
}

function calculateCos() {
    const display = document.getElementById('display');
    try {
        display.innerText = Math.cos(eval(display.innerText));
    } catch {
        display.innerText = 'Error';
    }
}

function calculateTan() {
    const display = document.getElementById('display');
    try {
        display.innerText = Math.tan(eval(display.innerText));
    } catch {
        display.innerText = 'Error';
    }
}

function calculateSqrt() {
    const display = document.getElementById('display');
    try {
        display.innerText = Math.sqrt(eval(display.innerText));
    } catch {
        display.innerText = 'Error';
    }
}
