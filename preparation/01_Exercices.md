# Exercices avec `find`

## Exercice 1
**Trouver tous les étudiants majeurs en "Computer Science" :**
- Écrivez une requête pour trouver tous les étudiants dont le major (`spécialisation`) est "Computer Science".
```js
db.students.find(
    {
        "major":"Computer Science"
    }, 
    { _id : 0 }
)
```

## Exercice 2
**Trouver les étudiants âgés de plus de 22 ans :**
- Écrivez une requête pour trouver tous les étudiants âgés de plus de 22 ans.
```js
db.students.find({ age: { $gt: 22 } })
```

## Exercice 3
**Trouver les étudiants qui suivent le cours "Math" :**
- Écrivez une requête pour trouver tous les étudiants qui suivent le cours "Math".
```js
db.students.find( { courses : { $in : ['Math'] } } )
```

## Exercice 4
**Trouver les étudiants vivant à "New York" :**
- Écrivez une requête pour trouver tous les étudiants vivant à "New York".
```js
db.students.find({ "address.city" : "New York"  })
```

## Exercice 5
**Trouver les étudiants ayant un GPA (Grade Point Average) supérieur à 3.7 :**
- Écrivez une requête pour trouver tous les étudiants ayant un GPA supérieur à 3.7.
```js
db.students.find({ "gpa" : { $gt: 3.7 } })
```

## Exercice 6
**Trouver les étudiants dont le nom commence par "A" :**
- Écrivez une requête pour trouver tous les étudiants dont le nom commence par la lettre "A".
```js
db.students.find({ "name" : { $regex: "^A" } })
```

## Exercice 7
**Trouver les étudiants qui ne suivent pas le cours "Biology" :**
- Écrivez une requête pour trouver tous les étudiants qui ne suivent pas le cours "Biology".
```js
db.students.find({ courses : { $ne : "Biology" } })
db.students.find({ courses : { $nin : ["Biology"] } })
```

## Exercice 8
**Trouver les étudiants ayant exactement 3 cours :**
- Écrivez une requête pour trouver tous les étudiants qui suivent exactement 3 cours.
```js
db.students.find({ courses : { $size : 3 } })
```

## Exercice 9
**Trouver les étudiants dont le major est "Mathematics" ou "Physics" :**
- Écrivez une requête pour trouver tous les étudiants dont le major est soit "Mathematics" soit "Physics".
```js
db.students.find({ "major" : { $in : ["Mathematics", "Physics" ] } }, {_id : 0, major : 1})
db.students.find({  }, {_id : 0, major : 1})
```

## Exercice 10
**Trouver les étudiants qui n'ont pas de cours "Algorithms" :**
- Écrivez une requête pour trouver tous les étudiants qui ne suivent pas le cours "Algorithms".
```js
db.students.find({ "courses" : { $ne : "Algorithms" } }, {_id: 0, "courses" : 1 })
db.students.find({ "courses" : { $nin : ["Algorithms"] } },  {_id: 0, "courses" : 1 })
```

# Exercices avec `aggregate`

## Exercice 1
**Calculer la moyenne des GPA pour chaque major :**
- Écrivez une requête d'agrégation pour calculer la moyenne des GPA pour chaque major.
```js
db.students.aggregate([
  { $group: { _id: "$major", avgGPA: { $avg: "$gpa" } } }, // premier pipe
  { $project : { _id : 1 , avgGPA : { $round : ["$avgGPA", 2 ]} } } // deuxième pipe pour faire les arrondis sur la sortie du premier pipe
]) 
```

## Exercice 2
**Compter le nombre d'étudiants par ville :**
- Écrivez une requête d'agrégation pour compter le nombre d'étudiants pour chaque ville.
```js
db.students.aggregate([
    { $group : { _id :  "$address.city",  "sum_student" : { $sum : 1 }  } }
])
```

## Exercice 3
**Trouver l'étudiant avec le GPA le plus élevé :**
- Écrivez une requête d'agrégation pour trouver l'étudiant ayant le GPA le plus élevé.
```js
db.students.aggregate([
    { $project : {  _id : 0, "gpa" : 1,  "name" : 1} },
    { $sort : { "gpa" : -1 } },
    { $limit : 1 } 
])
```

## Exercice 4
**Lister les cours uniques suivis par les étudiants :**
- Écrivez une requête d'agrégation pour lister tous les cours uniques suivis par les étudiants.
```js

// Combien d'étudiant par matière
db.students.aggregate([
    { $unwind: "$courses" }, 
    {
        $group: {
            _id: "$courses",   // Regroupe par le nom du cours
            "total" : { $sum : 1 } // compte le nombre répétition de l'item cours
        }
    },
])

// avoir tous les différents suivis par les étudiants avec la méthode distinct 
db.students.distinct("courses")

// de manière équivalente on peut calculer le nombre de cours distincts avec aggregate
db.students.aggregate([
    { $unwind: "$courses" }, 
    {
        $group: {
            _id: "$courses",   // Regroupe par le nom du cours
        }
    },
])
```

