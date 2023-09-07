// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: It will output 10. It is giving the length of the string, so there are 10 characters, including the space. 
// b) Verify and explain: The answer is correct! 

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: It will log the letter "o" because it is searching for the value inside the space/index of four. 
// b) Verify and explain: The answer is correct!

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: It will log "Ruby" because it is searching for the index, which was indentified with the constant index. const index is one which is helps us figure out which value is in location one. 
// b) Verify and explain: The answer is correct!

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: It will log both "saturday" and "sunday" as "Saturday" and "Sunday". Therefor it will just allow first letter of the word to become upper case. 
// b) Verify and explain: The output is giving me an error. It is stating that weekendDays.toUpperCase() is not a function, so we cannot use it. .toUpperCase cannot be used within an array, therefor it is giving me an error. 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: It will log string because that is what is inside of the array. Not only will it log string, it will also long 4 beacuse the array is four words/strings long. 
// b) Verify and explain: Output is just "number". It is indentifying the array, not the strings inside. Since it is an array and it is asking for the length of the array it will only output that the length is a typeof number.
