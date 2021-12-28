string = "xyz";
key = 2;

function caesarCipherEncryptor(string, key) {
  let abc = "abcdefghijklmnopqrstuvwxyz";
  let cypherResult = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let newChar = abc.indexOf(char) + key;

    if (newChar >= 26) {
      cypherResult += abc[newChar % 26];
    } else {
      cypherResult += abc[newChar];
    }
  }
  return cypherResult;
}

caesarCipherEncryptor(string, key);
