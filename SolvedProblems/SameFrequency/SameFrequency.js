function sameFrequency(num1, num2) {
  let first = "" + num1;
  let second = "" + num2;
  let count = {};
  if (first.length !== second.length) return false;

  for (let idx = 0; idx <= first.length - 1; idx++) {
    let num = first[idx];
    count[num] = (count[num] || 0) + 1;
  }

  for (let idx = 0; idx <= second.length - 1; idx++) {
    let num = second[idx];

    if (!(num in count)) return false;
    else if (!count[num]) return false;
    else count[num]--;
  }
  return true;
}
