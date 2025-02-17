# Utilisation de `$pull` et `$set` avec MongoDB

Les opérateurs `$pull` et `$set` sont utilisés dans MongoDB pour mettre à jour des documents dans une collection. Voici un aperçu de leur utilisation et de leurs cas d'usage :

### `$set`

- **Description** : L'opérateur `$set` est utilisé pour mettre à jour la valeur d'un champ spécifique dans un document. Si le champ n'existe pas, il sera créé.
- **Utilisation** : Il est souvent utilisé pour mettre à jour des champs simples ou pour ajouter de nouveaux champs à un document.

#### Exemple

Supposons que vous avez une collection `students` et que vous souhaitez mettre à jour l'âge d'un étudiant dont le nom est "Alice Johnson".

```js
db.students.updateOne(
    { "name": "Alice Johnson" },
    { $set: { "age": 21 } }
)
```

Dans cet exemple, l'âge de l'étudiant "Alice Johnson" sera mis à jour à 21. Si le champ `age` n'existait pas, il serait créé avec la valeur 21.

### `$pull`

- **Description** : L'opérateur `$pull` est utilisé pour supprimer toutes les occurrences d'une valeur spécifique d'un champ de type tableau.
- **Utilisation** : Il est souvent utilisé pour retirer des éléments d'un tableau dans un document.

#### Exemple

Supposons que vous avez une collection `students` et que vous souhaitez supprimer le cours "Math" de la liste des cours pour tous les étudiants.

```js
db.students.updateMany(
    { "courses": "Math" },
    { $pull: { "courses": "Math" } }
)
```

Dans cet exemple, le cours "Math" sera supprimé de la liste des cours pour tous les étudiants qui suivent ce cours.

### Utilisation Combinée

Vous pouvez également combiner `$set` et `$pull` dans une même opération de mise à jour pour effectuer plusieurs modifications en une seule requête.

#### Exemple

Supposons que vous souhaitez mettre à jour l'adresse d'un étudiant et en même temps supprimer un cours spécifique de sa liste de cours.

Voir le dataset student [student](./Examples/student.js)

```js
db.students.updateOne(
    { "name": "Alice Johnson" },
    {
        $set: { "address.city": "New York", "address.zip": "10002" },
        $pull: { "courses": "Math" }
    }
)
```

Dans cet exemple, l'adresse de l'étudiant "Alice Johnson" sera mise à jour, et le cours "Math" sera supprimé de sa liste de cours.

### Cas d'Usage

- **`$set`** : Utilisé pour des mises à jour simples de champs ou pour ajouter de nouveaux champs.
- **`$pull`** : Utilisé pour retirer des éléments spécifiques d'un tableau.

## Exemple avec le dataset student

Voici un exemple d'utilisation des opérateurs `$set` et `$pull` avec le dataset fourni. Nous allons mettre à jour l'adresse d'un individu et supprimer une relation spécifique.

### Exemple

#### Mise à jour de l'adresse d'un individu et suppression d'une relation

Supposons que nous voulons mettre à jour l'adresse de "Alice" et supprimer la relation avec l'individu ayant l'ID 1.

1. **Mettre à jour l'adresse de "Alice"** :
   - Nous allons changer la rue de "Alice" à "Rue de la Paix".

2. **Supprimer la relation avec l'individu ayant l'ID 1** :
   - Nous allons retirer l'ID 1 de la liste des relations de "Alice".

Voici comment vous pouvez effectuer ces opérations en une seule requête :

```js
db.collection.updateOne(
    { "name": "Alice" },
    {
        $set: { "address.street": "Rue de la Paix" },
        $pull: { "relationship": 1 }
    }
)
```

### Explication

- **`$set`** : Cet opérateur est utilisé pour mettre à jour le champ `street` dans le sous-document `address` de "Alice". Si le champ `street` n'existait pas, il serait créé.
- **`$pull`** : Cet opérateur est utilisé pour supprimer la valeur `1` du tableau `relationship` de "Alice". Si la valeur `1` n'existe pas dans le tableau, aucune modification ne sera effectuée.

### Résultat

Après l'exécution de cette requête, le document de "Alice" sera mis à jour comme suit :

```json
{
    "_id": 2,
    "name": "Alice",
    "address": {
        "street": "Rue de la Paix",
        "city": "Paris",
        "zip": "75008"
    },
    "grade": "master 4",
    "notes": [19, 11, 20],
    "relationship": []
}
```
