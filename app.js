// 1.1. What is the difference between a parameter and an argument?
// A parameter is what a function takes in as its being written,
// an argument is what a function takes in as its being invoked.

// 1.2. Within a function, what is the difference between return and console.log?
// "return" will return the value that follows it, console.log will log the value to the console.

// 1. 3. What are the implications of the ability of a function to return a value?
// The return keyword will return a value and exit the function.

// 2. calculateCube
function calculateCube(num) {
  if (num.toString().length > 1 || typeof num !== 'number') {
    return 'must enter a single number'
  }
  return Math.pow(num, 3)
}

// console.log(calculateCube(5))

// 3. isAVowel
function isAVowel(letter) {
  if (letter.length > 1 || typeof letter !== 'string') {
    return 'must enter a string with a single character'
  }
  const matchedLetter = letter.match(/[AEIOUaeiou]/g)
  return matchedLetter ? true : false
}

// console.log(isAVowel('a'))

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
  if (typeof word1 !== 'string' || typeof word2 !== 'string') {
    return 'must enter strings'
  }
  return [word1.length, word2.length]
}

// console.log(getTwoLengths('Hank', 'Hippopopalous'))

// 5. sumArray
function sumArray(arr) {
  if (!Array.isArray(arr)) {
    return 'must enter an array'
  }

  let sum = 0
  for (number of arr) {
    sum += number
  }
  return sum
}

// console.log(sumArray([1, 2, 3, 4, 5, 6]))

// 6.1 checkPrime
function checkPrime(num) {
  if (typeof num !== 'number') {
    return 'must enter a number'
  }

  const sqrt = Math.sqrt(num)
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false
  }
  return num > 1
}

// console.log(checkPrime(9))

// 6.2 printPrimes
function printPrimes(num) {
  if (typeof num !== 'number') {
    return 'must enter a number'
  }

  const primesArr = []
  for (let i = 2; i <= num; i++) {
    if (checkPrime(i)) primesArr.push(i)
  }

  primesArr.forEach(prime => console.log(prime))
}

// console.log(printPrimes(97))

// 7. printLongestWord
function printLongestWord(arr) {
  if (!Array.isArray(arr) || !(arr.every(i => typeof i === 'string'))) {
    return 'must enter an array of strings'
  }

  return arr.sort((a, b) => b.length - a.length)[0]
}

// console.log(
//   printLongestWord([
//     'BoJack',
//     'Princess',
//     'Diane',
//     'a',
//     'Max',
//     'Peanutbutter',
//     'big',
//     'blob'
//   ])
// )

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
}
