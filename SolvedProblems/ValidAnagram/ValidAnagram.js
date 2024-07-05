let string = "anagram";
let text = "nagaram";

const isAnagram = function (string, text) {
  let bool = true,
    memo = {};

  // Cover edge case where their length isn't equal;
  if (string.length !== text.length) return false;

  // convert in array
  string = string.split("");
  text = text.split("");

  // for each letter in string, let's add them to memo plus 1
  string.forEach((letter) =>
    memo[letter] ? memo[letter]++ : (memo[letter] = 1)
  );

  // for each letter in text, let's subtract them by 1 in memo;
  text.forEach((letter) => memo[letter]--);

  // if any value in memo does not equal 0 we should assume they not anagram;
  for (let key in memo) if (memo[key] !== 0) bool = false;

  // else return true;
  return bool;
};

isAnagram(string, text);
