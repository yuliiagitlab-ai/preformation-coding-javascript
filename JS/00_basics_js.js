// Commentaire
/* 
Commentaire
multi-ligne
*/

//////// VARIABLE ////////
var ancien = "Obsolète";
ancien2 = "Obsolète";
let a = 5;
const b = 5 + (3 / 2) * 19;
// Les variables ne peuvent contenir que UNE valeur. Or, une expression correspond à une valeur, donc : ok

//////// TYPES DE DONNÉES ////////
// Les "familles" de valeurs.

// Booléens --> true falses
// Numbers --> integer float
// Strings --> Chaîne de caractères : texte
// null, undefined --> valeurs "inexistantes"
// NaN (inexistant aussi) --> On attend un number mais la machine n'y arrive pas. Exemple : 6 / "hello"

console.log("hello");
alert("hello");
prompt("Ceci est le message affiché"); // Est une expression qui équivaut à la valeur string de ce que l'utilisateur aura entré

//////// STRINGS ////////

const str1 = "double guillemets";
const str2 = 'simple gu"illemets';
const str3 = `backticks ${5 + 3}`;

// Concaténation
str1 + str2; // 'double guillemetssimple gu"illemets'

// Accéder à des caractères spécifiques : entre crochets via l'index (number)
const index = 1;
str1[index];

// Méthodes string et propriétés
str1.toUpperCase(); // "DOUBLE GUILLEMETS"

"henrique".length; // Expression qui résulte en une valeur : number 8

//////// NUMBERS ////////

// int et float (pas de virgule et virgule)

const num = 5;

num.toString(); // méthode --> devient string

String(num); // "5"
`${num}`; // "5"
"" + num; // "5"

// Opérations mathématiques

(5 + 3) / 17; // Expression mathématique qui équivaut à une valeur

let counter = 0;
counter = counter + 1; // 1
counter = counter + 1; // 2

counter++;
counter += 2;
counter += 17;
counter--;
counter -= 23;
counter /= 4;
counter *= 7;

// Objet Math

Math.PI;
Math.pow(17, 3);
Math.round(5.23);

//////// BOOLÉEN ////////

true;
false;

// Toute valeur a un équivalent booléen

Boolean("hello"); // true dans ce cas et pout n'importe quel cas, sauf :

0, NaN, null, undefined, "", false;

// TOUTES les valeurs sont truthy (donc : equivalent booléen vaut true) sauf les valeurs ci-dessus. (falsy)

if (valeurRetourneeDeLaBaseDeDonnee) {
    console.log("hello");
} else {
    console.log("Pas trouvé");
}

//////// CONDITIONS ////////

// Il n'y a que UN bloc qui sera exécuté dans la condition

if (valeur1) {
    // Ne sera exécuté que si valeur1 est truthy
} else if (valeur2) {
    // Ne sera exécuté que si valeur1 est falsy et la valeur2 est truthy

    if (valeurA) {
        // Une fois dans ce bloc, ceci ne sera exécuté que si valeurA est truthy
    } else {
        // Ceci ne sera exécuté que si valeurA était falsy
    }
} else {
    // Ne sera exécuté que si toutes les autres conditions ont été falsy
}

// Opérations de comparaison

/* > // Plus grand
< // Plus petit
>= // Plus grand ou égal
<= // Plus petit ou égal
== // égal à
=== // Strictement égal à 
!= // Différent de
!== // Stricterment différent de */

// Opérations logiques

/* && // et
|| // ou
! // le contraire booléen de */

if (!!5) {
    console.log(3);
}

//////// ARRAYS ////////

// Collection ordonée de valeurs --> Les valeurs à l'intérieur de l'array ont un ordre qui commence par 0

const myArr = [1, 2, 3, 4, 5, 6, 7, "hello", "goodbye", true];

// Ont des propriétés et des méthodes

myArr.length;
myArr.push("une valeur à la fin");
myArr.pop();
myArr.unshift("une valeur au début");
myArr.shift();
myArr.slice(7, 9);

"henrique".slice(1, 3);