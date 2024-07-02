# Two Pointers

## Summary for Valid Palindrome

- Initialize two pointers and move them from opposite ends.
- The first pointer starts at the beginning of the string and moves toward the middle, while the second pointer starts at the end and moves toward the middle.
- Compare the elements at each position to detect a nonmatching pair.
- If both pointers reach the middle of the string without encountering a nonmatching pair, the string is a palindrome.

```js
function isPalindrome(s) {
  let paliString = s.toLowerCase();
  let start = 0;
  let end = s.length - 1;

  while (start <= end) {
    if (paliString[start] !== paliString[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
```

### Valid Palindrome II - Check if it could be a palindrome

```js
function isTruePalindrome(word, p1, p2) {
  while (p1 < p2) {
    if (word[p1] !== word[p2]) return false;
    p1++;
    p2--;
  }

  return true;
}

function validPalindrome(string) {
  /**
        Input: string
        Output: boolean
        Variables: two pointers (start, end)
        Approach: 
            1. Two Pointers pattern using Recursion with a helper function.
     */
  let start = 0,
    end = string.length - 1;

  while (start <= end) {
    if (string[start] !== string[end]) {
      return (
        isTruePalindrome(string, start + 1, end) ||
        isTruePalindrome(string, start, end - 1)
      );
    }
    start++;
    end--;
  }
  return true;
}
```

## Time Complexity

The time complexity is `O(n)`, where `𝑛` n is the number of characters in the string.
However, our algorithm will only run `(n/2)` times, since two pointers are traversing toward each other.

## Space Complexity

The space complexity is `𝑂(1)`, since we use constant space to store two indexes.

---

## Summary for Remove nth Node from End of List

1. Two pointers, `right` and `left`, are set at the head node.
2. Move the `right` pointer n steps forward.
3. If `right` reaches NULL, return head's next node.
4. Move both `right` and `left` pointers forward till `right` reaches the last node.
5. Relink the `left` node to the node at `left`'s next to the next node.
6. Return head.

```js
function removeNthLastNode(head, n) {
  let right = head,
    left = head;

  for (let p1 = 0; p1 < n; p1++) {
    right = right.next;
  }

  if (!right) {
    return head.next;
  }

  while (right.next !== null) {
    right = right.next;
    left = left.next;
  }

  left.next = left.next.next;

  return head;
}
```

### Time complexity

The time complexity is `O(n)`, where `𝑛` is the number of nodes in the linked list.

### Space complexity

The space complexity is `O(1)` because we use constant space to store two pointers.

## Summary of Sort Colors

To summarize, solving this problem involves the following steps:

Traverse the array and swap elements, as required, to organize them correctly.

If the encountered color is red, swap its value with that of the `start` pointer. If the color is blue, swap its value with that of the `end` pointer.

White elements are skipped, and pointers are adjusted accordingly.

The array is sorted when the `end` pointer moves to the left of the `current` pointer.

```js
function sortColors(colors) {
  let start = 0,
    current = 0,
    end = colors.length - 1;

  while (current <= end) {
    if (colors[current] === 0) {
      let temp = colors[current];
      colors[current] = colors[start];
      colors[start] = temp;
      current++;
      start++;
    } else if (colors[current] === 1) {
      current++;
    } else if (colors[current] === 2) {
      let temp = colors[current];
      colors[current] = colors[end];
      colors[end] = temp;
      end--;
    }
  }

  return colors;
}
```

### Time complexity

The time complexity of this solution is `O(n)` since we’re only traversing the array once.

### Space complexity

The space complexity of this solution is `O(1)` since no extra space is used.

## Summary for Reverse Words in a String

1. Reversing the entire sentence:
   I. We first reverse the complete string. This step places the words in their correct positions relative to each other, although each word is backward.

2. Reversing each word:
   I.Iterate through the reversed sentence:
   a. Use two pointers, start and end, both initially set to 0. The first pointer, start, marks the beginning of a word, and the second pointer, end, finds the end of a word.
   b. When the end of a word is found (either a space or the end of the string), we reverse the characters in that word in place.
   c. After reversing, we update start to point to the beginning of the next word.
   d. Now, we'll repeat this process for the next word. At the end of all iterations, we get the reversed words in the string.
   e. We repeat this process for all words in the string.

```js
function reverseString(string, start, end) {
  let tempString = string.split("");
  while (start < end) {
    let temp = tempString[start];
    tempString[start] = tempString[end];
    tempString[end] = temp;
    start++;
    end--;
  }
  return tempString.join("");
}

function reverseWords(sentence) {
  let tempString = sentence.trim();
  let strLength = tempString.length - 1;
  tempString = reverseString(tempString, 0, strLength);

  for (let start = 0, end = 0; end <= strLength; end++) {
    if (end === strLength || tempString[end] === " ") {
      let endIdx = end === strLength ? end : end - 1;
      tempString = reverseString(tempString, start, endIdx);
      start = end + 1;
    }
  }

  return tempString
    .split(" ")
    .filter((word) => word !== "")
    .join(" ");
}
```

### Time complexity

It takes `O(n)` time to remove the leading and trailing whitespace and replace multiple spaces with a single space in the sentence, where 𝑛 is the length of the sentence. Additionally, the array is traversed twice in `O(n+n)=O(n)` time. Therefore, the overall time complexity of this solution is `O(n)`.

### Space complexity

The space complexity of this solution is `O(n)`, since, at the start of the algorithm, we copy it into a list of characters to overcome the issue of strings being immutable in JavaScript.

# Three Pointers

## Summary for Sum of Three Values

First, sort the array in ascending order. To find a triplet whose sum is equal to the target value, loop through the entire array. In each iteration:

1. Store the current array element and set up two pointers (`low` and `high`) to find the other two elements that complete the required triplet.

- The `low` pointer is set to the current loop’s index + 1.
- The `high` is set to the last index of the array.

2. Calculate the sum of array elements pointed to by the current loop’s index and the `low` and `high` pointers.

3. If the sum is equal to `target`, return TRUE.

4. If the sum is less than `target`, move the `low` pointer forward.

5. If the sum is greater than `target`, move the `high` pointer backward.

Repeat until the loop has processed the entire array. If, after processing the entire array, we don’t find any triplet that matches our requirement, we return FALSE.

```js
export function findSumOfThree(sortedNum, target) {
  sortedNum.sort((a, b) => {
    return a - b;
  });

  for (let start = 0; start < sortedNum.length - 2; start++) {
    let low = start + 1;
    let high = sortedNum.length - 1;

    while (low < high) {
      let sum = sortedNum[start] + sortedNum[low] + sortedNum[high];

      if (sum === target) {
        return true;
      } else if (sum < target) {
        low++;
      } else {
        high--;
      }
    }
  }

  return false;
}
```

### Time Complexity

In the solution above, sorting the array takes `O(nlog(n))` and the nested loop takes
`O(n2)` to find the triplet. Here, `𝑛` is the number of elements in the input array Therefore, the total time complexity of this solution is `O(nlog(n)+n2)`, which simplifies to `O(n2)`.

### Space Complexity

Because we use the built-in JavaScript function, **sort()**, which does the in-place sorting. Therefore, the space complexity of the provided solution is `O(1)`.
