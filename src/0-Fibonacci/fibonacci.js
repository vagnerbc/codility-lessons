export const solution = {
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
