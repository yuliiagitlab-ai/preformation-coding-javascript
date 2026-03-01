//Exercices - OBJECTS

/*1.  Créer un objet simple

Crée un objet représentant une voiture avec les propriétés suivantes : marque, modèle et
année. Affiche l'objet dans la console.*/

let voiture = {
  marque: "Toyota",
  modele: "Camry",
  annee: 2022,
}

console.log(`La voiture: ${voiture.marque} ${voiture.modele} ${voiture.annee}`);



/* 2. Accéder à une propriété

À partir de l'objet suivant :
let utilisateur = {
nom: "Alice",
âge: 25,
ville: "Paris"
};
Affiche la valeur de la propriété nom dans la console.*/

let utilisateur = {
  nom: "Alice",
  age: 25,
  ville: "Paris"
  };

console.log(`${utilisateur.nom}`);


/* 3. Modifier une propriété

Modifie l'âge de l'utilisateur dans l'objet précédent pour qu'il soit égal à 30, puis affiche l'objet
mis à jour.*/

utilisateur.âge = 30;
console.log(utilisateur); // Affiche { nom: "Alice", âge: 30, ville: "Paris" }


/* 4. Ajouter une nouvelle propriété

Ajoute une propriété email à l'objet utilisateur avec la valeur "alice@email.com", puis
affiche l'objet mis à jour.*/

utilisateur.email = "alice@email.com";
console.log(utilisateur); // Affiche {nom: 'Alice', âge: 30, ville: 'Paris', email: 'alice@email.com'}


/* 5. Supprimer une propriété

Supprime la propriété ville de l'objet utilisateur, puis affiche l'objet mis à jour.*/

// Suppression de la propriété "ville"
delete utilisateur.ville;

// Affichage de l'objet mis à jour
console.log(utilisateur);


/* 6. Vérifier si une propriété existe

À partir de l'objet utilisateur, vérifie s'il possède une propriété motDePasse et affiche true
ou false dans la console.*/


const motDePasseExiste2 = "motDePasse" in utilisateur;
console.log("motDePasse existe ? :", motDePasseExiste2); // false


/* 7. Objet avec un tableau

Crée un objet bibliothèque avec une propriété livres qui est un tableau contenant trois
titres de livres sous forme de chaînes de caractères. Affiche cet objet dans la console.*/


// Création de l'objet bibliothèque avec un tableau de livres
let bibliothèque = {
  livres: ["Le Petit Prince", "Le Soleil des Scorta", "Le Mur Greek"]
};

// Affichage de l'objet dans la console
console.log(bibliothèque);


/* 8. Accéder à une valeur dans un tableau d’un objet

À partir de l'objet bibliothèque, affiche le deuxième livre du tableau livres.*/


console.log(bibliothèque.livres[1]);


/* 9. Objet contenant un autre objet

Crée un objet etudiant qui contient une propriété nom, une propriété âge, et une propriété
adresse qui est un autre objet avec rue, ville et codePostal. Affiche ville dans la
console.*/


const etudiant = {
  nom: "Artur",
  age: 15,
  adresse: {
    rue: "Chau. de Wemmel",
    ville: "Jette",
    codePostal: "1090",
  },
};

console.log(etudiant.adresse.ville);


/* 10. Comparer des objets

Crée deux objets personne1 et personne2 avec les mêmes propriétés (nom, âge) mais des
valeurs différentes. Compare si les âges des deux personnes sont égaux et affiche true ou
false dans la console.*/

let personne1 = {
  nom: "Nora",
  age: 25,
}

let personne2 = {
  nom: "Sara",
  age: 27,
}

if (personne1.age === personne2.age) {
  console.log("les âges des deux personnes sont égaux");
}
else {
  console.log("les âges des deux personnes sont différentes");
}


/* 11. Objet produit et accès à un tableau

Crée un objet product avec les propriétés suivantes :
- name (nom du produit),
- inStock (valeur booléenne),
- price (prix du produit),
- includedInPackage (un tableau contenant les éléments inclus dans l’emballage).

Affiche dans la console le deuxième élément du tableau includedInPackage.*/


const product = {
  name: "iPhone 15",
  inStock: true,
  price: 1249.9,
  includedInPackage: ["case", "earphones", "charger"],
};

console.log(product.includedInPackage[1]);  // earphones


/* 12. Construire une adresse complète

Crée un objet restaurant contenant les propriétés suivantes :
- nom,
- address,
- city,
- state,
- zipcode.

Ensuite, crée une variable fullAddress qui combine toutes les informations de l’adresse dans une seule chaîne de caractères 
(en utilisant les template strings).

Affiche l’adresse complète dans la console.*/


const restaurant = {
  nom: "Ichiran Ramen",
  address: "64 Johnson Ave",
  city: "Brooklyn",
  state: "NY",
  zipcode: "11206",
};

const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state}, ${restaurant.zipcode}`;
console.log(fullAddress);



