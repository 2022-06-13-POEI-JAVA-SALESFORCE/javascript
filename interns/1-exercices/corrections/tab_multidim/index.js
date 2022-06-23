const groups = [// tableau principale
  ['Timothy', 'El medhi', 'Laura', 'Ludovic'],
  ['Nabil', 'Hugo', 'Mathieu', 'Syrine'],
  ['Nathalie', 'Jean-Benoit', 'Fabrice', 'Neven']
]

const numbers = [// tableau principale
  [1, 2, 3, 4],
  [10, 20, 30, 40],
  [100, 200, 300, 400]
]

/**
 * Loop array
 * @param {array} tabs table of elements
 * @param {string} type type of table
 */
function readTab (tabs, type) { // declaration de fonction
  let list = ''
  for (let i = 0; i < tabs.length; i++) { // boucle principale
    const tab = tabs[i]
    console.log(type, i + 1)
    for (let j = 0; j < tab.length; j++) { // boucle secondaire
    //   console.log(tab[j])
      list += tab[j] + ', ' // Timothy,El
    }
  }
  return list
}

/*
Pour la documentation
tapez /** entrez
*/

/**
 * Division
 * @param {Number} nb1 number 1
 * @param {Number} nb2 number 2
 * @returns Number
 */
function divide (nb1, nb2) {
  const result = nb1 / nb2
  return result
}

console.log(divide(15, 3))
console.log(divide(25, 5))
console.log(divide(49, 7))
// appel ou utilisation de la fonction
const interns = readTab(groups, 'groupes')
console.log('interns', interns)
console.log('nombres', readTab(numbers, 'type'))
