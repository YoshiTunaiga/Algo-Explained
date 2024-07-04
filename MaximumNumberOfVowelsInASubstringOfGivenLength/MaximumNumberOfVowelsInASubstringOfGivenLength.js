const maxVowels = (str, k) => {
  const vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 };
  let sum = 0;
  let maxNum = 0;
  let idx = 0;

  while (idx < k) {
    sum += vowels[str[idx]] ?? 0;
    idx++;
  }
  maxNum = sum;

  for (let leftIdx = 0; leftIdx < str.length - k; leftIdx++) {
    if (vowels[str[leftIdx]]) sum -= vowels[str[leftIdx]];
    if (vowels[str[idx]]) sum += vowels[str[idx]];
    maxNum = sum > maxNum ? sum : maxNum;
    idx++;
  }

  return maxNum;
};
