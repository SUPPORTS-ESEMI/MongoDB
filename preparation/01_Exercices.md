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
```

## Exercice 3
**Trouver les étudiants qui suivent le cours "Math" :**
- Écrivez une requête pour trouver tous les étudiants qui suivent le cours "Math".
```js
```

## Exercice 4
**Trouver les étudiants vivant à "New York" :**
- Écrivez une requête pour trouver tous les étudiants vivant à "New York".
```js
```

## Exercice 5
**Trouver les étudiants ayant un GPA (Grade Point Average) supérieur à 3.7 :**
- Écrivez une requête pour trouver tous les étudiants ayant un GPA supérieur à 3.7.
```js
```

## Exercice 6
**Trouver les étudiants dont le nom commence par "A" :**
- Écrivez une requête pour trouver tous les étudiants dont le nom commence par la lettre "A".
```js
```

## Exercice 7
**Trouver les étudiants qui ne suivent pas le cours "Biology" :**
- Écrivez une requête pour trouver tous les étudiants qui ne suivent pas le cours "Biology".
```js
```

## Exercice 8
**Trouver les étudiants ayant exactement 3 cours :**
- Écrivez une requête pour trouver tous les étudiants qui suivent exactement 3 cours.
```js
```

## Exercice 9
**Trouver les étudiants dont le major est "Mathematics" ou "Physics" :**
- Écrivez une requête pour trouver tous les étudiants dont le major est soit "Mathematics" soit "Physics".
```js
```

## Exercice 10
**Trouver les étudiants qui n'ont pas de cours "Algorithms" :**
- Écrivez une requête pour trouver tous les étudiants qui ne suivent pas le cours "Algorithms".
```js
```

# Exercices avec `aggregate`

## Exercice 1
**Calculer la moyenne des GPA pour chaque major :**
- Écrivez une requête d'agrégation pour calculer la moyenne des GPA pour chaque major.
```js

```

## Exercice 2
**Compter le nombre d'étudiants par ville :**
- Écrivez une requête d'agrégation pour compter le nombre d'étudiants pour chaque ville.
```js

```

## Exercice 3
**Trouver l'étudiant avec le GPA le plus élevé :**
- Écrivez une requête d'agrégation pour trouver l'étudiant ayant le GPA le plus élevé.
```js

```

## Exercice 4
**Lister les cours uniques suivis par les étudiants :**
- Écrivez une requête d'agrégation pour lister tous les cours uniques suivis par les étudiants.
```js

```

## Exercice 5
**Calculer le nombre total de cours suivis par tous les étudiants :**
- Écrivez une requête d'agrégation pour calculer le nombre total de cours suivis par tous les étudiants.
```js

```

## Exercice 6
**Trouver le major avec le plus grand nombre d'étudiants :**
- Écrivez une requête d'agrégation pour trouver le major ayant le plus grand nombre d'étudiants.
```js

```

## Exercice 7
**Calculer l'âge moyen des étudiants par major :**
- Écrivez une requête d'agrégation pour calculer l'âge moyen des étudiants pour chaque major.
```js

```

## Exercice 8
**Lister les étudiants et leurs cours, triés par GPA décroissant :**
- Écrivez une requête d'agrégation pour lister tous les étudiants et leurs cours, triés par GPA (`Grade Point Average`) décroissant.
```js

```

## Exercice 9
**Calculer le nombre moyen de cours suivis par les étudiants de chaque major :**
- Écrivez une requête d'agrégation pour calculer le nombre moyen de cours suivis par les étudiants de chaque major.
```js

```

## Exercice 10
**Trouver les étudiants ayant le GPA le plus élevé dans chaque major :**
- Écrivez une requête d'agrégation pour trouver les étudiants ayant le GPA le plus élevé dans chaque major.
```js

```
