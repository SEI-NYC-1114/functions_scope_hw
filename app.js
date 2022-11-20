// 1.1. What is the difference between a parameter and an argument?
let answer_1_1 = ` 🚩 The parameters are the aliases for the values that will be passed to the function. The arguments are the actual values. `;
console.log(answer_1_1);
// 1.2. Within a function, what is the difference between return and console.log?
let answer_1_2 = ` 🚩 console.log is a function in javascript and return is a keyword. console.log is used to debug/print information to the console. Return on the other hand is a call to pass the value where the call was made console.log is not going to stop the execution while return stops the execution and return the specific value.`;
console.log(answer_1_2);
// 1. 3. What are the implications of the ability of a function to return a value?
let answer_1_3 = ` 🚩 In JavaScript, a function allows you to define a block of code, give it a name and then execute it as many times as you want. Don't Repeat Yourself ( DRY ) is a principle of software development and its main goal is to avoid code duplication.`;
console.log(answer_1_3);
// 2. calculateCube
function calculateCube(num) {
  // YOUR CODE HERE
  return num ** 3;
}
console.log(calculateCube(5));
// 3. isAVowel
function isAVowel(letter) {
  // YOUR CODE HERE
  let arr = ["a", "o", "e", "i", "u", "A", "O", "E", "I", "U"];
  for (let i = 0; i < arr.length; i++) {
    if (letter === arr[i]) {
      return true;
    }
  }
  return false;
}
console.log(isAVowel("a"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
  // YOUR CODE HERE
  let firstWord = word1.split("");
  let secondWord = word2.split("");
  return [firstWord.length, secondWord.length];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
  // YOUR CODE HERE
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));
// 6.1 checkPrime
function checkPrime(num) {
  // YOUR CODE HERE
  //   const primeNumber = num;
  //   sqRoot = Math.sqrt(num);
  //   for (let i = 2; i <= sqRoot; i++) if (num % i === 0) return false;
  //   return num > 1;
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let x = 2; x < num; x++) {
      if (num % x === 0) {
        return false;
      }
    }
    return true;
  }
}
// 6.2 printPrimes
function printPrimes(num) {
  for (let i = 2; i <= num; i++) {
    if (checkPrime(i)) {
      console.log(i);
    }
  }
}
//console.log("Answer 6.2");
console.log(printPrimes(96));
// 7. printLongestWord
console.log("Amswer 7");
function printLongestWord(arr) {
  // YOUR CODE HERE
  let longestWord = [];
  for (let i = 0; i < arr.length; i++) {
    if (longestWord.length < arr[i].length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}
console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "blob",
  ])
);
// BONUS!

// 8. eulerFibo

function eulerFibo(num) {
  // YOUR CODE HERE
  // 0 1 1 2 3 5
  console.log("-- print the Fibonacci sequence up to " + num);
  const even = [];
  let a = 0;
  let b = 1;
  let c = 1;
  sum = 0;
  //console.log(0);
  while (c < num) {
    if (c % 2 === 0) {
      even.push(c);
      sum = sum + c;
    }
    c = a + b;
    a = b;
    b = c;

    //console.log(c);
  }

  console.log(even);
  // console.log(
  //   "sum of the even numbered values that do not exceed four million"
  // );
  console.log(sum);
  return sum;
}
//console.log("print the Fibonacci sequence up to 10");
eulerFibo(10);
//console.log("print the Fibonacci sequence up to ");
eulerFibo(100);
eulerFibo(1000);
// 1 -> 0 0
// ^    ^ ^
// c    b a

// 1 -> 1 0
// ^    ^ ^
// c    b a

// 2 -> 1 1
// ^    ^ ^
// c    b a

// 3 -> 2 1
// ^    ^ ^
// c    b a

// 5 -> 3 2
// ^    ^ ^
// c    b a

// 9. findNeedle

function findNeedle(arr) {
  // YOUR CODE HERE

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "needle") {
      console.log(`found the needle at postition ${i}`);
    }
  }
}
findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]);

// 10. sumPositive
function sumPositive(arr) {
  // YOUR CODE HERE
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(sumPositive([1, -4, 7, 12]));

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
  sumPositive,
};
