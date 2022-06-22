const promptEmail = 'Saisissez votre adresse email'
const promptPwd = 'Saisissez votre mot de passe'
let email = prompt(promptEmail)
let pwd = prompt(promptPwd)

while (email !== 'contact@tshimini.fr' || pwd !== '123456') {
  alert('Identifiants incorrects')
  email = prompt(promptEmail)
  pwd = prompt(promptPwd)
}

alert('Bienvenu dans votre espace client')
