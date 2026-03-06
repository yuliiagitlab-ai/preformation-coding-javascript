//Exercices - STRINGS

/* Exercice 1 : Conversion en minuscules

Objectif : Transformer une chaîne de caractères en minuscules grâce à la méthode toLowerCase.

Consignes :
1. Déclarez une variable texte contenant la chaîne "Bonjour le MONDE !".*/

let text = "Bonjour le MONDE !";

console.log("\nExercice 1:");
console.log(`"Bonjour le MONDE !" ==> ${text.toLowerCase()}`);


/* Exercice 2 : Extraction d’une sous-chaîne avec slice

Objectif : Utiliser la méthode slice pour extraire une partie d'une chaîne.

Consignes :
1. Créez une variable phrase contenant "JavaScript est génial !".
2. Utilisez slice pour extraire le mot "génial"
3. Affichez le résultat dans la console.*/

let phrase = "JavaScript est génial !";
let extract = phrase.slice(15, 20);

console.log("\nExercice 2:");
console.log(`Une partie extraite: ${extract}`);


/* Exercice 3 : Remplacement d’un mot avec replace

Objectif : Remplacer une partie d’une chaîne par une autre grâce à la méthode replace.

Consignes :
1. Déclarez une variable message contenant "J'aime les pommes".
2. Remplacez "pommes" par "bananes" et affichez le résultat.
// Résultat attendu : "J'aime les bananes"*/


let message = "J'aime les pommes";

console.log("\nExercice 3:");
console.log(`"J'aime les pommes" ==> ${message.replace("pommes", "bananes")}`);


/* Exercice 4 : Division d’une chaîne en tableau avec split

Objectif : Utiliser la méthode split pour transformer une chaîne en tableau de sous-chaînes.

Consignes :
1. Créez une variable liste contenant le string "rouge vert bleu".
// Résultat attendu : ["rouge", "vert", "bleu"]*/


let liste = "rouge vert bleu";

console.log("\nExercice 4:");
console.log(liste.split(","));


/* Exercice 5 : Combinaison de méthodes sur une chaîne

Objectif : Appliquer plusieurs méthodes sur une chaîne pour obtenir un résultat précis.

Consignes :
1. Déclarez une variable texte contenant "Hello WORLD, bienvenue en JavaScript!".
2. Transformez la chaîne en minuscules avec toLowerCase().
3. Extrayez le mot "world" à l’aide de slice (en vous basant sur la chaîne modifiée).
4. Affichez le mot extrait dans la console.
Exemple de code :
// Résultat attendu : "world"*/


let texte = "Hello WORLD, bienvenue en JavaScript!";
let resultat = texte.toLowerCase().slice(6, 11);

console.log("\nExercice 5:");
console.log(resultat);


/* Exercice 6 : Problème avec toLowerCase

Contexte : Le code suivant est censé afficher une chaîne en minuscules, mais il y a une erreur.

Code erroné :
var text = "HELLO";
console.log(text.toLowerCase); // "()" 

Votre mission :
● Identifier pourquoi le résultat n'est pas celui attendu.
● Corriger le code pour appeler correctement la méthode.*/

// Sans parenthèses (), JavaScript affiche la référence de la fonction, pas le résultat.

let text2 = "HELLO";

console.log("\nExercice 6:");
console.log(text2.toLowerCase()); // "()" 


/* Exercice 7 : Erreur dans l’utilisation de slice

Contexte : Le code ci-dessous doit extraire une sous-chaîne, mais la syntaxe est incorrecte.

Code erroné :
var phrase = "Hello, world!";
var sub = phrase.slice(7; 12); // ";" => ","
console.log(sub);

Votre mission :
● Repérer l'erreur dans l'appel à slice.
● Modifier le code pour obtenir l'extraction correcte de la sous-chaîne.*/

// En JavaScript, les arguments d’une fonction doivent être séparés par une virgule ",".

let phrase2 = "Hello, world!";
let sub = phrase2.slice(7, 12);  // ";" => ","

console.log("\nExercice 7:");
console.log(sub);


/* Exercice 8 : Mauvaise utilisation de replace

Contexte : Ce code a pour objectif de remplacer un mot dans la chaîne, mais il comporte une erreur de syntaxe.

Code erroné :
let sentence = "Les chats sont mignons";
console.log(sentence.replace(chats, "chiens"));  // Sans guillemets, JavaScript pense que chats est une variable.

Votre mission :
● Identifier l'erreur liée à l'utilisation de la variable ou des guillemets.
● Corriger l’appel à la méthode replace pour que le remplacement fonctionne.*/

// "chats" → chaîne de caractères
//  chats → variable (qui doit exister)

let sentence = "Les chats sont mignons";

console.log("\nExercice 8:");
console.log(sentence.replace("chats", "chiens")); // Les guillemets sont ajoutés


/* Exercice 9 : Méthode split mal orthographiée

Contexte : Le code suivant tente de diviser une chaîne en utilisant split, mais il y a une faute dans le nom de la méthode.

Code erroné :
var fruits = "pomme, banane, cerise".splitt(", ");
console.log(fruits);

Votre mission :
● Trouver l'erreur dans le nom de la méthode.
● Corriger le code pour que la chaîne soit correctement divisée en tableau.*/


// split() transforme une chaîne en tableau.

let fruits = "pomme, banane, cerise".split(", ");  // "splitt" => "split"

console.log("\nExercice 9:");
console.log(fruits);

// Résultat attendu : ["pomme", "banane", "cerise"]



/* Exercice 10 : Chaîne avec plusieurs méthodes enchaînées erronées

Contexte : Le code ci-dessous doit appliquer plusieurs méthodes sur une chaîne. Une faute de frappe empêche son exécution correcte.

Code erroné :
var text = "Javascript est amusant!";
var result = text.toLowerCase().slic(0, 10).replace("javascript", "JS");
console.log(result);

Votre mission :
● Identifier la méthode mal orthographiée.
● Corriger le code pour obtenir le résultat attendu.*/


let text3 = "Javascript est amusant!";
let result = text3
  .toLowerCase()
  .slice(0, 10)                      // "slic" => "slice"
  .replace("javascript", "JS");

console.log("\nExercice 10:");
console.log(result);

// Résultat attendu : JS