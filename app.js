// 1.1. What is the difference between a parameter and an argument?
// A parameter is what a function takes in as its being written,
// an argument is what a function takes in as its being invoked.

// 1.2. Within a function, what is the difference between return and console.log?
// "return" will return the value that follows it, console.log will log the value to the console.

// 1. 3. What are the implications of the ability of a function to return a value?
// The return keyword will return a value and exit the function.

// 2. calculateCube
function calculateCube(num) {
  if (num.toString().length > 1 || typeof num !== 'number') return 'must enter a single number'
  return Math.pow(num, 3)
}

// 3. isAVowel
function isAVowel(letter) {
  if (letter.length > 1 || typeof letter !== 'string') return 'must enter a string with a single character'
  const matchedLetter = letter.match(/[AEIOUaeiou]/g)
  return matchedLetter ? true : false
}

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
}

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
    sumPositive
};