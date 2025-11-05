const arr = []
let evenSum = 0
let oddSum = 0

for(let i = 0; i <= 100; i++){
    if (i%2==0){
        evenSum += i
    } else {
        oddSum += i
    }
}
arr.push(evenSum, oddSum)
console.log(arr)

arr[0] = evenSum
arr[1] = oddSum

console.log(arr)