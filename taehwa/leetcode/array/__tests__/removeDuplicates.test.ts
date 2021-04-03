import removeDuplicates from "../removeDuplicates";

describe("Leetcode - Array - 01. Remove Duplicates", () => {
  it("should return 2 when input is [1, 1, 2]", () => {
    const answer = removeDuplicates([1, 1, 2]);
    expect(answer).toBe(2);
  });

  it("should return 0 when input is []", () => {
    const answer = removeDuplicates([]);
    expect(answer).toBe(0);
  });
});
