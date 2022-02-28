# Analyzing Performance of Arrays and Objects

## Objectives

- Understand how objects and arrays work, through the lens of Big O.
- Explain why adding elements to the beginning of an array is costly.
- Compare and contrast the runtime for arrays and objects, as well as built-in methods.

# The Big O of Objects

**Objects** => Unordered, key value pairs.
When we don't need any ordering, objects are an excellent choice.
We can Insert, Remove and Access keys in constant time but when Searching for a value, it's O(n) linear time.

## Big O of Object Methods

- **Object.keys** is Linear Time O(n).
- **Object.values** is Linear Time O(n).
- **Object.entries** is Linear Time O(n).
- **hasOwnProperty** is Constant Time O(1) due to being a boolean;

# The Big O of Arrays

**Arrays** => Ordered Lists.
When you need order, use an Array.
