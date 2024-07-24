# Equal Row and Column Pairs

Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

## Sample Output

```
Example 1:
Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]

Example 2:

Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]
```

## Solution #1

```js
const equalPairs = (grid) => {
  let pairCounter = 0;
  let columnGrid = [];
  let idx = 0;

  while (idx < grid[0].length) {
    let columnArr = [];

    grid.forEach((row) => columnArr.push(row[idx]));

    columnGrid.push(columnArr.join("_"));

    idx++;
  }

  for (let idx = 0; idx < columnGrid.length; idx++) {
    for (let jdx = 0; jdx < grid.length; jdx++) {
      let rowStr = grid[jdx].join("_");

      if (columnGrid[idx] === rowStr) pairCounter++;
    }
  }

  return pairCounter;
};
```

### Solution Notes:

```js
const equalPairs = (grid) => {
  /**
    EqualRowAndColumnPairs
    Input: an array of int arrays
           grid of rows and columns 
    Output:
            number of pairs
    Variables:
            - pairCounter
    Approach:
            - dictionary
            - HashMap
            - Set: 
                new set for rows
                new set for columns

            rows: [[3,2,1],[1,7,6],[2,7,7]]
            columns: [[3,2,1],[2,7,7],[1,6,7]]

            [[13,13]
             [13,13]]

             [[3,1,2,2],
              [1,4,4,4],
              [2,4,2,2],
              [2,5,2,2]]
     */

  let pairCounter = 0;
  let columnGrid = [];
  let idx = 0;

  /** use the L-48 to get each column per index */
  while (idx < grid[0].length) {
    let columnArr = [];

    grid.forEach((row) => columnArr.push(row[idx]));

    columnGrid.push(columnArr.join("_"));

    idx++;
  }

  for (let idx = 0; idx < columnGrid.length; idx++) {
    for (let jdx = 0; jdx < grid.length; jdx++) {
      let rowStr = grid[jdx].join("_");

      if (columnGrid[idx] === rowStr) pairCounter++;
    }
  }

  return pairCounter;
};
```
