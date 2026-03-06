// Exercices - FUNCTIONS

/*Ces exercices couvrent différents aspects de la création et de l'utilisation des fonctions en
JavaScript, y compris la manipulation d'arguments, le retour de valeurs, et l'exécution répétée
de tâches. */

//===============================================================================================

/*1. Lancer des dés
Écrivez une fonction qui lance autant de dés que vous le souhaitez, avec autant de faces que
vous le souhaitez.

Consigne :
Écrivez une fonction qui prend deux paramètres : faces et times.
À l'intérieur, affichez dans la console, pour chaque dé, un message du type :
Exemple attendu pour (6, 5) (les nombres doivent être aléatoires, bien sûr) :*/

console.log("Exercice 1: Lancer des dés.");

function rollDice(faces, times) {
  for (let i = 1; i <= times; i++) {
    const result = Math.floor(Math.random() * faces) + 1;
    console.log(`Dé ${i} : ${result}`);
  }
}

rollDice(6, 5);

// Version avec prompt et vérification des valeurs saisies par l'utilisateur:
console.log("Version avec prompt et vérification des valeurs saisies par l'utilisateur:");

function lancerDeDes() {
  let faces = Number(prompt("Lancer des dés:\nCombien de faces ?"));
  let times = Number(prompt("Combien de lancers ?"));

  if (isNaN(faces) || faces <= 0 || isNaN(times) || times <= 0) {
    console.log("Veuillez entrer des nombres valides.");
    return;
  }

  for (let i = 1; i <= times; i++) {
    const resultat = Math.floor(Math.random() * faces) + 1;
    console.log(`Dé ${i} : ${resultat}`);
  }
}

lancerDeDes();

/* 2. Répéter une chaîne de caractères
Écrivez une fonction qui prend en paramètre une chaîne de caractères et le nombre de fois que
vous souhaitez la répéter. Ensuite, affichez dans la console le résultat.

Exemple :
● Note : N'oubliez pas de vérifier que le nombre est bien un nombre.*/

console.log("Exercice 2: Répéter une chaîne de caractères.");

function repeat(str, times) {
  // Vérification que times est bien un nombre positif
  if (typeof times !== "number" || isNaN(times) || times <= 0) {
    console.log("Veuillez entrer un nombre valide supérieur à 0.");
    return;
  }

  let result = "";

  for (let i = 0; i < times; i++) {
    result += str;
  }

  console.log(result);
}

repeat("$", 5);


/* 3. Présentation par prénom et initiale du nom
Écrivez une fonction qui prend en paramètres un firstName et un lastName et affiche le nom
complet avec le lastName sous forme d'initiale. */

console.log("Exercice 3: Présentation par prénom et initiale du nom.");

function greet(firstname, lastname) {
  return `This is ${firstname} ${lastname[0]}.`;
}

console.log(greet("Yulia", "Korr"));

// Result: This is Yulia K.


/* 4. Addition de deux nombres
Écrivez une fonction simple qui prend deux nombres et les additionne.
Ensuite, stockez le résultat de la fonction dans une variable et affichez dans la console la valeur
de cette variable. */

console.log("Exercice 4: Addition de deux nombres.");

function addition(a, b) {
  const resultat = a + b;
  console.log(resultat);
  return resultat;
}

addition(34, 25);


/* 5. Exercice mental
Réfléchissez à la sortie dans la console du code suivant:  */

console.log("Exercice 5: Exercice mental.");

function logs() {
  console.log("Hello");
  console.log("World");
  return 4;
  console.log("Goodbye");
  console.log("World");
}

const myVariable = logs();

console.log(myVariable);

// Testez-le et voyez si vous aviez raison. Si ce n'est pas le cas, essayez de comprendre pourquoi.

// N'oubliez pas : lorsque vous mettez des parenthèses après une fonction, elle s'exécute
// automatiquement, même si vous l'affectez à une variable.*/


// La sortie dans la console sera :

// Hello
// World
// 4

// Lorsque la ligne const myVariable = logs(); est exécutée, la présence des parenthèses () déclenche immédiatement l’exécution de la fonction.

// À l’intérieur de la fonction, console.log("Hello"); affiche Hello, puis console.log("World"); affiche World. Ensuite, l’instruction return 4; arrête immédiatement l’exécution de la fonction et renvoie la valeur 4.

// Les lignes console.log("Goodbye"); et console.log("World"); ne s’exécutent jamais, car une fonction s’arrête dès qu’elle rencontre un return.

// La valeur 4 est donc stockée dans la variable myVariable, puis console.log(myVariable); affiche 4 dans la console.



/*6. Fonction pour déterminer le temps vestimentaire
Écrivez une fonction appelée isShortWeather qui retourne true si la température est
supérieure ou égale à 24 degrés et false si elle est inférieure.

Exemples :

isShortWeather(13);  // false
isShortWeather(27);  // true
isShortWeather(-7);  // false */

console.log("Exercice 6: Fonction pour déterminer le temps vestimentaire.");


function isShortWeather(temperature) {
  return temperature >= 24;                    // retourne true
}

console.log(isShortWeather(13));  // false
console.log(isShortWeather(27));  // true
console.log(isShortWeather(-7));  // false


