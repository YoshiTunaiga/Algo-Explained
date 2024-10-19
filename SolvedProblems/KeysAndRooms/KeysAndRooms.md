# Keys and Rooms

There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

## Sample

```
Example 1:
Input: rooms = [[1],[2],[3],[]]
Output: true
Explanation:
We visit room 0 and pick up key 1.
We then visit room 1 and pick up key 2.
We then visit room 2 and pick up key 3.
We then visit room 3.
Since we were able to visit every room, we return true.

Example 2:
Input: rooms = [[1,3],[3,0,1],[2],[0]]
Output: false
Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.
```

## Solution 1

```js
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
```

### Solution 1 Notes

```
DFS -> stack
Input: Graph
Output: Boolean
Variable:
  - RoomsVisitedCount
  - SetOfKeys
  - AllRoomsOpened (optional: as RoomsVisitedCount === setOfKeys)
Edge cases:
  - no rooms to visit
  - key is duplicated
Approach:
    - Dinamically while loop with stack
    - set a memo for keys received
        {'0': first key}
    - check if key was already received
    - send to stck only if key has not been received yet.

    return a boolean true if the set of keys is equal to the rooms available.
```
