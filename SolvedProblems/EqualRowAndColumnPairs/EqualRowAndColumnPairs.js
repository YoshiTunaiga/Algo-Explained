const equalPairs = (grid) => {
  let pairCounter = 0;
  const rowMap = new Map();
  const columnGrid = [];
  const numRows = grid.length;
  const numCols = grid[0].length;

  // Collect row strings and store their counts in a hash map
  for (let i = 0; i < numRows; i++) {
    const rowStr = grid[i].join("_");
    rowMap.set(rowStr, (rowMap.get(rowStr) || 0) + 1);
  }

  // Collect column strings and store them in an array
  for (let j = 0; j < numCols; j++) {
    let columnArr = [];
    for (let i = 0; i < numRows; i++) {
      columnArr.push(grid[i][j]);
    }
    const columnStr = columnArr.join("_");
    columnGrid.push(columnStr);
  }

  // Count the number of equal row and column pairs
  for (let i = 0; i < columnGrid.length; i++) {
    const columnStr = columnGrid[i];
    if (rowMap.has(columnStr)) {
      pairCounter += rowMap.get(columnStr);
    }
  }

  return pairCounter;
};

equalPairs([
  [1, 2, 3],
  [4, 5, 6],
  [1, 2, 3],
]);
