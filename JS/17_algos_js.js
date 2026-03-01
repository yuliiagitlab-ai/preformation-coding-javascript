//Exercices - ALGOS



/*01.
Étant donné ce qui est censé être tapé et ce qui est réellement tapé, écrivez une fonction qui
renvoie la ou les touche(s) défectueuse(s). La fonction se présente comme suit :
Notes
● Les touches défectueuses doivent être ordonnées selon leur première apparition dans la
phrase.
● Une seule touche défectueuse par lettre doit être répertoriée.
● Toutes les lettres seront en minuscules.*/


// 01. Touches défectueuses
// expected: ce qui est censé être tapé
// actual:   ce qui est réellement tapé
// Retourne un tableau des touches défectueuses (sans doublons, dans l'ordre d'apparition)

function brokenKeys(expected, actual) {
  const result = [];
  const seen = new Set();

  const len = Math.min(expected.length, actual.length);

  for (let i = 0; i < len; i++) {
    if (expected[i] !== actual[i] && !seen.has(expected[i])) {
      seen.add(expected[i]);
      result.push(expected[i]);
    }
  }

  return result;
}

console.log(brokenKeys("happy birthday", "hawwy birthday")); // ["p"]
console.log(brokenKeys("starry night", "starrq light"));     // ["y", "n"]
console.log(brokenKeys("beethoven", "affthoif5"));          // ["b","e","v","n"]



/*02.
Écrivez une fonction appelée ransomNote qui prend deux paramètres : noteText et
magazineText. L'objectif est : avec tous les mots de magazineText, vous devriez être
capable de créer le noteText. La fonction doit retourner true si nous pouvons écrire le
noteText avec les mots de magazineText ou false si nous ne le pouvons pas.
Voici deux exemples :
noteText = "this is a secret note to you from a secret admirer"
magazineText = "puerto rico is a great place you must hike far from town to find a secret
waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to
you"
Dans le cas ci-dessus, le résultat serait false. Pourquoi ? Parce que tous les mots sont
présents, mais secret n'apparaît qu'une seule fois dans magazineText, alors qu'il y a deux
secret dans noteText.
Si le noteText était : "this is a note to you from a secret admirer"
Cela fonctionnerait et retournerait true.
Testez votre code avec ces textes et d'autres.*/


function ransomNote(noteText, magazineText) {
  const noteWords = noteText.split(" ");
  const magazineWords = magazineText.split(" ");

  const wordCount = {};

  // On compte les mots du magazine
  for (let i = 0; i < magazineWords.length; i++) {
    const word = magazineWords[i];
    wordCount[word] = (wordCount[word] || 0) + 1;
  }

  // On vérifie si chaque mot de la note est disponible
  for (let i = 0; i < noteWords.length; i++) {
    const word = noteWords[i];

    if (!wordCount[word]) {
      return false; // mot absent ou utilisé trop de fois
    }

    wordCount[word]--; // on "utilise" le mot
  }

  return true;
}


/*03.
Un mot s'est échappé et tente de se cacher au milieu d'une foule de grandes lettres !
Aidez-nous à écrire une fonction pour retrouver ce mot, en respectant les règles suivantes :
● Le mot recherché est en minuscules.
● La foule de lettres qui l'entoure est entièrement en majuscules.
● Notez que les lettres du mot sont dispersées parmi les lettres aléatoires, mais elles
restent dans le même ordre.

Résultats attendus :
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"*/


// Version classique avec une boucle for:

function detectWord(str) {
    let word = "";

    // On parcourt chaque caractère de la chaîne
    for (let i = 0; i < str.length; i++) {

        // Si le caractère est en minuscule, on l'ajoute au mot
        if (str[i] === str[i].toLowerCase()) {
            word += str[i];
        }
    }

    // On retourne le mot reconstitué
    return word;
}

// Version avec split() pour transformer la chaîne en tableau
// puis forEach() pour parcourir chaque élément

function detectWord(str) {
    const motSecret = [];

    str.split("").forEach((element) => {

        // On vérifie si la lettre est en minuscule
        if (element === element.toLowerCase()) {
            motSecret.push(element); // On ajoute la lettre au tableau
        }
    });

    // On recompose le mot avec join("")
    return motSecret.join("");
}

console.log(detectWord("UcUNFYGaFYFYGtNUH"));


// Version moderne et plus concise
// Utilisation de filter() pour garder uniquement les lettres minuscules

const detectWord = (str) =>
    str
        .split("") // Transformation en tableau
        .filter((element) => element === element.toLowerCase()) // Filtrage des minuscules
        .join(""); // Reconstruction du mot