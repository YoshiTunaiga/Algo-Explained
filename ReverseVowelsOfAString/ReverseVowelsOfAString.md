# Reverse Vowels of a String

## Prompt

Given a string `s`, reverse only all the vowels in the string and return it.

The vowels are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`, and they can appear in both lower and upper cases, more than once.

## Sample Input:

```js
s = "hello";
```

## Sample Output:

```js
s = "holle";
```

## Wrong Approach

```js
const reverseVowels = function (string) {
  const vowels = ["a", "e", "i", "o", "u"];
  const splitString = s.split(" ");

  // Get only the vowels in reverse
  let holdingVowels = [];
  splitString.forEach((char) => {
    if (vowels[char]) {
      holdingVowels.push(char);
    }
  });
  holdingVowels.reverse();

  // replace vowels accordingly
  let result = splitString.map((char) => {
    if (vowels.includes(char)) {
      return holdingVowels.shift();
    }
    return char;
  });

  // join the updated splitString
  return result.join("");
};
```

## Solution #1

```js
const reverseVowels = function (string) {
  let result = "";
  const vowelsMemo = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true,
    U: true,
  };

  let vowelStack = [];
  for (let char in string) {
    if (vowelsMemo[string[char]]) {
      vowelStack.push(string[char]);
    }
  }

  for (let char in string) {
    if (vowelsMemo[string[char]]) {
      result += vowelStack.pop();
    } else {
      result += string[char];
    }
  }

  return result;
};
```
