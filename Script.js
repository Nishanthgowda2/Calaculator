let displayValue = '';

function appendValue(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
    displayValue = display.innerText;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    displayValue = display.innerText.slice(0, -1);
    display.innerText = displayValue || '0';
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById('display').innerText = displayValue;
    } catch (e) {
        document.getElementById('display').innerText = 'Error';
        displayValue = '';
    }
}
