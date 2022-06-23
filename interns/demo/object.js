// Objet
const glodie = {
  // Partie Propriétés ou attributs ou caractéristiques
  firstName: 'Glodie',
  lastName: 'Tshimini',
  birthdayYear: 1991,
  adress: { // ici l'objet glodie stocke un objet adress
    codePostal: '75',
    city: 'Paris'
  },
  profession: [ // la propriété profession stocke un tableau
    'Développeur Mobile',
    'Développeur Web',
    'Développeur Fullstack',
    'Formateur Web'
  ],
  // Partie Méthodes ou opérations ou fonctions
  getProfession: function () {
    let msg = 'Mes professions '
    for (let i = 0; i < this.profession.length; i++) {
      const job = this.profession[i] // stock le métier en cours
      msg += job + ', ' // msg = msg + job + ', '
    }
    return msg
  },
  calculAge: function () {
    return 2022 - this.birthdayYear
  },
  pseudo: function () {
    return this.firstName + ' ' + this.lastName
  }
}

// Afficher les informations
console.log(glodie.calculAge())
console.log(glodie.pseudo())
console.log(glodie.adress) // retourne un objet
console.log(glodie.adress.codePostal)
console.log(glodie.profession[0]) // profession développeur Mobile
alert(glodie.getProfession()) // toutes les professions
