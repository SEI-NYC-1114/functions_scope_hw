// 1.1. What is the difference between a parameter and an argument?
//Arguments are real values and parameter intialized to the value of the argument`

// 1.2. Within a function, what is the difference between return and console.log? console.log prints what you ask and return is used for returning values

// 1. 3. What are the implications of the ability of a function to return a value? Immediatlly terminates the value of the function


// 2. calculateCube
function calculateCube() {
    function calculateCube(n) {
        return n*n*n;
      }
    
    
    console.log(calculateCube(5));


    // YOUR CODE HERE
}

// 3. isAVowel
function isAVowel(letter) {
    let Vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < Vowels.length; i++) {
        if(letter === Vowels[i]){
            return true;

        }
        
    }
    return false;
}
    console.log(isAVowel("a"));




    // YOUR CODE HERE


// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    array = []; 
    array.push(word1.length, word2.length);
    return array
    
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
    sum = 0 
    for(let i = 0; i < arr.length; i ++){
        sum += arr[i];
    
    }
    return sum;
    // YOUR CODE HERE
}
console.log(sumArray([1, 2, 3, 4, 5, 6]))

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