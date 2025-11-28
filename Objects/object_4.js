// Setting new key for an object

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

person.nationality = 'Ethiopian'
person.country = 'Canada'
person.title = 'Software Dev'
person.skills.push('Trader')
person.skills.push('SaSS')
person.isMarried = false

person.getPersonInfo = function() {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe is ${skills}.`
  return statement
}
console.log(person)
console.log(person.getPersonInfo())