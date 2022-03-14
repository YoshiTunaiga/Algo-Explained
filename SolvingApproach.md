# Algorithms and Problem Solving Patterns

## **WHAT IS AN ALGORITHM?**

A process or set of steps to accomplish a certain task.

It's the foundation for being a successful problem solving and developer.

## **HOW TO IMPROVE?**

**1. DEVISE A PLAN FOR SOLVING PROBLEMS.**

- Understand the Problem
- Explore Concrete Examples
- Break It Down
- Solve/ Simplify
- Look Back and Refactor

**2. MASTER COMMOM PROBLEMS SOLVING PATTERNS.**

# Problem Solving

## **Understand the Problem**

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
5. How should I lable the important pieces of data that are a part of the problem?

`Ex. Write a function which takes two numbers and returns their sum.`

```
1. Can I restate the problem in my own words?
"Implement addition"

2. What are the inputs that go into the problem?
- "Is it two integers, decimals or float. Is it"
- "Is it two, or three or four inputs"

3. What are the outputs that should come from the solution to the problem?
- "Do we want to return an integer"
- "If is a float, do we want to return a float back"

4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
- "Most cases is Yes"
- "what if is only one number passed to the function?"

5. How should I lable the important pieces of data that are a part of the problem?
- "Name our function ADD and result to be SUM"

```

## **Concrete Examples**

Like User Stories!

1. Start with Simple Examples
2. Progress to More Complex Examples
3. Explore Examples with Empty Inputs
4. Explore Examples with Invalid Inputs

`Ex. Write a function which takes in a string and returns counts of each character in the string`

```
charCount("aaa"); // { a: 4 }
charCount("hello"); // { h: 1, e: 1, l: 2, o: 1 }

"Do We need to account for the other letters that aren't there"
{ a: 4, b: 0, c: 0, ....}

charCount("My phone number is 182763")
"Do we need to count whitespaces or other characther like numbers, symbols, lower or upper cases"

"What should be return if an empty string is passed?"

"What if objects, numbers or others that aren't a string is passed?"
```

## **Break It Down**

Take the actual steps of the problem and write them down.
Like comments, pseudocoding, etc...
This forces you to think about the code you'll write before you write it.
It helps to highlight the problems ahead of time.

`Ex. Write a function which takes in a string and returns counts of each character in the string`

```js
function charCount(str) {
  // do something
  // return an object with keys that are lowercase alphnumeric characters in the string;
  // make object to return at end
  // loop over string, for each character...
  // if the char is a number/letter AND is a key in object, add one to count
  // if the char is a number/letter AND not in object, add char to object and set value to 1.
  // if char is something else (space, period, etc..), don't do anything
  // return object
}
```

## **Solve or Simplify**

Solve the problem if you can, if not, solve a simpler problem.

1. Find the core difficulty in what you're trying to do.
2. Temporarily ignore that difficulty.
3. Write a simplified solution.
4. Then incorporate that difficulty back in.

`Ex. Write a function which takes in a string and returns counts of each character in the string`

```
- Solve for at least first character if possible
- Take one step at a time: create an object.
- Ignore the unknown. If at the moment, is not sure how to check for non alphnumerics, add all to object.
```

## **Look Back & Refactor**

Take a moment and ask yourself some questions. Mention that maybe this is not ideal, there might be a better solution but you might not feel confident

```
- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?
```

```js
function charCount(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}
```

**How to Improve the previous solution?**

```
For simplification, instead of a For Loop, a For Of its better.
The performance for checking non-alphanumberics might not be as efficient as it looks, even when using a regular expression.
By using a non regular expression can probably be the fastest in performance:

```

```js
if (
  !(code > 47 && code < 58) && // numeric (0-9)
  !(code > 64 && code < 91) && // upper alpha (A-Z)
  !(code > 96 && code < 123) // lower alpha (a-z)
) {
}
```

```js
function charCount(str) {
  let obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      // if/ else statement for shorthand syntax
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

const isAlphaNumeric = (char) => {
  let code = char.charCodeAt(0);
  return !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
    ? false
    : true;
};
```
