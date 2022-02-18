# Find The Town Judge

## Prompt

In a town, there are **n** people labeled from **1** to **n**. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given an array **trust** where **trust[i] = [ai, bi]** representing that the person labeled **ai** trusts the person labeled **bi**.

Return the label of the town judge if the town judge exists and can be identified, or return **-1** otherwise.

## Sample Input

```js
n = 2;
trust = [[1, 2]];
```

## Sample Output

```js
2;
```

## Solution #1

LeetCode:

```js
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
```
