//Math functions
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
//Math functions end

//Function for performing the provided operator selection on the num1 and num2 variables
function operate(operator, num1, num2) {
    num1 = returnFullNum(num1)
    num2 = returnFullNum(num2)

    if (operator == 'add') {
        equals = add(num1, num2)
    }

    else if (operator == 'subtract') {
        equals = subtract(num1, num2)
    }

    else if (operator == 'multiply') {
        equals = multiply(num1, num2)
    }

    else if (operator == 'division') {
        equals = divide(num1, num2)
    }

    return equals
}


//Function for clearing the contents of the calculator and resetting the num1 and num2 arrays
function clearScreen() {
    current = document.querySelector('#current');
    current.textContent = ''

    solved = document.querySelector('#solved');
    solved.textContent = ''

    num1 = []
    num2 = []
}


//Function for updating the display with the provided numbers to the current and solved locations
function updateScreen(num1, num2) {
    fullNumber = returnFullNum(num1)

    current = document.querySelector('#current');
    current.textContent = fullNumber;

    fullNumber2 = returnFullNum(num2)

    solved = document.querySelector('#solved');
    solved.textContent = fullNumber2;
}


//Concatenates the contents of the provided num1 or num2 array into a number
function returnFullNum(array) {
    fullNumber = '';
    for (number of array) {
        fullNumber += number;
    }

    return fullNumber
}


//Starting condition
OPERATORS = ['add', 'subtract', 'multiply', 'division']
num1 = []; //Array for storing user inputted numbers
num2 = []; //Array for storing previos number/calculation results
operating = false //boolean which determines if a a calculation is in process


buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            clearScreen();
            operating = false;
            }

        else if (!isNaN(button.id)) {
            if (+button.id === 0 && num1.length === 0) {
                console.log('cannot start with 0')
                }
            else {
                num = +button.id
                num1.push(num)
                updateScreen(num1, num2)
                }
            }

        else if (OPERATORS.includes(button.id)) {
            if (!operating) { 
                num2 = returnFullNum(num1);
                num1 = [];
                updateScreen(num1, num2);
                operating = true;
                }
            }

            else if (button.id === 'equals') {
                //work here
            }

            else if (operating) {
                num1 = returnFullNum(num1)
                num2 = returnFullNum(num2)
            
                answer = operate(button.id, num1, num2)
                updateScreen(null, answer)

                operating = false
                }
        })
});
