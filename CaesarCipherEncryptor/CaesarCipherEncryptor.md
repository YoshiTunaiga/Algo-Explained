# Caesar Cipher Encryptor

Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.

Note that letters should "wrap" around the alphabet; in other words, the letter "z" shifted by one returns the letter "a";

## Sample Input

```
string = "xyz"
key = 2
```

## Sample Output

```
"zab"
```

## Solution #1

```
function caesarCipherEncryptor(string, key) {

  let abc = "abcdefghijklmnopqrstuvwxyz"; // declared a variable with the alphabet for reference.
  let cypherResult = "";


  for (let i = 0; i < string.length; i++) { // Loop through the string for every character
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

  // return the new string;
  return cypherResult;
}
```
