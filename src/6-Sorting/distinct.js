/**
Write a function

function solution(A); }

that, given an array A consisting of N integers, returns the number of distinct 
values in array A.

For example, given array A consisting of six elements such that:

 A[0] = 2    A[1] = 1    A[2] = 1
 A[3] = 2    A[4] = 3    A[5] = 1
the function should return 3, because there are 3 distinct values appearing in 
array A, namely 1, 2 and 3.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
 */

/**
 *
 * @param {Array<Number>} A
 */
export default function solution(A) {
  let count = A.length;
  A = A.sort();

  for (let i = 1; i < A.length; i++) {
    if (A[i] === A[i - 1]) count--;
  }

  return count;
}

export function solution2(A) {
  let aux = [];

  A.forEach((value) => {
    if (aux.includes(value)) return;

    aux.push(value);
  });

  return aux.length;
}
