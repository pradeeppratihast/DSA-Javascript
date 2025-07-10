// FIBONACCI SEQUENCE FOR FIRST N ELEMENT
function fibnocci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib);
}

fibnocci(2); // [0,1]
fibnocci(3); // [0,1,1]
fibnocci(7); // [0,1,1,2,3,5,8]
