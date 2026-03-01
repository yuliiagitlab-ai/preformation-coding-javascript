//Exercices - BOOLEENS

/* Exercice 1 : Évaluation de valeurs truthy/falsy

Déclarez plusieurs variables avec des valeurs différentes : 0, "" (chaîne vide), null,
undefined, NaN, "Hello", 42, true, false. Utilisez une instruction if pour vérifier si
chaque valeur est truthy ou falsy, puis affichez le résultat avec console.log.*/


let val1 = 0;
let val2 = "";
let val3 = null;
let val4 = undefined;
let val5 = NaN;
let val6 = "Hello";
let val7 = 42;
let val8 = true;
let val9 = false;

console.log("Exercice 1 : Évaluation de valeurs truthy/falsy");
console.log(`Valeur 1 est: ${Boolean(val1)}
\nValeur 2 est: ${Boolean(val2)}
\nValeur 3 est: ${Boolean(val3)}
\nValeur 4 est: ${Boolean(val4)}
\nValeur 5 est: ${Boolean(val5)}
\nValeur 6 est: ${Boolean(val6)}
\nValeur 7 est: ${Boolean(val7)}
\nValeur 8 est: ${Boolean(val8)}
\nValeur 9 est: ${Boolean(val9)}`);


/*Exercice 2 : Comparaison de valeurs
Déclarez deux variables, a et b, et attribuez-leur des valeurs différentes (par exemple, a
= 10, b = "10"). Utilisez l'opérateur == pour vérifier si elles sont égales et l'opérateur
=== pour vérifier si elles sont strictement égales. Affichez les résultats avec
console.log.*/


let a = 10;
let b = "10";

if (a == b) {
  console.log();
}


/* Exercice 3 : Opérateur logique ET (&&)

Déclarez deux variables booléennes, isSunny et isWeekend. Attribuez-leur des valeurs
(true ou false). Utilisez l'opérateur && pour vérifier si les deux conditions sont vraies,
puis affichez le résultat avec console.log.*/

let isSunny = true;
let isWeekend = false;

let canGoOut = isSunny && isWeekend;

console.log(`Go out: ${canGoOut}`);


/* Exercice 4 : Opérateur logique OU (||)

Déclarez deux variables booléennes, hasCoffee et hasTea. Attribuez-leur des valeurs
(true ou false). Utilisez l'opérateur || pour vérifier si au moins une des conditions est
vraie, puis affichez le résultat avec console.log.*/


let hasCoffee = true;
let hasTea = false;

let hasDrink = hasCoffee || hasTea;

console.log(`Has drink: ${hasDrink}`);


/*Exercice 5 : Opérateur logique NON (!)

Déclarez une variable booléenne isRaining et attribuez-lui une valeur (true ou false).
Utilisez l'opérateur ! pour inverser la valeur et affichez le résultat avec console.log.*/


let isRaining = true;

let isNotRaining = !isRaining;

console.log(`Is it raining or not: ${isNotRaining}`);


/*Exercice 6 : Évaluation d'une chaîne vide

Déclarez une variable userInput et attribuez-lui une chaîne vide (""). Utilisez une
instruction if pour vérifier si la valeur est falsy, puis affichez un message approprié
avec console.log.*/


let userInput = ""; // falsy

if (!userInput) {   // L’opérateur ! convertit la valeur en booléen puis inverse le résultat ==> true.
  console.log("La valeur est falsy (chaîne vide).");
} else {
  console.log("La valeur est truthy.");
}


/* Exercice 7 : Évaluation d'un nombre zéro

Déclarez une variable number et attribuez-lui la valeur 0. Utilisez une instruction if pour
vérifier si la valeur est falsy, puis affichez un message approprié avec console.log.*/


let number = 0; // 0 est une valeur falsy en JavaScript

// On vérifie si la valeur est falsy
if (!number) {  
  // L'opérateur ! convertit la valeur en booléen puis l'inverse
  console.log("La valeur est falsy (0 est une valeur falsy).");
} else {
  console.log("La valeur est truthy.");
}


/* Exercice 8 : Combinaison d'opérateurs logiques

Déclarez trois variables booléennes : isLoggedIn, isAdmin, et hasPermission.
Attribuez-leur des valeurs (true ou false). Écrivez une expression qui vérifie si
l'utilisateur est connecté (isLoggedIn), est un administrateur (isAdmin) OU a la
permission (hasPermission). Affichez le résultat avec console.log.*/


let isLoggedIn = true;     // L'utilisateur est connecté
let isAdmin = false;       // L'utilisateur n'est pas administrateur
let hasPermission = true;  // L'utilisateur a une permission spéciale

// On vérifie si l'utilisateur est connecté ET (administrateur OU a la permission)
let canAccess = isLoggedIn && (isAdmin || hasPermission);

// Affichage du résultat
console.log(`Access: ${canAccess}`);


/* Exercice 9 : Vérification de l'existence d'une valeur

Demandez à l'utilisateur d'entrer une valeur en utilisant prompt. Stockez la valeur dans
une variable userValue. Utilisez une instruction if pour vérifier si la valeur est truthy ou
falsy, puis affichez un message approprié avec alert.*/


// On demande à l'utilisateur d'entrer une valeur
let userValue = prompt("Entrez une valeur :");

// On vérifie si la valeur est truthy ou falsy
if (userValue) {
  // Si la valeur est truthy
  alert("La valeur est truthy.");
} else {
  // Si la valeur est falsy (null, chaîne vide, etc.)
  alert("La valeur est falsy.");
}


/*Exercice 10 : Conversion explicite en booléen

Déclarez plusieurs variables avec des valeurs différentes : 0, "Hello", null, undefined,
42, "". Utilisez la fonction Boolean() pour convertir explicitement chaque valeur en
booléen, puis affichez le résultat avec console.log.*/


// Déclaration des variables avec différentes valeurs
let value1 = 0;
let value2 = "Hello";
let value3 = null;
let value4 = undefined;
let value5 = 42;
let value6 = "";

// Conversion explicite en booléen avec Boolean()
console.log(Boolean(value1)); // false → 0 est falsy
console.log(Boolean(value2)); // true  → chaîne non vide = truthy
console.log(Boolean(value3)); // false → null est falsy
console.log(Boolean(value4)); // false → undefined est falsy
console.log(Boolean(value5)); // true  → nombre différent de 0 = truthy
console.log(Boolean(value6)); // false → chaîne vide est falsy