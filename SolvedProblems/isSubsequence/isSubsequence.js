const isSubsequence = function (sub, text) {
  let isSubSeq = "";
  let firstPoint = 0;
  let secondPoint = 0;

  while (firstPoint < text.length) {
    let char = text[firstPoint];

    if (char === sub[secondPoint]) {
      isSubSeq += char;
      secondPoint++;
    }
    firstPoint++;
  }

  return isSubSeq === sub;
};
