// 1.1. What is the difference between a parameter and an argument?
    //// Parameters are what the function asks for while arguments are the actual values that are taken in.
// 1.2. Within a function, what is the difference between return and console.log?
    //// return asks the function to actually return some value
    //// console.log prints directly to console

// 1. 3. What are the implications of the ability of a function to return a value?
    //// When working with a lot of data/information, it's useful to just call a function to return values than doing a bunch of hardcoding.

// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    let vol = num*num*num;
    return vol;
}
//console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    let vow = letter.toLowerCase();
    if (vow === "a" || vow === "e" || vow === "i" || vow === "o" || vow === "u"){
        return true;
    } else {
        return false;
    }
}
//console.log(isAVowel("a"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    let lenArr=[];
    let len1 = word1.length;
    lenArr.push(len1);
    let len2 = word2.length;
    lenArr.push(len2);
    
    return lenArr;
}
//console.log(getTwoLengths("Hank", "Hippopopalous")); 

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    let sum = 0;
    for (let i=0;i<arr.length;i++){
        sum = arr[i] + sum;
    }
    return sum;
}

//console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    let prime = true;
    if (num === 0 || num === 1){
        console.log(`${num} : Neither prime nor not prime`);
        return;
    } else if (num === 2){
        return true; 
    } else {
        for(let i=2; i<=(Math.sqrt(num)); i++){
            if ((num%i) === 0){
                prime = false;
                return prime;
            }
            else
                prime = true;
        }
    }
    return prime;
}

console.log(checkPrime(2017)); //true
console.log(checkPrime(97)); // true
console.log(checkPrime(20)); // false
console.log(checkPrime(105)); // false
console.log(checkPrime(89));// true
console.log(checkPrime(2));// true

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
    for (let i=2; i<=num; i++){
        if (checkPrime(i)===true){
            console.log(i);
        }
    }
}

printPrimes(97);
printPrimes(9);
printPrimes(2);



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