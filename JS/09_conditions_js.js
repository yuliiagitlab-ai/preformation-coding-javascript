//Exercices - STRINGS - CONDITIONS

/*Calculateur d'Indice de Masse Corporelle (IMC) :

● Demandez à l'utilisateur son poids en kilogrammes (ex: 70) et sa taille en mètres (ex: 1.75).
● Calculez l'IMC en utilisant la formule : poids/(taille²).
● Affichez l'IMC calculé dans la console.
● Ensuite, affichez un message indiquant la catégorie de poids basée sur l'IMC :
○ Moins de 18.5 : "Insuffisance pondérale"
○ 18.5 à 24.9 : "Poids normal"
○ 25 ou plus : "Surpoids"*/

let poidsUser = Number(prompt("Donnez votre poids en kilogrammes (ex: 70):"));
let tailleUser = Number(prompt("Donnez votre taille en mètres (ex: 1.75):"));

let imcUser = (poidsUser / tailleUser ** 2).toFixed(2);

if (imcUser < 18.5) {
  alert(`Votre IMC est ${imcUser}, vous avez "Insuffisance pondérale"`);
} else if (imcUser >= 25) {
  alert(`Votre IMC est ${imcUser}, vous avez "Surpoids"`);
} else {
  alert(`Votre IMC est ${imcUser}, vous avez "Poids normal"`);
}

/*Validateur de Code Promotionnel Simple :

● Demandez à l'utilisateur le prix d'un article.
● Demandez-lui ensuite s'il possède un code promotionnel (réponse attendue : "oui" ou
"non").
● Si l'utilisateur répond "oui" (peu importe la casse), demandez-lui le code.
○ Si le code est "REDUC15" (exactement), appliquez une réduction de 15%.
○ Si le code est "SUPER50" (exactement), appliquez une réduction de 50%.
○ Pour tout autre code, affichez "Code invalide, aucune réduction appliquée."
● Si l'utilisateur répond "non" initialement, aucune réduction n'est appliquée.
● Affichez le prix final dans la console.*/

let prixUser = Number(prompt("Donnez votre prix d'un article:"));
let promo = prompt("Avez-vous un code promotionnel? oui/non:").toLowerCase();

let prixFinal = prixUser;

if (promo === "oui") {
  let code = prompt(`Entrez votre code promo (REDUC15 ou SUPER50):`);

  if (code === "REDUC15") {
    prixFinal = (prixUser * 0.85).toFixed(2);
    alert(`Vous avez une réduction de 15%:\nC'est ${prixFinal} à payer `);
  } else if (code === "SUPER50") {
    prixFinal = (prixUser * 0.5).toFixed(2);
    alert(`Vous avez une réduction de 50%:\nC'est ${prixFinal} à payer `);
  } else {
    alert("Code invalide, aucune réduction appliquée.");
  }
} else {
  alert("aucune réduction appliquée.");
}

/*Extracteur de Milieu de Mot :

● Demandez à l'utilisateur d'entrer un mot.
● Déterminez et affichez le caractère du milieu du mot.
● Si le mot a une longueur paire, affichez les deux caractères du milieu.*/

let motUser = prompt("Entrez un mot:");
let indexCar = motUser.length / 2;
console.log(indexCar);
let car = motUser[Math.floor(indexCar)];
let carPaire = motUser[Math.floor(indexCar) - 1];

if (motUser.length % 2 == 0) {
  alert(
    `Les deux caractères du milieu du mot ${motUser} sont: ${carPaire}${car} `
  );
} else {
  alert(`Le caractère du milieu du mot ${motUser} est: ${car} `);
}

/*Vérificateur de Symétrie de Mot (Début/Fin) :

● Demandez à l'utilisateur d'entrer un mot.
● Vérifiez si la première lettre et la dernière lettre du mot sont identiques, sans tenir
compte de la casse (majuscule/minuscule).
● Affichez un message approprié : "La première et la dernière lettre sont identiques
(insensible à la casse)." ou "La première et la dernière lettre sont différentes."*/

let motUser2 = prompt("Entrez un mot:").toLowerCase();
let firstLetter = motUser2[0];
let lastLetter = motUser2[motUser2.length - 1];

console.log(firstLetter);
console.log(lastLetter);

if (firstLetter == lastLetter) {
  alert(
    "La première et la dernière lettre sont identiques (insensible à la casse)."
  );
} else {
  alert("La première et la dernière lettre sont différentes.");
}

/*Générateur de Nombres dans une Plage Spécifique :
● Générez un nombre entier aléatoire compris strictement entre 20 et 80 (c'est-à-dire de
21 à 79 inclus).
● Affichez ce nombre dans la console.*/

const min = 20;
const max = 80;

let random = Math.floor(Math.random() * (max - min + 1)) + min; // Math.floor(Math.random() * (80 - 20 + 1)) + 20;
console.log(`Random entre ${min} et ${max} est: ${random}`);

