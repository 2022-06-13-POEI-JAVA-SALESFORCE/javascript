const groups = [
  ['Timothi', 'El medhi', 'Laura', 'Ludovic'], // rang 0 contient le tableau avec Timothi et El medhi
  ['Nabil', 'Hugo', 'Mathieu', 'Syrine'], // rang 1
  ['Nathalie', 'Jean-Benoit', 'Fabrice', 'Neven'] // rang 2
]
for (let i = 0; i < groups.length; i++) { // boucle principale
  const group = groups[i]
  console.log('groupe ', i + 1)
  for (let j = 0; j < group.length; j++) { // boucle secondaire
    console.log(group[j])
  }
}
