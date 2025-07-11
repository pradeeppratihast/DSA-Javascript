// FIBONACCI SEQUENCE FOR FIRST N ELEMENT
/*
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib);
}

fibonacci(2); // [0,1]
fibonacci(3); // [0,1,1]
fibonacci(7); // [0,1,1,2,3,5,8]
// Big-O = O(n)
*/

// FACTORIAL OF A NUMBER
/*
function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  console.log(fact);
}
factorial(0); // 1
factorial(1); // 1
factorial(4); // 24
factorial(5); // 120
// Big-O = O(n)
*/

// PRIME NUMBER
/* 
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log(isPrime(19)); // true
// Big-O = O(sqrt(n))
*/

// POWER OF TWO
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false
// Big-O = O(logn)

/* Optimize Solution */
function isPowerOfTwoBitwise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitwise(1)); // true
console.log(isPowerOfTwoBitwise(2)); // true
console.log(isPowerOfTwoBitwise(5)); // false
// Big-O = O(1)
