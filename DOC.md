### Documentation de la Structure des Données

Le document ci-dessous représente une entrée dans la base de données MongoDB et contient plusieurs champs relatifs aux conditions météorologiques. Voici la description détaillée des principaux champs :

---

#### **Champs principaux :**

- **_id (ObjectId)** :  
  Identifiant unique généré par MongoDB pour chaque document dans la collection.

- **st (String)** :  
  Représente le code de station météorologique avec des informations de position, de fréquence ou d'identification spécifique.

- **ts (Date)** :  
  Timestamp (temps Unix en millisecondes) indiquant la date et l'heure de l'enregistrement des données météorologiques.

- **position (Object)** :  
  - **type (String)** : Type de la géométrie de la position, ici un `Point` pour une position géographique.
  - **coordinates (Array)** : Coordonnées géographiques du point sous la forme de `[longitude, latitude]` :
    - Longitude : `3.2`
    - Latitude : `51.9`

- **elevation (Integer)** :  
  Altitude (en mètres) de la station ou du point d'enregistrement des données. Valeur ici : `9999` (peut être une valeur par défaut ou inconnue).

- **callLetters (String)** :  
  Lettres d'appel de la station (identifiant unique).

- **qualityControlProcess (String)** :  
  Code représentant le processus de contrôle de qualité des données. Exemple : `V020`.

- **dataSource (Integer)** :  
  Identifiant de la source des données. Ici, la valeur est `4`.

- **type (String)** :  
  Type de mesure ou de station. Exemple : `FM-13` pour une station ou un type spécifique.

---

#### **Mesures Météorologiques :**

- **airTemperature (Object)** :  
  - **value (Double)** : Température de l'air (en degrés Celsius). Exemple : `4.8`.
  - **quality (Integer)** : Indicateur de qualité des données, où `1` représente une qualité acceptable.

- **dewPoint (Object)** :  
  - **value (Double)** : Point de rosée (en degrés Celsius). Exemple : `4.6`.
  - **quality (Integer)** : Indicateur de qualité des données.

- **pressure (Object)** :  
  - **value (Double)** : Pression atmosphérique (en hPa). Exemple : `1032.6`.
  - **quality (Integer)** : Indicateur de qualité des données.

- **wind (Object)** :  
  - **direction (Object)** :
    - **angle (Integer)** : Angle de la direction du vent en degrés (de 0 à 360). Exemple : `170`.
    - **quality (Integer)** : Indicateur de qualité des données de direction.
  - **type (String)** : Type de vent. Exemple : `N` pour "Nord".
  - **speed (Object)** :
    - **rate (Double)** : Vitesse du vent en m/s. Exemple : `0.5`.
    - **quality (Integer)** : Indicateur de qualité des données de vitesse.

- **visibility (Object)** :  
  - **distance (Object)** :
    - **value (Integer)** : Distance de visibilité en mètres. Exemple : `999999`.
    - **quality (Integer)** : Indicateur de qualité des données de visibilité.
  - **variability (Object)** :
    - **value (String)** : Variabilité de la visibilité. Exemple : `N` pour "Aucune variabilité".
    - **quality (Integer)** : Indicateur de qualité des données de variabilité.

- **skyCondition (Object)** :  
  - **ceilingHeight (Object)** :
    - **value (Integer)** : Hauteur du plafond nuageux en mètres. Exemple : `99999`.
    - **quality (Integer)** : Indicateur de qualité des données de hauteur.
    - **determination (Integer)** : Code de détermination de la hauteur du plafond (indicateur de qualité).
  - **cavok (String)** : Code indiquant les conditions de visibilité et de ciel clair. Exemple : `N` pour "Non".

---

#### **Autres Informations Météorologiques :**

- **sections (Array of Strings)** :  
  Liste des sections associées à cet enregistrement météorologique, comme `AG1`, `MD1`, `OA1`, `SA1`.

- **precipitationEstimatedObservation (Object)** :  
  - **discrepancy (String)** : Discrépance dans les mesures des précipitations, ici : `2`.
  - **estimatedWaterDepth (Integer)** : Profondeur estimée des précipitations en mm, ici : `999`.

- **atmosphericPressureChange (Object)** :  
  - **tendency (Object)** :
    - **code (String)** : Code de tendance de la pression atmosphérique. Exemple : `2`.
    - **quality (Integer)** : Indicateur de qualité des données de tendance.
  - **quantity3Hours (Object)** :
    - **value (Double)** : Changement de pression sur 3 heures (en hPa). Exemple : `1.2`.
    - **quality (Integer)** : Indicateur de qualité des données.
  - **quantity24Hours (Object)** :
    - **value (Double)** : Changement de pression sur 24 heures (en hPa). Exemple : `99.9`.
    - **quality (Integer)** : Indicateur de qualité des données.

- **seaSurfaceTemperature (Object)** :  
  - **value (Double)** : Température de la surface de la mer (en degrés Celsius). Exemple : `5.5`.
  - **quality (Integer)** : Indicateur de qualité des données de température de la mer.

---

### Structure JSON complète :
```json
{
  "_id": { "$oid": "5553a998e4b02cf7151190c9" },
  "st": "x+51900+003200",
  "ts": { "$date": { "$numberLong": "447354000000" } },
  "position": {
    "type": "Point",
    "coordinates": [ { "$numberDouble": "3.2" }, { "$numberDouble": "51.9" } ]
  },
  "elevation": { "$numberInt": "9999" },
  "callLetters": "PLAT",
  "qualityControlProcess": "V020",
  "dataSource": "4",
  "type": "FM-13",
  "airTemperature": { "value": { "$numberDouble": "4.8" }, "quality": "1" },
  "dewPoint": { "value": { "$numberDouble": "4.6" }, "quality": "1" },
  "pressure": { "value": { "$numberDouble": "1032.6" }, "quality": "1" },
  "wind": {
    "direction": { "angle": { "$numberInt": "170" }, "quality": "1" },
    "type": "N",
    "speed": { "rate": { "$numberDouble": "0.5" }, "quality": "1" }
  },
  "visibility": {
    "distance": { "value": { "$numberInt": "999999" }, "quality": "9" },
    "variability": { "value": "N", "quality": "9" }
  },
  "skyCondition": {
    "ceilingHeight": { "value": { "$numberInt": "99999" }, "quality": "9", "determination": "9" },
    "cavok": "N"
  },
  "sections": [ "AG1", "MD1", "OA1", "SA1" ],
  "precipitationEstimatedObservation": {
    "discrepancy": "2",
    "estimatedWaterDepth": { "$numberInt": "999" }
  },
  "atmosphericPressureChange": {
    "tendency": { "code": "2", "quality": "1" },
    "quantity3Hours": { "value": { "$numberDouble": "1.2" }, "quality": "1" },
    "quantity24Hours": { "value": { "$numberDouble": "99.9" }, "quality": "9" }
  },
  "seaSurfaceTemperature": { "value": { "$numberDouble": "5.5" }, "quality": "9" }
}
```

---

### Remarque :
Les données peuvent contenir des valeurs de qualité (par exemple, `quality: 1` ou `quality: 9`) qui peuvent indiquer le degré de fiabilité ou de précision des mesures. Les valeurs avec `9999` ou `999999` peuvent également représenter des valeurs inconnues ou non renseignées.