// Exercices - FUNCTIONS

/* Exercice 1 : Oddish ou Evenish
Créez une fonction qui détermine si un nombre est "Oddish" ou "Evenish".
● Un nombre est Oddish si la somme de tous ses chiffres est impaire.
● Un nombre est Evenish si la somme de tous ses chiffres est paire.
Si le nombre est Oddish, la fonction doit retourner "Oddish". Sinon, elle doit retourner
"Evenish".

Exemples :
● oddishOrEvenish(121) doit retourner "Evenish" puisque 1 + 2 + 1 = 4.
● oddishOrEvenish(41) doit retourner "Oddish" puisque 4 + 1 = 5. */


function oddishOrEvenish(number) {
  let sum = 0;
  let digits = number.toString();

  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]);
  }

  console.log(sum);

  if (sum % 2 === 0) {
    return "Evenish";
  } else {
    return "Oddish";
  }
}

console.log(oddishOrEvenish(1234));

// Version avec split() pour créer un tableau de chiffres

function oddishOrEvenish(nmbr) {
  const strArr = nmbr.toString().split("");
  let sum = 0;

  for (let i = 0; i < strArr.length; i++) {
    sum += Number(strArr[i]);
  }

  return sum % 2 === 0 ? "Evenish" : "Oddish";
}


/* Exercice 2 : 7 boom !
Créez une fonction qui prend un tableau de nombres et retourne "Boom!" si le chiffre 7
apparaît dans le tableau. Sinon, retournez "il n’y a pas de 7 dans l’array".
 */

function sevenBoom(array) {
  for (let i = 0; i < array.length; i++) {
    let number = array[i];

    if (number.toString().includes("7")) {
      return "Boom!";
    }
  }

  return "There is no 7 in the array";
}

console.log(sevenBoom([1, 5, 7, 10]));
console.log(sevenBoom([1, 5, 6, 10]));
console.log(sevenBoom([1, 5, 57, 10]));


/* Exercice 3 : The FizzBuzz

Créez une fonction qui prend un argument num. La fonction doit ensuite afficher dans la console tous les nombres de 1 à num.
Mais voici la subtilité :
● Pour les multiples de 3, affichez "Fizz".
● Pour les multiples de 5, affichez "Buzz".
● Enfin, si le nombre est multiple à la fois de 3 et de 5, affichez "FizzBuzz".
Notes :
● Votre code doit être modulaire. Vous devez pouvoir passer n'importe quel nombre en argument et le code doit fonctionner correctement.

Résultat attendu :
Si num vaut 20, la console devrait afficher :
1 
2 
Fizz 
4 
Buzz 
Fizz 
7 
8 
Fizz 
Buzz 
11 
Fizz 
13 
14 
FizzBuzz 
16 
17 
Fizz 
19 
Buzz */

function fizzBuzz (num) {
    for (let i = 1; i <= num; i++) {
        
        if ((i % 3 === 0) && (i % 5 === 0)) { //(i % 15 === 0)
            console.log("FizzBuzz");
        }else if (i % 3 === 0) {
            console.log("Buzz");
        }else if (i % 5 === 0) {
            console.log("Buzz");
        }else {
            console.log(i);
        }
        
    }
    return;
}

console.log(fizzBuzz(20));

/* Exercice 4 : Compter les valeurs true

Créez une fonction qui retourne le nombre de valeurs true présentes dans un tableau.
Notes :
- Retournez 0 si le tableau est vide.
- Tous les éléments du tableau sont de type booléen (true ou false). */

function countTrue (array) {
    let sumTrue = 0;
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] === true) {
            sumTrue++;
        }
    }
    return sumTrue;
}

console.log(countTrue([true, false, true, false, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
