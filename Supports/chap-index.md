### Création d'un Index Géospatial dans MongoDB

Dans MongoDB, vous pouvez créer un index géospatial pour prendre en charge les requêtes qui calculent des géométries sur une sphère semblable à la Terre. 

Cela est particulièrement utile pour les applications qui doivent effectuer des requêtes basées sur la localisation, comme trouver des points dans un certain rayon ou calculer des distances.

### Création d'un Index 2dsphere

Un index `2dsphere` prend en charge les requêtes qui calculent des géométries sur une sphère semblable à la Terre. Cet index est utile pour stocker des objets GeoJSON et effectuer des requêtes géospatiales.

#### Exemple

Supposons que vous avez une collection nommée `students` avec des documents contenant un champ `location` au format GeoJSON. Voici comment créer un index `2dsphere` sur le champ `location` :

```javascript
db.students.createIndex({ location: "2dsphere" })
```


On met à jour nos données avec `updateMany`

```js
db.students.updateMany(
  {},
  {
    $set: {
      location: {
        type: "Point",
        coordinates: [
          // Coordonnées GPS fictives
          -74.0060 + Math.random() * 0.1, // Longitude
          40.7128 + Math.random() * 0.1  // Latitude
        ]
      }
    }
  }
);
```

### Exemple de requête avec un index

Pour utiliser un index géospatial dans MongoDB, vous devez d'abord créer l'index sur le champ contenant les coordonnées GPS. Ensuite, vous pouvez effectuer des requêtes géospatiales, comme trouver des documents à proximité d'un point donné. Voici un exemple complet :

Requêtes pour trouver des étudiants à proximité d'un point donné. Par exemple, pour trouver tous les étudiants dans un rayon de 5 kilomètres autour de Times Square à New York, vous pouvez utiliser la requête suivante :

```javascript
db.students.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [-73.9857, 40.7580] // Coordonnées de Times Square
      },
      $maxDistance: 5000 // Distance en mètres (5 km)
    }
  }
});
```

- **`$near`** : Cet opérateur trouve les documents proches d'un point géométrique donné.
- **`$geometry`** : Spécifie le point autour duquel la recherche est effectuée.
- **`$maxDistance`** : Limite les résultats aux documents situés à une distance maximale du point spécifié (en mètres).

La requête renverra tous les documents de la collection `students` qui sont situés dans un rayon de 5 kilomètres autour de Times Square (posisble car indexé avec `2dsphere`)

Un autre exemple d'indexation dans MongoDB est l'utilisation d'un index composite. Un index composite est un index sur plusieurs champs d'un document. Cela peut être utile pour optimiser les requêtes qui filtrent ou trient les documents en fonction de plusieurs champs.

### Index Composite sur `major` et `gpa`

Supposons que vous souhaitez souvent rechercher des étudiants en fonction de leur domaine d'études (`major`) et de leur moyenne générale (`gpa`). Vous pouvez créer un index composite sur ces deux champs pour améliorer les performances de ces requêtes.

#### Créer l'Index Composite

```javascript
db.students.createIndex({ major: 1, gpa: -1 });
```

- **`major: 1`** : Indexe le champ `major` dans l'ordre croissant.
- **`gpa: -1`** : Indexe le champ `gpa` dans l'ordre décroissant.

#### Effectuer une Requête Utilisant l'Index Composite

Une fois l'index créé, vous pouvez effectuer des requêtes qui bénéficient de cet index. Par exemple, pour trouver les étudiants en informatique (`Computer Science`) avec les meilleures moyennes :

```javascript
db.students.find({ major: "Computer Science" }).sort({ gpa: -1 }).limit(5);
```

#### Explication

- **Requête** : Filtre les documents où le champ `major` est égal à `"Computer Science"`.
- **Tri** : Trie les résultats par `gpa` décroissant, ce qui signifie que les étudiants avec les meilleures moyennes apparaîtront en premier.
- **Limite** : Limite les résultats aux 5 premiers documents.

### Avantages

- **Performance** : L'index composite améliore les performances des requêtes qui filtrent et trient les documents en fonction des champs indexés.
- **Efficacité** : Réduit le temps nécessaire pour récupérer et trier les documents, surtout pour les grandes collections.


