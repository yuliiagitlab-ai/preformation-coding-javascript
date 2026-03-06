//Exercices - NUMBERS MATH

/* 1. Arrondis et types

Objectif : Différencier l'affichage de la valeur réelle.
Énoncé :
Déclare une variable prixTTC = 19.99.
Affiche dans la console :
1. La valeur arrondie à l'entier le plus proche (Math.round).
2. La valeur arrondie à l'entier supérieur (Math.ceil).
3. Le résultat de l'opération Math.round(prixTTC * 100) / 100. (Change la valeur de départ
à 19.999 pour voir l'intérêt de cette formule).*/


let prixTTC = 19.99;
console.log(`Ex #1. Le prix TTC: ${prixTTC}`);

// 1. Valeur arrondie à l'entier le plus proche
console.log(`Math.round: ${Math.round(prixTTC)}`); // Résultat : 20

// 2. Valeur arrondie à l'entier supérieur
console.log(`Math.ceil: ${Math.ceil(prixTTC)}`); // Résultat : 20

// 3. Résultat de l'opération Math.round(prixTTC * 100) / 100
console.log(Math.round(prixTTC * 100) / 100); // Résultat : 19.99

// Bonus : Changeons la valeur de départ à 19.999
prixTTC = 19.999;
console.log(Math.round(prixTTC * 100) / 100); // Résultat : 20


/* 2. Le podium statique

Objectif : Passer des arguments multiples à une méthode.
Énoncé :
Déclare trois variables représentant les scores de trois joueurs : scoreA = 45, scoreB = 120,
scoreC = 89.
Sans utiliser de structure conditionnelle (if), affiche uniquement le score le plus élevé en utilisant
Math.max.
Fais la même chose pour le score le plus bas avec Math.min.*/


// Déclaration des scores
const scoreA = 45;
const scoreB = 120;
const scoreC = 89;

// Affichage du score le plus élevé
console.log("Exercise 2:");
console.log("Score le plus élevé :", Math.max(scoreA, scoreB, scoreC)); // Résultat : 120

// Affichage du score le plus bas
console.log("Score le plus bas :", Math.min(scoreA, scoreB, scoreC)); // Résultat : 45



/* 3. Théorème de Pythagore (Calcul séquentiel)

Objectif : Imbriquer des appels ou utiliser des variables intermédiaires.
Énoncé :
Soit un triangle rectangle avec deux côtés adjacents : coteA = 5 et coteB = 12.
Calcule la longueur de l'hypoténuse ($c$) en appliquant la formule $c = \sqrt{a^2 + b^2}$.
Tu dois utiliser Math.pow pour les carrés et Math.sqrt pour la racine. Stocke le résultat dans une
variable hypotenuse et affiche-la.*/


// Longueurs des côtés adjacents
const coteA = 5;
const coteB = 12;

// Calcul de l'hypoténuse
const carréA = Math.pow(coteA, 2); // 5² = 25
const carréB = Math.pow(coteB, 2); // 12² = 144
const sommeCarrés = carréA + carréB; // 25 + 144 = 169
const hypotenuse = Math.sqrt(sommeCarrés); // √169 = 13

// Affichage du résultat
console.log("Exercise 3:");
console.log("L'hypoténuse est :", hypotenuse); // Résultat : 13



/* 4. Lancer de dé (Expression unique)

Objectif : Comprendre la transformation d'un flottant [0, 1[ en entier.
Énoncé :
L'instruction Math.random() génère un nombre décimal entre 0 (inclus) et 1 (exclu).
Écris une seule ligne de code (ou une expression stockée dans une variable) qui transforme ce
résultat en un nombre entier compris entre 1 et 6 inclus.
Affiche le résultat. Relance le script plusieurs fois pour vérifier manuellement.*/

let min = 1;
let max = 6;

let de = Math.floor(Math.random() * (max-min+1)) + min;
console.log("Exercise 4:");
console.log(`De: ${de}`);


/* 5. Intervalle aléatoire paramétré

Objectif : Appliquer une formule mathématique avec des variables.
Énoncé :
Déclare deux variables : min = 10 et max = 20.
Écris la formule qui génère un nombre entier aléatoire compris entre ces deux bornes
(incluses).
La formule générique est : Math.floor(Math.random() * (max - min + 1)) + min.
Implémente-la et affiche le résultat. Modifie min et max pour vérifier la robustesse de ton calcul.*/


// Déclaration des bornes
let min1 = 10;
let max1 = 20;

// Génération d'un nombre entier aléatoire entre min et max (inclus)
let nombreAleatoire = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;

