// 1.1. What is the difference between a parameter and an argument?
//A parameter is the variable in a function aka x, y while arguments describe the data of the parameters. 

// 1.2. Within a function, what is the difference between return and console.log?
//Return stops the function running and produces a value/values is possible, the console.log is to physically output the results within its parameters to the console. 

// 1. 3. What are the implications of the ability of a function to return a value?
//If the function returns a value, it is successfully producing one type of result. It may also not return anything in which case, the function may not be defined enough or told to not return a value.

// 2. calculateCube
function calculateCube(num) {
    return (num**3);
}
console.log(calculateCube(5));

// 3. isAVowel

function isAVowel(letter) {
    let x= "aeiouAEIOU";
    return (x.indexOf(letter) != -1) ? true : false;
}
console.log(isAVowel("A"))
//If indexof letter exists within string x, then it should return not -1.

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let arr = [];
    for (let i=0; i<arguments.length;i++) {
        arr.push(arguments[i].length);
    //Define the array. for each i in the array, evluate length and push to it.    
    }
    return arr;
}
console.log(getTwoLengths("Hank", "Hippopopalous")); 

// 5. sumArray
function sumArray(arr) {
    let givenArray = [1,2,3,4,5,6];
    let sum = 0 ;

    for (let i=0; i<givenArray.length; i++) {
        sum += givenArray[i]
    }
    return sum;
}
console.log(sumArray([1,2,3,4,5,6]));
// 6.1 checkPrime
function checkPrime(num){
    if (num < 2) {
        console.log("Whole number greater than 1, please.")
    }
    let itsPrime=true;
    for (let i=2; i<=Math.sqrt(num); i++) {
        if (num % i == 0) {itsPrime=false}
}
return itsPrime;
//check if num is not 1. assume num is prime. test num, return num continues to be true or false. 
}
console.log(checkPrime(97));

// 6.2 printPrimes
function printPrimes(num) {
    let primeArray=[];
    for (let i=2; i<=num; i++) {
        if (checkPrime(i)===true) {
            primeArray.push(i);
        }
    }
    return primeArray
}
//Define array. For loop, numbers ranging from 2 to num, if checkPrime(num)=true, push that num to array. 
console.log(printPrimes(97));
// 7. printLongestWord
function printLongestWord() {
    let arr=["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"];

    let longestWord= 0;
    for (let i=0; i<arr.length;i++){
        if (arr[i].length > longestWord){
            longestWord=arr[i].length;
        }
    }
    return longestWord;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]))

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