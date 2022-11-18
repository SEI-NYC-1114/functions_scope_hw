// 1.1. What is the difference between a parameter and an argument?
// A parameter is kind of like a place holder for some value the function will accept as input. 
// An argument is something that has to be evaluated usually true/false.
// 1.2. Within a function, what is the difference between return and console.log?
// a return ends a function and send the output somewhere. it does not actively display output. A console.log outputs the what is referenced to the console
// 1. 3. What are the implications of the ability of a function to return a value?
//  return allows the function's output value to be called simply by invoking the function.
// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    let cube = (num * num);
    return cube;
}
console.log(calculateCube(5));

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