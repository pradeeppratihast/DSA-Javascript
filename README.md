# DSA-Javascript

## INSERT ELEMENT INTO AN ARRAY

- For In-built function, we use
  1. splice()
  2. toSpliced()
  - **_Note:- use toSpliced() method as a safe way to splice an array without altering the original array._**

## DELETE ELEMENT FROM AN ARRAY

- For In-built function, we use
  1. splice()
  2. slice()
  - **_Note:- use slice() method slices out a piece of an array into a new array_**

## SEARCH ELEMENT INTO AN ARRAY

- For In-built function, we use
  1. Array indexOf()
  2. Array lastIndexOf()
  3. Array includes()
  4. Array find()
  5. Array findIndex()
  6. Array findLast()
  7. Array findLastIndex()

## ASYMPTOTIC NOTATIONS

- Mathematical tools to represent time and space complexity
  1. Big-O Notation (O-naotation) - Worst case complexity
  2. Omega Notation (Ω-naotation) - Best case complexity
  3. Theta Notation (Θ-naotation) - Average case complexity

## Big-O Time Complexity

**Big-O Time Complexity** helps describe the performance of an algorithm as the input size grows. It’s a crucial concept for evaluating how scalable and efficient your code is — especially in web development and algorithmic problem solving.

### Common Time Complexities

| Complexity   | Description                               | Example                        |
| ------------ | ----------------------------------------- | ------------------------------ |
| `O(1)`       | Constant time — input size doesn't matter | Accessing an array element     |
| `O(log n)`   | Logarithmic — input shrinks each step     | Binary search                  |
| `O(n)`       | Linear — grows directly with input size   | Looping through an array       |
| `O(n log n)` | Linearithmic — efficient sorting          | Merge sort, quicksort          |
| `O(n²)`      | Quadratic — nested loops                  | Bubble sort, comparing pairs   |
| `O(2ⁿ)`      | Exponential — doubles with each input     | Recursive Fibonacci            |
| `O(n!)`      | Factorial — all permutations              | Brute-force traveling salesman |
