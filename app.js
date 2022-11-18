// 1.1. What is the difference between a parameter and an argument?

//parameters are the names listed in a function while arguments are real values passed on to the function.

// 1.2. Within a function, what is the difference between return and console.log?

//console. log is the same of print in other languages. return is used for returning values from a function.

// 1. 3. What are the implications of the ability of a function to return a value?

//a return value is used where the function is an intermediate step in a calculation of some kind. You want to get to a final result, which involves some values that need to be calculated by a function.

// 2. calculateCube
function calculateCube(num) {
    return num ** 3
    // YOUR CODE HERE

}

// 3. isAVowel
function isAVowel(letter) {
    if (letter.toLowerCase() == 'a') {
        return true
    }


    // YOUR CODE HERE
}

console.log(isAVowel('a'))

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let chipotle = [];
    let word1Len = word1.length;
    let word2Len = word2.length;
    chipotle.push(word1Len);
    chipotle.push(word2Len);
    return chipotle
}
console.log(getTwoLengths("valorant", "sucks"))









    // YOUR CODE HERE


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