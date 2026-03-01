// Exercices "For" Boocles:

/*Nombres pairs
Écrivez un code qui affiche uniquement les nombres pairs jusqu’à 20.
Résultat attendu dans la console :
2 4 6 8 10 12 14 16 18 20
Faites ensuite la même chose avec les nombres impairs jusqu'à 20.
Résultat attendu :
1 3 5 7 9 11 13 15 17 19 */

for (let i = 2; i <= 20; i += 2) {
  console.log(`Les nombres pairs: ${i}`);
}

for (let i = 1; i <= 20; i += 2) {
  console.log(`Les nombres impairs: ${i}`);
}

/*Décrémentation
Affichez tous les multiples de 10 de 100 à 10.
Résultat attendu :
100 90 80 70 60 50 40 30 20 10
Puis, écrivez une autre boucle qui affiche :
25 20 15 10 5 0 */

for (let i = 100; i >= 10; i -= 10) {
  console.log(`Les multiples de 10 de 100 à 10: ${i}`);
}

for (let i = 20; i >= 0; i -= 5) {
  console.log(`De 25 à 0: ${i}`);
}

/*Autre exercice
Trouvez un moyen d'obtenir ce résultat avec une boucle :
10 100 1000*/

for (let i = 10; i <= 1000; i *= 10) {
  console.log(`De 10 à 1000: ${i}`);
}

/*Écrivez une boucle qui affiche les éléments d’un tableau en ordre inverse.
Tableau :
const animals = ["lion", "pangolin", "zèbre", "chien", "chat", "oiseau"];
Résultat attendu :
oiseau chat chien zèbre pangolin lion*/

const animals = ["lion", "pangolin", "zèbre", "chien", "chat", "oiseau"];

for (let i = animals.length - 1; i >= 0; i--) {
  console.log(animals[i]);
}

/* Utilisez cette liste d’objets (copiez le code dans VSCode)
const users = [
{ firstName: "Vito", lastName: "Corleone" },
{ firstName: "William", lastName: "Wallace" },
{ firstName: "Harry", lastName: "Potter" },
{ firstName: "Amadeus", lastName: "Mozart" },
{ firstName: "Barack", lastName: "Obama" }
];
Affichez une liste ordonnée de ces noms complets.
Résultat attendu :
1. Mon nom complet est Vito Corleone.
2. Mon nom complet est William Wallace.
3. Mon nom complet est Harry Potter.
4. Mon nom complet est Amadeus Mozart.
5. Mon nom complet est Barack Obama.*/

const users = [
  { firstName: "Vito", lastName: "Corleone" },
  { firstName: "William", lastName: "Wallace" },
  { firstName: "Harry", lastName: "Potter" },
  { firstName: "Amadeus", lastName: "Mozart" },
  { firstName: "Barack", lastName: "Obama" },
];

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  console.log(
    `${i + 1}. Mon nom complet est ${user.firstName} ${user.lastName}.`
  );
}
