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


function clearScreen() {
    current = document.querySelector('#current');
    current.textContent = ''

    solved = document.querySelector('#solved');
    solved.textContent = ''

    num1 = []
    num2 = []
}


function updateScreen() {
    fullNumber = returnFullNum(num1)

    current = document.querySelector('#current');
    current.textContent = fullNumber;

    fullNumber2 = returnFullNum(num2)

    solved = document.querySelector('#solved');
    solved.textContent = fullNumber2;
}


function returnFullNum(array) {
    fullNumber = '';
    for (number of array) {
        fullNumber += number;
    }

    return fullNumber
}



num1 = [];
num2 = [];
OPERATORS = ['add', 'subtract', 'multiply', 'division']

buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            clearScreen();
        }

        else if (!isNaN(button.id)) {
            if (+button.id === 0 && num1.length === 0) {
                console.log('cannot start with 0')
                }
            else {
                num = +button.id
                num1.push(num)
                updateScreen()
                }
            }

        else if (OPERATORS.includes(button.id)) {
            num2 = returnFullNum(num1)
            num1 = []
            updateScreen()
        }
        }
)});
