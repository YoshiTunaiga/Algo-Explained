const removeStars = (str) => {
  const stackOfChar = [];

  for (let idx = 0; idx < str.length; idx++) {
    let currentChar = str[idx];

    if (currentChar === "*") {
      stackOfChar.pop();
    } else {
      stackOfChar.push(currentChar);
    }
  }

  return stackOfChar.join("");
};

removeStars("leet**cod*e"); //"lecoe"
