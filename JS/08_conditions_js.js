//Exercices - CONDITIONS

/*Vous allez écrire un petit programme qui, lorsque l'utilisateur entre dans le navigateur, pose
quelques questions à propos de lui.
1. Nom
2. Préférez-vous les chats ou les chiens ?
Ensuite, le navigateur doit saluer l'utilisateur et faire un commentaire sur les chats s'il préfère les
chats, ou sur les chiens s'il préfère les chiens.;*/

let user = prompt("Entrez votre nom:");
let preferance = prompt("Préférez-vous les chats ou les chiens ?");
let option1 = "les chats";
let option2 = "les chiens";

if (preferance == option1) {
  alert(`Bonjour ${user}!\nVous preferez ${preferance}.`);
} else if (preferance == option2) {
  alert(`Bonjour ${user}!\nVous preferez ${preferance}.`);
} else {
  alert(`Bonjour ${user}!\nVous preferez n'importe qoui.`);
}

/*Créer une voiture sans clé !
Cette voiture vous laissera conduire uniquement si vous avez plus de 18 ans. Faites en sorte
qu'elle réalise les actions suivantes :
1. En utilisant prompt() et alert(), demandez à l'utilisateur son âge.
2. Si l'utilisateur dit qu'il a moins de 18 ans, répondez :
"Désolé, vous êtes trop jeune pour conduire cette voiture. Arrêt en cours."
3. Si l'utilisateur dit qu'il a 18 ans, répondez :
"Félicitations pour votre première année de conduite. Profitez du trajet !"
4. Si l'utilisateur dit qu'il a plus de 18 ans, répondez :
"Mise en marche. Profitez du trajet !"*/

let ageUser = parseInt(prompt("Votre age?"));

if (ageUser < 18) {
  alert(
    "Désolé, vous êtes trop jeune pour conduire cette voiture. Arrêt en cours."
  );
} else if (ageUser == 18) {
  alert(
    "Félicitations pour votre première année de conduite. Profitez du trajet !"
  );
} else {
  alert("Mise en marche. Profitez du trajet !");
}

/*Maintenant, compliquons les choses !
Suivez les instructions pour cet exercice. Vous devrez vérifier votre console pour obtenir le
résultat. (copier/coller le bout de code dans VSCode)*/


const mystery = "";
// MODIFIEZ CETTE VALEUR POUR QUE LA CONDITION CI-DESSOUS SOIT VRAIE
// NE TOUCHEZ PAS À CE CODE ! (s'il vous plaît)
if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
  console.log("VOUS AVEZ RÉUSSI !!!"); 
} else { 
  console.log("ESSAYEZ ENCORE");
}


/*Quel fruit ?
Demande à l'utilisateur quel est son fruit préféré.
Si c'est des bananes, dis-lui que tu aimes aussi les bananes.
Si c'est une fraise, dis-lui que tu adores les fraises.
Si c'est un raisin, demande-lui s'il préfère les raisins violets ou verts.
Si c'est violet, dis-lui que tu n'aimes pas les raisins violets.
Si c'est vert, dis-lui que les raisins verts sont ok...
Si ce n'est ni violet ni vert, dis-lui que tu ne comprends pas.
Si c'est un autre fruit, dis-lui que tu ne comprends pas le mot qu'il a dit (en affichant le mot qu'il
a dit).*/

const fruit = prompt("Quel est ton fruit prefere?");
if (fruit === "banane") {
  alert("J'aime aussi les bananes");
} else if (fruit === "fraise") {
  alert("J'aime bien les fraise");
} else if (fruit === "raisin") {
  const type = prompt("Quel typre de raisin?");

  if (type === "vert") {
    alert("Je n'aime les vert");
  } else if (type === "rouge") {
    alert("J'aime bien les rouge");
  } else {
    alert("J'ai pas compris la couleur");
  }
} else {
  alert("Je n'ai pas compris");
}

