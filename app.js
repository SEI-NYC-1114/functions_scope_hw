// 1.1. What is the difference between a parameter and an argument?
// A parameter is a name variable passed into a function. These parameter variables are used to import arguments
// function arguments are the real values passed to the function

// 1.2. Within a function, what is the difference between return and console.log?
// return will return some value and cosonle.log will log value in browswer console

// 1. 3. What are the implications of the ability of a function to return a value?
// if a value is returned the return has terminiated the function


// 2. calculateCube
function calculateCube(num) {
    return num **3;
}

console.log(calculateCube(5));

// 3. isAVowel

function isAVowel(letter) {
for (let i of "aeiouAEIOU"){
    if (letter.endsWith(i)){
        return true;
    }
}
return false;
}

console.log(isAVowel("a"));


// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    array = [];
    array.push(word1.length, word2.length);
    return array
}

console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
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