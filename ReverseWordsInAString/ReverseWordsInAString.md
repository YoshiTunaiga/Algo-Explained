## Reverse Words in a String

Given an input string `s`, reverse the order of the **words**.

A **word** is defined as a sequence of non-space characters. The **words** in `s` will be separated by at least one space.

Return _a string of the words in reverse order concatenated by a single space._

**Note** that `s` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

## Sample Input:

```js
s = "the sky is blue";
```

## Sample Output:

```js
"blue is sky the";
```

## Solution #1

```js
const reverseWords = (string) => {
  // Check for single word strings
  if (string.split(" ").length === 1) {
    return string.trim();
  }

  let splittedString = string.trim().split(" ");
  splittedString = splittedString.reverse().filter((char) => char.length);

  return splittedString.join(" ");
};

// Runtime 52ms
```
