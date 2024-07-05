let n = 2;
let trust = [[1, 2]];

const findJudge = function (n, trust) {
  let result = -1,
    trustedGroup = {},
    trusterGroup = {};

  for (let [truster, trusted] of trust) {
    if (!trustedGroup[trusted]) trustedGroup[trusted] = 1;
    else trustedGroup[trusted]++;

    if (!trusterGroup[truster]) trusterGroup[truster] = 1;
    else trusterGroup[truster]++;
  }

  for (let i = 1; i <= n; i++) {
    if (
      !trusterGroup[i] &&
      (n > 1 ? trustedGroup[i] == n - 1 : trustedGroup[n] == undefined)
    ) {
      result = i;
      break;
    }
  }
  return result;
};

findJudge(n, trust);
