import { solutionRecursive, solution } from "./fibonacci";
import { solution3, solutionRecursive2 } from "./fibonacci-may2026";

describe("Fibonacci tests", () => {
  it("should return the correct value", () => {
    expect(solutionRecursive.fibonacci(0)).toBe(0);
    expect(solutionRecursive.fibonacci(1)).toBe(1);
    expect(solutionRecursive.fibonacci(2)).toBe(1);
    expect(solutionRecursive.fibonacci(3)).toBe(2);
    expect(solutionRecursive.fibonacci(4)).toBe(3);
    expect(solutionRecursive.fibonacci(5)).toBe(5);
    expect(solutionRecursive.fibonacci(6)).toBe(8);

    expect(solutionRecursive2.fibonacci(0)).toBe(0);
    expect(solutionRecursive2.fibonacci(1)).toBe(1);
    expect(solutionRecursive2.fibonacci(2)).toBe(1);
    expect(solutionRecursive2.fibonacci(3)).toBe(2);
    expect(solutionRecursive2.fibonacci(4)).toBe(3);
    expect(solutionRecursive2.fibonacci(5)).toBe(5);
    expect(solutionRecursive2.fibonacci(6)).toBe(8);

    expect(solution(0)).toBe(0);
    expect(solution(1)).toBe(1);
    expect(solution(2)).toBe(1);
    expect(solution(3)).toBe(2);
    expect(solution(4)).toBe(3);
    expect(solution(5)).toBe(5);
    expect(solution(6)).toBe(8);

    expect(solution3(0)).toBe(0);
    expect(solution3(1)).toBe(1);
    expect(solution3(2)).toBe(1);
    expect(solution3(3)).toBe(2);
    expect(solution3(4)).toBe(3);
    expect(solution3(5)).toBe(5);
    expect(solution3(6)).toBe(8);
  });
});
