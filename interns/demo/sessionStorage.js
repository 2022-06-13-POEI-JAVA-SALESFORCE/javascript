// insérer les données dans le stockage du navigateur pour une session
// param 1 nom de la donnée ie nom de ta variable ie clé
// param 2 valeur
sessionStorage.setItem('name', 'Tshimini')

sessionStorage.setItem('firstName', 'Glodie')
sessionStorage.setItem('age', 30)

// cas concret avec un formulaire
const sex = document.querySelector('#sex').value
sessionStorage.setItem('sex', sex)

// Récupérer les informations
console.log('name', sessionStorage.getItem('name')) // récupère Tshimini
console.log('firstName', sessionStorage.getItem('firstName')) // récupère Glodie

// Supprimer une info
sessionStorage.removeItem('age') // supprime dans le sessionStorage la donnée liée à l'age

// Tout supprimer
// sessionStorage.clear() // Supprime tout de la session, appelé automatiquement lors de la fermeture de la fênetre par le navigateur

// cas des objets

// on ne peut pas stocker l'object sans l'avoir transformer en chaine de caractère au préalable
const me = {
  name: 'Glodie',
  age: 30
}

sessionStorage.setItem('firstName', 'hugo')
// Du coups il faut transformer en string

// JSON = Javascript Object Notation en gros notation proche du javascript
sessionStorage.setItem('object', JSON.stringify(me)) // transforme un objet en string pour pouvoir le stocker correctement dans le navigateur

// Pour récupérer les informations et les traiter comme un objet, je dois transformer le string en objet (opération inverse)

let data = sessionStorage.getItem('object') // recup un string
console.log('objet sous forme de string', data) // on aura une notation JSON (chaine caractère proche de la notation objet de JavaScript)
data = JSON.parse(data) // transforme un string en objet
console.log('objet Js', data.age) // on peut à nouveau manipuler nos objets comme d'habitude en utilisant le . pour aller chercher les valeurs des nos propriétés
