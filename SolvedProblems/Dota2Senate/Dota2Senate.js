const predictPartyVictory = function (senate) {
  const memo = { R: "Radiant", D: "Dire" };

  if (senate.length <= 2) return memo[senate[0]];

  const banned = { R: 0, D: 0 };
  const memoQueue = { R: [], D: [] };

  for (let idx = 0; idx < senate.length; idx++) {
    memoQueue[senate[idx]].push(idx);
  }

  if (!memoQueue["D"].length) return memo["R"];
  if (!memoQueue["R"].length) return memo["D"];

  for (let idx = 0; idx < senate.length - 1; idx++) {
    if (memoQueue["D"][idx] < memoQueue["R"][idx]) {
      banned["R"]++;
      memoQueue["D"].push(idx + senate.length);
    } else {
      banned["D"]++;
      memoQueue["R"].push(idx + senate.length);
    }
  }

  return memoQueue["D"].length > memoQueue["R"].length ? memo["D"] : memo["R"];
};

predictPartyVictory("DRRDRDRDRDDRDRDRDD"); // Dire
