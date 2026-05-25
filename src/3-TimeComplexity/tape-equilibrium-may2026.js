/**
A non-empty array A consisting of N integers is given. 
Array A represents numbers on a tape.

Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: 
A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: 
|(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the first part 
and the sum of the second part.

For example, consider array A such that:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
We can split this tape in four places:

P = 1, difference = |3 − 10| = 7
P = 2, difference = |4 − 9| = 5
P = 3, difference = |6 − 7| = 1
P = 4, difference = |10 − 3| = 7
Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the minimal difference 
that can be achieved.

For example, given:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−1,000..1,000].
 */

export default function solution3(A = []) {
  let diferrences = [];

  for (let i = 0; i < A.length - 1; i++) {
    let sumP1 = 0;
    let sumP2 = 0;

    for (let j = 0; j < A.length; j++) {
      if (i <= j) {
        sumP1 += A[j];
      } else {
        sumP2 += A[j];
      }
    }

    const diff = sumP1 - sumP2;
    diferrences.push(Math.abs(diff));
  }

  return Math.min(...diferrences);
}

export function solution4(A = []) {
  const diferences = [];
  const total = getTotal(A);

  for (let i = 0; i < A.length - 1; i++) {
    const part = A.slice(0, i);
    const sum = getTotal(part);

    diferences.push(Math.abs(sum - (total - sum)));
  }

  return Math.min(...diferences);
}

function getTotal(a = []) {
  return a.reduce((prev, curr) => prev + curr, 0);
}
