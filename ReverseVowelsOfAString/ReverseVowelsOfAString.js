const reverseVowels = function (string) {
  let result = "";
  const vowelsMemo = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true,
    U: true,
  };

  let vowelStack = [];
  for (let char in string) {
    if (vowelsMemo[string[char]]) {
      vowelStack.push(string[char]);
    }
  }

  for (let char in string) {
    if (vowelsMemo[string[char]]) {
      result += vowelStack.pop();
    } else {
      result += string[char];
    }
  }

  // join the updated splitString
  return result;
};
