let dist = prompt('Entrez la distance parcourue') // on recupère un String
let time = prompt('Entrez le temps') // On recupère un String
dist = Number(dist) // j'ai un number
time = Number(time) // j'ai un number
const velocity = dist / time
alert('Distance parcourue' + dist + ' en ' + time + 'secs donne une vitesse de ' + velocity + 'm/sec')
console.info(`Distance parcourue de ${dist} en ${time} secs donne une vitesse de ${velocity} m/sec`)
