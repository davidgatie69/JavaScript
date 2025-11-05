//SYNTAX

// Declaring a function without a parameter
function functionName() {
    //Code goes here
}

functionName()  // calling a function by its name and parenthesis


// Function without parameters, and makes a number square
function square() {
    let num = 2
    let sq = num **2
    console.log(sq)
}

square()

// function without parameters
function addTwoNumbers(){
    let numOne = 25
    let numTwo = 63
    let sum = numOne + numTwo

    console.log(sum)
}

addTwoNumbers()

function printFullName() {
    let firstName = 'Litmus'
    let lastName = 'Gatie'
    let space = ' '

    let fullName = firstName + space + lastName
    console.log(fullName)
}

printFullName()

// Function Returning a Value
/*
    If a function does not return a value, the value of the function is undefined
*/ 

function print_full_name(){
    let first_name = 'Litmus'
    let last_name = 'Gatie'
    let space = ' '
    let fullName = first_name + space + last_name
    return fullName
}

console.log(print_full_name())

function addTwoNumbers(){
    let numOne = 25
    let numTwo = 63
    let sum = numOne + numTwo

    return sum
}

console.log(addTwoNumbers())