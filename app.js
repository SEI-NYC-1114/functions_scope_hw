// 1.1. What is the difference between a parameter and an argument?

//parameters are the names listed in a function while arguments are real values passed on to the function.

// 1.2. Within a function, what is the difference between return and console.log?

//console. log is the same of print in other languages. return is used for returning values from a function.

// 1. 3. What are the implications of the ability of a function to return a value?

//a return value is used where the function is an intermediate step in a calculation of some kind. You want to get to a final result, which involves some values that need to be calculated by a function.

// 2. calculateCube
function calculateCube(num) {
    return num ** 3
    // YOUR CODE HERE

}

// 3. isAVowel
function isAVowel(letter) {
    if (letter.toLowerCase() == 'a') {
        return true
    }


    // YOUR CODE HERE
}

console.log(isAVowel('a'))

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let chipotle = [];
    let word1Len = word1.length;
    let word2Len = word2.length;
    chipotle.push(word1Len);
    chipotle.push(word2Len);
    return chipotle
}
console.log(getTwoLengths("utah", "alaska"))









    // YOUR CODE HERE


// 5. sumArray
function sumArray(arr) {
    let sum = 0;
    for (i = 0; i <arr.length; i++) {
        sum = sum + arr[i]

    }
    return sum
    // YO
}
let phone = [1,2,3] 
sumArray(phone) 
console.log(sumArray(phone))
    




// 6.1 checkPrime
function checkPrime(num) {
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
     if (num % i === 0) {
   return false;
    }
} return true; 
 }
console.log(checkPrime(10));


// 6.2 printPrimes
function printPrimes(num) {
    for (let i = 2; i < num; i++) {
        if (checkPrime(i) === true) {
  console.log(i)
    }
    // YOUR CODE HERE
  } 
}
console.log(printPrimes(97));
// 7. printLongestWord
function printLongestWord(arr) {
let theLongestWord;
let lengthOftheLongestWord = 0; 
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i].length)
    if(arr[i].length > lengthOftheLongestWord) {
        theLongestWord = arr[i]
        lengthOftheLongestWord = arr[i].length
    }
}return theLongestWord
    // YOUR CODE HERE

}
console.log (printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

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