# Same Frequency

## Prompt

Write a function called **sameFrequency**. Given two positive integers, find out if the two numbers have the same frequency of digits.

## Sample Input

```js
(num1 = 182), (num2 = 281);

(num1 = 34), (num2 = 14);
```

## Sample Output

```js
// true

// false
```

## Solution #1

MasterClass - udemy

```js
function sameFrequency(num1, num2) {
  let first = "" + num1;
  let second = "" + num2;
  let count = {};
  if (first.length !== second.length) return false;

  for (let idx = 0; idx <= first.length - 1; idx++) {
    let num = first[idx];
    count[num] = (count[num] || 0) + 1;
  }

  for (let idx = 0; idx <= second.length - 1; idx++) {
    let num = second[idx];

    if (!(num in count)) return false;
    else if (!count[num]) return false;
    else count[num]--;
  }
  return true;
}

Time: O(N);
```
