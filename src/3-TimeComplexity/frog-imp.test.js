import solution from "./frog-imp";

describe("FrogImp tests", () => {
  it("should return the correct value", () => {
    expect(solution(10, 85, 30)).toBe(3);
  });
});
