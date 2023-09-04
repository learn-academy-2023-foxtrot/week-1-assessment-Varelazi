// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

// Pseudo code:
//Function Name: boilingPoint
//Input: determNum
//Output: Both number and string
//Process: String interpolation to reference the number given to determNum.

const boilingPoint = (determNum) => {
    if(determNum < 212){
        return `${determNum} is below boiling point`
    }else if(determNum === 212){
        return `${determNum} is at boiling point`
    } else{
        return `${determNum} is above boiling point`
    }
}
    console.log(boilingPoint(42))
    console.log(boilingPoint(350))
    console.log(boilingPoint(212))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
//Input: None
//Output: Number 
//Process: Concat to combine both arrays and then return using .length to return how many numbers are in the array. 

const combinedArray = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
//console.log(combinedArray) - To help see array once it is combined
console.log(combinedArray.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Foxtrot 2023"
// Expected output: "3202 tortxoF"

// Pseudo code:
//Input: None
//Output: String
//Process: Using split to make it an array, then using reverse to reverse the string. Don't forget the .join to combine the letters

console.log(currentCohort.split("").reverse().join(""))


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// Pseudo code:
//Input: Numbers from array
//Output: Number
//Process: Use .lastIndexOf to find the LAST index of the number. Since it's two of the same number we use .lastIndexOf to return the index of the last value 

console.log(numberOfConnections.lastIndexOf(42))
console.log(numberOfConnections.lastIndexOf(10))