import intersect from "../intersect";

describe("LeetCode - Array - 06. Intersetion of Two Arrays II", () => {
  it("should return [2, 2], when inputs are [1, 2, 2, 1], [2, 2]", () => {
    const answer = intersect([1, 2, 2, 1], [2, 2]);
    expect(answer).toEqual([2, 2]);
  });

  it("should return [4, 9], when inputs are [4, 9, 5], [9, 4, 9, 8, 4]", () => {
    const answer = intersect([4, 9, 5], [9, 4, 9, 8, 4]);
    expect(answer).toEqual([4, 9]);
  });
});
