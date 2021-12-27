string = "abcdcba";

function isPalindrome(str) {
  console.log(str);
  str = str.toLowerCase();
  //if str length=== 1 return true.
  if (str.length === 1) return true;
  if (str.length === 2) {
    //if str length === 2 check if they equal
    return str[0] === str[str.length - 1];
  }
  //else, check for each char, back vs front letter.
  let firstChar = str[0];
  let lastChar = str[str.length - 1];
  if (firstChar !== lastChar) return false;

  let otherLetters = isPalindrome(str.slice(1, -1));
  return otherLetters;
}

isPalindrome(string);
