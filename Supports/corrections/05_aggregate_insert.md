
# **Créer une collection `books` avec des documents fictifs** :


```js
use library

db.books.insertMany([
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    year: 1937,
    rating: 4.8,
    price: 15.99
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    year: 1949,
    rating: 4.6,
    price: 9.99
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    year: 1997,
    rating: 4.9,
    price: 12.99
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    year: 1951,
    rating: 4.3,
    price: 10.50
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    year: 1925,
    rating: 4.2,
    price: 13.99
  }
]);
```

Voici quelques exercices pratiques d'insertion dans une collection MongoDB (en utilisant une collection `books` comme exemple) :

### **Exercice 1 : Insertion d'un livre simple**
Écrivez une commande pour insérer un document représentant un livre dans la collection `books`. Le document doit contenir les informations suivantes : `title`, `author`, `genre`, `year`, `rating`, et `price`.

**Exemple de document :**

```js
db.books.insertOne({
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Fiction",
    year: 1851,
    rating: 4.5,
    price: 10.99
});
```

### **Exercice 2 : Insertion de plusieurs livres**
Insérez plusieurs livres dans la collection `books` en utilisant la méthode `insertMany()`. Utilisez les données suivantes :

- **Book 1:** `title: "To Kill a Mockingbird"`, `author: "Harper Lee"`, `genre: "Fiction"`, `year: 1960`, `rating: 4.8`, `price: 7.99`
- **Book 2:** `title: "The Great Gatsby"`, `author: "F. Scott Fitzgerald"`, `genre: "Fiction"`, `year: 1925`, `rating: 4.3`, `price: 12.99`

**Code d'insertion :**

```js
db.books.insertMany([
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        year: 1960,
        rating: 4.8,
        price: 7.99
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        year: 1925,
        rating: 4.3,
        price: 12.99
    }
]);
```

### **Exercice 3 : Insertion d'un livre avec une clé unique**
Insérez un livre avec une clé unique (`_id`). Ce livre doit avoir les informations suivantes : `title: "1984"`, `author: "George Orwell"`, `genre: "Dystopian"`, `year: 1949`, `rating: 4.9`, `price: 8.99`. Utilisez l'option `_id` pour spécifier une valeur personnalisée.

**Code d'insertion avec clé personnalisée :**

```js
db.books.insertOne({
    _id: "1984-unique-id",
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    year: 1949,
    rating: 4.9,
    price: 8.99
});
```

### **Exercice 4 : Insertion de livres avec des sous-documents**
Ajoutez un livre avec un sous-document pour les informations de notation (par exemple, des `ratings` qui incluent un `score` et un `reviewer`). Voici le livre à insérer :

```js
db.books.insertOne({
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    year: 1937,
    price: 14.99,
    ratings: [
        { reviewer: "John", score: 5, comment: "Amazing book!" },
        { reviewer: "Alice", score: 4, comment: "A great adventure." }
    ]
});
```

### **Exercice 5 : Mise à jour des informations d'un livre existant**
Insérez un livre, puis mettez à jour la note et le prix de ce livre. Utilisez l'ID du livre inséré pour effectuer la mise à jour.

**Insertion initiale :**

```js
db.books.insertOne({
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    year: 1951,
    rating: 4.0,
    price: 10.50
});
```

**Mise à jour du livre :**

```js
db.books.updateOne(
    { title: "The Catcher in the Rye" },
    { $set: { rating: 4.5, price: 11.99 } }
);
```

### **Exercice 6 : Insertion avec une valeur par défaut**
Ajoutez un livre avec des valeurs par défaut pour les champs `rating` et `price`. Si les valeurs ne sont pas fournies, elles doivent être respectivement `3.0` et `10.00`.

```js
db.books.insertOne({
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    year: 1988,
    rating: 3.0,
    price: 10.00
});
```

### **Exercice 7 : Insertion avec des dates**
Ajoutez un livre dans la collection avec un champ de `publication_date` utilisant un format de date ISO.

