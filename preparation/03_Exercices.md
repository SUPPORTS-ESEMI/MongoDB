# Exercices Combinés

## Application
**Ajouter un nouvel étudiant et calculer immédiatement la moyenne des GPA pour chaque major :**
- Insérez un nouvel étudiant dans la collection, puis utilisez `aggregate` pour calculer la moyenne des GPA pour chaque major.
```js
db.students.insertOne({
    "name": "Linda Green",
    "age": 22,
    "major": "Computer Science",
    "gpa": 3.85,
    "courses": ["Math", "Database Systems", "Algorithms"],
    "address": {
        "city": "New York",
        "zip": "10001"
    }
});

db.students.aggregate([
    { $group: { _id: "$major", averageGPA: { $avg: "$gpa" } } }
]);
```

## Exercice 1
**Mettre à jour le GPA de tous les étudiants en "Mathematics" et lister les étudiants avec le GPA le plus élevé :**
- Augmentez le GPA de tous les étudiants en "Mathematics" de 0.1, puis utilisez `aggregate` pour lister les étudiants avec le GPA le plus élevé.
```js

```

## Exercice 2
**Ajouter un cours "Data Science" à tous les étudiants en "Computer Science" et compter le nombre de cours par étudiant :**
- Ajoutez le cours "Data Science" à tous les étudiants en "Computer Science", puis utilisez `aggregate` pour compter le nombre de cours par étudiant.
```js

```

## Application
**Insérer plusieurs étudiants et calculer le nombre total de cours suivis par tous les étudiants :**
- Insérez plusieurs nouveaux étudiants, puis utilisez `aggregate` pour calculer le nombre total de cours suivis par tous les étudiants.
```js
db.students.insertMany([
    {
        "name": "Michael Jordan",
        "age": 23,
        "major": "Physics",
        "gpa": 3.75,
        "courses": ["Physics", "Quantum Mechanics"],
        "address": {
            "city": "Chicago",
            "zip": "60601"
        }
    },
    {
        "name": "Nancy Smith",
        "age": 24,
        "major": "Biology",
        "gpa": 3.65,
        "courses": ["Biology", "Genetics"],
        "address": {
            "city": "Houston",
            "zip": "77001"
        }
    }
]);

db.students.aggregate([
    { $unwind: "$courses" },
    { $group: { _id: null, totalCourses: { $sum: 1 } } }
]);
```

## Exercice 3
**Mettre à jour l'adresse de tous les étudiants vivant à "Los Angeles" et lister les étudiants par ville :**
- Changez le code postal des étudiants vivant à "Los Angeles" à "90002", puis utilisez `aggregate` pour lister les étudiants par ville.
```js

```

## Exercice 4
**Ajouter un champ "scholarship" aux étudiants ayant un GPA supérieur à 3.8 et calculer le nombre d'étudiants bénéficiaires :**
- Ajoutez un champ "scholarship" avec la valeur "true" aux étudiants ayant un GPA supérieur à 3.8, puis utilisez `aggregate` pour calculer le nombre d'étudiants bénéficiaires.
```js

```

## Application
**Insérer un nouvel étudiant et calculer l'âge moyen des étudiants par major :**
- Insérez un nouvel étudiant, puis utilisez `aggregate` pour calculer l'âge moyen des étudiants pour chaque major.
```js
db.students.insertOne({
    "name": "Oliver Brown",
    "age": 21,
    "major": "Chemistry",
    "gpa": 3.7,
    "courses": ["Chemistry", "Organic Chemistry"],
    "address": {
        "city": "Miami",
        "zip": "33101"
    }
});

db.students.aggregate([
    { $group: { _id: "$major", averageAge: { $avg: "$age" } } }
]);
```

## Exercice 
**Mettre à jour le major de tous les étudiants en "Biology" à "Biochemistry" et lister les majors avec le plus grand nombre d'étudiants :**
- Changez le major de tous les étudiants en "Biology" à "Biochemistry", puis utilisez `aggregate` pour lister les majors avec le plus grand nombre d'étudiants.
```js

```

## Exercice 
**Ajouter un cours "Advanced Mathematics" à tous les étudiants en "Mathematics" et calculer le nombre moyen de cours suivis par ces étudiants :**
- Ajoutez le cours "Advanced Mathematics" à tous les étudiants en "Mathematics", puis utilisez `aggregate` pour calculer le nombre moyen de cours suivis par ces étudiants.
```js

```

## Application 
**Insérer plusieurs étudiants et calculer la moyenne des GPA pour chaque ville :**
- Insérez plusieurs nouveaux étudiants, puis utilisez `aggregate` pour calculer la moyenne des GPA pour chaque ville.
```js
db.students.insertMany([
    {
        "name": "Patricia White",
        "age": 22,
        "major": "Engineering",
        "gpa": 3.8,
        "courses": ["Engineering", "Thermodynamics"],
        "address": {
            "city": "Seattle",
            "zip": "98101"
        }
    },
    {
        "name": "Quentin Black",
        "age": 23,
        "major": "Physics",
        "gpa": 3.9,
        "courses": ["Physics", "Quantum Mechanics"],
        "address": {
            "city": "Austin",
            "zip": "78701"
        }
    }
]);

db.students.aggregate([
    { $group: { _id: "$address.city", averageGPA: { $avg: "$gpa" } } }
]);
```
