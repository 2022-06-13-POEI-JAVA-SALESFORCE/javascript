/**
 * 1. Sélectionner votre élément
 *      => document.querySelector('mon selecteur')
 *      => document.querySelectorAll('mon selecteur')
 *      => document.getElementById('id de mon')
 * 2.1 Utiliser les événements, pour cela il faut utiliser la méthode addEventLister
 * à partir de l'élément que j'ai sélectionné au préalable
 *    => document.addEventListener('event', function)
 *      => event est l'événement qu'on va écouter
 *        => liste des événements (souris, le clavier et la page) : click, change, focus, blur, mouseenter
 *     => au moment ou l'événement aura lieu, votre fonction en deuxième paramètre sera exécutée
 * 2.2 Au lieu de rajouter un écouter d'événement, on peut juste se contenter de rajouter du contenu
 * ou modifier les propriétés css de notre élément ou d'un autre élément
 *    => el est mon élément que j'ai sélectionné au préalable avec document.querySelector() par exemple
 *    => modification  des propriétés CSS pattern: el.style.{propriété css} = {valeur que l'on souhaite}
 *      => exemple el.style.color = 'blue' pour mettre la couleur du texte de mon élément en bleu
 */

/**
* Rajouter un titre dans ma page html qui n'a pas de titre de base
* Pour cela, il faut sélectionner un élement qui va nous servir pour rajouter notre
titre au sein de cet élément
*/
const body = document.querySelector('body')
const main = document.querySelector('main')

main.innerHTML = '<h2>Mon titre 2</h2>'
// je crée un élément HTML p
const newParagraph = document.createElement('p')
// j'ajoute du contenu entre les balises p de mon élément
newParagraph.innerHTML = 'Hello world'
// je vais insérer mon paragraphe à la fin de mon main
main.append(newParagraph)
const h1 = document.createElement('h1')
h1.innerHTML = 'Titre de niveau 1'

// Modifier les props CSS
h1.style.color = 'white' // => h1 {color: white }
h1.style.background = 'grey'
h1.style.textAlign = 'center'

// insértion au début du b
body.prepend(h1)

// ajouter un bouton
const newBtn = document.createElement('button')
newBtn.innerHTML = 'bouton'
main.append(newBtn)

// Partie événements

/**
 * Ici on va greffer un écouteur d'événement
 */
const btn = document.querySelector('button')
btn.addEventListener('click', function () {
  btn.innerHTML = 'bouton a été cliqué'
  body.style.background = 'lightgrey'
})
