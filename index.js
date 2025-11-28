// Data Structure 

const studentsDatabase = ["Alice", "Bob", "Charlie"]


// Algorithm of finding a Specific user

const findStudent = (allStudents, studentName) => {
    
    for (let i = 0; i < allStudents.length; i++) {

        if (allStudents[i] === studentName) {

            console.log(`found ${studentName}`);
            
        }
    }
    
};

findStudent(studentsDatabase, "Bob");

/* --------------------------------------------------------
-----------------------------------------------------------*/

// 0(n) Linear - time complexity

const groceries = ["Milk", "Eggs", "Bread", "Butter"];

const searchForItem = (item) => {

    for (let i = 0; i < groceries.length; i++) {

        if (groceries[i] === item) {
            console.log(`found ${item}`);
            return;
        }
    }

    for ( let j = 0; j < groceries.length; j++) {

        if (groceries[j] !== item) {
            console.log(`Found ${item} 2`);
            
        }
    }
};

searchForItem("Bread");

/* --------------------------------------------------------
-----------------------------------------------------------*/

// 0(1) Constant - time complexity

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getElement = (arr, index) => arr[index];

console.log(getElement(numbers, 4));

/* --------------------------------------------------------
-----------------------------------------------------------*/

// 0(n^2) Quadratic - time complexity

function findPairs(arr) {
    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            console.log(`Pair: (${arr[i]}, ${arr[j]})`);

        }
    }
}

const sampleArray = [1, 2, 3, 4];   

findPairs(sampleArray);