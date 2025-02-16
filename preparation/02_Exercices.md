# Exercices avec `updateMany`

## Exercice 1
**Augmenter le GPA de tous les étudiants majeurs en "Computer Science" de 0.1 :**
- Écrivez une requête pour augmenter le GPA de tous les étudiants dont le major est "Computer Science" de 0.1.
```js

```

## Exercice 2
**Ajouter le cours "Advanced Algorithms" à tous les étudiants suivant "Algorithms" :**
- Écrivez une requête pour ajouter le cours "Advanced Algorithms" à tous les étudiants qui suivent déjà le cours "Algorithms". (indications : utilisez la méthode `$push`)
```js

```

## Exercice 3
**Mettre à jour l'âge de tous les étudiants vivant à "New York" pour ajouter 1 an :**
- Écrivez une requête pour augmenter l'âge de tous les étudiants vivant à "New York" de 1 an.

```js

```

## Exercice 4
**Changer le major de tous les étudiants en "Biology" à "Biochemistry" :**
- Écrivez une requête pour changer le major de tous les étudiants en "Biology" à "Biochemistry".
  Indications utilisez la méthode `$set`
```js

```

## Exercice 5
**Supprimer le cours "Math" pour tous les étudiants :**
- Écrivez une requête pour supprimer le cours "Math" de la liste des cours de tous les étudiants.
 indication utilisez la méthode  `$pull` 
```js

```

## Exercice 6
**Ajouter un champ "scholarship" avec la valeur "true" pour tous les étudiants ayant un GPA supérieur à 3.8 :**
- Écrivez une requête pour ajouter un champ "scholarship" avec la valeur "true" à tous les étudiants ayant un GPA supérieur à 3.8.
```js

```

## Exercice 7
**Mettre à jour le code postal de tous les étudiants vivant à "Los Angeles" à "90002" :**
- Écrivez une requête pour mettre à jour le code postal de tous les étudiants vivant à "Los Angeles" à "90002".
```js

```

## Exercice 8
**Ajouter un champ "graduation_year" avec la valeur 2024 pour tous les étudiants :**
- Écrivez une requête pour ajouter un champ "graduation_year" avec la valeur 2024 à tous les étudiants.
```js

```

# Exercices avec `insertMany`

## Application 
**Ajouter plusieurs nouveaux étudiants à la collection :**
- Écrivez une requête pour insérer plusieurs nouveaux étudiants dans la collection `students`.
```js
db.students.insertMany([
    {
        "name": "Frank Miller",
        "age": 25,
        "major": "Engineering",
        "gpa": 3.4,
        "courses": ["Engineering", "Thermodynamics", "Fluid Mechanics"],
        "address": {
            "city": "Seattle",
            "zip": "98101"
        }
    },
    {
        "name": "Grace Hopper",
        "age": 26,
        "major": "Computer Science",
        "gpa": 3.9,
        "courses": ["Algorithms", "Data Structures", "Machine Learning"],
        "address": {
            "city": "Boston",
            "zip": "02115"
        }
    },
    {
        "name": "Helen Smith",
        "age": 27,
        "major": "Mathematics",
        "gpa": 3.8,
        "courses": ["Calculus", "Linear Algebra", "Statistics"],
        "address": {
            "city": "Austin",
            "zip": "78701"
        }
    }
])
```

## Application
**Ajouter des étudiants avec des majors et des cours variés :**
- Écrivez une requête pour insérer plusieurs nouveaux étudiants avec des majors et des cours variés.
```js
db.students.insertMany([
    {
        "name": "Ivy Lee",
        "age": 22,
        "major": "Psychology",
        "gpa": 3.7,
        "courses": ["Psychology", "Social Psychology", "Cognitive Psychology"],
        "address": {
            "city": "San Francisco",
            "zip": "94103"
        }
    },
    {
        "name": "Jack White",
        "age": 23,
        "major": "History",
        "gpa": 3.6,
        "courses": ["History", "World History", "American History"],
        "address": {
            "city": "Denver",
            "zip": "80202"
        }
    },
    {
        "name": "Karen Brown",
        "age": 24,
        "major": "Economics",
        "gpa": 3.5,
        "courses": ["Economics", "Microeconomics", "Macroeconomics"],
        "address": {
            "city": "Phoenix",
            "zip": "85003"
        }
    }
])
```
