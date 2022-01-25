# Big O Notation

When talking about counting in interviews, we need to know how to formalize it. Knowing the Big O will allow us to formally talk about how the runtime of an algorithm grows as the inputs grow.

When writing a function that solves a problem, even the simplest function has different implementations. But, how do we know which is the correct or best one when it comes to time or space complexity.

As I pair program with different peers, you can clearly see that everyone has a different way to solve a problem.

Let's take a look at the example below:
Create a function that returns the odds from a list of integers.

```js
function odds(values) {
  let oddNum = [];
  for (i = 0; i < values.length; i++) {
    if (values[i] % 2 !== 0) {
      oddNum.push(values[i]);
    }
  }
  return oddNum;
}
```

## --------------------------------- Vs ----------------------------------

```js
const odds = (values) =>
  values.filter((num) => {
    return num % 2;
  });
```

Now that we notice the different ways to implement a function, isn't also better to learn how to rank them from "Ok" to "Great!" or 1-5;

- Wouldn't that help us understand the difference between time and space complexity?
- Wouldn't that teach us when to do memoization or when we don't need x amount of variables?

Another important question is:

- Doesn't only matters to make a function that works? Why does it matter having the best solution?

It's important to know the difference between just doing it to learn vs for work.
We need to learn the different algorithm implementations for code perfomance and to know when the best solutions helps for like big pieces of data vs consistency.

This is really important to know when it comes up in interviews.

## What does better mean?

## Timing my code

- Is it Faster?
- Is it less memory-intensive?
- Is it a more readable solution?

Learning how to capture how efficient is your solution:

```js
let t1 = performance.now()
function()
let t2 = performance.now()
console.log("Time Elapsed: ${(t2 - t1) / 1000 } seconds.")
```

The problem with time is that different machines will record different times or the same machine will record different times. However, for fast algorithms, speed measurements may not be precise enough?

# Counting Operations

How can we calculate the operations for a given algorithm?

```js
function countTheT() {

  let count = 0;

  for (let i = 1; i < 3; i++) { // (3) iteration times

    for(let j = 1l j < 4; j++) { // (4) iteration times

      count += i * j; // (2) operations per loop iteration (multiplication and addition)
    }
  }
  return count;
}
```

Since j-for loop is executed for every iteration for the i-for loop, then we can say we have:

```
2 * 3 * 4 = 24
```

Therefore, the algorithm is O(1) because the result is a constant.

```js
function addUpTo(n) {
  let total = 0; // (1) single assigment

  for (let i = 0; i <= n; i++) {
    // (1) single assigment, (n) iteration times, (n) additions, (n) assigments

    total += i; // "+=" (n) additions times, (n) assignments
  }
  return total;
}
```

- Depending on how we counting, the number of operations can be as low as 2n or as high as 5n + 2.
- As 'n' grows, the number of operations grows proportionally with n.

## Big O Definition

We say that an algorithm is **O(f(n))** if the number of simple operations the computer has to do is eventually less than a constant times **f(n)**, as **n** increases.

- **f(n)** could be linear **(f(n)= n)**
- **f(n)** could be quadratic **(f(n)= $n^2$)**
- **f(n)** could be linear **(f(n)= 1)**
- **f(n)** could be something entirely different!

For a function to have different not-nested for-loops, each for loop counts as O(n).

```js
function countUpAndDown(n) {
  for (let i = 0; i < n; i++) {
    // O(n)
    console.log(i);
  }

  for (let j = n - 1; j >= 0; j--) {
    // O(n)
    console.log(j);
  }
}
```

```
Making this number of operations eventually bounded by a multiple of ***n*** (say, 10n). But in this example is O(2n) => Simplify as O(n).
```

For a function with nested for loops, this is no longer O(n).

```js
function printAllPairs(n) {
  for(let i = 0; i < n; i++) {   // O(n)
    for (let j = 0; j < n>; j++) {    // O(n)
      console.log(i, j)
   }
  }
}
```

```
For This nested loop O(n) operation is inside of an O(n) operation making this O(n \* n) => O($n^2$). This means that as **_n_** grows, the run time roughly grows at the **rate of $n^2$**.
```

## Rules of Thumbs for Simplifying Big O

- Constants Don't Matter:

  - O(2n) => O(n)
  - O(500) => O(1)
  - O(13$n^2$) => O($n^2$)

- Smaller Terms Don't Matter:

  - O(n + 10) => O(n)
  - O(1000n + 50) => O(n)
  - O($n^2$ + 5n + 8) => O($n^2$)

These rules don't **ALWAYS** work, but it's a good starting point.

- Big O Shorthands:
  - Arithmetic operations are constant.
  - Variable assignment is constant.
  - Accessing elements in an array (by index) or object(by key)is constant.
  - In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of this loop.
