// 1.1. What is the difference between a parameter and an argument?

// ANSWER: A parameter is is what is inside of the () following a fuction. They do not hold a real value but indicate where that real value will be placed. Arugments are the real value that will be insterted into the parameter in a function.

// 1.2. Within a function, what is the difference between return and console.log?

//ANSWER: retrun statemets stop the execution of a function as well as defines a value to be to test agaist the function. Console.log, communicates what is happening in the code and deos not stop the execution. It is best practice to have many console.log statements.



// 1. 3. What are the implications of the ability of a function to return a value?

//ANSWER: functions allow developers to practice DRY code and also makes code more compact and neat. Using functions means we dont ave to write new lines of code everytime we want to complete a common task. 



// 2. calculateCube
function calculateCube(num) {
    num = num*num*num
    return num;
}
console.log(calculateCube(500));



function isAVowel(letter) {
    if(letter === "A")
    return true;
    if(letter === "E")
    return true;
    if(letter === "I")
    return true;
    if(letter === "O")
    return true;
    if(letter === "U")
    return true;
    else return false;
}
    isAVowel();
    console.log(isAVowel("B"));
    console.log(isAVowel("A"));
    console.log(isAVowel("E"));
    console.log(isAVowel("I"));
    console.log(isAVowel("O"));
    console.log(isAVowel("U"));
    console.log(isAVowel("S"));

    

    //4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    array = [];
    array.push(word1.length, word2.length);
    return array
  }
  console.log(getTwoLengths("Hello", "Goodbye"));

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
}

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
};
    findNeedle,
    sumPositive