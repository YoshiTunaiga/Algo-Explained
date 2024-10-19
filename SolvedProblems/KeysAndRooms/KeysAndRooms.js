const canVisitAllRooms = (rooms) => {
  let setOfKeys = { 0: true };
  let stack = [0];

  while (stack.length) {
    let roomIdx = stack.pop();

    let idx = 0;
    while (idx < rooms[roomIdx].length) {
      if (!setOfKeys[rooms[roomIdx][idx]]) {
        setOfKeys[rooms[roomIdx][idx]] = true;
        stack.push(rooms[roomIdx][idx]);
      }
      idx++;
    }
  }

  return Object.keys(setOfKeys).length === rooms.length;
};

canVisitAllRooms([[1], [2], [3], []]); // true
