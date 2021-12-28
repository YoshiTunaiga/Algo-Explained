string = "xyz";
key = 2;

function caesarCipherEncryptor(string, key) {
  let abc = "abcdefghijklmnopqrstuvwxyz"; // declared a variable with the alphabet for reference.
  let cypherResult = "";

  // Loop through the string for every character
  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    // Check the character's index against the abc and add the key
    let newChar = abc.indexOf(char) + key;

    // If the newChar's index is greater or equal to 26;
    if (newChar >= 26) {
      // add the new character from the abc, divisible by 26 to go back to the start of the abc;
      cypherResult += abc[newChar % 26];

      // Else, add the new character from the abc to the cypherResult;
    } else {
      cypherResult += abc[newChar];
    }
  }
  // return the result;
  return cypherResult;
}

caesarCipherEncryptor(string, key);
