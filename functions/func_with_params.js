// function with two paraments
function functionName(param1, param2) {     //Two arguments are needed to be passed inside parenthesis when calling the function
    // Code goes here
}

function addTwoNumbers(num1, num2){
    let sum = num1 + num2
    console.log(sum)
}

addTwoNumbers(2798, 7822)

//Function with many Parameters
// function functionName(param1, param2, param3, ...) {
//     //Code goes here
// }
// functionName(param1, param2, param3, ...)

function sumArrayValues(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

const numbers = [1,2,3,4,5,6,7,8]
// Calling the function
console.log(sumArrayValues(numbers))


const areaOfCircle = (radius) => {
    let area = Math.PI * radius**2;
    return area;
}
console.log(areaOfCircle(10))


// Function with Unlimited number of parameters

//Accessing the argument class
function sumAllNumbers() {
    console.log(arguments)
}
sumAllNumbers(3,56,90987,9876,987,54)

// Function Declaration
function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}

console.log(sumAllNums(56,5,8,68,46))
console.log(sumAllNums(11,23,565,47,8,55,86,597,9876,97,97,89))
console.log(sumAllNums(1,2,3,4))