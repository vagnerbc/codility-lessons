/**
Write a function:

function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the 
range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because 
there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
 */

/**
 *
 * @param {Number} A initial pos
 * @param {Number} B final pos
 * @param {Number} K multiple of
 */
export default function solution(A, B, K) {
  const totalItens = B - A + 1;

  for (let i = 0; i < totalItens; i++) {
    if ((A + i) % K === 0) {
      // When found the first divisible, the next divisible will be in K positions
      // ahead. So we just need divide the totalItens - 1 with K
      return Math.ceil((totalItens - i) / K);
    }
  }

  return 0;
}
