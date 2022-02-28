# Analyzing Performance of Arrays and Objects

## Objectives

- Understand how objects and arrays work, through the lens of Big O.
- Explain why adding elements to the beginning of an array is costly.
- Compare and contrast the runtime for arrays and objects, as well as built-in methods.

# The Big O of Objects

**Objects** => Unordered, key value pairs.
When we don't need any ordering, objects are an excellent choice.
We can Insert, Remove and Access keys in constant time but when Searching for a value, it's O(N) linear time.

## Big O of Object Methods

- **Object.keys** is Linear Time O(N).
- **Object.values** is Linear Time O(N).
- **Object.entries** is Linear Time O(N).
- **hasOwnProperty** is Constant Time O(1) due to being a boolean;

# The Big O of Arrays

**Arrays** => Ordered Lists.
When you need order or when you need fast access/ insertion and removal (sort of...), use an Array.
When Inserting and Removing elements, time complexity depends. For Searching an element, time complexity will be O(N) and for Access: O(1).

- **Array.push** is Constant Time O(1).
- **Array.pop** is Constant Time O(1).
- **Array.unshift** due to having to re-index each element in the array, time complexity is linear O(N) as it grows depending on the size/length of this particular array.
- **Array.shift** same as unshift, linear time O(N) becomes difficult and best to avoid if possible.

## Other Big O of Array Methods

- **Array.concat** is Linear Time O(N).
- **Array.slice** is Linear Time O(N).
- **Array.splice** is Linear Time O(N).
- **Array.sort** is O(N \* log N).
- **forEach / map/ filter/ reduce/ etc.** is Linear Time O(N).

# NOTES

- Objects are faster even if they unordered;
- Arrays are great when you need an order, just be mindful when adding to the beginning or middle of the array, and others.
