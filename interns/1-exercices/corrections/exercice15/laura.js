class Student {
  constructor(name, fName, age, sex, country, option) {
    this.name = name;
    this.fName = fName;
    this.age = age;
    this.sex = sex;
    this.country = country;
    this.option = option;
  }
  info() {
    let ln, fn, a, s, c, o;
    ln = prompt("Indiquer votre Nom ?");
    fn = prompt("Indiquer votre Prénom ?");
    do {
      a = prompt("Indiquer votre Age ?");
    } while (isNaN(a));
    s = prompt("Indiquer votre Genre ?");
    c = prompt("Indiquer votre Pays ?");
    o = prompt("Indiquer l'option choisi ?");
    this.name = ln;
    this.fName = fn;
    this.age = a;
    this.sex = s;
    this.country = c;
    this.option = o;
  }
  toHTML() {
    return "Nom : " + this.name + "<br>" +
      "Prénom : " + this.fName + "<br>" +
      "Age : " + this.age + "<br>" +
      "Genre : " + this.sex + "<br>" +
      "Pays : " + this.country + "<br>" +
      "Option: " + this.option;
  }
};
let newStudent = ""
newStudent = prompt("Voulez-vous vous inscrire à notre formation ? (y/n)")
if (newStudent == "y" || newStudent == "Y") {
  let laura = new Student("", "", "", "", "", "");
  laura.info();
  const res = laura.toHTML();
  document.write(res);
} else {
  alert("Merci de votre visite");
}