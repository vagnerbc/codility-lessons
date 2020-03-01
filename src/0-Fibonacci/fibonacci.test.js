import { solution } from "./fibonacci";

describe("Fibonacci tests", () => {
  it("should return the correct value", () => {
    expect(solution.fibonacci(0)).toBe(0);
    expect(solution.fibonacci(1)).toBe(1);
    expect(solution.fibonacci(2)).toBe(1);
    expect(solution.fibonacci(3)).toBe(2);
    expect(solution.fibonacci(4)).toBe(3);
    expect(solution.fibonacci(5)).toBe(5);
    expect(solution.fibonacci(6)).toBe(8);
  });
});
