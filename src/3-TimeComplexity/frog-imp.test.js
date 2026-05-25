import solution from "./frog-imp";
import { solution2, solution3 } from "./frog-imp-may2026";

describe("FrogImp tests", () => {
  it("should return the correct value", () => {
    expect(solution(10, 85, 30)).toBe(3);
    expect(solution(0, 10, 10)).toBe(1);

    expect(solution2(10, 85, 30)).toBe(3);
    expect(solution2(0, 10, 10)).toBe(1);

    expect(solution3(10, 85, 30)).toBe(3);
    expect(solution3(0, 10, 10)).toBe(1);
  });
});
