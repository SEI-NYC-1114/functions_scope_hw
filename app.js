// 1.1. What is the difference between a parameter and an argument?

// 1.2. Within a function, what is the difference between return and console.log?

// 1. 3. What are the implications of the ability of a function to return a value?

// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
   return Math.pow(3);
}

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    const vowels = ('a', 'e','i','o', 'u')
    if(vowels.include())
}

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    return(word1.length, word2.length)
}

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    let counter = []
    for(let i = 0; i<arr.length; i++) {
        counter += arr[i]
    }
    return counter;
}

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    const squareroot = Math.floor(Math.sqrt(num))
    if (num === 1) {
        return `1 is not a prime or a composite.`
    } else if (num > 1) {
        {

        }
        for (let i = 2; i <= squareroot; i++) {
            if (num % i !== 0 && i === squareroot) {
                return false
            } else {
                return true;
            }
        }

    }
}


// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
    let PrimeArray = [];
    for ( let i = 2; i < num; i++){
        if ( checkPrime(i) === true) {
            PrimeArray.push(i)
        }
    }

}

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
let words = [];
let longest = words[0];
for ( let i = 1; i < words.length;) {
    longest = words[i].length
}
return words[i]
    
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
    let sum = 0;
    for ( let i = 0; i < arr.length; i++)  {
        sum += arr[i]
    }
    return sum;
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