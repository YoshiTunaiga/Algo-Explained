const compress = (chars) => {
  if (chars.length < 2) {
    return chars.length;
  }

  let resStr = "";
  let str = "";
  let prevChar = chars[0];

  const handleString = (str) => {
    let start = str[0];

    if (str.length > 9) {
      resStr += start + str.length.toString().split("").join("");
    } else if (str.length === 1) {
      resStr += start;
    } else {
      resStr += start + str.length.toString();
    }
  };

  for (let idx = 0; idx < chars.length; idx++) {
    let char = chars[idx];

    if (prevChar === char && idx === chars.length - 1) {
      str += char;
      handleString(str);
    } else if (prevChar !== char && idx === chars.length - 1) {
      handleString(str);
      str = char;
      handleString(char);
    } else if (prevChar !== char) {
      handleString(str);
      str = char;
      prevChar = char;
    } else {
      str += char;
    }
  }

  for (let i = resStr.length - 1; i >= 0; i--) {
    chars.unshift(resStr[i]);
  }

  return resStr.length;
};
