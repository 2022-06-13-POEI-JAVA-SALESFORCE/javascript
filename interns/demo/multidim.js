// TABLEAU A 2 DIMENSIONS

// taille = 3 mais les indices vont de 0 à 2
const groupes = [
  ['Timothi', 'El medhi'], // rang 0 contient le tableau avec Timothi et El medhi
  ['Nabil', 'Ludovic'], // rang 1
  ['Nathalie', 'Jean-benoit', 'Fabrice'] // rang 2
]
// Pour recup fabrice
const fabrice = groupes[2][2]
let nathalie
console.log('fabrice', fabrice)
console.log('nathalie', nathalie) // undefined ie pas de valeur

// Générer un nombre aléatoire compris entre 0 et la taille du tableau (3)
const randomIndex = Math.floor(Math.random() * groupes.length) // nombre entre 0 et 2
console.log('nombre aléatoire', randomIndex)
const tabRandom = groupes[randomIndex] // j'aurai le tableau qui contient les prénom de manière aléatoire
console.log(tabRandom)

// je recupère ici le tableau qui contient nathalie, jean benoit etc...
const g3 = groupes[2]
console.log('Groupe 3', g3)
// i++ ie i=i+1
// Parcourir tous les élements de mon tableau
for (let i = 0; i < groupes.length; i++) { // boucle principale
  const groupe = groupes[i]
  /*
  au premier tour de la boucle principale
  groupes[0] = ['timothy','el medhi']
  */
  for (let j = 0; j < groupe.length; j++) { // boucle secondaire
    /*
    Parcourir les valeurs de chaque tableau
    Premier tour
    i = 0 et j=0 donne Tymothi
    i = 0 et j=1 donne El medhi
    2eme tour
    i = 1 et j= 0 donne Nabil
    i = 1 et j= 1 donne Ludovic
    */
    /*
    j'affiche uniquement Nabil et ludovic, pour afficher tout le monde
    il suffit d'enlever la condition
    */
    if (i === 1) {
      console.log(groupe[j])
    }
  }
}
