// DECLARER UN TABLEAU VIDE

const tabNumber = [] // ou let tabNumber = new Array() exactement la meme qu'avec des crochets
tabNumber[0] = 2
tabNumber[1] = 15
tabNumber[2] = 14
tabNumber[3] = 22
tabNumber[4] = 150
tabNumber[5] = 145 // exactement la meme tabNumber.push(145)
// taille de mon tableau est de 3 mais les indices vont de 0 à 2
// tabNumber.pop() // supprime la valeur au rang 5 donc 145

// PARCOURIR UN TABLEAU AVEC LA BOUCLE FOR
const tabSize = tabNumber.length
for (let i = 0; i < tabSize; i++) {
  document.write(`Au rang(indice ou index) ${i}, j'ai la valeur ${tabNumber[i]} <br>`)
}

// DECLARER UN TABLEAU NON VIDE

let j = 0
const tab = [100, 105, 104, 2000, 5857, 5554] // au rang 0 = 105 et au rand 1 => 15 etc..

// PARCOURIR UN TABLEAU AVEC LA BOUCLE WHILE
while (j < tab.length) {
  console.log(`Au rang(indice ou index) ${j}, j'ai la valeur ${tab[j]}`)
  j++
}
