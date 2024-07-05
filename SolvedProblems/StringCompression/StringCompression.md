# String Compression

## Solution One

```js
const compress = (chars) => {
  if (chars.length < 2) {
    return chars.length;
  }

  let resStr = "";
  let str = "";
  let prevChar = chars[0];

  const handleString = (str) => {
    let start = str[0];

    if (str.length > 9) {
      resStr += start + str.length.toString().split("").join("");
    } else if (str.length === 1) {
      resStr += start;
    } else {
      resStr += start + str.length.toString();
    }
  };

  for (let idx = 0; idx < chars.length; idx++) {
    let char = chars[idx];

    if (prevChar === char && idx === chars.length - 1) {
      str += char;
      handleString(str);
    } else if (prevChar !== char && idx === chars.length - 1) {
      handleString(str);
      str = char;
      handleString(char);
    } else if (prevChar !== char) {
      handleString(str);
      str = char;
      prevChar = char;
    } else {
      str += char;
    }
  }

  for (let i = resStr.length - 1; i >= 0; i--) {
    chars.unshift(resStr[i]);
  }

  return resStr.length;
};
```

## Solution One Notes

```
 Input: array of single but duplicated letter strings
        Output: Array of single letter strings with their total count following next to each

Variables:
    - charMemo that holds the count of each letter
    - a returnable array;

Approach:
    - Using a memo for counting the letters (X)
    - Obtaining the memo's keys following by their value, interchangebly (x)
    - An array of counts separate from the chars array (-)
    - Count using pop and push

Edge Cases:
    - chars array length is 0
    - Consequetive count of groups
        - There could be a set of a's at the beginning and then at the end which counts as two different groups
```
