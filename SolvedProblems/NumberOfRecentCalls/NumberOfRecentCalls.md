# Number Of Recent Calls

You have a `RecentCounter` class which counts the number of recent requests within a certain time frame.

Implement the `RecentCounter` class:

- `RecentCounter()` Initializes the counter with zero recent requests.
- `int ping(int t)` Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past `3000` milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range `[t - 3000, t]`.

It is guaranteed that every call to `ping` uses a strictly larger value of t than the previous call.

## Sample Input

```
Input
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
Output
[null, 1, 2, 3, 3]

Explanation
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
```

## Solution 1

```js
const RecentCounter = function () {
  this.mssQueue = [];
};

RecentCounter.prototype.ping = function (t) {
  // push to the queue on every ping
  this.mssQueue.push(t);
  let range = t - 3000; // define the range

  // while the first ping is greated
  while (this.mssQueue[0] < range) {
    this.mssQueue.shift();
  }

  return this.mssQueue.length;
};
```

### Solution Notes

```js
const RecentCounter = function () {
  // problem cases: sign in, api request, rate limiting (?)
  this.mssQueue = [];
};

/**
 * @param {number} t
 * @return {number}
 */

RecentCounter.prototype.ping = function (t) {
  // push to the queue on every ping
  this.mssQueue.push(t);
  let range = t - 3000; // define the range
  // |n - 3000 - n|
  console.log(this.mssQueue, range);

  // while the first ping is greated
  while (this.mssQueue[0] < range) {
    this.mssQueue.shift();
  }

  // console.log(t,t - 3000, t - 3000 <= 1)
  // this.counter = t - 3000 <= 1 ? this.counter + 1 : this.counter;
  // if(this.mssQueue[this.mssQueue.length - 2] <  range) {
  //     this.mssQueue.pop()
  // }
  //else {
  // this.mssQueue.forEach(ms => {
  //     console.log("ms",ms, "t", t ,t - 3000)
  //     if(ms < range) this.mssQueue.shift();
  // })
  // }

  // console.log(this)
  // console.log("ping")

  return this.mssQueue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
```

```

```
