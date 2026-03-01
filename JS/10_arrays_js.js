//Exercices - ARRAYS

/*Pratique d'accès aux tableaux
Je t’ai fourni un tableau leaderboard contenant 4 chaînes de caractères. Sans modifier la
ligne 1, effectue les changements suivants :
1. Malheureusement, j’ai fait une faute de frappe sur le 2ᵉ nom du tableau leaderboard.
J’ai écrit "Lua", mais je voulais écrire "Luna". Merci de mettre à jour cette valeur (sans
toucher à la ligne 1).
2. Bellatrix est sortie du classement et a été remplacée par Draco ! Merci de modifier le
dernier élément du tableau pour qu’il contienne "Draco" à la place de "Bellatrix" (sans
modifier la ligne 1).*/

let leaderboard = ["Hermione", "Lua", "Harry", "Bellatrix"];

// 1. Corriger "Lua" en "Luna"
leaderboard[1] = "Luna";

// 2. Remplacer "Bellatrix" par "Draco"
leaderboard[3] = "Draco";

// Afficher le tableau mis à jour
console.log(leaderboard);

/*Résultat :
["Harry", "Luna", "Hermione", "Draco"]
*/

/*2. Sélection d'éléments pour créer un nouveau tableau :
Objectif :
Créer un tableau ["one", "two", "three"] à partir de initialArray.*/

const initialArray = [
  null,
  true,
  ["Apple", "two", undefined],
  false,
  ["three", "BeCode"],
  4,
  "I am a big bad wolf",
  ["one"],
];

// Sélectionner les éléments nécessaires
const one = initialArray[7][0]; // "one"
const two = initialArray[2][1]; // "two"
const three = initialArray[4][0]; // "three"

// Créer le nouveau tableau
const newArray = [one, two, three];

console.log(newArray);

/*Résultat :
["one", "two", "three"]
*/

/*3. Manipulation du tableau planets avec push(), pop(), shift(), et unshift() :
Objectif :

Supprimer "The Moon".
Ajouter "Saturn" à la fin.
Ajouter "Mercury" au début.*/

const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"];

// 1. Supprimer le premier élément ("The Moon")
planets.shift();

// 2. Ajouter "Saturn" à la fin
planets.push("Saturn");

// 3. Ajouter "Mercury" en premier
planets.unshift("Mercury");

console.log(planets);

/*Résultat :
["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"]
*/