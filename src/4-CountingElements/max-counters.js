/**
You are given N counters, initially set to 0, and you have two possible 
operations on them:

increase(X) − counter X is increased by 1,
max counter − all counters are set to the maximum value of any counter.
A non-empty array A of M integers is given. This array represents consecutive 
operations:

if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
if A[K] = N + 1 then operation K is max counter.
For example, given integer N = 5 and array A such that:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the values of the counters after each consecutive operation will be:

    (0, 0, 1, 0, 0)
    (0, 0, 1, 1, 0)
    (0, 0, 1, 2, 0)
    (2, 2, 2, 2, 2)
    (3, 2, 2, 2, 2)
    (3, 2, 2, 3, 2)
    (3, 2, 2, 4, 2)
The goal is to calculate the value of every counter after all operations.

Write a function:

function solution(N, A);

that, given an integer N and a non-empty array A consisting of M integers, 
returns a sequence of integers representing the values of the counters.

Result array should be returned as an array of integers.

For example, given:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the function should return [3, 2, 2, 4, 2], as explained above.

Write an efficient algorithm for the following assumptions:

N and M are integers within the range [1..100,000];
each element of array A is an integer within the range [1..N + 1].
 */

/**
 *
 * @param {Number} N
 * @param {Array} A
 */
export function solution(N, A) {
  let counters = new Array(N).fill(0);
  let aux = 0;
  let max = 0;

  for (let i = 0; i < A.length; i++) {
    const value = A[i];
    if (value >= 1 && value <= N) {
      aux = counters[value - 1] + 1;
      counters[value - 1] = aux;
      max = Math.max(max, aux);
    } else if (value === N + 1) {
      counters.fill(max);
    }
  }

  return counters;
}

/**
 *
 * @param {Number} N
 * @param {Array} A
 */
export function solution2(N, A) {
  let counters = new Array(N).fill(0);
  let max = 0;
  let base = 0;
  let previousMax = false;

  for (let i = 0; i < A.length; i++) {
    const value = A[i];
    if (value >= 1 && value <= N) {
      handleUndefined(counters, value - 1);
      counters[value - 1]++;
      previousMax = false;

      max = Math.max(max, counters[value - 1]);
    } else if (value === N + 1 && !previousMax) {
      base += max;
      counters = new Array(N);
      max = 0;
      previousMax = true;
    }
  }

  for (let i = 0; i < counters.length; i++) {
    handleUndefined(counters, i);
    counters[i] += base;
  }

  return counters;
}

function handleUndefined(array, pos) {
  if (array[pos] === undefined) array[pos] = 0;
}