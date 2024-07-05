## Merge Intervals

Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return _an array of the non-overlapping intervals that cover all the intervals in the input_.

## Sample Input

```js
intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
```

## Sample Output

Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

```js
Output: [
  [1, 6],
  [8, 10],
  [15, 18],
];
```

## Brainstorming Notes

        input = array
        output = array
        variable = start, end, currentInt, nextInt, new Array
        approach =
            1. Loop thru each interval
            2. Access the currentInt one by one
            3. Check each number against the right/next interval

            Variables:
            start = 0
            end = 1
            tempInt = []
            currentInt = [1,3]
            nextInt = [2,6]

            Conditions:
            newArray[newArray.length -1][0] === currentInt[start] {
                continue;
            }
            currentInt[start] < nextInt[start] => {
                push the lowest num to the tempInt
            }
            currentInt[end] < nextInt[end] => {
                push the greater nym to the tempInt
            }

            push the tempInt to the newArray

            return newArray

## Solution #1

```js
const merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const newArray = [];
  for (let i = 0; i < intervals.length; i++) {
    const start = 0;
    const end = 1;
    const currentInt = intervals[i];
    const lastVisitedInt = newArray[newArray.length - 1];

    if (newArray.length === 0 || lastVisitedInt[end] < currentInt[start]) {
      newArray.push(currentInt);
    } else if (currentInt[end] > lastVisitedInt[end]) {
      lastVisitedInt[end] = currentInt[end];
    }
  }

  return newArray;
};
```

## Solution #2

```js
const merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const newArray = [];
  for (let currentInt of intervals) {
    if (
      newArray.length === 0 ||
      newArray[newArray.length - 1][1] < currentInt[0]
    ) {
      newArray.push(currentInt);
    } else {
      newArray[newArray.length - 1][1] = Math.max(
        newArray[newArray.length - 1][1],
        currentInt[1]
      );
    }
  }

  return newArray;
};
```
