// 1.1. What is the difference between a parameter and an argument?

// 1.2. Within a function, what is the difference between return and console.log?

// 1. 3. What are the implications of the ability of a function to return a value?

// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    return (num ** 3);
}
// console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    if (letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' || letter.toLowerCase() === 'i' || letter.toLowerCase() === 'o' || letter.toLowerCase() === 'u') return true;
    return false;
}
// console.log(isAVowel("a"));
// console.log(isAVowel("T"));
// console.log(isAVowel("E"));
// console.log(isAVowel("r"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    let arr = [word1.length, word2.length];
    return arr;
}
console.log(getTwoLengths('Hank', 'Hippopopalous'));

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