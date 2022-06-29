// Sélectionner les éléments HTML
const body = document.querySelector('body')
const main = document.querySelector('main')

// Créer un h2 et l'ajouter dans le main
const h2 = document.createElement('h2') // <h2></h2>
h2.innerHTML = 'Liste' // <h2>Liste</h2>
main.append(h2)
/**
 * Une autre façon de faire mais résultat identique que prec.
 * main.innerHTML = '<h2>Liste</h2>'
 * main.innerHTML += '<ul><li>Liste</li></ul>' ie main.innerHTML = main.innerHTML + '<ul><li>Liste</li></ul>'
*/

// Créer un ul avec des li et l'ajouter dans le main
const ul = document.createElement('ul')
for (let i = 0; i < 2; i++) {
  const li = document.createElement('li')
  li.innerHTML = `item${i + 1}`
  ul.append(li)
}
main.append(ul)

// Créer un paragraphe et l'ajouter dans le main
const p = document.createElement('p')
p.innerHTML = 'Un paragraphe'
main.append(p)

// Créer un footer et l'ajouter au même niveau que la main
const footer = document.createElement('footer')
footer.innerHTML = '<p>2022 - M2i</p>'
/**
* Pour bien respecter le sujet
* et ne pas avoir la balise script entre le main et le footer en faisant par exemple body.append(footer)
* vous pouvez utiliser la méthode insertAdjacentHtml qui rajoute l'élément au même niveau
* que l'élément qui sert de ref ici main
*/
main.insertAdjacentElement('afterend', footer)

// Créer un h1 et l'ajouter au début du body
const h1 = document.createElement('h1')
h1.innerHTML = 'Rappels DOM'
body.prepend(h1)
