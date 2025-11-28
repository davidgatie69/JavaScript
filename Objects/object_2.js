// Using . followed by key name if the key-name is a one word
// Using square brackets and a quote

const person = {
    firstName: 'Muwanguzi',
    lastName: 'David Jeremiah',
    age: 62,
    country: 'Uganda',
    city: 'Jinja',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'C/C++'
    ],
    getFullName: function() {
        return `${this.firstName} ${this.lastName})`
    },
    'phone_number': '+256702866529'
}

// accessing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.skills)

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person['phone number'])