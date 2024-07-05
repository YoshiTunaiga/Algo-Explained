function averagePair(arr, target) {
  let left = 0,
    right = arr.length - 1;

  if (arr.length < 2) return false;

  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;

    if (avg === target) return true;
    if (avg < target) left++;
    if (avg > target) right--;
  }

  return false;
}
