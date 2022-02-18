let str = ["h", "e", "l", "l", "o"];

const reverseString = (str) => {
  // loop thru the array of strings from left to right and right to left
  for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
    // Swap in place using destructuring assignment;
    [str[i], str[j]] = [str[j], str[i]];
  }
};
