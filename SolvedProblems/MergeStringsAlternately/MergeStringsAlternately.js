const mergeAlternately = (word1, word2) => {
  let mergedString = [];
  const word1Array = word1.split("");
  const word1Length = word1Array.length;
  const word2Array = word2.split("");
  const word2Length = word2Array.length;

  let index = 0;
  let jndex = 0;
  while (index < word1Length || jndex < word2Length) {
      if(index < word1Length) {
          mergedString.push(word1Array[index]);
          index++;
      };

      if(jndex < word2Length) {
          mergedString.push(word2Array[jndex]);
          jndex++;
      };
  }

  return mergedString.join("");
};