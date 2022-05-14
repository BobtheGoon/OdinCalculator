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
    return num1 / num2
} 

//Program functions
function operate(operation, num1, num2) {
    if (operation === 'add') {
        solution = add(num1, num2)
    }

    else if (operation === 'subtract') {
        solution = subtract(num1, num2)
    }

    else if (operation === 'multiply') {
        solution = multiply(num1, num2)
    }

    else if (operation === 'divide') {
        solution = divide(num1, num2)
    }

    else if (operation === 'equals') {
        return
    }

    return solution
}

function clearScreen() {
    solved = []
    current = []
}

function addNumberToCurrent(number){
    current += number
}

function startsWithZero(){
    if (current.length > 0) {
        return false
    }
    return true
}

function updateCurrentDisplay(){
    return
}


//Main program
OPERATORS = ['add', 'subtract', 'multiply', 'divide', 'equals']
operating = false
solved = ''
current = ''

buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            clearScreen()
            console.log('clear screen')
        }

        else if (!isNaN(button.id)) {
            if (button.id === '0' && startsWithZero()) {
                console.log('cannot start with zero')
            }
            else {
                addNumberToCurrent(button.id)
                console.log(current)
            }
        }

        else if (OPERATORS.includes(button.id)) {
            console.log('operator')
        }
    })
})