// redirige vers la page de contact

/*
setTimeout va attendre 5 secondes après le chargement de la page 
avant d'executer la fonction en premier param
*/
setTimeout(function () {
  // une première façon de faire
  // location.href = 'contact.html'
  // une autre façon
  location.replace('contact.html')
}, 5000)
