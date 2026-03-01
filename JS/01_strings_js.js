//Exercices - STRINGS

/* Exercice 1

Objectif : Déclare deux variables, firstName avec ton prénom et lastName avec ton nom de
famille. Crée une troisième variable, fullName, qui combine les deux pour afficher ton nom
complet, avec un espace entre le prénom et le nom.

Tip : Pense à comment "additionner" des chaînes de caractères. Le plus important est de ne
pas oublier d'inclure le caractère qui sépare le prénom du nom.*/


let firstName = "Yulia";
let lastName = "Korr";
let fullName = firstName + " " + lastName;

console.log(`Fullname: ${fullName}`);


/* Exercice 2

Objectif : Crée trois variables : name (un nom), age (un âge) et city (une ville). En utilisant
des template literals, construis une seule chaîne de caractères qui affiche une phrase de
présentation comme : "Bonjour, je m'appelle Sarah, j'ai 30 ans et j'habite à Paris."

Tip : Utilise les apostrophes inversées (backticks ``) pour construire ta phrase. Comment
peux-tu insérer la valeur d'une variable directement à l'intérieur de ce type de chaîne ?*/


let name = "Sarah";
let age = 30;
let city = "Brussels";

console.log(`Bonjour, je m'appelle ${name}, j'ai ${age} ans et j'habite à ${city}.`);
console.log("Bonjour, je m'appelle " + name + ", j'ai " + age + " ans et j'habite à " + city + ".");


/* Exercice 3

Objectif : Crée une variable avec le mot de ton choix. Affiche ensuite trois informations dans la console :

1. Le nombre total de caractères dans le mot.
2. La première lettre du mot.
3. La dernière lettre du mot.

Tip : L'index d'une chaîne commence toujours à 0. Pour trouver le dernier caractère, réfléchis à
la relation entre la propriété .length et la position (l'index) du tout dernier caractère.*/


let mot = "Programmation";

console.log(`Le nombre total de caractères dans le mot: ${mot.length}.`);
console.log(`La première lettre du mot: ${mot[0]}`);
console.log(`La dernière lettre du mot: ${mot[mot.length - 1]}`);


/* Exercice 4

Objectif : Prends la variable suivante : let mixedString = "bOnJoUr Le MoNdE";.
Affiche cette chaîne de caractères de deux manières différentes : une fois entièrement en
majuscules et une fois entièrement en minuscules.

Tip : Il existe deux méthodes très directes, une pour chaque transformation. Leurs noms sont
assez explicites !*/


let mixedString = "bOnJoUr Le MoNdE";

console.log(`Majuscules: ${mixedString.toUpperCase()}.`);
console.log(`Minuscules: ${mixedString.toLowerCase()}.`);


/* Exercice 5

Objectif : À partir de la phrase let sentence = "J'apprends le JavaScript chez Bruxelles Formation.";, 
extrais le mot "JavaScript" et stocke-le dans une nouvelle variable.

Tip : Pour "découper" une partie d'une chaîne, tu as besoin de savoir où commencer. Trouve
d'abord l'index de départ du mot "JavaScript", puis utilise une méthode pour extraire cette
tranche.*/


let sentence = "J'apprends beaucoup le JavaScript chez Bruxelles Formation.";

let resultat = sentence.slice(
    sentence.indexOf("JavaScript"),
    sentence.indexOf("JavaScript") + 10
);

console.log(resultat);

// let start = sentence.indexOf("JavaScript");
// let resultat = sentence.slice(start, start + "JavaScript".length);


/* Exercice 6

Objectif : La variable let userEmail = " john.doe@email.com "; contient des
espaces inutiles au début et à la fin. Crée une nouvelle variable cleanedEmail qui contient
l'email sans ces espaces superflus.

Tip : Il y a une méthode spécialement conçue pour "tailler" les espaces vides uniquement aux
extrémités d'une chaîne.*/


let userEmail = " john.doe@email.com ";
let cleanedEmail = userEmail.trim();

console.log(cleanedEmail);


/* Exercice 7

Objectif : Tu as la phrase let originalSentence = "Le chat boit du lait.";.
Change le mot "chat" par "chien" pour que la phrase devienne "Le chien boit du lait.".

Tip : Cherche la méthode qui te permet de trouver un morceau de texte dans une chaîne et de
le remplacer par un autre.*/


let originalSentence = "Le chat boit du lait.";
let changedSentence = originalSentence.replace("chat", "chien");

console.log(changedSentence);


/* Exercice 8

Objectif : Dans la chaîne let word = "abracadabra";, trouve l'index de la dernière lettre "a".

Tip : La méthode .indexOf() te donnera la position de la première lettre "a". Comment
ferais-tu pour commencer la recherche depuis la fin de la chaîne plutôt que depuis le début ?*/


let word = "abracadabra";
let lastIndex = word.lastIndexOf("a");

console.log(lastIndex); 


/* Exercice 9

Objectif : Une variable a été mal encodée : let messyName = " aLexANdeR ";.
Transforme cette variable pour qu'elle soit correctement formatée, c'est-à-dire "Alexander" 
(sans espaces, avec la première lettre en majuscule et le reste en minuscules).

Tip : C'est un défi qui combine plusieurs étapes !
1. Commence par nettoyer les espaces.
2. Ensuite, isole la première lettre.
3. Mets cette première lettre en majuscule.
4. Isole le reste du mot et mets-le en minuscule.
5. Enfin, assemble les deux morceaux.*/


let messyName = " aLexANdeR ";
let correctTrim = messyName.trim();
let correction1 = correctTrim.charAt(0).toUpperCase(); // Première lettre en majuscule
let correction2 = correctTrim.slice(1).toLowerCase(); // Reste du mot en minuscule

let resultatName = correction1 + correction2;

console.log(resultatName); // "Alexander"

// Version plus courte:

let messyName2 = " aLexANdeR ";

let resultatName2 = messyName.trim()[0].toUpperCase() +
                    messyName.trim().slice(1).toLowerCase();

console.log(resultatName2); // "Alexander"


/* Exercice 10

Objectif : Crée trois variables : item ("pizza"), quantity (2), price (15). Construis la phrase
"La commande de 2 pizzas coûte 30 dollars." de deux manières différentes :
1. En utilisant uniquement la concaténation (l'opérateur +).
2. En utilisant des template literals.

Tip : Cet exercice vise à comparer les deux syntaxes. Note comme il peut être plus simple
d'insérer des nombres et de faire des calculs simples directement à l'intérieur des template
literals.*/      


let item = "pizza";
let quantity = 2;
let price = 15;

console.log(`La commande de ${quantity} ${item}s coûte ${quantity * price} dollars.`);