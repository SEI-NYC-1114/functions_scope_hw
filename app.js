// 1.1. What is the difference between a parameter and an argument?
    //// Parameters are what the function asks for while arguments are the actual values that are taken in.
// 1.2. Within a function, what is the difference between return and console.log?
    //// return asks the function to actually return some value
    //// console.log prints directly to console

// 1. 3. What are the implications of the ability of a function to return a value?
    //// When working with a lot of data/information, it's useful to just call a function to return values than doing a bunch of hardcoding.

// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    let vol = num*num*num;
    return vol;
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