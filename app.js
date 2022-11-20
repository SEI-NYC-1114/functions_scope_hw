// 1.1. What is the difference between a parameter and an argument?
// A parameter is what goes in the parentheses when you declare a function. i.e. function exampleFunc(para, meter).

// An argument is what you feed a function when you invoke it, and then it becomes the parameter when the function is run. i.e. console.log(exampleFunc().

// 1.2. Within a function, what is the difference between return and console.log?

// Return is like the output of the function. When the function hits a return, it exits. Console.log just prints the JS to the console.

// 1. 3. What are the implications of the ability of a function to return a value?
// You may use functions to run chunks of code and return a new value that can be stored in a new variable. The function's return also acts as an exit or output of the function. This is crucial if your function is an intermediate step in a larger problem that you're working out.

// 2. calculateCube
function calculateCube(num) {
    let volume = num ** 3;
    return volume;
}

//console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    let capLetter = letter.toUpperCase();
    if (capLetter === "A" || capLetter === "E" || capLetter === "I" || capLetter === "O" || capLetter === "U") {
        return true;
    } return false;
}
//console.log(isAVowel("O"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let arr = [word1.length, word2.length];
    return arr;
}

//console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
    let empty = 0;
    for (let i = 0; i < arr.length; i++) {
        empty += arr[i];
    } return empty;
}

// console.log(sumArray([1, 2, 3, 4, 5, 6]));

// // 6.1 checkPrime
function checkPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    } return true;
}

// console.log(checkPrime(3));

// 6.2 printPrimes
function printPrimes(num) {
    for (let i = 2; i <= num; i++) {
        if (checkPrime(i) === true) {
            console.log(i)
        } 
    } return ''
}

// console.log(printPrimes(97));

// 7. printLongestWord
function printLongestWord(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
            if (word.length < arr[i].length) {
                word = arr[i];
            }
        }
    return word;
    }

//console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));


// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    console.log(1);
    for (let i = 0; i <= num; i+) {
} 

console.log(eulerFibo(100));

// 9. findNeedle
let find_needle = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'randomJunk', 'needle'];

function findNeedle(arr) {
    for (let i = 0; i < arr.length; i++) {
        let hereItIs = `found the needle at position ${i}`;
        if (arr[i] === "needle") {
            return hereItIs;
        }
    }
}

// console.log(findNeedle(find_needle));

// 10. sumPositive
let arrSomeNums = [0.5, 1, -4, 7, 12, 0, 14, -53, 9, -1, -.02345, 19];

function sumPositive(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            arr.splice(i, 1);
        } let sum = 0;
        sum += arr[i];
        }
    }   

// console.log(sumPositive(arrSomeNums));

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