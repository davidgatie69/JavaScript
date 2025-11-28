// Creating object methods

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
        return `${this.firstName} ${this.lastName}`
    },
    'phone_number': '+256702866529'
}

console.log(person.getFullName())