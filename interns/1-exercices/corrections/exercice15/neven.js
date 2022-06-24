class Student {
  constructor(lastName, firstName, age, genre, country, option) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.age = age;
    this.genre = genre;
    this.country = country;
    this.option = option;
  }

  toString() {
    return "Nom: " + this.lastName + "\n" +
      "Prenom: " + this.firstName + "\n" +
      "Age: " + this.age + "\n" +
      "Genre: " + this.genre + "\n" +
      "Pays: " + this.country + "\n" +
      "Option: " + this.option + "\n";
  }

  toHTML() {
    return `<p>Nom: ${this.lastName} <br>
      Prenom: ${this.firstName} <br>
      Age: ${this.age} <br>
      Genre: ${this.genre} <br>
      Pays: ${this.country} <br>
      Option: ${this.option} <br></p>`;
  }
}

let students = [];
let newStudent = '';
do {
  while (newStudent != "y" && newStudent != "Y" && newStudent != "n" && newStudent != "N") {
    newStudent = prompt("Voulez vous entrer un nouvel élève ? (y/n)");
  }
  if (newStudent == "y" || newStudent == "Y") {
    let ln, fn, a, g, c, o;
    ln = prompt("Nom de famille");
    fn = prompt("Prénom");
    do {
      a = parseInt(prompt("Age"));
    } while (isNaN(a));
    g = prompt("Genre");
    c = prompt("Pays");
    o = prompt("Option");
    students.push(new Student(ln, fn, a, g, c, o));
    newStudent = '';
  }
} while (newStudent != "n" && newStudent != "N");

document.write("<p>Il y as " + students.length.toString() + " élève(s) dans votre formation</p>");

students.forEach(student => {
  document.write(student.toHTML() + "<br>");
});