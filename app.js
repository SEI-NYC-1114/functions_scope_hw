// 1.1. What is the difference between a parameter and an argument?
// `A parameter is what defines a variable in a function, an argument is a value that is declared within a function. A parameter is a "placeholder" for an argument, which will be later defined.`
// 1.2. Within a function, what is the difference between return and console.log?
// `Return will stop the function from running any further, and it returns the value of whatever is defined in the return statement.`
// 1. 3. What are the implications of the ability of a function to return a value?
// `Return will allow the function to use the value of whatever is passed through it.`

// 2. calculateCube
function calculateCube(num) {
    let square = num * num;
    let cube = square * num;
    return cube;
}
//console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    if (letter.toUpperCase() == "A" || letter.toUpperCase() == "E" || letter.toUpperCase() == "I" || letter.toUpperCase() == "O" || letter.toUpperCase() == "U") 
    return true;
    else return false;
}
//console.log(isAVowel("z"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let lengthOne = word1.length;
    let lengthTwo = word2.length;
    return [lengthOne, lengthTwo];
}
//console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) 
    sum += arr[i];
    return sum;
    }

console.log(sumArray([1, 2, 3, 4, 5, 6]));

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