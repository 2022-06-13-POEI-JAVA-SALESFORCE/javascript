# TP: reprise du TP sur le système bancaire avec le langage javascript

## Objectifs du TP

1. Travailler à plusieurs sur le même dépôt git.
2. Utilisez JavaScript pour résoudre des algorithmes.

## Contexte globale

- Créez des fonctions pour satisfaire les fonctionnalités de la banque.
Pour rappel, votre application doit répondre aux besoins suivantes :
- ouverture de compte ;
- retrait
- calcul des agios

## Partie 1 : Utilisation Prompt, alert, confirm

### Consigne

- Reprendre les consignes du TP sur la banque [partie 1](https://github.com/2022-06-13-POEI-JAVA-SALESFORCE/algorithmie/blob/main/interns/3-tp/bank_part1.md) et [partie 2](https://github.com/2022-06-13-POEI-JAVA-SALESFORCE/algorithmie/blob/main/interns/3-tp/bank_part2.md).
- Reproduire les mêmes fonctionnalités en utilisant le langage javascript.

Demander à l'utilisateur de saisir une donnée, utilisez le ***prompt('votre message')***
Demander à l'utilisateur de choisir entre oui ou non (true ou false) avec un popup JS, utilisez le ***confirm('votre message')***
Pour afficher une information à l'utilisateur utiliser ***alert('votre message')*** ou ***document.write('votre message')*** .

## Partie 2 : Formulaire html

- Reprendre le travail réalisé dans la partie 1 (votre version principale depuis votre branche main)
- Supprimez tous les prompt, alert et confirm et remplacer par des formulaires ou des messages à afficher directement sur la page à l'aide du HTML
- Utilisez le DOM pour rendre votre site dynamique
- Réalisez le **CSS en dernier**

### Ressources

- (Documentation sessionStorage)['https://www.w3schools.com/jsref/prop_win_sessionstorage.asp']
- (Documentation JSON Parse)['https://www.w3schools.com/js/js_json_parse.asp']
- (Documentation JSON Stringify)['https://www.w3schools.com/js/js_json_stringify.asp']
- (Documentation document.createElement)['https://www.w3schools.com/js/js_htmldom_nodes.asp']
- (Documentation document.append)['https://developer.mozilla.org/fr/docs/Web/API/Element/append']
- (Documentation document.prepend)['https://developer.mozilla.org/fr/docs/Web/API/Element/prepend#ajouter_du_texte']

### Maquettes

!(home)[img/bank/home.png]
!(open)[img/bank/open.png]
!(withdraw)[img/bank/withdraw.png]
!(agios)[img/bank/agios.png]