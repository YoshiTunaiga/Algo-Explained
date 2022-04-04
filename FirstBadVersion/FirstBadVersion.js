let n = 5,
  bad = 4;

isBadVersion = function (version) {
  // checks if the version is bad or not.
};

const solution = function (isBadVersion) {
  let version = 0;
  return function (n) {
    while (isBadVersion(n)) {
      version = n--;
    }
    return version;
  };
};

solution(isBadVersion);
