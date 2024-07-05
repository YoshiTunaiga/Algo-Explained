const reverseWords = (string) => {
  // Check for single word strings
  if (string.split(" ").length === 1) {
    return string.trim();
  }

  let splittedString = string.trim().split(" ");
  splittedString = splittedString.reverse().filter((char) => char.length);

  return splittedString.join(" ");
};
