### **Exercices sur `insert`**

#### 1. **Insérer un nouveau relevé météo**
Ajoutez un document avec les informations suivantes : 
```json
{
  "st": "x+52000+004000",
  "ts": { "$date": { "$numberLong": "447355000000" } },
  "position": { "type": "Point", "coordinates": [4.0, 52.0] },
  "elevation": 15,
  "callLetters": "NEW1",
  "qualityControlProcess": "V030",
  "dataSource": "5",
  "type": "FM-15",
  "airTemperature": { "value": 12.3, "quality": "1" },
  "pressure": { "value": 1015.2, "quality": "1" }
}
```

---

#### 2. **Insérer plusieurs relevés météo d’un coup**
Ajoutez 3 documents dans un seul appel `insertMany`. Les données sont :
```json
[
  {
    "st": "x+51800+002800",
    "ts": { "$date": { "$numberLong": "447360000000" } },
    "position": { "type": "Point", "coordinates": [2.8, 51.8] },
    "callLetters": "ABC1",
    "qualityControlProcess": "V030",
    "airTemperature": { "value": 15.0, "quality": "1" }
  },
  {
    "st": "x+51600+002400",
    "ts": { "$date": { "$numberLong": "447370000000" } },
    "position": { "type": "Point", "coordinates": [2.4, 51.6] },
    "callLetters": "DEF2",
    "qualityControlProcess": "V020",
    "airTemperature": { "value": 18.5, "quality": "1" }
  },
  {
    "st": "x+51950+003500",
    "ts": { "$date": { "$numberLong": "447380000000" } },
    "position": { "type": "Point", "coordinates": [3.5, 51.95] },
    "callLetters": "GHI3",
    "qualityControlProcess": "V040",
    "airTemperature": { "value": 10.0, "quality": "2" }
  }
]
```

---

#### 3. **Insérer un relevé avec des champs optionnels**
Ajoutez un relevé avec seulement ces champs :
```json
{
  "st": "x+51500+002200",
  "ts": { "$date": { "$numberLong": "447390000000" } },
  "position": { "type": "Point", "coordinates": [2.2, 51.5] },
  "callLetters": "NOAA",
  "type": "FM-20"
}
```

---

### **Exercices sur `update`**
#### 4. **Mettre à jour la température d’un document**
Recherchez le document où `callLetters` vaut `"PLAT"` et mettez à jour la température de l’air à `5.5` avec une qualité `"2"`.

---

#### 5. **Ajouter un champ manquant à un document**
Pour le document où `callLetters` vaut `"DEF2"`, ajoutez un champ `pressure` avec les valeurs suivantes :
```json
{
  "value": 1020.0,
  "quality": "1"
}
```

---

#### 6. **Mettre à jour plusieurs documents**
Pour tous les relevés météo où la qualité de la température de l’air est `"1"`, modifiez la qualité en `"A1"`.

---

#### 7. **Incrémenter la température d’un degré**
Pour les relevés où la température de l’air est supérieure à `10`, ajoutez `1` à la valeur de la température.

---

#### 8. **Changer le type de tous les relevés**
Remplacez la valeur du champ `type` par `"FM-NEW"` pour tous les relevés où `qualityControlProcess` vaut `"V030"`.

---

### **Exercices sur `delete`**
#### 9. **Supprimer un document spécifique**
Supprimez le document où `callLetters` vaut `"NOAA"`.

---

#### 10. **Supprimer tous les documents d’une certaine qualité**
Supprimez tous les documents où la qualité de la température de l’air est `"2"`.

---

### Conseils pour résoudre les exercices
1. Utilisez les méthodes MongoDB suivantes :
   - **Insertion** : `db.data.insertOne()` et `db.data.insertMany()`.
   - **Mise à jour** : `db.data.updateOne()`, `db.data.updateMany()`, ou la méthode moderne `db.data.update()` avec `$set`, `$inc`, ou `$unset`.
   - **Suppression** : `db.data.deleteOne()` et `db.data.deleteMany()`.
2. Testez chaque opération avec des requêtes de vérification, comme :
   ```javascript
   db.data.find({ callLetters: "PLAT" }).pretty();
   ```