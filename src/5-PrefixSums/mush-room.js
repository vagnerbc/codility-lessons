/**
Problem: You are given a non-empty, zero-indexed array A of n (1 ¬ n ¬ 100 000) integers
a0, a1, . . . , an−1 (0 ¬ ai ¬ 1 000). This array represents number of mushrooms growing on the
consecutive spots along a road. You are also given integers k and m (0 ¬ k, m < n).
A mushroom picker is at spot number k on the road and should perform m moves. In
one move she moves to an adjacent spot. She collects all the mushrooms growing on spots
she visits. The goal is to calculate the maximum number of mushrooms that the mushroom
picker can collect in m moves.
For example, consider array A such that:
2 3 7 5 1 3 9
0 1 2 3 4 5 6
The mushroom picker starts at spot k = 4 and should perform m = 6 moves. She might
move to spots 3, 2, 3, 4, 5, 6 and thereby collect 1 + 5 + 7 + 3 + 9 = 25 mushrooms. This is the
maximal number of mushrooms she can collect.
Solution O(m2
): Note that the best strategy is to move in one direction optionally followed
by some moves in the opposite direction. In other words, the mushroom picker should not
change direction more than once. With this observation we can find the simplest solution.
Make the first p = 0, 1, 2, . . . , m moves in one direction, then the next m − p moves in the
opposite direction. This is just a simple simulation of the moves of the mushroom picker
which requires O(m2
) time.
Solution O(n+m): A better approach is to use prefix sums. If we make p moves in one direction, 
we can calculate the maximal opposite location of the mushroom picker. The mushroom
picker collects all mushrooms between these extremes. We can calculate the total number of
collected mushrooms in constant time by using prefix sums.
 */

/**
 *
 * @param {Array<Number>} A
 */
const prefixSum = A => {
  const n = A.length;
  let P = new Array(n + 1).fill(0);

  for (let i = 1; i < n + 1; i++) {
    P[i] = P[i - 1] + A[i - 1];
  }

  return P;
};

/**
 *
 * @param {Array<Number>} P
 * @param {Number} x
 * @param {Number} y
 */
const countTotal = (P, x, y) => {
  return P[y + 1] - P[x];
};

/**
 *
 * @param {Array<Number>} A
 * @param {Number} k
 * @param {Number} m
 */
// [2,3,7,5,1,3,9]
// k=4
// m=6
// result = 1 + 5 + 7 + 3 + 9 = 25 mushrooms ([7,5,1,3,9])
const solution = (A, k, m) => {
  const n = A.length;
  var result = 0;
  const pref = prefixSum(A);

  for (let i = 0; i < Math.min(m, k) + 1; i++) {
    const left_pos = k - i;
    const right_pos = Math.min(n - 1, Math.max(k, k + m - 2 * i));
    result = Math.max(result, countTotal(pref, left_pos, right_pos));
  }

  for (let i = 0; i < Math.min(m + 1, n - k); i++) {
    const right_pos = k + i;
    const left_pos = Math.max(0, Math.min(k, k - (m - 2 * i)));
    result = Math.max(result, countTotal(pref, left_pos, right_pos));
  }

  return result;
};

export default solution;
