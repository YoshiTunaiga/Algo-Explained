# Fast And Slow Pointers

Similar to the two pointers pattern, the **fast and slow pointers** pattern uses two pointers to traverse an iterable data structure, but at different speeds, often to identify patterns, detect cycles, or find specific elements. The speeds of the two pointers can be adjusted according to the problem statement. Unlike the two pointers approach, which is concerned with data values, the fast and slow pointers approach is often used to determine specific pattern or structure in the data.

The key idea is that the pointers start at the same location and then start moving at different speeds.

## Summary of Happy Number

We maintain track of two values using a slow pointer and a fast pointer. The slow runner advances one number at each step, while the fast runner advances two numbers. We detect if there is any cycle by comparing the two values and checking if the fast runner has indeed reached the number one. We return True or False depending on if those conditions are met.

```js
function isHappyNumber(n) {
  let slowPoint = n;
  let fastPoint = sumOfSquaredDigits(n); //One step ahead

  while (fastPoint !== 1 && slowPoint !== fastPoint) {
    slowPoint = sumOfSquaredDigits(slowPoint);
    fastPoint = sumOfSquaredDigits(sumOfSquaredDigits(fastPoint)); //One step ahead
  }

  if (fastPoint === 1) {
    return true;
  }

  return false;
}
```

### Time & Space Complexity

The time complexity for this algorithm is O(logn), where 𝑛 is the input number.
The space complexity for this algorithm is O(1).

## Linked List Cycle

Check whether or not a linked list contains a cycle. If a cycle exists, return TRUE. Otherwise, return FALSE. The cycle means that at least one node can be reached again by traversing the next pointer.

```js
const detectCycle = (head) => {
  let slowPoint = head;
  let fastPoint = head;

  while (fastPoint.data && fastPoint.next) {
    slowPoint = slowPoint.next;
    fastPoint = fastPoint.next.next;

    if (slowPoint.data === fastPoint.data) return true;
  }

  return false;
};
```

### Time & Space Complexity
