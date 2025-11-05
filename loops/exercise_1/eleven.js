let sum_even = 0
let sum_odd = 0

for(let i = 0; i<=100; i++){
    if(i%2==0){
        sum_even += i
    } else {
        sum_odd += i
    }
        
}
console.log(`The sum of all evens from 0 to 100 is ${sum_even}.\nAnd the sum of all odds from 0 to 100 is ${sum_odd}`)