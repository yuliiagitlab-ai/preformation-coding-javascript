//Exercices - NUMBERS

/* Exercice 1 : Opérations mathématiques de base

Déclarez deux variables, num1 et num2, et attribuez-leur des valeurs numériques.
Calculez et affichez leur somme, leur différence, leur produit et leur quotient en utilisant
console.log.*/


let num1 = 54;
let num2 = 32;

let somme = num1 + num2;
let différence = num1 - num2;
let produit = num1 * num2;
let quotient = num1 / num2;

console.log(`Ex #1 : Opérations mathématiques de base:`);
console.log(`Le somme de ${num1} et ${num2} est ${somme}
\n Le difference de ${num1} et ${num2} est ${différence}
\n Le produit de ${num1} et ${num2} est ${produit}
\n Le quotient de ${num1} et ${num2} est ${quotient}`);



/* Exercice 2 : Arrondir un nombre

Demandez à l'utilisateur d'entrer un nombre décimal en utilisant prompt. Stockez la
valeur dans une variable decimalNumber. Utilisez Math.round() pour arrondir le nombre
à l'entier le plus proche et affichez le résultat avec alert.*/


let decimalNumber = parseFloat(prompt("Ex #2 : Arrondir un nombre\nEntrez un nombre décimal:").replace(",", "."));
let entier = Math.round(decimalNumber);

alert(`l'entier de decimal ${decimalNumber} que vous avez choisi est ${entier}.`);


/* Exercice 3 : Conversion de chaîne en nombre

Demandez à l'utilisateur d'entrer un nombre sous forme de chaîne de caractères en
utilisant prompt. Stockez la valeur dans une variable stringNumber. Convertissez cette
chaîne en nombre en utilisant Number() ou parseFloat(), puis affichez le type et la
valeur avec console.log.*/


let stringNumber = parseFloat(prompt("Ex #3 : Conversion de chaîne en nombre\nEntrez un nombre:"));
console.log("Ex #3 : Conversion de chaîne en nombre:");
console.log(`Your number is ${stringNumber}.`);


/* Exercice 4 : Nombre aléatoire

Générez un nombre aléatoire entre 1 et 100 en utilisant Math.random() et
Math.floor(). Stockez le résultat dans une variable randomNumber et affichez-le avec
console.log.*/


let randomNumber = Math.floor(Math.random()*100+1);
console.log("Ex #4 : Nombre aléatoire:");
console.log(`The random number is ${randomNumber}.`);


/* Exercice 6 : Calcul de la puissance d'un nombre

Déclarez deux variables, base et exponent, et attribuez-leur des valeurs numériques.
Utilisez Math.pow() ou l'opérateur ** pour calculer la puissance (base élevé à
exponent), puis affichez le résultat avec console.log.*/


let numberBase = 32;
let numberExponent = 5;

let resultatPuissance = numberBase ** numberExponent;
let resultatPow = Math.pow(numberBase, numberExponent);

console.log("Ex #6 : Calcul de la puissance d'un nombre");
console.log(`Le resultat de la puisance de nombre ${numberBase} exponant ${numberExponent} avec ** est: ${resultatPuissance}`);
console.log(`Le resultat de la puisance de nombre ${numberBase} exponant ${numberExponent} avec Math.pow est: ${resultatPow}`);


/* Exercice 7 : Trouver le plus grand nombre

Déclarez trois variables, a, b et c, et attribuez-leur des valeurs numériques. Utilisez
Math.max() pour trouver le plus grand des trois nombres et affichez-le avec
console.log.*/


let a = 57;
let b = 62;
let c = 34;

let maxNumber = Math.max(a, b, c);
console.log("Ex #7 : Trouver le plus grand nombre:");
console.log(`Le plus grand nombre entre ${a}, ${b}, ${c} est: ${maxNumber}.`);


/* Exercice 8 : Formater un nombre avec deux décimales

Demandez à l'utilisateur d'entrer un nombre décimal en utilisant prompt. Stockez la
valeur dans une variable decimalNumber. Formatez le nombre avec deux décimales et
affichez-le avec alert.*/


let decimalNumber2 = prompt("Ex #8 : Formater un nombre avec deux décimales\nEntrez un nombre décimal:");
let n = parseFloat(decimalNumber2.replace(",", "."));
let decimalFormated = n.toFixed(2);

alert(`Formater un nombre avec deux décimales:\nNombre "${decimalNumber2}"devient: ${decimalFormated}.`)


/* Exercice 9 : Vérification si un nombre est entier

Demandez à l'utilisateur d'entrer un nombre en utilisant prompt. Stockez la valeur dans
une variable userNumber. Utilisez Number.isInteger() pour vérifier si le nombre est un
entier, puis affichez le résultat avec console.log.*/


let userNumber = Number(prompt(`Ex #9 : Vérification si un nombre est entier\nEntrer un nombre:`));
let isInteger = Number.isInteger(userNumber);

console.log("Ex #9 : Vérification si un nombre est entier:");
console.log(`Nombre "${userNumber}" est entier: ${isInteger}.`);


/* Exercice 10 : Calcul de la racine carrée

Demandez à l'utilisateur d'entrer un nombre positif en utilisant prompt. Stockez la valeur
dans une variable positiveNumber. Utilisez Math.sqrt() pour calculer la racine carrée
du nombre et affichez le résultat avec alert.*/


let positiveNumber = Number(prompt(`Ex #10 : Calcul de la racine carrée\nEntrez un nombre positif:`));
let resutatRacine = Math.sqrt(positiveNumber);

alert(`Calcul de la racine carrée de nombre ${positiveNumber}: ${resutatRacine.toFixed(2)}.`)