let firstName = prompt("Enter your first Name: ");
let laststName = prompt("Enter your last Name: ");

function fullName() {
    let full_name = `${firstName} ${laststName}`
    return full_name
}
console.log(fullName());