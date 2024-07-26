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
