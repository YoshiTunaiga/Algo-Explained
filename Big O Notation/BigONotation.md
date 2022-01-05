# Big O Notation

When writing a function that solves a problem, even the simplest function has different implementations. But, how do we know which on is the correct or best one when it comes to time or space complexity.

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
console.log("Time Elapsed: ${(t2 - t1) / 1000 } seconds.)
```

The problem with time is that different machines will record different times or the same machine will record different times. However, for fast algorithms, speed measurements may not be precise enough?
