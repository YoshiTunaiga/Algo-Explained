# Asteroid Collision

We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

## Sample Output

```
Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.

Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
```

## Solution 1

```js
const asteroidCollision = (asteroids) => {
  const stackOfAst = [];

  for (let idx = 0; idx < asteroids.length; idx++) {
    let currentAst = asteroids[idx];
    let prevAst = stackOfAst[stackOfAst.length - 1];

    // if stack is empty
    if (!stackOfAst.length) stackOfAst.push(currentAst);
    // if equal, do not push
    else if (currentAst > 0 && prevAst > 0 && currentAst === prevAst) {
      stackOfAst.push(currentAst);
    } else if (prevAst > 0 && Math.abs(currentAst) === Math.abs(prevAst)) {
      stackOfAst.pop();
    }
    // greater on the negative side
    else if (
      currentAst < 0 &&
      prevAst < 0 &&
      Math.abs(currentAst) > Math.abs(prevAst)
    ) {
      stackOfAst.push(currentAst);
    }
    // less on the negative side
    else if (
      currentAst < 0 &&
      prevAst < 0 &&
      Math.abs(currentAst) < Math.abs(prevAst)
    ) {
      stackOfAst.push(currentAst);
    } else if (
      currentAst < 0 &&
      prevAst > 0 &&
      Math.abs(currentAst) > Math.abs(prevAst)
    ) {
      stackOfAst.pop();
      idx = idx - 1; // go backwards on step
    } else if (
      currentAst < 0 &&
      prevAst > 0 &&
      Math.abs(currentAst) < Math.abs(prevAst)
    ) {
      continue;
    } else {
      stackOfAst.push(currentAst);
    }
  }

  return stackOfAst;
};
```

### Solution Notes

```js
const asteroidCollision = (asteroids) => {
  /**
    AsteroidCollision
    Input: 
            - array
    Output:
            - array
    Variables:
            - queue
            - stack
    Approach:
            - loop thru the arr
     */

  const stackOfAst = [];

  for (let idx = 0; idx < asteroids.length; idx++) {
    let currentAst = asteroids[idx];
    let prevAst = stackOfAst[stackOfAst.length - 1];

    // if stack is empty
    if (!stackOfAst.length) stackOfAst.push(currentAst);
    // if equal, do not push
    else if (currentAst > 0 && prevAst > 0 && currentAst === prevAst) {
      stackOfAst.push(currentAst);
    } else if (prevAst > 0 && Math.abs(currentAst) === Math.abs(prevAst)) {
      stackOfAst.pop();
    }
    // greater on the negative side
    else if (
      currentAst < 0 &&
      prevAst < 0 &&
      Math.abs(currentAst) > Math.abs(prevAst)
    ) {
      stackOfAst.push(currentAst);
    }
    // less on the negative side
    else if (
      currentAst < 0 &&
      prevAst < 0 &&
      Math.abs(currentAst) < Math.abs(prevAst)
    ) {
      // console.log("ln", Math.abs(currentAst), Math.abs(prevAst))
      stackOfAst.push(currentAst);
    } else if (
      currentAst < 0 &&
      prevAst > 0 &&
      Math.abs(currentAst) > Math.abs(prevAst)
    ) {
      // console.log("g",Math.abs(currentAst), Math.abs(prevAst))
      stackOfAst.pop();
      idx = idx - 1; // go backwards on step
    } else if (
      currentAst < 0 &&
      prevAst > 0 &&
      Math.abs(currentAst) < Math.abs(prevAst)
    ) {
      // console.log("l", Math.abs(currentAst), Math.abs(prevAst))
      continue;
    } else {
      stackOfAst.push(currentAst);
    }

    // ==============================
    // push to array
    // if(prevAst === undefined) {
    //     stackOfAst.push(currentAst)
    // }

    // // if equal, do not push
    // else if (Math.abs(currentAst) === Math.abs(prevAst)) {
    //     stackOfAst.pop()
    //     continue;
    // } else if (currentAst < 0 && prevAst < 0 && Math.abs(currentAst) !== Math.abs(prevAst)) {
    //     // stackOfAst.pop()
    //     continue;
    // }

    // // if less than the prevAst, continue
    // else if(currentAst < 0 && Math.abs(prevAst) > Math.abs(currentAst)){
    //     console.log("g", currentAst)
    //     continue;
    // } else if(currentAst < 0 && Math.abs(prevAst) < Math.abs(currentAst)){
    //     console.log("l", currentAst)
    //     stackOfAst.pop()
    //     continue;
    // }
    // else if (currentAst > 0 && Math.abs(currentAst) !== Math.abs(prevAst)) {
    //     stackOfAst.push(currentAst)
    // }
    // console.log(stackOfAst)
  }

  return stackOfAst;
};
```
