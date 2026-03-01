/*01.
Demandez à l’utilisateur d’introduire un premier nombre entier et puis un second.
Vérifiez que ces nombres soient bien de nombres et pas du texte. (si c’est le cas, affichez une
erreur)
Créez du code qui teste si le premier nombre + le deuxième nombre est égal à 65.
Si c’est le cas, loguez true. Ou alors : false.
Essayez différentes combinaisons de nombres pour tester plusieurs cas de figure.

Par exemple :
60 et 5
13 et 52
1 et 64
9 et 56*/


const firstNumber = Number(prompt("Entrez le premier nombre entier :"));
const secondNumber = Number(prompt("Entrez le deuxième nombre entier :"));

// Vérification si ce sont bien des nombres
if (isNaN(firstNumber) || isNaN(secondNumber)) {
  console.log("Erreur : veuillez entrer uniquement des nombres.");
} else {
  // Vérification si la somme est égale à 65
  if (firstNumber + secondNumber === 65) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// Version plus courte:

const a = Number(prompt("Premier nombre :"));
const b = Number(prompt("Deuxième nombre :"));

if (isNaN(a) || isNaN(b)) {
  console.log("Erreur : entrée invalide.");
} else {
  console.log(a + b === 65);
}


/*02.
Demandez à l’utilisateur d’introduire son âge.
Alertez son âge en jours.

Notes :
● Utilisez 365 comme la quantité de jours dans une année
● Ignorez les années bisextiles.
● Fais en sorte de tester si l’utilisateur a bien fourni un nombre entier d’au moins 1 an.*/


const age = Number(prompt("Entrez votre âge :"));

// Vérification : doit être un nombre entier ≥ 1
if (isNaN(age) || age < 1 || !Number.isInteger(age)) {
  alert("Erreur : veuillez entrer un nombre entier d'au moins 1.");
} else {
  const days = age * 365; // On ignore les années bissextiles
  alert("Votre âge en jours est : " + days);
}


/*03.
Fais du code qui va analyser le tableau [6, 1, 8, 5, 3, 9, 7] pour en tirer le plus petit et le plus
grand nombre. Le résultat dans la console doit être :
Le plus grand est 9 et le plus petit est 1
En changeant juste le tableau avec celui-ci : [5, 3, 7] Le résultat doit être :
Le plus grand est 7 et le plus petit est 3

Tips :
- Créez un “tableau final” dans lequel on va insérer seulement les résultats*/


function analyzeArray(arr) {
  // On initialise min et max avec le premier élément
  let min = arr[0];
  let max = arr[0];

  // On parcourt le tableau
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Tableau final contenant les résultats
  const finalArray = [max, min];

  console.log(`Le plus grand est ${finalArray[0]} et le plus petit est ${finalArray[1]}`);
}

// Tests
analyzeArray([6, 1, 8, 5, 3, 9, 7]);
analyzeArray([5, 3, 7]);


/*04.
FPS veut dire Frame Per Second. Donc : combien d’images sont montrées à l’écran par seconde.
Créez deux variables, const fps et const minutes.
Puis, écrivez un code qui logue dans la console combien d’images (en fonction du fps) sont
affichées dans la quantité de minutes de la variable minutes

Voici les valeurs de ces variables et les résultats attendus :
fps = 24 et minutes = 31 → résultat : 44640
fps = 13 et minutes = 0.5 → résultat : 390
fps = 136 et minutes = 2 → résultat : 16320*/


const fps = 24;
const minutes = 31;

// 1 minute = 60 secondes
const totalFrames = fps * minutes * 60;

console.log(`Total frames: ${totalFrames}`);


/*05.
Avec le string “je suis très content de cette formation”, faites en sorte de logguer un nouveau
string avec l’ordre des mots inversées.
Résultat attendu : “formation cette de content très suis je”

Tips qui peuvent vous aider :
- split
- Loop avec i--
- join*/


const str = "je suis très content de cette formation";

// 1. Transformer la phrase en tableau de mots
const words = str.split(" ");

let reversedWords = [];

// 2. Parcourir le tableau à l’envers
for (let i = words.length - 1; i >= 0; i--) {
  reversedWords.push(words[i]);
}

// 3. Reformer une phrase
const result = reversedWords.join(" ");

console.log(result);


/*06.
Voici un tableau d’objets :
[
{ product: "Milk", quantity: 1, price: 1.50 },
{ product: "Eggs", quantity: 12, price: 0.10 },
{ product: "Bread", quantity: 2, price: 1.60 },
{ product: "Cheese", quantity: 1, price: 4.50 }
]
Il représente une liste de courses.
Faites un code qui affiche le prix total de ces courses.
Résultat attendu : 10.40€*/


const shoppingList = [
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
];

let total = 0;

// On parcourt le tableau
for (let i = 0; i < shoppingList.length; i++) {
  total += shoppingList[i].quantity * shoppingList[i].price;
}

console.log(total.toFixed(2) + "€");


/*07.
Avec ce string const str = "UcUNFhYGaFYFYGtNUH" écrivez un code qui détecte seulement
les lettres minuscules et logguez dans la console le mot que les minuscules forment. 
(dans ce cas-ci : “chat”)
N’écrivez aucun code en dur. Par exemple : str[1] pour prendre la première minuscule.

Essayez avec cet autre string :
“YFEMHUbFBBrEZFuxKOelYZFBlesYLLfEGoBYErmaFGBtiMENoTMnENT”*/


const str1 = "UcUNFhYGaFYFYGtNUH";

let result1 = "";

for (let i = 0; i < str1.length; i++) {
  if (str1[i] === str1[i].toLowerCase()) {
    result1 += str1[i];
  }
}

console.log(result1); // "chat"



/*08.
Définissez une variable contenant un nombre. Par exemple : 4589
Loguez dans la console la quantité de chiffres qu’il y a dans ce nombre. (Dans cet exemple : 4)
56 → 2
96735 → 5
etc.*/


// Version simple : conversion du nombre en chaîne de caractères:
const number1 = 4589;

// On transforme le nombre en string pour pouvoir utiliser la propriété length
// Un nombre n’a pas de propriété length, mais une chaîne de caractères oui
const digitsCount = number1.toString().length;

console.log(digitsCount);

console.log((56).toString().length);     // 2
console.log((96735).toString().length);  // 5


// Version algorithmique sans convertir en string:
let number2 = 4589;
let count = 0;

while (number2 > 0) {
  number2 = Math.floor(number2 / 10);
  count++;
}

console.log(count);

// En système décimal (base 10), chaque chiffre représente une puissance de 10
// (unités, dizaines, centaines, milliers, etc.).
// Diviser un nombre par 10 décale tous les chiffres d’un rang vers la droite.
// En utilisant Math.floor(), on supprime la partie décimale,
// ce qui revient à enlever le dernier chiffre du nombre.


/*09.
Vous allez déclarer deux variables (nombre et qte)
const nombre = ;
const qte = ;
L’objectif : loguez une array qui contient qte d’éléments, qui doivent être les multiples de
nombre.
Par exemple :
Nombre = 2
Qte = 6
Résultat : [ 2, 4, 6, 8, 10, 12 ]
Nombre = 7
Qte = 5
Résultat : [ 7, 14, 21, 28, 35 ]*/


const nombre = 2;
const qte = 6;

let resultMultiples = [];

// On génère les multiples
for (let i = 1; i <= qte; i++) {
  resultMultiples.push(nombre * i);
}

console.log(resultMultiples);