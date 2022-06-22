const age = 18
const firstName = 'Glodie'
// OPERATEUR LOGIQUE
// EN JS il faut utiliser && pour l'opérateur logique AND qu'on a vu dans l'algorithmie
// EN JS il faut utiliser || => OR pour le OU

// OPERATEUR DE COMPARAISON
// == Comparaison uniquement au niveau de la valeur
// === Comparaison au niveau de la valeur et du type

if (age === 18 && firstName === 'Glodie') {
  console.log('hello world')
} else {
  // traitement par defaut
}

// autre condition
if (age >= 18) {
  console.log('Majeur')
} else if (age < 18) {
  console.log('Mineur')
}

/*
Structure conditionnelle avec un switch
Fait exactement la même chose qu'un if
Sauf qu'on a une presentation un peu plus visuel
Mieux adapté pour faire directement des évaluation avec des string
*/
switch (age) {
  case 10: // ie if(age == 10)
    // Traitement
    break // permet d'empecher d'aller évaluer la condition suivante
  case 11: // ie if(age == 11)
    // Traitement
    break
  case 12:
    // Traitement
    break
  default: // Traitement par defaut si aucune des conditions prec. est remplie
    break
}
