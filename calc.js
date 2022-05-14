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
    return
}

function clearScreen() {
    solved = []
    current = []
}

function addNumberToCurrent(number){
    current.push(number)
}


//Main program
OPERATORS = ['add', 'subtract', 'multiply', 'divide', 'equals']
operating = false
solved = []
current = []

buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            clearScreen()
            console.log('clear screen')
        }

        else if (!isNaN(button.id)) {
            
        }

        else if (OPERATORS.includes(button.id)) {
            console.log('operator')
        }
    })
})