# Maximum Number of Vowels in a Substring of Given Length

Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

## Samples

```
Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
```

# Solution One

```js
const maxVowels = (str, k) => {
  const vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 };
  let sum = 0;
  let maxNum = 0;
  let idx = 0;

  while (idx < k) {
    sum += vowels[str[idx]] ?? 0;
    idx++;
  }
  maxNum = sum;

  for (let leftIdx = 0; leftIdx < str.length - k; leftIdx++) {
    if (vowels[str[leftIdx]]) sum -= vowels[str[leftIdx]];
    if (vowels[str[idx]]) sum += vowels[str[idx]];
    maxNum = sum > maxNum ? sum : maxNum;
    idx++;
  }

  return maxNum;
};
```

# Solution Notes

```
var maxVowels = function(str, k) {
    /**
        Input: string and integer
        Output: integer
        Variables:
            - vowels array or memo
            - MaxNum to return
            - two Pointers if necessary
            - sum of vowels

        Approach:
        - Sliding window
        - Get the first set of k letters
            - Sum the amount of vowels
            - set the maxNum to the Sum
        - Loop through the string until the length - k
     */
    const vowels = {"a": 1, "e": 1, "i": 1, "o": 1, "u": 1};
    let sum = 0;
    let maxNum = 0;
    let idx = 0;

    while(idx < k) {
        sum += vowels[str[idx]] ?? 0;
        idx++;
    }
    maxNum = sum;

    for(let leftIdx = 0; leftIdx < str.length - k; leftIdx++) {
        if (vowels[str[leftIdx]]) sum -= vowels[str[leftIdx]];
        if (vowels[str[idx]]) sum += vowels[str[idx]];
        maxNum = sum > maxNum ? sum : maxNum;
        idx++
    }

    return maxNum;
};
```
