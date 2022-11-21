// 1.1. What is the difference between a parameter and an argument?
//the parameter holds the argument and the function has the parameter (the parameter is whats given by the writer). the argument is a value passed to the function that we give to it.

// 1.2. Within a function, what is the difference between return and console.log?
//console.log is written to check and make sure the argument work
//console. log is the equivalent of print in other languages. return is used for returning values from a function.

// 1. 3. What are the implications of the ability of a function to return a value?
//the values that a function returns when it completes. the argument allows the return value to pop up


// 2. calculateCube
function calculateCube(num) {
    return num * num * num;
    
}
console.log(calculateCube(5))


// 3. isAVowel

function isAVowel(letter) {
  if (letter.toUpperCase()=== 'A' || letter.toUpperCase()=== 'E' || letter.toUpperCase()=== 'I' || letter.toUpperCase()=== 'O' || letter.toUpperCase()=== 'U') {
    return true;
  } else {
    return false;
  }
}
console.log(isAVowel("A")); 


// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let getTwoLengths= ["Hank", "whacko"]
    return [word1.length, word2.length]
}
console.log(getTwoLengths("Hank", "whacko"));


// 5. sumArray
function sumArray(arr){
    let sumArray = 0;
        for (let i = 0; i < arr.length; ++i) {
            sumArray += arr [i];
        }
        return sumArray;
    }
console.log(sumArray([1, 2, 3, 4, 5, 6]));


// 6.1 checkPrime
function checkPrime(num) {
    for(let i =2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false
    }
    return true
    }

console.log(checkPrime(45))

return element > 1;
console.log
// 6.2 printPrimes
function printPrimes(num) {
    for(let i=2; i<= num; i++){
        if(checkPrime(i)) console.log(i)
    }
}
printPrimes(97)

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