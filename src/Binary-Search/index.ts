// arr = [1 3 5 7 8]
// target = 5

// O (log N)
// Always break in the middle to search
function binarySearch(arr = [], target: number) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    if (arr[middle] == target) {
      return middle;
    }

    if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}
