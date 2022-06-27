const btn = document.querySelector('#btn')
btn.addEventListener('click', changeHtml)

function changeHtml () {
  document.querySelector('body').style.backgroundColor = 'blue'
}

// 1 Selectionner l'élément html
// 2 Greffer un écouteur d'event à élément (document.addEventListener(evenement, function))
// 3 associer une fonction pour effectuer vos actions (les actions sont effectuées à l'intérieur de la fonction)

const input = document.querySelector('input')
input.addEventListener('blur', function (event) {
  console.log('event', event) // event est un objet qui décrit votre événement (possède des propriétés et des méthodes que vous pouvez manipuler)
  const value = event.target.value
  btn.innerHTML = value
})
