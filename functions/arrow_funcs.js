const sumAllNums = (...args) => {
    console.log(args)
}

sumAllNums(1,2,3,4,5)

const sumAllNumbers = (...args) => {
    let sum = 0
    for (let i = 0; i < args.length; i++){
        sum += i
    }
    return sum
}

console.log(sumAllNumbers(1,2,3,4,5,6,7))
console.log(sumAllNumbers(1,2,3,4,7))

// ANONYMOUS FUNCTIONS
//functions without names

const annonymousFunc = function() {
    console.log('I am an annonymous function and my value is stored in annonymousFunc')
}


// EXPRESSION FUNCTIONS: Function without a name and is assigned to a variable. Should be called to return a value
const square = function(n) {
    return n*n
}

console.log(square(89))

// SELF-INVOKING FUNCTIONS: Annonymopus functions that don't need to be Called to return a Value

let m = (function(n) {
    console.log(n*n)
})(8)

let squaredNum = (function(n){
    return n**2
})(20)

// ARROW FUNCTIONS
const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}

const names = ['Litmus', 'David', 'Jeremy', 'Gatie']
console.log(changeToUpperCase(names))

const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}
console.log(printFullName('Litmus', 'Gatie'))

const printFullNameV1 = (firstName, lastName) => `${firstName} ${lastName}`
console.log(printFullNameV1('Jeremy', 'Dojo'))

// Functions with default Parameters
function greetings(name='Litmus'){
    let message = `${name}, welcome Here`
    return message
}

console.log(greetings())
console.log(greetings('Jeremy'))


function calculateAge(birthYear, currentYear = 2025){
    let age = currentYear - birthYear
    return age
}

console.log('Age: ', calculateAge(1973))

function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity + ' N' // the value has to be changed to string first
  return weight
}

console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon