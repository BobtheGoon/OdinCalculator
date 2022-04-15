function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    if (num2 != 0){
        return num1 / num2
    }
    else {
        return 'Dont you try that shiz in here'
    }
}

function powerOf(num1, num2) {
    return num1**num2
}

function operate(operator, num1, num2) {
    return operator(num1, num2)
}

num1 = null;
num2 = null;

buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    })
});
