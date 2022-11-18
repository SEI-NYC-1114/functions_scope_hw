// 1.1. What is the difference between a parameter and an argument?
let answer_1_1 = ` 🚩 The parameters are the aliases for the values that will be passed to the function. The arguments are the actual values. `;
console.log(answer_1_1);
// 1.2. Within a function, what is the difference between return and console.log?
let answer_1_2 = ` 🚩 console.log is a function in javascript and return is a keyword. console.log is used to debug/print information to the console. Return on the other hand is a call to pass the value where the call was made console.log is not going to stop the execution while return stops the execution and return the specific value.`;
console.log(answer_1_2);
// 1. 3. What are the implications of the ability of a function to return a value?
let answer_1_3 = ` 🚩 In JavaScript, a function allows you to define a block of code, give it a name and then execute it as many times as you want. Don't Repeat Yourself ( DRY ) is a principle of software development and its main goal is to avoid code duplication.`;
console.log(answer_1_3);
// 2. calculateCube
function calculateCube(num) {
  // YOUR CODE HERE
  return num ** 3;
}
console.log(calculateCube(5));
// 3. isAVowel
function isAVowel(letter) {
  // YOUR CODE HERE
  let arr = ["a", "o", "e", "i", "u", "A", "O", "E", "I", "U"];
  for (let i = 0; i < arr.length; i++) {
    if (letter === arr[i]) {
      return true;
    }
  }
  return false;
}
console.log(isAVowel("a"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
  // YOUR CODE HERE
  let firstWord = word1.split("");
  let secondWord = word2.split("");
  return [firstWord.length, secondWord.length];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
  // YOUR CODE HERE
}

// 6.1 checkPrime
function checkPrime(num) {
  // YOUR CODE HERE
}

// 6.2 printPrimes
function printPrimes(num) {
  // YOUR CODE HERE
}

// 7. printLongestWord
function printLongestWord(arr) {
  // YOUR CODE HERE
}

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
  // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
  // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
  // YOUR CODE HERE
}

module.exports = {
  calculateCube,
  isAVowel,
  getTwoLengths,
  sumArray,
  checkPrime,
  printPrimes,
  printLongestWord,
  eulerFibo,
  findNeedle,
  sumPositive,
};
