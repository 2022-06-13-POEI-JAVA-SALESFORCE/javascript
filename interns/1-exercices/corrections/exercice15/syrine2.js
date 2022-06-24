const syrine = {
  firstName: "syrine",
  lastName: "Derbel",
  briYear: 1993,
  sex: " Female",
  adress: {
    country: "France",
    city: "Thouare_sur_loire",
    zipCode: 44470,
  },
  option: "",
  age: function () {
    return 2022 - this.briYear
  },
}
console.log(syrine.age());
console.log("je m'appelle", syrine.firstName, syrine.lastName,
  "j'habite à", syrine.adress.city)
const glodie = syrine
glodie.firstName = "Glodie";