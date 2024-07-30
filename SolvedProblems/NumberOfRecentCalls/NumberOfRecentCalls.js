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
