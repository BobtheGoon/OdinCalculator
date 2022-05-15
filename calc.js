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
    num1 = +num1
    num2 = +num2

    if (operation === 'add') {
        solution = add(num1, num2)
    }

    if (operation === 'subtract') {
        solution = subtract(num1, num2)
    }

    if (operation === 'multiply') {
        solution = multiply(num1, num2)
    }

    if (operation === 'divide') {
        if (num2 === 0) {
            console.log('Wize guy eh?')
            return
        }
        solution = divide(num1, num2)
    }

    if (operation === 'equals') {
        return
    }

    return solution
}

function clearScreen() {
    solved = ''
    current = ''
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
    currentDisp = document.querySelector('#current')
    currentDisp.textContent = current
}

function updateSolvedDisplay(){
    solvedDisp = document.querySelector('#solved')
    solvedDisp.textContent = solved
}

function notSolving(){
    if (solved.length === 0) {
        return true
    }
    return false
}


//Main program
OPERATORS = ['add', 'subtract', 'multiply', 'divide']
operating = false
operator = ''
solved = ''
current = ''

//Button event listener
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
            }
        }

        else if (button.id === 'equals' || operating) {
            solved = operate(operator, solved, current)
            operating = false
            operator = ''
            current = ''
        }

        else if (OPERATORS.includes(button.id)) {
            if (solved === '') {
                solved = current
            }
            current = ''
            operator = button.id
            operating = true
        }

        //Update display at the end of the listener loop
        updateSolvedDisplay()
        updateCurrentDisplay()
        console.log('current = ' + current)
        console.log('solved = ' + solved)
        console.log('operator = ' + operator)
        console.log('operating = ' + operating)
        })
    })