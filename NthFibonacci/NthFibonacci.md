# Nth Fibonacci

The Fibonacci sequence is defined as follows:
the first number of the sequence is 0, the second number is 1, and the nth number is the sum of the (n -1)th and (n - 2)th numbers.

Write a function that takes in an integer n and returns the nth Fibonacci number.

Important note: the Fibonacci sequence is often defined with its first two numbers as F(0) = 0 and F(1) = 1. For the purpose of this question, the first Fibonacci number is F(0); therefore, getNthFib(1) is equal to F(0), getNthFib(2) is equal to F(1), etc...

## Sample Input

```javascript
n = 6;
```

## Sample Output

```javascript
5; // 0, 1, 1, 2, 3, 5
```

## Solution #1

```javascript
function getNthFib(n) {
  // If number is (1) or (0) return 0;
  if (n === 1 || n === 0) return 0;
  // If number is (2) return 1;
  else if (n === 2) return 1;
  // Else, if number is any other, get the fibonacci
  else return getNthFib(n - 1) + getNthFib(n - 2);
}


Time complexity is O(2^n) | Space Complexity is O(n)
```
