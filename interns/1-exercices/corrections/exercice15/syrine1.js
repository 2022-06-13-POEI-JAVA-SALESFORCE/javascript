class Person {
  constructor(firstName, lastName, brithDay, sex, adress) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.brithDay = brithDay
    this.sex = sex
    this.adress = adress
  }
  age() {
    return 2022 - this.brithDay
  }
}
const syrine = new Person('syrine', 'derbel', 1993, 'Female', {
  zidCode: 44470,
  city: 'Thouare'
})
console.log(syrine.firstName)