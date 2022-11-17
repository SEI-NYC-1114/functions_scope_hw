// 1.1. What is the difference between a parameter and an argument?
/*
Parameter: the argument the function takes - i.e. myFunction(name) {}
Argument: the variable passed into the function.  i.e. myFunction('Ryan');

*/
// 1.2. Within a function, what is the difference between return and console.log?
/*
console.log will return a value to the terminal.  It is helpful for reviewing and returning code.
return will produce the executed function to be used again.  I.e. sum(3,4) will produce 7 (ideally) and that 7 can be used within other formulas.
*/
// 1. 3. What are the implications of the ability of a function to return a value?
/*
When the function returns a value it can be used again.  This allows for functions to be created instead of writing the same code over and over again.  In other words, if you were going to add two numbers several times, it's better to create the function and pass the numbers through the function so you don't have to 'recreate the wheel' (bad example as this is overly simple but hopefully makes the point)
*/



// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    return num ** 3;
}

// console.log(calculateCube(5));//testing code

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    letter = letter.toLowerCase();
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        return true;
    }
    return false;
}

// console.log(isAVowel("U")); //testing code

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    return [word1.length, word2.length] 
}

// console.log(getTwoLengths("Hank", "Hippopopalous")); //testing code

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    } 
    return sum;
}

// console.log(sumArray([1, 2, 3, 4, 5, 6])); //testing code

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log(checkPrime(11)); //testing code

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
    for (let i = 0; i <= num; i++) {
        if (checkPrime(i) === true) {
            console.log(i);
        }
    }
}

// console.log(printPrimes(97)); //testing code

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
    //Assign longest word
    let longestWord = "";
    // loop through array and test the word at each index against the longestWord variable
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }
    //return the longestWord
    return longestWord;
}

// console.log(printLongestWord(["BoJack", "Princess", "Apple", "ThisATieWord", "Diane", "a", "Max", "Peanutbutter", "big", "blob"])); //test code


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