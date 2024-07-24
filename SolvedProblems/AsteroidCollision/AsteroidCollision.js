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

asteroidCollision([5, 10, -5]); // [5, 10]
