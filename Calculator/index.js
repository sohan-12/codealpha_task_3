let display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}


function appendOperator(operator) {
    let lastChar = display.value.slice(-1);
    if ("+-*/%".includes(lastChar)) return;
    display.value += operator;
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
        setTimeout(() => display.value = "", 1500);
    }
}

function clearDisplay() {
    display.value = "";
}


function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");
}