/*Analyseur de Force de Mot de Passe Basique :

● Demandez à l'utilisateur un mot de passe.
● Évaluez sa "force" selon des règles très simples :
○ Si moins de 6 caractères : "Très faible"
○ Si entre 6 et 9 caractères (inclus) : "Moyen"
○ Si 10 caractères ou plus : "Fort"
● Affichez la force évaluée.:*/

let password = prompt("Creer votre Mot de Passe: ");

if (password.length < 6) {
  alert("Très faible");
} else if (password.length >= 6 && password.length <= 9) {
  alert("Moyen");
} else {
  alert("Fort");
}

/*Séparateur de Composants de Date :

● Demandez à l'utilisateur une date au format "JJ/MM/AAAA" (par exemple, "29/04/2025").
● En supposant que le format est toujours respecté, extrayez le jour (JJ), le mois (MM) et
l'année (AAAA).
● Affichez chaque composant séparément dans la console (ex: "Jour : 29", "Mois : 04",
"Année : 2025").*/

let date = prompt('Entrez une date au format "JJ/MM/AAAA"');

const arr = date.split("/");
console.log(
  `
  Jour : ${arr[0]}
  Mois : ${arr[1]}
  Année : ${arr[2]}
  `
);

/*// Supposons que l'utilisateur entre "29/04/2025"
let jour = date.substring(0, 2); // Extrait les 2 premiers caractères (JJ)
let mois = date.substring(3, 5); // Extrait les 2 caractères après le "/" (MM)
let annee = date.substring(6, 10); // Extrait les 4 caractères après le 2ème "/" (AAAA)

// Affichage dans la console
console.log("Jour : " + jour);
console.log("Mois : " + mois);
console.log("Année : " + annee);

/*Comparateur de Longueurs de Chaînes :

● Demandez à l'utilisateur d'entrer une première chaîne de caractères, puis une seconde.
● Comparez leurs longueurs et affichez un message indiquant quelle chaîne est la plus
longue, ou si elles ont la même longueur.*/

// Demander à l'utilisateur d'entrer deux chaînes de caractères
let chaine1 = prompt("Entrez la première chaîne de caractères :");
let chaine2 = prompt("Entrez la deuxième chaîne de caractères :");

// Calculer la longueur de chaque chaîne
let longueur1 = chaine1.length;
let longueur2 = chaine2.length;

// Comparer les longueurs et afficher le résultat
if (longueur1 > longueur2) {
  console.log("La première chaîne est plus longue que la deuxième.");
} else if (longueur2 > longueur1) {
  console.log("La deuxième chaîne est plus longue que la première.");
} else {
  console.log("Les deux chaînes ont la même longueur.");
}

/*Calculateur d'Hypoténuse :

● Demandez à l'utilisateur les longueurs des deux côtés adjacents à l'angle droit d'un
triangle rectangle.
● Calculez la longueur de l'hypoténuse en utilisant le théorème de Pythagore (c²=a²+b²).
● Affichez la longueur de l'hypoténuse.*/

let cote1 = Number(
  prompt(
    "Entrez le premièr longueur des deux côtés adjacents à l'angle droit d'un triangle rectangle :"
  )
);
let cote2 = Number(
  prompt(
    "Entrez le deuxième longueur des deux côtés adjacents à l'angle droit d'un triangle rectangle :"
  )
);

//let hypotenuse = Math.sqrt(cote1 ** 2 + cote2 ** 2);

//console.log(`La longueur de l'hypoténuse est : ${hypotenuse.toFixed(2)}`);

if (isNaN(cote1) || isNaN(cote2)) {
  console.log("Veuillez entrer des nombres valides.");
} else {
  // Calcul et affichage de l'hypoténuse
  let hypotenuse = Math.sqrt(cote1 ** 2 + cote2 ** 2);
  console.log(`La longueur de l'hypoténuse est : ${hypotenuse.toFixed(2)}`);
}

/*Détermination de Quadrant Cartésien :

● Demandez à l'utilisateur les coordonnées X et Y d'un point (deux nombres).
● Déterminez dans quel quadrant (1, 2, 3 ou 4) se situe ce point. On supposera pour cet
exercice que ni X ni Y ne sont égaux à zéro.
○ Quadrant 1 : X > 0, Y > 0
○ Quadrant 2 : X < 0, Y > 0
○ Quadrant 3 : X < 0, Y < 0
○ Quadrant 4 : X > 0, Y < 0
● Affichez le numéro du quadrant.*/

// Demander à l'utilisateur les coordonnées X et Y
let x = Number(prompt("Entrez la coordonnée X du point :"));
let y = Number(prompt("Entrez la coordonnée Y du point :"));

// Déterminer le quadrant
let quadrant;

if (x > 0 && y > 0) {
  quadrant = 1;
} else if (x < 0 && y > 0) {
  quadrant = 2;
} else if (x < 0 && y < 0) {
  quadrant = 3;
} else if (x > 0 && y < 0) {
  quadrant = 4;
} else {
  quadrant = "indéfini (X ou Y est égal à zéro)";
}

// Afficher le résultat
console.log(`Le point (${x}, ${y}) se situe dans le quadrant ${quadrant}.`);
