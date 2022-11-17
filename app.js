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
    letter = letter.toUpperCase()
    if (letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U") return true;
    return false;
}
console.log(isAVowel("a"))
// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let arr = [];
    arr.push(word1.length);
    arr.push(word2.length);
    return arr
}
console.log(getTwoLengths("Hank", "Hippopopalous"));
// 5. sumArray
function sumArray(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));
// 6.1 checkPrime
function checkPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0 || num === 2) {
            return false;
        }
    } return true;
} 
console.log(checkPrime(4))

// 6.2 printPrimes
function printPrimes(num) {
    for(let i = 2; i <= num; i++) {
        if (checkPrime(i) === true) {
            console.log(i);
        }
    }
}
printPrimes(97);
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