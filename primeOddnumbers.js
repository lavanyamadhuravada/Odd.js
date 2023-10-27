/*
This is my implementation of the odd number of an input number
using oddNumber function. 
*/

/** Function to calculate difference between the two digits, using
 * oddNumber
 * @param {Number} inputNumber the input number to odd number of the given value
 * @returns the  value of odd number with difference 1 as 'inputNumber'
 */
function oddNumber(number) {
  const numString = number.toString();
  for (let i = 0; i < numString.length - 1; i++) {
    const digit1 = parseInt(numString[i]);
    const digit2 = parseInt(numString[i + 1]);
    if (Math.abs(digit1 - digit2) !== 1) {
      return false;
    }
  }
  return true;
}
/**  Here i implement the function to find the prime numberes for the given value using isPrime
 * as function name
*@param {Number} inputNumber the input number to  calculate prime numbers of the given value
 * @returns the  values of prime numbers
 */ 


function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }
  return true;
}

function findPrimeODDNumbers(startingNumber, lastNumber) {
  for (let i = startingNumber; i <= lastNumber; i++) {
    if (oddNumber(i) && isPrime(i)) {
      console.log(i);
    }
  }
}

const startingNumber = 1;
const lastNumber = 345456;

findPrimeODDNumbers(startingNumber, lastNumber);