```js
db.books.insertOne({
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    year: 1932,
    publication_date: new Date("1932-08-31"),
    rating: 4.5,
    price: 9.99
});
```

### **Exercice 8 : Insertion avec validation des données**
Ajoutez un livre avec un champ `price` qui doit être un nombre supérieur à 0. Si l'insertion échoue à cause de données invalides, gérez l'erreur.

**Code :**

```js
db.books.insertOne({
    title: "The Odyssey",
    author: "Homer",
    genre: "Epic",
    year: -800,  // Année négative pour démontrer une erreur
    rating: 4.0,
    price: -5.00  // Prix négatif pour provoquer une erreur
});
```

**Gestion de l'erreur :**

```js
try {
    db.books.insertOne({
        title: "The Odyssey",
        author: "Homer",
        genre: "Epic",
        year: -800,
        rating: 4.0,
        price: -5.00
    });
} catch (e) {
    print("Erreur d'insertion : " + e);
}
```

### **Exercice 9 : Insertion avec champs manquants**
Ajoutez un livre sans fournir les champs `rating` et `price` et vérifiez si MongoDB accepte les documents avec des champs manquants.

```js
db.books.insertOne({
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    genre: "Dystopian",
    year: 1953
});
```

### **Exercice 10 : Insertion d'un livre avec une structure différente**
Ajoutez un livre avec un format de données différent, en utilisant un tableau pour plusieurs `authors` au lieu d'un seul.

```js
db.books.insertOne({
    title: "The Lord of the Rings",
    authors: ["J.R.R. Tolkien"],
    genre: "Fantasy",
    year: 1954,
    rating: 4.7,
    price: 20.99
});
```

---
Voici un exercice qui combine l'insertion conditionnelle et la mise à jour dans MongoDB.

### **Exercice : Insertion conditionnelle avec mise à jour**

#### **Contexte**
Vous travaillez sur une collection `books` où chaque document contient des informations sur un livre, y compris son titre, son auteur, son année de publication, ses genres et son prix.

Vous devez insérer un nouveau livre dans la collection si ce livre n'existe pas encore, basé sur son titre. Si le livre existe déjà (basé sur le titre), vous devez mettre à jour son prix pour qu'il corresponde à un nouveau prix, uniquement si le nouveau prix est inférieur au prix actuel.

#### **Étapes à suivre :**

1. Vérifiez si le livre existe déjà dans la collection en fonction de son titre.
2. Si le livre n'existe pas, insérez-le dans la collection.
3. Si le livre existe, mettez à jour son prix, mais uniquement si le nouveau prix est inférieur au prix actuel.

#### **Solution :**

```js
// Les informations du livre à insérer ou à mettre à jour
let book = {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genres: ["Dystopian", "Science Fiction"],
    price: 9.99
};

// Vérifier si le livre existe déjà dans la collection
let existingBook = db.books.findOne({ title: book.title });

// Si le livre n'existe pas, insérer un nouveau livre
if (!existingBook) {
    db.books.insertOne(book);
    print("Livre inséré :", book.title);
} else {
    // Si le livre existe, mettre à jour le prix uniquement si le nouveau prix est inférieur
    if (book.price < existingBook.price) {
        db.books.updateOne(
            { title: book.title },
            { $set: { price: book.price } }
        );
        print("Prix mis à jour pour le livre :", book.title);
    } else {
        print("Le nouveau prix est plus élevé, aucune mise à jour effectuée.");
    }
}
```

#### **Explication :**
1. **Vérification d'existence** : La requête `findOne()` est utilisée pour vérifier si un livre avec le même titre existe déjà dans la base de données.
2. **Insertion** : Si le livre n'existe pas, la méthode `insertOne()` est utilisée pour insérer le livre.
3. **Mise à jour conditionnelle** : Si le livre existe déjà et que le nouveau prix est inférieur à l'actuel, la méthode `updateOne()` met à jour le prix du livre avec la condition `price < existingBook.price`.

---