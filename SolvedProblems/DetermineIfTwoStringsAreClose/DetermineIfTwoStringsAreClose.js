const closeStrings = (word1, word2) => {
  if (word1.length !== word2.length) return false;

  let word1Array = word1.split("");
  let word2Array = word2.split("");
  const setWord1 = new Set(word1Array);
  const setWord2 = new Set(word2Array);

  let isDifferent = false;
  setWord1.forEach((val, char) => {
    if (!setWord2.has(char)) isDifferent = true;
  });

  if (isDifferent) return false;

  const memoCount1 = {};
  const memoCount2 = {};

  word1Array.forEach((char) => {
    if (!memoCount1[char]) {
      memoCount1[char] = 1;
    } else {
      memoCount1[char]++;
    }
  });

  word2Array.forEach((char) => {
    if (!memoCount2[char]) {
      memoCount2[char] = 1;
    } else {
      memoCount2[char]++;
    }
  });

  let list1 = Object.values(memoCount1);
  list1.sort((a, b) => a - b);
  let list2 = Object.values(memoCount2);
  list2.sort((a, b) => a - b);

  for (let idx = 0; idx < list1.length; idx++) {
    if (list1[idx] !== list2[idx]) return false;
  }

  return true;
};

closeStrings("cabbba", "abbccc");
