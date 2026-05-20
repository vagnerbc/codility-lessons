// TIME COMPLEXITY = O(2^n)
// SPACE COMPLEXITY = O(n)

/**
 * 1=1
 * 2=1
 * 3=2
 * 4=3
 * 5=5
 * 6=8
 */
export const solutionRecursive2 = {
  history: [],
  fibonacci: function (n = 3) {
    if (n == 0) return 0;

    if (n == 1) return 1;

    if (!this.history[n - 1]) {
      this.history[n - 1] = this.fibonacci(n - 1);
    }

    if (!this.history[n - 2]) {
      this.history[n - 2] = this.fibonacci(n - 2);
    }

    return this.history[n - 2] + this.history[n - 1];
  },
};

// TIME COMPLEXITY = O(n)
// SPACE COMPLEXITY = O(1)

/**
 * 1=1
 * 2=1
 * 3=2
 * 4=3
 * 5=5
 * 6=8
 */
export function solution3(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  let aux1 = 0;
  let aux2 = 1;
  let result = 0;

  for (let i = 2; i <= n; i++) {
    result = aux1 + aux2;
    aux1 = aux2;
    aux2 = result;
  }

  return result;
}
