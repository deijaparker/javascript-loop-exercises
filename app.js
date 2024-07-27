// Countdown from a given number to 0
let number = 10;  // Replace this with any starting number
while (number >= 0) {
  console.log(number);
  number--;
}
// Log multiples of 3 less than 35
let number = 0;
while (number < 35) {
  if (number % 3 === 0) {
    console.log(number);
  }
  number++;
}
// Print multiples of 5 less than 100
let number = 0;
while (number < 100) {
  if (number % 5 === 0) {
    console.log(number);
  }
  number++;
}
// Print integers between 0 and 20 with specific conditions
let number = 0;
while (number <= 20) {
  if (number % 2 === 0) {
    console.log(number * 3);
  }
  number++;
}
// Print all prime numbers between 0 and 20
let number = 2;
while (number <= 20) {
  let isPrime = true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(number);
  }
  number++;
}
// Calculate the number of quarters Romeo received as change
let change = 10 - 4;  // Romeo paid $4 and used a $10 bill
let quarters = 0;
while (change >= 0.25) {
  change -= 0.25;
  quarters++;
}
console.log(quarters);