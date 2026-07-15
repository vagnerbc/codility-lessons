/**
A mountain array is defined as an array that

has at least 3 elements
has an element with the largest value called "peak", with index k. The array elements strictly increase from the first element to A[k], 
and then strictly decrease from A[k + 1] to the last element of the array. Thus creating a "mountain" of numbers.
That is, given A[0]<...<A[k-1]<A[k]>A[k+1]>...>A[n-1], we need to find the index k. 
Note that the peak element is neither the first nor the lastIndex of the array.

Find the index of the peak element. Assume there is only one peak element.

Input: 0 1 2 3 2 1 0

Output: 3

Explanation: The largest element is 3, and its index is 3.
 */

// 0 1 2 3 10 5 4 3 2 1
function peakOfMountainArray(arr = []) {
  const alen = arr.length;
  let left = 0;
  let right = alen - 1;
  let boundaryIndex = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (mid === alen - 1 || arr[mid] > arr[mid + 1]) {
      boundaryIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return boundaryIndex;
}

function main() {
  const arr1 = [0, 1, 2, 3, 4, 10, 9, 8, 7];
  const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 10];
  const arr3 = [10, 9, 8, 7, 6, 5];

  console.log(peakOfMountainArray(arr1));
  console.log(peakOfMountainArray(arr2));
  console.log(peakOfMountainArray(arr3));
}

main();
