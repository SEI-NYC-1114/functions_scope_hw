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
// let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
// function isAVowel(letter) {
//     for (let i = 0; i <= vowels.length-1; i++) {
//         if (isAVowel = vowels[i]) return true; 
//     } return false;
// }

// console.log(isAVowel("a"));


// 4. getTwoLengths
// function getTwoLengths(word1, word2) {
//     word1 = [word1.length]; 
//     word1.push(word2.length); 
//     return word1;
// }

// console.log(getTwoLengths("Hank", "Hippopopalous"));


// 5. sumArray
// function sumArray(arr) {
//     let arrSum = 0; 
//     for (let i = 0; i < arr.length; i++) {
//         arrSum = arrSum + arr[i];
//     }
//     return arrSum; 
// }

// console.log(sumArray([1, 2, 3, 4, 5, 6]));
//=> 21

// 6.1 checkPrime
// function checkPrime(num) {
//     let squareRoot = Math.sqrt(num); 
//     for (let i = 2; i < squareRoot; i++) { 
//         if (squareRoot % i != 0) //return 'Not a prime number :('
//     } return 'ITS PRIME CHIEF';
// }

// console.log(checkPrime(4));

// 6.2 printPrimes //NOT WORKING 

function printPrimes(num) {
    // let squareRoot = 0; 
    for (let i = 1; i <= num; i++) { 
        let squareRoot = Math.sqrt(i);
        for (let j = 0; j <= Math.floor(squareRoot); j++) {
            if (squareRoot % j === 0) {
                return i;
            } 
        } 
    }
}

console.log(printPrimes(10))

// 7. printLongestWord // NOT WORKING 

// let currentLongest = []; 
// function printLongestWord(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let currentWord = arr[i]; 
//         if (currentWord.length > currentLongest.length) {
//             currentLongest = currentWord; 
//         }
//     }
//     return currentLongest;
// }

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

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
    //isAVowel,
    //getTwoLengths,
   // sumArray,
    //checkPrime,
    printPrimes,
    //printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
};