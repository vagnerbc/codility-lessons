/**
 An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
 */

// TIME COMPLEXITY O(n)
// SPACE COMPLEXITY O(1)

export default function solution(A) {
  const length = A.length; // [1,2,3,5] = 4

  const total = ((length + 1) * (length + 2)) / 2; // [1,2,3,4,5] = 15

  const sum = A.reduce((prev, curr) => prev + curr); // [1,2,3,5] = 11

  return total - sum; // 15 - 11 = 4
}

// TIME COMPLEXITY O(n)
// SPACE COMPLEXITY O(n)
export const solution2 = (A = []) => {
  const size = A.length + 2;

  const aux = new Array(size).fill(-1);
  aux[0] = 0;

  A.forEach((value) => {
    aux[value] = value;
  });

  return aux.findIndex((value) => value === -1);
};
