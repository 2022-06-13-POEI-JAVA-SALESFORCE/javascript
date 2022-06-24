
const students = []
let next = false

do {
  const lastName = prompt('Saisissez le nom')
  const firstName = prompt('Saisissez le prénom')
  const age = prompt('Saisissez l\'âge')
  const genre = prompt('Saisissez le genre')
  const country = prompt('Saisissez le pays')
  const course = prompt('Saisissez l\'option')
  next = confirm('Voulez-vous contunier')

  const student = {
    /**
    * lorsque la prop et la value ont le meme nom par exemple lastName : name ne marcherait pas pour la notation courte
    * notation courte qui equivaut à lastName: lastName, on peut utiliser la notation courte uniquement
    */
    lastName, // ie lastName : lastName
    firstName, // id firstName : firstName
    age,
    genre,
    country,
    course
  }
  students.push(student)
} while (next)
document.write('Liste des inscrits <br>')
document.write('<ul>')
for (let i = 0; i < students.length; i++) { // itérer un tableau
  const student = students[i]
  document.write(`<li>Etudiant ${(i + 1)} : `)
  for (const j in student) { // itérer un objet
    document.write(`${student[j]} `)
  }
  document.write('</li>')
}
document.write('</ul>')
