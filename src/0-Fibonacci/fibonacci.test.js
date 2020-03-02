import { solutionRecursive, solution } from "./fibonacci";

describe("Fibonacci tests", () => {
  it("should return the correct value", () => {
    expect(solutionRecursive.fibonacci(0)).toBe(0);
    expect(solutionRecursive.fibonacci(1)).toBe(1);
    expect(solutionRecursive.fibonacci(2)).toBe(1);
    expect(solutionRecursive.fibonacci(3)).toBe(2);
    expect(solutionRecursive.fibonacci(4)).toBe(3);
    expect(solutionRecursive.fibonacci(5)).toBe(5);
    expect(solutionRecursive.fibonacci(6)).toBe(8);

    expect(solution(0)).toBe(0);
    expect(solution(1)).toBe(1);
    expect(solution(2)).toBe(1);
    expect(solution(3)).toBe(2);
    expect(solution(4)).toBe(3);
    expect(solution(5)).toBe(5);
    expect(solution(6)).toBe(8);
  });
});
