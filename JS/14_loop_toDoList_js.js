//Exercice - LOOP

/* Exercice 2 - TO DO LIST

Créons une liste de tâches qui fonctionne uniquement dans le terminal avec ce que nous avons
appris jusqu'à présent.

Instructions :
Lorsque l'utilisateur entre sur la page, la machine doit lui demander d'écrire une commande :
● new pour ajouter une tâche
● list pour voir toutes les tâches
● delete pour supprimer une tâche spécifique
● quit pour quitter le programme
Utilise la fonction prompt() pour demander quelle action l'utilisateur souhaite effectuer.
● Si l'utilisateur choisit new, demande-lui d'écrire la tâche à ajouter. Une fois ajoutée,
affiche un message dans la console indiquant que la tâche a été ajoutée à la liste.
● Si l'utilisateur choisit list, affiche toutes les tâches ajoutées dans la console.

L'affichage doit ressembler à ceci :
markdown
CopyEdit

********* LISTE DE TÂCHES *********
1. Sortir le chien
2. Boire du lait
3. Apprendre JavaScript
4. Faire des exercices
etc...

● Si l'utilisateur choisit delete, demande-lui le numéro de la tâche à supprimer, puis
supprime-la.
● Si l'utilisateur choisit quit, termine la boucle.
L'utilisateur doit pouvoir ajouter autant de tâches qu'il le souhaite et, à chaque fois qu'il choisit
list, voir toutes les tâches enregistrées.

ASTUCES :
● Utilise un tableau pour stocker les tâches et les afficher dans la console lorsqu'on
demande la liste.
● N'oublie pas que l'affichage des tâches doit commencer à 1 (après tout, nous ne
sommes pas des machines qui commencent à 0).
● Toute l'application doit fonctionner à l'intérieur d'une boucle qui ne se termine que
lorsque l'utilisateur choisit "quit".
● Utilise des méthodes comme splice().
● Prends en compte le concept des valeurs falsy.*/


/*let tasks = [];
let commande = "";

while (commande !== "quit") {
  commande = prompt("Ecrivez une commande (new/list/delete/quit) :");

  if (commande === "new") {
    tasks.push(prompt("Entrez la tâche :"));
  } else if (commande === "list") {
    alert(`********* LISTE DE TÂCHES *********\n${tasks.join("\n")}`);
  } else if (commande === "delete") {
    let taskToDelete = Number(prompt("Quel numéro de tâche souhaitez-vous supprimer :"));
    tasks.splice(taskToDelete - 1, 1);
  } else if (commande === "quit") {
}*/


const listeDeTaches = [];
let commande = "";

function afficherListe() {
  console.log("********* LISTE DE TÂCHES *********");

  if (listeDeTaches.length === 0) {
    console.log("(aucune tâche)");
    return;
  }

  for (let i = 0; i < listeDeTaches.length; i++) {
    console.log(`${i + 1}. ${listeDeTaches[i]}`);
  }
}

while (commande !== "quit") {
  commande = prompt("Écris une commande (new / list / delete / quit) :");

 // si l'utilisateur a cliqué sur Cancel ou a laissé le champ vide
  if (!commande) continue;

  commande = commande.trim().toLowerCase();

  if (commande === "new") {
    let tache = prompt("Décris la tâche à ajouter :");

    // si la tâche est vide (valeur falsy ou seulement des espaces)
    if (!tache || !tache.trim()) {
      console.log("Tâche vide → rien n'a été ajouté.");
      continue;
    }

    tache = tache.trim();
    listeDeTaches.push(tache);
    console.log(`✅ Tâche ajoutée : "${tache}"`);
  } else if (commande === "list") {
    afficherListe();
  } else if (commande === "delete") {
    if (listeDeTaches.length === 0) {
      console.log("La liste est vide, rien à supprimer.");
      continue;
    }

    afficherListe();
    const input = prompt("Numéro de la tâche à supprimer :");
    const numero = Number(input);

   // vérification : nombre entier valide entre 1 et la longueur du tableau
    if (!Number.isInteger(numero) || numero < 1 || numero > listeDeTaches.length) {
      console.log("❌ Numéro invalide. Aucune tâche supprimée.");
      continue;
    }

    const supprimee = listeDeTaches.splice(numero - 1, 1)[0];
    console.log(`🗑️ Tâche supprimée : "${supprimee}"`);
  } else if (commande === "quit") {
    console.log("👋 Programme terminé.");
  } else {
    console.log("Commande inconnue. Utilise: new, list, delete, quit.");
  }
}