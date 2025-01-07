# Récupérer les sources dans le dépôt

Les données pour révisier [sample_weatherdata](./work/mongodb-sample-databases/sample_weatherdata/data.json)

## Liste des exercices 

1. Révisions find et aggregate : [revision](./Revisions/Exercices_find_aggregate.md)
2. CRUD [revision](./Revisions/Exercices_CRUD.md)

## Installation dans Docker 

```bash
docker exec -it docker_mongo bash

mongoimport --db sample_weatherdata \
            --collection data \
            --authenticationDatabase admin \
            --username root \
            --password example \
            --drop \
            --jsonArray \
            --file data/db/sample_weatherdata/data.json
```

## Installation sans Docker 

```bash
mongoimport --db sample_weatherdata \
            --collection data \
            --drop \
            --jsonArray \
            --file sample_weatherdata/data.json

```

## vérifiez que les données sont présentes

```bash
use sample_weatherdata
db.data.find().pretty()
```

## Structure des données

```json
{
  "_id": {
    "$oid": "5553a998e4b02cf7151190c9"
  },
  "st": "x+51900+003200",
  "ts": {
    "$date": {
      "$numberLong": "447354000000"
    }
  },
  "position": {
    "type": "Point",
    "coordinates": [
      {
        "$numberDouble": "3.2"
      },
      {
        "$numberDouble": "51.9"
      }
    ]
  },
  "elevation": {
    "$numberInt": "9999"
  },
  "callLetters": "PLAT",
  "qualityControlProcess": "V020",
  "dataSource": "4",
  "type": "FM-13",
  "airTemperature": {
    "value": {
      "$numberDouble": "4.8"
    },
    "quality": "1"
  },
  "dewPoint": {
    "value": {
      "$numberDouble": "4.6"
    },
    "quality": "1"
  },
  "pressure": {
    "value": {
      "$numberDouble": "1032.6"
    },
    "quality": "1"
  },
  "wind": {
    "direction": {
      "angle": {
        "$numberInt": "170"
      },
      "quality": "1"
    },
    "type": "N",
    "speed": {
      "rate": {
        "$numberDouble": "0.5"
      },
      "quality": "1"
    }
  },
  "visibility": {
    "distance": {
      "value": {
        "$numberInt": "999999"
      },
      "quality": "9"
    },
    "variability": {
      "value": "N",
      "quality": "9"
    }
  },
  "skyCondition": {
    "ceilingHeight": {
      "value": {
        "$numberInt": "99999"
      },
      "quality": "9",
      "determination": "9"
    },
    "cavok": "N"
  },
  "sections": [
    "AG1",
    "MD1",
    "OA1",
    "SA1"
  ],
  "precipitationEstimatedObservation": {
    "discrepancy": "2",
    "estimatedWaterDepth": {
      "$numberInt": "999"
    }
  },
  "atmosphericPressureChange": {
    "tendency": {
      "code": "2",
      "quality": "1"
    },
    "quantity3Hours": {
      "value": {
        "$numberDouble": "1.2"
      },
      "quality": "1"
    },
    "quantity24Hours": {
      "value": {
        "$numberDouble": "99.9"
      },
      "quality": "9"
    }
  },
  "seaSurfaceTemperature": {
    "value": {
      "$numberDouble": "5.5"
    },
    "quality": "9"
  }
}
```
