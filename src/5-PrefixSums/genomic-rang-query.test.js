import solution from "./genomic-rang-query";

describe("GenomicRangeQuery tests", () => {
  it("should return the correct value", () => {
    expect(solution("CAGCCTA", [2, 5, 0], [4, 5, 6])).toEqual([2, 4, 1]);
  });
});
