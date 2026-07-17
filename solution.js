// Part 1: Coding Questions

// 1. Convert the string "123" to a number and add 7.
function stringToNumberPlus7(str) {
  return Number(str) + 7; //Number() is a built-in function used to convert the string to a number,then we add 7 to it,7 will be added to the converted number
}
console.log(stringToNumberPlus7("123")); // 130
//stringToNumberPlus7 is a function that takes a string as an argument, converts it to a number using the Number() function, and then adds 7 to the reslting number The result is returned as the output of the function. In this case, when we call stringToNumberPlus7("123"), it converts "123" to the number 123 and adds 7 resulting in 130

// 2. Check if the given variable is falsy and return "Invalid" if it is
function checkFalsy(value) {
  return !value ? "Invalid" : value; // If the value is falsy return "Invalid", anythuing else return the value
}
console.log(checkFalsy(0)); // "Invalid", because 0 is a falsy value in JavaScript, so the function returns "Invalid"

// 3. Print all numbers between 1 and 10, skipping even numbers using continue
function printOddNumbers() {
  const result = []; // Create an empty array to store the odd numbers
  for (let i = 1; i <= 10; i++) { // Loop through numbers from 1 to 10
    if (i % 2 === 0) continue; //if the number divisible by 2, skip it and continue to the next iteration (even numbers skipped)
    result.push(i); //If odd add it to the array
  }
  return result;
}
console.log(printOddNumbers()); // returns the stored array [1, 3, 5, 7, 9]

// 4. Return only the even numbers from an array using filter
function getEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0); // Filter the array to return only even numbers
}
console.log(getEvenNumbers([1, 2, 3, 4, 5])); // returns[2, 4]

// 5. Merge two arrays using the spread operator
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
// The spread operator (...) is used to merge the two arrays into a new array. It takes all elements from arr1 and arr2 and combines them into a single array
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

// 6. Return the day of the week given a number using switch.
function getDayOfWeek(num) { 
  switch (num) { // Use a switch statement to determine the day of the week based on the input number
    case 1: // If the number is 1 return "Sunday"
      return "Sunday";
    case 2: // If the number is 2 return "Monday"
      return "Monday";
    case 3:
      return "Tuesday";// If the number is 3 return "Tuesday"
    case 4:
      return "Wednesday";// If the number is 4 return "Wednesday"
    case 5:
      return "Thursday"; // If the number is 5 return "Thursday"
    case 6:
      return "Friday"; // If the number is 6 retiurn "Friday"
    case 7:
      return "Saturday"; // If the number is 7 return "Saturday"
    default:
      return "Invalid day"; // If the number is not betweeen 1 and 7 return "Invalid day"
  }
}
console.log(getDayOfWeek(2)); // "Monday" beacause the input is 2 which is case 2 so it retures "Monday"

// 7. Return the lengths of an array of strings using map.
function getStringLengths(arr) {
  return arr.map((str) => str.length); // Use the map function to create a new array containing the lengths of each string in the input array
}
console.log(getStringLengths(["a", "ab", "abc"])); // [1, 2, 3]

// 8. Check if a number is divisible by 3 and 5.
function checkDivisibility(num) {
  if (num % 3 === 0 && num % 5 === 0) return "Divisible by both"; // Check if the number is divisible by both 3 and 5
  if (num % 3 === 0) return "Divisible by 3"; // Check if the number is divisible by 3
  if (num % 5 === 0) return "Divisible by 5"; // Check if the number is divisible by 5
  return "Not divisible by 3 or 5"; // If the number is not divisible by eithere 3 or 5 return "Not divisible by 3 or 5"
}
console.log(checkDivisibility(15)); // "Divisible by both"

// 9. Return the square of a number using arrow syntax.
const square = (num) => num * num; 
console.log(square(5)); // 25

// 10. Destructure an object to extractvalues and return a formatted string
function describePerson(person) {
  const { name, age } = person; // Destructure the person object to extract the name and age properties
  return `${name} is ${age} years old`; 
}
console.log(describePerson({ name: "Omar abdelazim", age: 21 })); // "Omar abdelazim is 21 years old"

// 11. Accept multiple parameters and return their sum.
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0); // Use the reduce function to calculate the sum of all numbers passed as arguments,, The initial value of total is set to 0, and each number is added to it in each iteration
}
console.log(sumAll(1, 2, 3, 4, 5)); // 15

// 12. Return a promise which resolves after 3 seconds with a 'Success' message.
function delayedSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Success"), 3000); // Create a new Promise that resolves after 3 seconds with the message "Success"
  });
}
delayedSuccess().then((message) => console.log(message)); // "Success" (after 3s)

// 13. Find the largest number in an array.
function findLargest(arr) {
  return Math.max(...arr); // Use the Math.max function with the spread operator to find the biggest number in the array
}
console.log(findLargest([1, 3, 7, 2, 4])); // 7

// 14. Return an array containing only the keys of an object.
function getKeys(obj) {
  return Object.keys(obj); // Use the Object.keys function to extract the keys of the object
}
console.log(getKeys({ name: "Omar abdelazim", age: 21 })); // ["name", "age"]

// 15. Split a string into an array of words based on spaces.
function splitIntoWords(str) {
  return str.split(" "); // Use the split function to divide the string into an array of words based on spaces
}
console.log(splitIntoWords("The quick brown fox")); // ["The", "quick", "brown", "fox"]

module.exports = {
  stringToNumberPlus7,  
  checkFalsy,
  printOddNumbers,
  getEvenNumbers,
  mergeArrays,
  getDayOfWeek,
  getStringLengths,
  checkDivisibility,
  square,
  describePerson,
  sumAll,
  delayedSuccess,
  findLargest,
  getKeys,
  splitIntoWords,
};
