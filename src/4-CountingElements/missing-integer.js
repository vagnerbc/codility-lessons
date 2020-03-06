/**
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer
 (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
 */

/**
 *
 * @param {Array<Number>} A
 */
export function solution(A) {
  let aux = new Array(A.length + 1).fill(false);

  for (let i = 0; i < A.length; i++) {
    const value = A[i];
    if (value >= 1 && value <= A.length + 1) {
      aux[value - 1] = true;
    }
  }

  for (let i = 0; i <= A.length + 1; i++) {
    if (aux[i] === false) return i + 1;
  }

  return -1;
}

/**
 *
 * @param {Array<Number>} A
 */
export function solution2(A) {
  let aux = new Set();

  const maxOfA = Math.max(...A, 1);

  for (let i = 1; i <= maxOfA + 1; i++) {
    aux.add(i);
  }

  for (let i = 0; i < A.length; i++) {
    if (aux.has(A[i])) {
      aux.delete(A[i]);
    }
  }

  return Array.from(aux)[0];
}
