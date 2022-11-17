// 1.1. What is the difference between a parameter and an argument?
// A parameter is what you use to label/define the argument in a function.
// 1.2. Within a function, what is the difference between return and console.log?
// A return saves the value so that it may be called upon for various tasks. A console log simply prints the value into the console as text.
// 1. 3. What are the implications of the ability of a function to return a value?
// The implication is that a function is very flexible and the scope of its use is universal. 
// 2. calculateCube
function calculateCube(num) {
    return num * num * num;
}
console.log(calculateCube(4));
// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
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