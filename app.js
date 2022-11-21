// 1.1. What is the difference between a parameter and an argument?
//  parameters are the names given by the creator  in the functions definition, arguments are the values that get passed to the function.
// 1.2. Within a function, what is the difference between return and console.log?
// console.log is used to test a function while return is used to return the values from a function
// 1. 3. What are the implications of the ability of a function to return a value?
// the argument inside of the function gives it the ability to return a value.
// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    return num * num * num; 
}
   
console.log(calculateCube(5))

// 3. isAVowel

    // YOUR CODE HERE
    function isAVowel(character) {
        const vowels = "aeiou";

        return vowels.includes(character.toLowerCase());
    }
    console.log(isAVowel("b"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let getTwoLengths = ["Hank", "Hippopopalous"]
    return [word1.length, word2.length]
    
}

console.log(getTwoLengths("Hank", "Hippopopalous"));
    
//5. 5. Sum Array
function sumArray(arr){
    let sumArray = 0;
    for ( i= 0; i < arr.length; ++i){
        sumArray += arr[i];
        
    }
    return sumArray;
    }
console.log(sumArray([1, 2, 3, 4, 5, 6]));

//6.1 checkPrime

function checkPrime(num){ 
for ( let i = 2; i <= Math.sqrt (num); i++) {
    if (num % i === 0) return false
    
}
return true 

}
console.log(checkPrime(4))
console.log(checkPrime(5))
console.log(checkPrime(20))
//## 6.2 Prime Numbers

function printPrime(num) {
    for (let i = 2; i <= num; i++) {
if (checkPrime(i))  console.log(i)
    }
}
printPrime(97)

// 7. printLongestWord

const words = ["Hi", "Farewell", "Bye", "word"];

function longestWord(wordsArray){
    let maxWord ="";
    let maxNum = null;

    for(let i = 0; i < wordsArray.length; i += 1) {
        if (maxNum === null || wordsArray[i].length > maxNum) {
            maxNum = wordsArray[i].length;
            maxWord = wordsArray[i];
        }
    }
    console.log(maxWord);
}
longestWord(words);













  






