// TIME COMPLEXITY = O(2^n)
// SPACE COMPLEXITY = O(n)
export const solutionRecursive = {
  history: [],
  fibonacci: function(n) {
    if (n === 0 || n === 1) {
      return n;
    }

    if (!this.history[n - 1]) {
      this.history[n - 1] = this.fibonacci(n - 1);
    }

    if (!this.history[n - 2]) {
      this.history[n - 2] = this.fibonacci(n - 2);
    }

    return this.history[n - 1] + this.history[n - 2];
  }
};

// TIME COMPLEXITY = O(n)
// SPACE COMPLEXITY = O(1)
export function solution(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  let n0 = 0;
  let n1 = 1;
  let sum = 1;

  for (let i = 2; i <= n; i++) {
    sum = n0 + n1;
    n0 = n1;
    n1 = sum;
  }

  return sum;
}
