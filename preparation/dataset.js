// 
/*

mongosh -u root -p
# mdp example

use university

db.createCollection('sudents')
*/

db.students.insertMany([
    {
        "name": "Alice Johnson",
        "age": 20,
        "major": "Computer Science",
        "gpa": 3.8,
        "courses": ["Math", "Database Systems", "Algorithms"],
        "notes": [19, 10, 11],
        "grade": "master 2",
        "address": {
            "city": "New York",
            "zip": "10001"
        }
    },
    {
        "name": "Bob Smith",
        "age": 22,
        "major": "Mathematics",
        "gpa": 3.6,
        "courses": ["Math", "Calculus", "Linear Algebra"],
        "notes": [15, 18, 17],
        "grade": "master 1",
        "address": {
            "city": "Los Angeles",
            "zip": "90001"
        }
    },
    {
        "name": "Charlie Brown",
        "age": 21,
        "major": "Physics",
        "gpa": 3.9,
        "courses": ["Physics", "Quantum Mechanics", "Electromagnetism"],
        "notes": [14, 19, 20],
        "grade": "bachelor 3",
        "address": {
            "city": "Chicago",
            "zip": "60601"
        }
    },
    {
        "name": "Diana Prince",
        "age": 23,
        "major": "Biology",
        "gpa": 3.7,
        "courses": ["Biology", "Genetics", "Biochemistry"],
        "notes": [16, 17, 18],
        "grade": "bachelor 2",
        "address": {
            "city": "Houston",
            "zip": "77001"
        }
    },
    {
        "name": "Eve Davis",
        "age": 24,
        "major": "Chemistry",
        "gpa": 3.5,
        "courses": ["Chemistry", "Organic Chemistry", "Physical Chemistry"],
        "notes": [12, 13, 14],
        "grade": "master 3",
        "address": {
            "city": "Miami",
            "zip": "33101"
        }
    }
])

db.students.countDocuments() // 5 documents


db.students.insertMany([
    {
        "name": "Khadidja ",
        "age": 25,
        "major": "Computer Science",
        "gpa": 13.5,
        "courses": ["Chemistry", "Organic Chemistry", "Physical Chemistry", "IA"],
        "notes": [12, 13, 14],
        "grade": "master 5",
        "address": {
            "city": "Miami",
            "zip": "33101"
        }
    },
    {
        "name": "Idir",
        "age": 25,
        "major": "Computer Science",
        "gpa": 13.5,
        "courses": ["Chemistry", "Physical Chemistry", "IA"],
        "notes": [12, 13, 14],
        "grade": "master 5",
        "address": {
            "city": "Miami",
            "zip": "33101"
        }
    }
])
