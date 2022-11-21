// 1.1. What is the difference between a parameter and an argument?
// You use an argument to pass information into a function's parameters. I think of a parameter as a variable, ie: x, and the argument may be x = 4.

// 1.2. Within a function, what is the difference between return and console.log?
// console.log simply prints to the console while return may change the way a program runs because it has the power to change the value of a function, return true/false etc

// 1. 3. What are the implications of the ability of a function to return a value?
// When a function returns a value, it has the power to terminate execution of the function even when it's not the last statement in that function.



// 2. calculateCube
function calculateCube(num) {
    return num * num * num
}
//console.log(calculateCube(5));

// 3. isAVowel
const vowel = ["a","e","i","o","u"];
function isAVowel(word) {
    for (let i = 0; i < vowel.length; i++) {
        if (word === vowel[i]) {
            return true;
        }
        return false;   
    }
}

// console.log(isAVowel("a"));
// console.log(isAVowel("t"));


// 4. getTwoLengths
const fourthArr = [];
let lengthW1, lengthW2;
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    lengthW1 = word1.length;
    lengthW2 = word2.length;
    fourthArr.push(lengthW1);
    fourthArr.push(lengthW2);
}

// getTwoLengths("Hank", "Hippopopalous");
// console.log(fourthArr);

// // 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1,2,3,4,5,6]));

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