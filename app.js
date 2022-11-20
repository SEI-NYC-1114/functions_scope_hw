// 1.1. What is the difference between a parameter and an argument?
// parameters are variables that a function can take and arguments are the values
// you are passing into the function.

// 1.2. Within a function, what is the difference between return and console.log?
// return outputs a data in string, number, or bool that can be used. console.log 
// outputs values into the console and thats it.

// 1. 3. What are the implications of the ability of a function to return a value?
// you can put function inside of functions as an argument. you can put functions 
// in anything that has an parameter as an argument which makes return a very powerful
// feature.

// 2. calculateCube
function calculateCube(num) {
   return num ** 3 
}

// 3. isAVowel
function isAVowel(letter) { 
    // YOUR CODE HERE
    if (letter.toLowerCase() == 'a') return true
    else if (letter.toLowerCase() == 'e') return true
    else if (letter.toLowerCase() == 'i') return true
    else if (letter.toLowerCase() == 'o') return true
    else if (letter.toLowerCase() == 'u') return true
  
  };
  

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    array = [];
    array.push(word1.length, word2.length);
    return array
  }

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
};


// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    numSqr = num**0.5;
    console.log(`square root of ${num} is ${numSqr}`);
    let isPrime = true
  
    if ((numSqr) % 1 == 0 ) isPrime = false;
  
    for (i = 2; i <= Math.floor(numSqr); i ++) {
        if ((num / i) % 1 == 0) {
            isPrime = false
        }
    return isPrime
    }
  };

// 6.2 printPrimes
function printPrimes(num) {
    primeList = []
    for (j = 2; j <= num; j++) {
        if (checkPrime(j)) {
            primeList.push(j);
            console.log(primeList)
        }
    };
    return primeList
  };
// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
    let longestWord = '';
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longestWord.length) {
        longestWord = arr[i]
      }
    }
    return longestWord
  };

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
  let fsList = [1];
  let newFsNum;
  let fsLastIndex = 0;

  loop1:while (fsList[fsLastIndex] <= num) {
    fsLastIndex = fsList.length - 1;
    fsLastNum = fsList[fsLastIndex];
    let fsSecToLastNum = fsList[fsLastIndex - 1];
    if (fsSecToLastNum === undefined) fsSecToLastNum = 0;
    newFsNum = fsLastNum + fsSecToLastNum;
    if (newFsNum > num) break loop1
      else fsList.push(newFsNum)
  };
  let evenFsList = [];
  let sumOfEvenFsList = 0
  for (let i = 0; i < fsList.length; i++) {
    if (fsList[i] % 2 === 0) {
      evenFsList.push(fsList[i]);
    }
  };
  for (let i = 0; i < evenFsList.length; i++) sumOfEvenFsList += evenFsList[i];
  return [fsList, evenFsList, sumOfEvenFsList]
};

console.log(eulerFibo(4000000))

// 9. findNeedle
function findNeedle(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "needle") return `found the needle at position ${i}`
  }
};

// 10. sumPositive
function sumPositive(arr) {
  let arrSum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) arrSum += arr[i]
  };
  return arrSum
};

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