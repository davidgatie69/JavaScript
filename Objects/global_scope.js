let a = 'JavaScript'
let b = 10

function learnScope() {
    console.log(a, b)
    if (true) {
        let a = 'Python'
        let b = 73
        console.log(a, b)
    }
    console.log(a, b)
}

learnScope()
console.log(a, b)