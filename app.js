// 1.1. What is the difference between a parameter and an argument?

// 1.2. Within a function, what is the difference between return and console.log?

// 1. 3. What are the implications of the ability of a function to return a value?

// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    return num * num * num
}
console.log(calculateCube(5));
// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    letter = ("a","e","i","o","u")
    return true;
}
console.log(isAVowel("a"));
// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    array = [];
    array.push(word1.length, word2.length)
return array

}
console.log(getTwoLengths("Hank", "Hippopopalous"));
// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    let total = 0
    for(let i = 0; i < arr.length; i++){
    total = total + arr[i];}
    return total

}
console.log(sumArray([1, 2, 3, 4, 5, 6]));
// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    for(let i = 2; i <= Math.sqrt(num); i++){
     if (num % i == 0) {
        return false;
     }
    }
    return true
}

//console.log(checkPrime(2))

// 6.2 printPrimes
function printPrimes(num) {
    for (let i = 2; i <= num; i++) {
      if (checkPrime(i) === true) {
        console.log(i)
      }  
    }
}

console.log(printPrimes(97));

// 7. printLongestWord
function printLongestWord(arr) {
    let word = ""
    for(let i = 0; i < arr.length; i++) {
        if (word.length <arr[i].length) {
            word = arr[i];
        }
    }
    return word;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

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