// Affichage du résultat
console.log("Exercise 5:");
console.log("Nombre aléatoire entre", min1, "et", max1, ":", nombreAleatoire);


/* 6. Nettoyage de données (Truncature)

Objectif : Comprendre la suppression de la partie décimale sans arrondi.
Énoncé :
Tu reçois une donnée brute : let timeElapsed = 45.897.
On veut seulement le nombre de secondes complètes écoulées, sans se soucier des
millisecondes et sans arrondir au chiffre supérieur (45 secondes, pas 46).
Utilise Math.trunc pour obtenir ce résultat. Compare ensuite avec ce que donnerait Math.floor si
la valeur était négative (-45.897).*/


// Donnée brute
let timeElapsed = 45.897;

// Utilisation de Math.trunc pour obtenir la partie entière
console.log("Exercise 6:");
let secondesCompletes = Math.trunc(timeElapsed);
console.log("Secondes complètes (Math.trunc) :", secondesCompletes); // Résultat : 45

// Comparaison avec Math.floor pour une valeur négative
let timeElapsedNegatif = -45.897;
let secondesCompletesFloor = Math.floor(timeElapsedNegatif);
let secondesCompletesTrunc = Math.trunc(timeElapsedNegatif);

console.log("Secondes complètes (Math.floor) pour -45.897 :", secondesCompletesFloor); // Résultat : -46
console.log("Secondes complètes (Math.trunc) pour -45.897 :", secondesCompletesTrunc); // Résultat : -45


/* 7. Géométrie du cercle

Objectif : Utiliser les constantes mathématiques.
Énoncé :
Soit un rayon r = 5.5.
Calcule l'aire du cercle ($A = \pi \times r^2$) en utilisant la constante Math.PI et la méthode
Math.pow.
Affiche le résultat brut.*/

// Rayon du cercle
let r = 5.5;

// Calcul de l'aire du cercle : A = π × r²
let aire = Math.PI * Math.pow(r, 2);

// Affichage du résultat brut
console.log("Exercise 7:");
console.log("Aire du cercle :", aire);


/* 8. Distance entre deux points (Géométrie 2D)

Objectif : Gérer la complexité d'une formule longue sans fonctions.
Énoncé :
Soit le point A de coordonnées (xA = 2, yA = 3) et le point B (xB = 8, yB = 11).
Calcule la distance euclidienne entre ces deux points.
Formule : $d = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.
Décompose le calcul en plusieurs variables pour la lisibilité (ex: deltaX, deltaY) avant d'utiliser
Math.sqrt.*/


let xA = 2;
let yA = 3;
let xB = 8;
let yB = 11;

let deltaX = (xB - xA) ** 2;
let deltaY = (yB - yA) ** 2;

let resultat = Math.sqrt(deltaX + deltaY);
console.log("Exercise 8:");
console.log(`Distance entre deux points: ${resultat}`);


/* 9. Différence d'âge (Valeur absolue)

Objectif : S'affranchir de l'ordre de soustraction.
Énoncé :
anneeNaissanceUser = 1995.
anneeActuelle = 2024.
Calcule l'écart entre les deux années en faisant anneeNaissanceUser - anneeActuelle.
Le résultat étant négatif, utilise Math.abs pour le transformer en un "âge" positif cohérent.*/


// Années de naissance et actuelle
let anneeNaissanceUser = 1995;
let anneeActuelle = 2024;

// Calcul de la différence (résultat négatif)
let difference = anneeNaissanceUser - anneeActuelle;

// Utilisation de Math.abs pour obtenir la valeur absolue
let age = Math.abs(difference);

// Affichage de l'âge
console.log("Exercise 9:");
console.log("L'âge est :", age); // Résultat : 29


/* 10. Comparaison de puissances

Objectif : Utiliser les booléens avec des résultats mathématiques.

Énoncé :
Sans faire le calcul de tête, détermine si $2^{10}$ est supérieur à $10^3$.
Stocke le résultat de chaque puissance dans une variable, puis affiche le résultat de la
comparaison (true ou false) dans la console.*/


// Calcul des puissances
let deuxPuissanceDix = Math.pow(2, 10);  // 2^10 = 1024
let dixPuissanceTrois = Math.pow(10, 3); // 10^3 = 1000

// Comparaison des deux résultats
let estSuperieur = deuxPuissanceDix > dixPuissanceTrois;

// Affichage du résultat de la comparaison
console.log("Exercise 10:");
console.log("2^10 est-il supérieur à 10^3 ?", estSuperieur); // Résultat : true