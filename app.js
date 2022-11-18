// 1.1. What is the difference between a parameter and an argument?
// a. parameters are declared along with and within the function. 
// The argument is a value passed to the function after it is declared. 

// 1.2. Within a function, what is the difference between 
//return and console.log?

//return is the new value of the argument variable.
//console.log prints the value of the function once the argument is 
//passed, but doesn't change the value of the argument. 

// 1. 3. What are the implications of the ability
// of a function to return a value?
//It allows you to use multiple variables with a function, programatically. 
//i.e. use the same function with different variable values. 

// 2. calculateCube
// function calculateCube(num) {
//     num = num * num * num;
//     return num;
// }

// console.log(calculateCube(5));

// 3. isAVowel
let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
function isAVowel(letter) {
    for (let i = 0; i <= vowels.length-1; i++) {
        if (isAVowel = vowels[i]) return true; 
    } return false;
}

console.log(isAVowel("a"));


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
    //calculateCube,
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