// // // 1.1. What is the difference between a parameter and an argument?
// // // To comment something out- command/
// A parameter is a named variable passed into a function (defining a function and acting as a placeholder- used to import arguements into functions.

// An arguement is an Array-like object accessible inside functions that contains the values of the arguements passed to that function. 

// // // 1.2. Within a function, what is the difference between return and console.log?
// Console.log is a function used to print information to the console

// Return is a call to pass some value back up to where the call was made. 
// Return can change the function, completely stops the functions execution

// 1. 3. What are the implications of the ability of a function to return a value?
// 


// 2. calculateCube
function calculateCube(num) {
   var cube = 5
   return 5*5*5;
   } 
console.log(calculateCube(5));

// Katie's example: 
// function calculateCube(num) {
    // return num ** 3;
// }


// 3. isAVowel
function isAVowel(letter) {
    let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    for (let i = 0; i < vowel.length; i++){
        if (letter != vowel[i]) {
            continue;
        }
        return true;
    }
    return false;
}


console.log(isAVowel("a"));


// Katie's example: 

// function isAVowel(letter) {
//     return "aeiou".includes(letter.toLowerCase());
// }

// console.log(isAVowel("/"))

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    return [word1.length, word2.length];
};
console.log(getTwoLengths("Aaron", "Yorks"));




// 5. sumArray
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
}
    return sum
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));


// 6.1 checkPrime

function checkPrime(num) {
for (let i=2; 1 < Math.sqrt(num); i++) {
    if (num % i === 0) {
        return false;
}
}
return true;
}

console.log(checkPrime(10))



// 6.2 printPrimes
function printPrimes(num) {
    for (let i = 2; i < num; i++) {
        if (checkPrime(i)) {
            console.log(i);
        }
    }
}
 console.log(printPrimes(97))


// 7. printLongestWord
function printLongestWord(arr) {
   let longestWord = "";
   for (let i = 0; i <arr.length; i++) {
    if (arr[i].length > longestWord.length) {
        longestWord = arr[i]
    }
   }
   return longestWord;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));


// The last few I followed Katie when she was explaining the deliverable. These came very hard to menubar, but I will practice them! I am writng notes as to WHY she wrote the code this WebAssembly. Please let me know if this is submittable.



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