/*7. Dernier élément d'un tableau
Écrivez une fonction appelée lastElement qui accepte un seul argument, un tableau. La
fonction doit retourner le dernier élément du tableau (sans le retirer). Si le tableau est vide, la
fonction doit retourner null.

Exemples :

lastElement([3, 5, 7]); // 7
lastElement([1]);       // 1
lastElement([]);        // null */

console.log("Exercice 7: Dernier élément d'un tableau.");

function lastElement(array) {
  if (array.length === 0) {
    return null;
  }
  return array[array.length - 1];
}

console.log(lastElement([3, 5, 7])); // 7
console.log(lastElement([1]));       // 1
console.log(lastElement([]));        // null


/*8. Capitaliser une chaîne
Définissez une fonction appelée capitalize qui accepte une chaîne en paramètre et retourne
une nouvelle chaîne avec la première lettre en majuscule (le reste de la chaîne reste inchangé).

Exemples :

capitalize("eggplant");     
capitalize("pamplemousse"); 
capitalize("squid");        

● Indices :

○ Il faut extraire la première lettre, la mettre en majuscule (à l'aide d'une méthode
de chaîne) et la concaténer avec le reste de la chaîne (en utilisant une méthode
comme slice() pour omettre la première lettre).*/


console.log("Exercice 8: Capitaliser une chaîne.");

function capitalize(str) {
  if (str.length === 0) {
    return "";
  }

  const firstLetter = str[0].toUpperCase();
  const rest = str.slice(1);

  return firstLetter + rest;
}

console.log(capitalize("eggplant"));     // "Eggplant"
console.log(capitalize("pamplemousse")); // "Pamplemousse"
console.log(capitalize("squid"));        // "Squid"


// Version simple en une seule ligne:
console.log("Version simple en une seule ligne:");

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("eggplant"));     // "Eggplant"
console.log(capitalize("pamplemousse")); // "Pamplemousse"
console.log(capitalize("squid"));        // "Squid"


// Version sécurisée avec vérification du type et gestion des cas vides:
console.log("Version sécurisée avec vérification du type et gestion des cas vides:");

function capitalize(str) {
  if (!str || typeof str !== "string") {
    return "";
  }

  return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalize("eggplant"));     // "Eggplant"
console.log(capitalize("pamplemousse")); // "Pamplemousse"
console.log(capitalize("squid"));        // "Squid"
console.log(capitalize(""));             // ""
console.log(capitalize(null));           // ""


/* 9. Somme des éléments d'un tableau
Écrivez une fonction appelée sumArray qui accepte un seul argument : un tableau de
nombres. Elle doit retourner la somme de tous les nombres du tableau.

Exemples :

sumArray([1, 2, 3]);       // 6
sumArray([2, 2, 2, 2]);    // 8
sumArray([50, 50, 1]);     // 101

● Indice :

○ Vous aurez besoin d'une variable pour suivre le total, qui doit initialement être à
zéro.
○ Parcourez le tableau et pour chaque élément, ajoutez-le à la variable total.
○ Une fois tous les éléments ajoutés, retournez total.*/


console.log("Exercice 9: Somme des éléments d'un tableau.");

function sumArray(numbers) {
  if (!Array.isArray(numbers)) {
    return "Erreur : l'argument doit être un tableau.";
  }

  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      return "Erreur : le tableau doit contenir uniquement des nombres.";
    }

    total += numbers[i];
  }

  return total;
}

console.log(sumArray([1, 2, 3]));       // 6
console.log(sumArray([2, 2, 2, 2]));    // 8
console.log(sumArray([50, 50, 1]));     // 101


/*10. Jour de la semaine
Écrivez une fonction appelée returnDay qui prend en paramètre un nombre entre 1 et 7 et
retourne le jour de la semaine correspondant (1 pour "Monday", 2 pour "Tuesday", etc.).
● Si le nombre est inférieur à 1 ou supérieur à 7, la fonction doit retourner null.
● Nous utiliserons "Monday" comme premier jour.

Exemples :

returnDay(1); // "Monday"
returnDay(7); // "Sunday"
returnDay(4); // "Thursday"
returnDay(0); // null

● Indice :

○ Stockez les jours de la semaine dans un tableau ou utilisez un objet avec des
clés numériques.
○ Lors de l'appel de la fonction, utilisez le nombre pour accéder à la valeur
correspondante dans votre tableau/objet et retournez cette valeur.
Ces exercices couvrent différents aspects de la création et de l'utilisation des fonctions en
JavaScript, y compris la manipulation d'arguments, le retour de valeurs, et l'exécution répétée
de tâches. Bonne programmation !*/


console.log("Exercice 10: Jour de la semaine.");

function returnDay(num) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  if (num < 1 || num > 7) {
    return null;
  }

  return days[num - 1];
}

console.log(returnDay(1)); // "Monday"
console.log(returnDay(7)); // "Sunday"
console.log(returnDay(4)); // "Thursday"
console.log(returnDay(0)); // null


//===========================================================================

// function nomDeLaFonction() {}

// const nomDeLaFonction2 = () => {};
