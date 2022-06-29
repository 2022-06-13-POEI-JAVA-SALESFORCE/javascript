
// Une somme avec des variables
const nb1 = prompt('Rentrez un nombre 1')
const nb2 = prompt('Rentrez un nombre 2')
console.log('sum', nb1 + nb2)

// Une somme avec une fonction
function sum (nb1, nb2) {
  return nb1 + nb2
}
sum(41, 25)
sum(25, 75)

// Une somme avec une classe
class Math {
  // Méthode appelé au moment ou j'instancie mon objet à l'aide du mot clé new
  // Il faut respecter le nombre de parametres que vous avez fixé au moment de l'instanciation (new Math(10, 20))
  constructor (param1, param2) {
    this.nb1 = param1
    this.nb2 = param2
  }

  sum () {
    return this.nb1 + this.nb2
  }

  multiplication () {
    return this.nb1 * this.nb2
  }

  division () {
    return this.nb1 / this.nb2
  }

  modulo () {
    return this.nb1 % this.nb2
  }
}

// Utilisation de classe
const math = new Math(25, 26) // this.nb1 = 25 this.nb2 = 26
console.log('sum', math.sum())
