Voici une liste de **10 exercices avec `find`** et **10 exercices avec `aggregate`** pour explorer 
### **10 Exercices avec `find` :**

#### 1. **Trouver tous les documents où l'angle du vent est supérieur à 150° :**
```js

```

---

#### 2. **Trouver tous les documents où la température du point de rosée est inférieure à 0°C :**
```js
```

---

#### 3. **Trouver tous les documents où la hauteur du plafond est exactement 99999 :**
```js
```

---

#### 4. **Trouver tous les documents où la vitesse du vent est comprise entre 1 m/s et 5 m/s :**
```js

```

---

#### 5. **Trouver tous les documents où `sections` contient "AG1" :**
```js
```

---

#### 6. **Trouver tous les documents où `callLetters` commence par "PL" :**
```js
```
Même question mais commence par "L"
---

#### 7. **Trouver tous les documents où la température de l'air est supérieure à celle du point de rosée :**
```js

```

---

#### 8. **Trouver tous les documents où la distance de visibilité est supérieure à 10 km et la qualité est "9" :**
```js
```

---

#### 9. **Projeter uniquement `callLetters`, `airTemperature.value` et `pressure.value` pour tous les documents :**
```js

```

---

#### 10. **Trouver tous les documents où l'élévation est différente de 9999 :**
```js
```

---

### **10 Exercices avec `aggregate` :**

#### 1. **Calculer la température moyenne de l'air, pensez à arrondir le résultat à deux chiffres après la virgule.**
```js
```

---

#### 2. **Trouver le document avec la pression atmosphérique maximale :**
```js

```

---

#### 3. **Compter le nombre de documents où la qualité de la pression est "1" :**
```js
```

---

#### 4. **Lister les températures d'air par `callLetters` :**
```js
```

---

#### 5. **Calculer la vitesse moyenne du vent pour chaque qualité de vitesse, pensez à arrondir vos résultats à deux chiffres après la virgule :**
```js

```

---

#### 6. **Calculer le nombre de documents pour chaque type de vent :**
```js
```

---

#### 7. **Trouver les 3 documents avec la température d'air la plus basse :**
```js

```

---

#### 8. **Projeter un champ calculé pour la différence entre la température de l'air et celle du point de rosée, pensez à arrondir vos résultats à deux chiffres après la virgule.**
```js

```

---

### **9. Compter les relevés par "dataSource" et "type"**
  
```js

```

---

### **10. Calculer les températures moyennes et pressions moyennes par "callLetters" et "qualityControlProcess"**

```js

```