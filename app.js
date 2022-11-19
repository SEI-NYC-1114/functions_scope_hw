// // 1.1. What is the difference between a parameter and an argument? a argument is a value that is declared in the function and a parameter is the variables that are defined when the function is declared

// // 1.2. Within a function, what is the difference between return and console.log?
// //console.log is used to print information to the console and return sends a value to where the call was made
// // 1. 3. What are the implications of the ability of a function to return a value? return ends the function and returns it

// // 2. calculateCube
// function calculateCube(num) {
// //     // YOUR CODE HERE
//     return Math.pow(num, 3); 
    
    
// }
// console.log(calculateCube(5));
// // // 3. isAVowel
// function isAVowel(letter) {
//     // YOUR CODE HERE
//     if(letter.toLowerCase()=== "a" || letter.toLowerCase()==="e"){
//         return true; 
//     }else if(letter.toLowerCase()==="i"|| letter.toLowerCase()==="o"){ return true;
//     }else if(letter.toLowerCase()==="u"){ return true;
// }else {return false}
// }
// console.log(isAVowel("a"))

// // 4. getTwoLengths
// function getTwoLengths(word1, word2) {
//     // YOUR CODE HERE
//     let arr = [];
//     arr.push(word1.length);
//     arr.push(word2.length);
//     return arr;
// }
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// // 5. sumArray
// function sumArray(arr) {
     // YOUR CODE HERE
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5, 6]));

// // 6.1 checkPrime
function checkPrime(num) {
//     // YOUR CODE HERE
for (let i = 2; i<= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
        return false;
    }
}
 return true;
}
console.log(checkPrime(10));
// // // 6.2 printPrimes
 function printPrimes(num) {
 for(let i = 2; i <= num; i++) {
if (checkPrime(i)=== true){
    console.log(i);
}
 }

// YOUR CODE HERE
 }
printPrimes(97)
// // 7. printLongestWord
// function printLongestWord(arr) {
//     // YOUR CODE HERE
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
// };