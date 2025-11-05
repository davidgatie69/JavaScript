// Syntax
/*
for (initialization; condition; increment/decrement){
    Code to execute
}
*/

for (let i = 0; i<=10; i++){
    console.log(i)
}
// 0,1,2,3,4,5,6,7,8,9,10

//Squares
for(let i=1;i<=10;i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}

// Countries
const countries = ['Uganda', 'Rwanda', 'Kenya', 'Tanzania', 'Burundi']
const arr = []
for (let i=0;i <countries.length; i++) {
    arr.push(countries[i].toUpperCase())
}

// Adding elements to an array
const numbers = [1,2,3,4,5]
let sum = 0
for(let i = 0; i< numbers.length; i++){
    sum += numberss[i]
}

console.log(sum)    //15

// Creating new array based on the existing array
const more_numbers = [1,2,3,4,5]
const newArr = []
let newSum = 0
for(let i=0; i<more_numbers.length; i++){
    newArr.push(more_numbers[i] ** 2)
}

console.log(newArr) // [1, 4, 9, 16, 25]
