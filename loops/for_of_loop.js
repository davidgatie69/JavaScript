/*
We use for of loop for arrays. 
It is very hand way to iterate through an array;
 if we are not interested in the index of each element in the array.
*/

// Syntax
/*
 for(const element of arr) {
    //Code goes here
 }
 */
const numbers = [1,2,3,4,5]
for(const num of numbers) {
    console.log(num)
} // 1 2 3 4 5

for (const num of numbers){
    console.log(num**2) //1 4 9 16 25
}

// Summation
let sum = 0
for(const num in numbers) {
    sum += num
}
console.log(sum)    //15