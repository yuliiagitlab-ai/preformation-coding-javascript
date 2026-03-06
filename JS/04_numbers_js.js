//Exercices - NUMBERS


/* 01 **
Demandez à l'utilisateur son nom
Demandez à l'utilisateur son année de naissance
Demandez à l'utilisateur où il habite
Affichez un message de présentation en disant, "Bonjour [nom] ! Tu habites à [ville] et tu as [age] ans !"*/


let nom = prompt("Quel est votre nom?");
let yearOfBirth = prompt("Quelle est votre année de naissance?");
let year = 2026;
let ville = prompt("Vous habitez où?");


let age = year - yearOfBirth;

console.log(`Bonjour ${nom} ! Tu habites à ${ville} et tu as ${age} ans !`);
console.log(`Bonjour ${nom} ! Tu habites à ${ville} et tu as ${2026 - parseInt(yearOfBirth)} ans !`);


/* 02 **
Demandez à l'utilisateur d'entrer un prix hors TVA.
Calculez le prix avec TVA en ajoutant 21% au prix hors TVA.
Affichez le résultat avec une alerte.
Le résultat doit avoir 2 chiffres décimaux*/


let prix = prompt("Ex #2. Le prix hors TVA:");
prix = parseFloat(prix);
let prixTva = prix * 1.21;
alert(`Le prix avec TVA est: ${prixTva.toFixed(2)}`);

let prixHTVA = prompt("Prix hors TVA");
let prixTTC = parseFloat(prompt("Prix hors TVA")) * 1.21;
alert(`Le prix avec TVA est: ${prixTTC.toFixed(2)}`);


/* 03 **
Écris un code pour calculer la surface d'un cercle :
Demandez à l'utilisateur d'entrer le rayon du cercle.
Calculez la surface du cercle en utilisant la formule appropriée.
Affichez le résultat avec une alerte.*/


let radius = parseFloat(prompt("Ex #3. Entrez le rayon du cercle:"));
let resultat = Math.PI * radius ** 2;
alert(`l'aire du cercle de rayon ${radius} est de : ${resultat.toFixed(2)}`);


/* 04 **
Faites une calculatrice !

En utilisant prompt() et des variables, créez un programme qui fait les choses suivantes :

Demandez à l'utilisateur d'entrer un premier nombre.
Stockez ce premier nombre.
Demandez à l'utilisateur d'entrer un deuxième nombre.
Stockez ce deuxième nombre et répondez avec la somme en utilisant une alerte.*/

let firstNumber = Number(prompt("Exercise 4.\nEntrer un premier nombre:"));
let secondNumber = Number(prompt("Entrer un deuxième nombre:"));
let resultatAddition = firstNumber + secondNumber;

alert(`La somme de votre saisie est: ${resultatAddition}`)
