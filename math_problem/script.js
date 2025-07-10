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
*/

// FACTORIAL OF A NUMBER
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
