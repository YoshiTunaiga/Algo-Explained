# Stacks

A stack is a linear data structure that organizes and manages data in a Last In, First Out (LIFO) manner. This means the last element added to the stack is the first to be removed. Think of it like a stack of plates where you can only add or remove plates from the top.

There are two fundamental operations, push and pop, to add and remove elements while maintaining the LIFO order. Let’s delve into each operation:

push: This operation involves placing an element at the top of the stack. Whenever we push a new element onto the stack it becomes the new top element and this is why the stack grows in an upward direction.

pop: This operation involves removing the top element from the stack. The removed element is usually returned by the pop operation so that we can use or process it. After a pop operation, the element just below the one removed becomes the new top element.

Examples:

- **Reverse a string using stack:** Given an input string as an array of characters, reverse all the characters in this string.
- **Evaluate postfix expression:** Given an array of tokens that represents an arithmetic expression in a postfix notation, evaluate the expression and return an integer that represents the value of the expression.

### Real-world problems

Many problems in the real world share the stack pattern. Let’s look at some examples.

- **Function call stack:** Stacks are used to manage function calls in programming languages. When a function is called, its context is pushed onto the stack, and when the function completes, it is popped off the stack.

- **Text editor undo/redo feature:** Stacks are commonly used to undo/redo the changes made while editing. Each edit operation is pushed onto the stack, allowing users to revert to the previous state of an action by popping the most recent edit.

- **Browser back and forward buttons:** The back and forward navigation in web browsers is implemented using a stack to keep track of visited pages. Clicking the back button pops the current page, while the forward button pushes pages back onto the stack.

- **Call history in smartphones:** Smartphones maintain a call history stack, allowing users to navigate through the list of recent calls in a Last In, First Out fashion.

## Summary of Basic Calculator

Given a string containing an arithmetic expression, implement a basic calculator that evaluates the expression string. The expression string can contain integer numeric values and should be able to handle the “+” and “-” operators, as well as “()” parentheses.

### MY SOLUTION

```js
export function calculator(expression) {
  let stack = [];
  let num = 0;
  let operator = 1;
  let result = 0;
  // let opening = {'(': 0};

  // iterate through the expression
  for (let idx = 0; idx < expression.length; idx++) {
    let currNum = expression[idx];

    // if(currNum === ' ' || !currNum) continue;
    if (currNum >= "0" && currNum <= "9") {
      num = num * 10 + parseInt(currNum, 10);
    } else if (currNum === "+") {
      result += operator * num;
      operator = 1;
      num = 0;
    } else if (currNum === "-") {
      result += operator * num;
      operator = -1;
      num = 0;
    } else if (currNum === "(") {
      stack.push(result);
      stack.push(operator);
      result = 0;
      operator = 1;
      // opening[currNum]++;
    } else if (currNum === ")") {
      // opening['(']--;
      // result = eval(`${result} ${operator} ${calculator(stack.join(""))}`)
      result += operator * num;
      num = 0;
      result *= stack.pop();
      result += stack.pop();
      // stack = []
    }
  }
  result += operator * num;
  return result;
}
```

### GROKKING SOLUTION

```js
function calculator(expression) {
  var i,
    number = 0,
    operations_stack = [],
    result = 0,
    signValue = 1,
    length = expression.length;

  for (i = 0; i < length; i++) {
    var c = expression[i];

    if (!isNaN(parseInt(c))) {
      number = number * 10 + parseInt(c);
    }

    if ("+-".includes(c)) {
      result += number * signValue;
      signValue = c == "-" ? -1 : 1;
      number = 0;
    } else if (c == "(") {
      operations_stack.push(result);
      operations_stack.push(signValue);

      result = 0;
      signValue = 1;
    } else if (c == ")") {
      result += signValue * number;
      var popSignValue = operations_stack.pop();
      result *= popSignValue;
      let secondValue = operations_stack.pop();
      result += secondValue;
      number = 0;
    }
  }
  return result + number * signValue;
}
```

To recap, the solution to this problem can be divided into the following four parts:

Store the consecutive digits.
On detecting “+” or “-”, evaluate the left expression and store the new sign value.
On detecting “(”, push the result calculated until now and store the sign value
On detecting “)”, convert the current number to be positive or negative if we need to perform an addition or a subtraction respectively, and add it to the previously calculated result.

## Summary of Remove All Adjacent Duplicates in String

You are given a string consisting of lowercase English letters. Repeatedly remove adjacent duplicate letters, one pair at a time. Both members of a pair of adjacent duplicate letters need to be removed.

### MY SOLUTION

```js
export function removeDuplicates(str) {
  let stack = [];

  for (let idx = 0; idx < str.length; idx++) {
    let char = str[idx];

    if (char === stack[stack.length - 1]) stack.pop();
    else {
      stack.push(char);
    }
  }

  return stack.join("");
}
```

### GROKKING SOLUTION

```js
function removeDuplicates(s) {
  let stack = [];

  for (let c of s) {
    if (stack.length > 0 && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.join("");
}
```

To recap, the solution to this problem can be divided as follows:

Create an empty stack to store characters.
Iterate over the input string and push the character onto the stack if the stack is either empty or the stack’s top element is different from the string’s character.
If they both are the same, pop an element from the stack.
After the entire string has been traversed, the remaining characters in the stack represent the input string without adjacent duplicates.

## Summary of Flatten Nested List Iterator

You’re given a nested list of integers. Each element is either an integer or a list whose elements may also be integers or other integer lists. Your task is to implement an iterator to flatten the nested list.

You will have to implement the Nested Iterator class. This class has the following functions:

Constructor: This initializes the iterator with the nested list.
Next (): This returns the next integer in the nested list.
Has Next (): This returns TRUE if there are still some integers in the nested list. Otherwise, it returns FALSE.

### MY SOLUTION

```js
export var NestedIterator = function (nestedList) {
  this.stack = [...nestedList.reverse()];
  // console.log(this.nestedList)
};

// hasNext checks if there is an element in a nested_list
NestedIterator.prototype.hasNext = function () {
  // if(this.stack.length === 0) return false;
  // if(this.stack[this.stack.length - 1].isInteger()) return true
  while (this.stack.length) {
    return true;
  }
  return false;
};

// next will return the integer from the nestedList
NestedIterator.prototype.next = function () {
  if (this.hasNext()) {
    let popped = this.stack.pop();
    return popped.getInteger();
  }
};
```

### GROKKING SOLUTION

```js
var NestedIterator = function (nestedList) {
  this.stack = [...nestedList.reverse()];
};

// hasNext() will return true if there are still some integers in the
// stack (that has nestedList elements) and, otherwise, will return false.
NestedIterator.prototype.hasNext = function () {
  while (this.stack.length > 0) {
    let top = this.stack[this.stack.length - 1];

    if (top.isInteger()) return true;

    let topList = this.stack.pop().getList();
    let i = topList.length - 1;
    while (i >= 0) {
      this.stack.push(topList[i]);
      i -= 1;
    }
  }
  return false;
};

// next will return the integer from the nestedList
NestedIterator.prototype.next = function () {
  if (this.hasNext()) return this.stack.pop().getInteger();
  return null;
};
```
