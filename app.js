// 1.1. What is the difference between a parameter and an argument?
// A parameter is a name variable passed into a function. These parameter variables are used to import arguments
// function arguments are the real values passed to the function

// 1.2. Within a function, what is the difference between return and console.log?
// return will return some value and cosonle.log will log value in browswer console

// 1. 3. What are the implications of the ability of a function to return a value?
// if a value is returned the return has terminiated the function


// 2. calculateCube
function calculateCube(num) {
    // let cubed = 0;
    // for (let i = 1; i <= num; i++) {
    //     cubed += i ** 3;
    // }
    // return cubed;

    return num **3;
    // YOUR CODE HERE
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