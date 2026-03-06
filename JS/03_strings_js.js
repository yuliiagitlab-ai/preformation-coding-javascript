//Exercices - STRINGS

/* Exercice 1 : Longueur d'une chaîne
Demandez à l'utilisateur d'entrer une phrase en utilisant prompt. Stockez la phrase dans une variable phrase. 
Utilisez la propriété .length pour afficher la longueur de la phrase avec console.log.*/

phrase = prompt("Entrez une phrase:");

console.log("\nExercice 1:");
console.log(`Length: ${phrase.length}`);


/* Exercice 2 : Conversion en majuscules
Demandez à l'utilisateur d'entrer son prénom en utilisant prompt. Stockez la valeur dans une variable firstName. 
Convertissez le prénom en majuscules en utilisant .toUpperCase() et affichez-le avec alert.*/

firstName = prompt("Exercise 2.\n\nEntrez votre nom:");

alert(`Upper case: ${firstName.toUpperCase()}`);


/* Exercice 3 : Conversion en minuscules
Demandez à l'utilisateur d'entrer le nom de sa ville en utilisant prompt. Stockez la valeur dans une variable city. 
Convertissez le nom de la ville en minuscules en utilisant .toLowerCase() et affi chez-le avec console.log.*/

city = prompt("Exercise 3.\n\nVous habitez où:");

alert(`Lower case: ${city.toLowerCase()}`);


/* Exercice 4 : Extraction d'une sous-chaîne
Déclarez une variable sentence contenant la phrase : "JavaScript est un langage puissant." 
Utilisez la méthode .slice() pour extraire le mot "langage" et affichez-le avec console.log.*/


sentence = "JavaScript est un langage puissant.";

console.log("\nExercice 4:");
console.log(sentence.slice(18, 25));


/* Exercice 5 : Recherche d'un mot dans une chaîne
Déclarez une variable text contenant : "Le développement web est passionnant." 
Utilisez la méthode .indexOf() pour vérifier si le mot "web" est présent dans la chaîne. 
Affichez le résultat avec console.log.*/

text = "Le développement web est passionnant.";

console.log("\nExercice 5:");
console.log(`Index of: ${text.indexOf("web")}`);


/* Exercice 6 : Remplacement de texte
Déclarez une variable message contenant : "J'aime les pommes et les bananes." Utilisez la méthode .replace() 
pour remplacer "pommes" par "fraises" et affichez la nouvelle phrase avec alert.*/


message = "J'aime les pommes et les bananes.";

alert(message.replace("pommes", "fraises"));


/* Exercice 8 : Suppression des espaces en début et fin
Demandez à l'utilisateur d'entrer une phrase avec des espaces au début et à la fin en utilisant prompt. 
Stockez la valeur dans une variable userInput. Utilisez la méthode .trim() pour supprimer les espaces inutiles 
et affichez le résultat avec console.log.*/

userInput = prompt("Entrez une phrase avec des espaces au début et à la fin:")

console.log("\nExercice 8:");
console.log(userInput.trim());


/* Exercice 9 : Vérifi cation de l'inclusion d'un mot
Déclarez une variable quote contenant : "La vie est belle." Utilisez la méthode .includes() 
pour vérifi er si le mot "belle" est présent dans la chaîne. Affichez le résultat avec console.log.*/


quote = "La vie est belle.";

console.log("\nExercice 9:");
console.log(`Includes: ${quote.includes("belle")}`);


/* Exercice 10 : Concaténation de chaînes
Demandez à l'utilisateur d'entrer deux mots en utilisant prompt. Stockez les valeurs dans deux variables word1 et word2. 
Concaténez les deux mots en une seule chaîne en utilisant l'opérateur + ou la méthode .concat(), puis affichez le résultat 
avec alert.*/

let word1 = prompt("Entrez un premier mot: ");
let word2 = prompt("Entrez un deuxième mot: ");

let resultat = word1.concat(word2);
let resultat2 = word1.concat(" ", word2);

alert(`Le résultat de la concaténation est : ${resultat}\nLe résultat de la concaténation avec un espace est : ${resultat2}`);

