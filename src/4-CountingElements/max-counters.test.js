import { solution, solution2 } from "./max-counters";

describe("MaxCounters tests", () => {
  it("should return de correct value", () => {
    expect(solution(5, [3, 4, 4, 6, 1, 3, 4, 4])).toEqual([3, 2, 3, 4, 2]);
    expect(solution(5, [3, 4, 4, 6, 1, 4, 4, 6])).toEqual([4, 4, 4, 4, 4]);
    expect(solution(6, [3, 4, 4, 6, 1, 4, 4, 6])).toEqual([1, 0, 1, 4, 0, 2]);
    expect(solution(4, [3, 4, 4, 2, 1, 4, 4])).toEqual([1, 1, 1, 4]);
    expect(solution(4, [3, 5, 4, 2, 5, 5, 4])).toEqual([2, 2, 2, 3]);
    expect(solution(4, [5, 5, 5, 5, 5, 5, 5])).toEqual([0, 0, 0, 0]);

    expect(solution2(5, [3, 4, 4, 6, 1, 3, 4, 4])).toEqual([3, 2, 3, 4, 2]);
    expect(solution2(5, [3, 4, 4, 6, 1, 4, 4, 6])).toEqual([4, 4, 4, 4, 4]);
    expect(solution2(6, [3, 4, 4, 6, 1, 4, 4, 6])).toEqual([1, 0, 1, 4, 0, 2]);
    expect(solution2(4, [3, 4, 4, 2, 1, 4, 4])).toEqual([1, 1, 1, 4]);
    expect(solution2(4, [3, 5, 4, 2, 5, 5, 4])).toEqual([2, 2, 2, 3]);
    expect(solution2(4, [5, 5, 5, 5, 5, 5, 5])).toEqual([0, 0, 0, 0]);
  });
});
