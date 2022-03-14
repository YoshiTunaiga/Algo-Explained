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

```
function charCount(str){
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
