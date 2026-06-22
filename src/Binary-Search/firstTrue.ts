/**
    An array of boolean values is divided into two sections: The left section consists of all false, and the right section consists of all true. Find the First True in a Sorted Boolean Array of the right section, i.e., the index of the first true element. If there is no true element, return -1.

    Input: arr = [false, false, true, true, true]

    Output: 2

    Explanation: The first true's index is 2.
 */

function findBoundary(arr = []) {
  let left = 0;
  let right = arr.length - 1;
  let boundaryIndex = -1;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);

    if (arr[middle]) {
      boundaryIndex = middle;
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return boundaryIndex;
}
