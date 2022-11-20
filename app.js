// 1.1. What is the difference between a parameter and an argument?
// 'A parameter is a function input when setting up a function, whilst an argument is the actual input that overwrites the parameter with a value.'
// 1.2. Within a function, what is the difference between return and console.log?
// 'A return ends the function and stores the value, whilst console.log proceeds to print out the value from a function.'
// 1. 3. What are the implications of the ability of a function to return a value?
// 'Return allows the value derived from a function to be used within other contexts within the code.'
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
// console.log(getTwoLengths('Hank', 'Hippopopalous'));

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    let arrVal = 0;
    for (let i = 0; i < arr.length; i++) {
        arrVal = arrVal + arr[i];
    }
    return arrVal;
}
// console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    let sqrt = num ** 0.5;
    for (let i = 2; i <= sqrt; i++) {
        if (i !== num && i !== 1 && num % i === 0) {
            return false;
        } 
    }
    return num;
}

// console.log(checkPrime(45))

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
    let primeArray = [];
    for (let j = 2; j <= num; j++){
        if (checkPrime(j) !== false) {
            primeArray.push(j)
        }
    
    }
    console.log(primeArray);
}
// printPrimes(45)

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
    let wordLengths = [];
    for (let i = 0; i < arr.length; i++) {
        let wordLength = arr[i].length;
        wordLengths.push(wordLength);
    }
    console.log(wordLengths);
    let longestWord = '';
    for (let i = 0; i < arr.length; i++) {
        if (longestWord.length < arr[i].length) {
            longestWord = arr[i];
        }
    }
    console.log(longestWord);
}

// printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]);

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
    let posNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            posNum = posNum + arr[i]
        }
    }
    return posNum;
}

console.log(sumPositive([1, -4, 7, 12]))

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