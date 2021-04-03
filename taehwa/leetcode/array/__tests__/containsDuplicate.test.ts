import containsDuplicate from "../containsDuplicate";

describe("LeetCode - Array - 04. Contains Duplicate", () => {
  it("should return true when input is [1, 2, 3, 1]", () => {
    const answer = containsDuplicate([1, 2, 3, 1]);
    expect(answer).toBe(true);
  });

  it("should return true when input is [1, 2, 3, 4]", () => {
    const answer = containsDuplicate([1, 2, 3, 4]);
    expect(answer).toBe(false);
  });

  it("should return true when input is [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]", () => {
    const answer = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
    expect(answer).toBe(true);
  });
});
