// Première façon de faire avec document.createElement
const ul = document.querySelector('ul') // querySelector électionne le premier élément qui match avec le selecteur
ul.setAttribute('id', 'monId')
for (let i = 0; i < 4; i++) {
  const li = document.createElement('li')
  li.id = i
  li.innerHTML = 'liste' + (i + 1)
  ul.prepend(li) // prepend ajoute le noeud avant donc on aura ici les items dans l'odre décroissant
}

const div = document.querySelector('div')
const img = document.createElement('img')
img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/langfr-280px-Salesforce.com_logo.svg.png'
img.setAttribute('alt', 'salesforce image')
div.append(img) // ajoute l'image à la fin du noeud ie à la fin de la div

// Deuxième façon de faire avec le innerHTML
const ol = document.querySelector('ol')
for (let i = 0; i < 4; i++) {
  ol.innerHTML += '<li class="item" id=' + i + '>Liste ordonnée' + (i + 1) + '</li>'
}
