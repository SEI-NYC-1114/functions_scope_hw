// 1.A:Parameters are basically a empty working space of a function, that is waiting for a value to make it complete. Arguements are the actual values in your function that use the parameters as a Container.

// // 1.2. Within a function, what is the difference between return and console.log
// The difference is console.log doesnt actually invoke anything, or creates an action in your actual function/code. It is just 
// a way how we test what we actually did. Return basically ends the function exection, and returns the value to be used by the function. If return is not used we more than likely will get undefined.

// // 1. 3. What are the implications of the ability of a function to return a value?
// The implications are when something is invoked on your DOM, your return basically ends that action and returns your value to be used once more.

function calculateCube(num){
// // 2. calculateCube
return num * num * num;}
console.log(calculateCube(108))
 
// // 3. isAVowel
function isAVowel(letter) { 
    // YOUR CODE HERE
const vowels =["a", "e", "i","o","u",]

if(vowels.includes(letter)) return true
return false;}
console.log(calculateCube(108))
console.log(isAVowel('e'))
console.log(isAVowel('i'))
console.log(isAVowel('o'))
console.log(isAVowel('u'))
console.log(isAVowel('y'))
// // // 4. getTwoLengths
function getTwoLengths(word1, word2){
    return  [word1.length, word2.length];
    
   
    }
console.log(getTwoLengths("Hank", "Hippopopalous"))
// //     // YOUR CODE HERE
// // }

// // 5. sumArray
//     // YOUR CODE HERE
function sumArray(arr) {
let sum= 0;
const newNumbers= [11,26,33,48]
for (let i = 0; i < arr.length; i++) {
    sum += newNumbers[i];
    return sum[i];
  }
  
}
    console.log(sumArray[11,26,26])
// }

// // 6.1 checkPrime
function checkPrime(num) {
    if(num < 2)
    for(let i=2, j =Math.dqrt(num); i <= j; i++) {
        if(num %i === 0) return false;
    }
    return num>1;
}
    console.log(checkPrime(41));
   
    // YOUR CODE HERE
// }

// // 6.2 printPrimes
function printPrimes(num) {
//     // YOUR CODE HERE
for(let i=2; i<num; i++){
    if(checkPrime(i)){
        console.log(i)
    }
}}
// }

// // 7. printLongestWord
function printLongestWord(arr) {
//     // YOUR CODE HERE
let longest=" ";
for (let i= 0; i <arr.length ; i++){
    if(arr[i].length >longest.length) {
        longest= arr[i];

    }
}
return longest;
}
console.log(printLongestWord("he only way to make it is to study")

// }

// // BONUS!

// // 8. eulerFibo
// function eulerFibo(num) {
//     // YOUR CODE HERE
// }

// // 9. findNeedle
// function findNeedle(arr) {
//     // YOUR CODE HERE
// }

// // 10. sumPositive
// function sumPositive(arr) {
//     // YOUR CODE HERE
// }

// module.exports = {
//     calculateCube,
//     isAVowel,
//     getTwoLengths,
//     sumArray,
//     checkPrime,
//     printPrimes,
//     printLongestWord,
//     eulerFibo,
//     findNeedle,
//     sumPositive
// ;}ference between a parameter and an argument?
)
