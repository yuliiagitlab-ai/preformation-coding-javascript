//Exercice - LOOP

/*Ok, écrivons un petit jeu stupide. :) 

Lis toutes les instructions avant de commencer à coder.

● La machine doit demander à l'utilisateur d'entrer un "nombre maximum".
● Assure-toi que le nombre maximum est bien un nombre. Sinon, elle doit redemander un
nombre maximum.
● La machine doit ensuite choisir un nombre aléatoire entre 1 et le nombre maximum.
● Ensuite, la machine doit demander à l'utilisateur de deviner le nombre.
● Si l'utilisateur entre quelque chose qui n'est pas un nombre, la machine doit afficher une
alerte indiquant que ce n'est pas une réponse valide et redemander un nombre.
● Si ce n'est pas correct, la machine doit indiquer que ce n'est pas correct et préciser si le
nombre à deviner est plus grand ou plus petit.
● La boucle ne se termine que lorsque l'utilisateur trouve le bon nombre. À ce moment-là,
la machine affiche "Félicitations !" ainsi que le nombre de tentatives effectuées avant de
trouver la bonne réponse.

Petit conseil :
● La fonction prompt renvoie toujours une chaîne de caractères, même si on entre un
nombre. Assure-toi de comparer des nombres entre eux !
● On ne peut pas utiliser un comparateur avec NaN. Il existe une fonction pour vérifier si
une valeur est NaN : isNaN(). Mais souviens-toi : NaN est une valeur falsy, donc il y a
de meilleures façons de le gérer.*/



let numMax = Number(prompt("Entrez un nombre maximum:"));

while (isNaN(numMax) || numMax < 2) {
  numMax = Number(
    prompt("Ce n'est pas une réponse valide. Entrez bien un nombre maximum:")
  );
}

let min = 1;
let max = numMax;
let numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Number random: ${numRandom}`);

let numToGuess = Number(prompt(`Devinez un nombre entre 1 et ${numMax}:`));

let tentatives = 0;

while (numToGuess !== numRandom) {
  if (isNaN(numToGuess)) {
    numToGuess = Number(
      prompt(
        `Ce n'est pas une réponse valide. Entrez bien un nombre entre 1 et ${numMax}`
      )
    );
  } else if (numToGuess > numRandom) {
    numToGuess = Number(
      prompt("Le nombre à deviner est plus petit. Devinez bien un nombre:")
    );
    tentatives++;
  } else {
    numToGuess = Number(
      prompt("Le nombre à deviner est plus grand. Devinez bien un nombre:")
    );
    tentatives++;
  }
}

alert(`Félicitations ! Vous avez deviné en ${tentatives} tentatives`);