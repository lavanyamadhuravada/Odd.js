function isOneDigitDifference(number) {
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

function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }
  return true;
}

function findAndPrintPrimeODDNumbersInRange(startingNumber, lastNumber) {
  for (let i = startingNumber; i <= lastNumber; i++) {
    if (isOneDigitDifference(i) && isPrime(i)) {
      console.log(i);
    }
  }
}

const startingNumber = 12;
const lastNumber = 345456;

findAndPrintPrimeODDNumbersInRange(startingNumber, lastNumber);