## Exercice 5
**Calculer le nombre total de cours suivis par tous les étudiants :**
- Écrivez une requête d'agrégation pour calculer le nombre total de cours suivis par tous les étudiants.
```js
db.students.aggregate([
    { $unwind: "$courses" }, 
    {
        $group: {
            _id: "$courses",   // Regroupe par le nom du cours
            "total" : { $sum : 1 } // compte le nombre répétition de l'item cours
        }
    },
    { $group : { _id : null , total :  { $sum : "$total" } } }
])
```

## Exercice 6
**Trouver le major avec le plus grand nombre d'étudiants :**
- Écrivez une requête d'agrégation pour trouver le major ayant le plus grand nombre d'étudiants.
```js
db.students.aggregate([
    { $group: { _id : "$major" ,  total : { $sum : 1 } } },
    { $sort : { total : -1 } },
    { $limit :1 }
])
```

## Exercice 7
**Calculer l'âge moyen des étudiants par major :**
- Écrivez une requête d'agrégation pour calculer l'âge moyen des étudiants pour chaque major.
```js
db.students.aggregate([
    { $group: { _id : "$major" ,  avgAge : { $avg : "$age" } } },
    { $project : { _id : 1 , avgAge : { $round : ["$avgAge", 2 ]} } } // deuxième pipe pour faire les arrondis sur la sortie du premier pipe
])
```

## Exercice 8
**Lister les étudiants et leurs cours, triés par GPA décroissant :**
- Écrivez une requête d'agrégation pour lister tous les étudiants et leurs cours, triés par GPA décroissant.

```js
db.students.aggregate([
    { $sort: { gpa: -1 } }, // premier pipe
    { $project: { name: 1, courses: 1, gpa: 1 } } // deuxième pipe
])
```


## Exercice 9
**Calculer le nombre moyen de cours suivis par les étudiants de chaque major :**
- Écrivez une requête d'agrégation pour calculer le nombre moyen de cours suivis par les étudiants de chaque major.

```js
// de la moyenne du nombre de cours par major
db.students.aggregate([
    { $group: { _id: "$major", averageCourseCount: { $avg: { $size : "$courses"} } } } ,// nombre moyen
    { $project : { _id : 1 , averageCourseCount : { $round : ["$averageCourseCount", 2 ]} } }
])

db.students.aggregate([
    { 
        $group: { 
            _id: "$major",
            itemCourses: { $push:  "$courses" }
        }
    }
])

/*
[
  {
    _id: 'Biology',
    itemCourses: [ [ 'Biology', 'Genetics', 'Biochemistry' ] ] // 3 la moyenne c'est 3
  },
  {
    _id: 'Computer Science',
    // moyenne du nombre de cours 3.33
    itemCourses: [
      [ 'Math', 'Database Systems', 'Algorithms' ],            // 3
      [ 'Chemistry', 'Organic Chemistry', 'Physical Chemistry', 'IA' ],  // 4
      [ 'Chemistry', 'Physical Chemistry', 'IA' ]  // 3
    ]
  },
  {
    _id: 'Mathematics',
    // moyenne des cours 3
    itemCourses: [ [ 'Math', 'Calculus', 'Linear Algebra' ] ]
  },
  {
    _id: 'Chemistry',
     // moyenne des cours 3
    itemCourses: [ [ 'Chemistry', 'Organic Chemistry', 'Physical Chemistry' ] ]
  },
  {
    _id: 'Physics',
     // moyenne des cours 3
    itemCourses: [ [ 'Physics', 'Quantum Mechanics', 'Electromagnetism' ] ]
  }
]

// regardez le nombre d'étudiants qui suivent la major Computer Science
db.students.find( { major : "Computer Science"} , {_id : 0 , courses : 1, major : 1, name : 1 } )
*/
```

## Exercice 10
**Trouver les étudiants ayant le GPA le plus élevé dans chaque major :**
- Écrivez une requête d'agrégation pour trouver les étudiants ayant le GPA le plus élevé dans chaque major.

```js
// attention chaque gpa est ordonnées par ordre décroissant.
db.students.aggregate([
    { $sort: { gpa: -1 } },
    { $group: { _id: "$major", topStudent: { $first: "$name" }, topGPA: { $first: "$gpa" } } }
])


db.students.aggregate([
    { $sort: { gpa: -1 } },
    { $group: { _id: "$major", topStudent: { $first: "$name" }, gpas: { $push: "$gpa" } } }
])
```