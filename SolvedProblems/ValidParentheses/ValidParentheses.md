# Valid Parentheses

## Solution 1

```js
const isValid = function (str) {
  let stringMemo = { "(": ")", "[": "]", "{": "}" };
  let stack = [];

  for (let idx = 0; idx < str.length; idx++) {
    let currChar = str[idx];

    // if the char is reachable, it means that this is an open bracket
    if (stringMemo[currChar]) {
      stack.push(currChar);

      // Else, if the stack is empty or the next popped bracket does not close with the currChar
    } else if (stack.length === 0 || stringMemo[stack.pop()] !== currChar) {
      return false;
    }
  }

  // true if the stack does not contain leftovers
  return stack.length === 0;
};
```

### Solution Notes:

```js
const isValid = function (str) {
  /**
        Input: string
            {}, ({}), ([]), {}[]
        Output: boolean
        Variables: 
            1. return boolean -> isStringValid
            2. 
        Edge case: [(])

        Approach 1: 
         1. Memo {"(": ")", "[": "]"}
         2. For each char, check if the next value is the opposite

        Approach 2:
         1. Create a queue
         2. check for pairs 
        
        Questions:
        - Should I split the string?
        - 

     */
  // let isStringValid = true;

  let stringMemo = { "(": ")", "[": "]", "{": "}" };
  let stack = [];

  for (let idx = 0; idx < str.length; idx++) {
    let currChar = str[idx];

    if (stringMemo[currChar]) {
      stack.push(currChar);
    } else if (stack.length === 0 || stringMemo[stack.pop()] !== currChar) {
      return false;
    }
  }

  return stack.length === 0;
};
```
