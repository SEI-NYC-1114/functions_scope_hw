/* 1.1. What is the difference between a parameter and an argument?
A parameter it's the value inside a parenthesis given to represent an argument, and an argument is the object name given to be represented in a fuction.
/. 
// 1.2. Within a function, what is the difference between return and console.log?
Return allows you to execute the code in a fuction and console.log allows you to see what the code its going to do.
// 1. 3. What are the implications of the ability of a function to return a value?
The implications of the ability of a function to return a value is to show the result calculating that function.*/


// 2. calculateCube
function calculateCube(num) {
    let cube = 0;
    return num ** 3
}
console.log(calculateCube(6))

// 3. isAVowel
function isAVowel(letter) {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        return true;
    } else {
        return false;
    }
}
console.log(isAVowel('d'))


// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // find the length //
    let length1 = word1.length;
    let length2 = word2.length;
    // display length in array 
    let arr = []
    let lengths = arr.push(length1, length2)
    // return an array
    return arr
}
console.log(getTwoLengths('remote', 'paper'))

// 5. sumArray
function sumArray(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
    sum  += arr[i]
    }
    return sum 
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime
function checkPrime(num) {
    //Only test as far and the square root of that num
    //if square root is a whole num return true 
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false
    }   
    return true
}
console.log(checkPrime(4))
console.log(checkPrime(5))
console.log(checkPrime(15))
        


// 6.2 printPrimes
function printPrimes(num) {
    for(let jimy = 2; jimy <= num; jimy++) {
        if(checkPrime(jimy)) console.log(jimy)
    }
}

printPrimes(97)

// 7. printLongestWord
function printLongestWord(arr) {
    let theLongestWord;
    let lengthOfTheLongestWord = 0;
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i].length)
        // Compare the length of the longest word to the lenght the of the longest word if its > than the
        if(arr[i].length > lengthOfTheLongestWord){
            theLongestWord = arr[i]
            lengthOfTheLongestWord = arr[i].length
        }
        // lengthOfTheLongestWord set the longest word to the current word and set the length of the longest word to 
        // the length of the current word 
        
    } return theLongestWord
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));




// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if(arr[i] === 'needle')
        return `found the needle at postition ${i}` 
    }
}
console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))


// 10. sumPositive
function sumPositive(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if(arr[i] > 0) {
            total += arr[i]
        }
    } return total;
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