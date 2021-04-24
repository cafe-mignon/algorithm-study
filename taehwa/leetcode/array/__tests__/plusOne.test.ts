import plusOne from "../plusOne";

describe("LeetCode - Array - 07. Plus One", () => {
  it("should return [1, 2, 4] when input is [1, 2, 3]", () => {
    const answer = plusOne([1, 2, 3]);
    expect(answer).toEqual([1, 2, 4]);
  });

  it("should return [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4] when input is [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]", () => {
    const answer = plusOne([
      6,
      1,
      4,
      5,
      3,
      9,
      0,
      1,
      9,
      5,
      1,
      8,
      6,
      7,
      0,
      5,
      5,
      4,
      3,
    ]);
    expect(answer).toEqual([
      6,
      1,
      4,
      5,
      3,
      9,
      0,
      1,
      9,
      5,
      1,
      8,
      6,
      7,
      0,
      5,
      5,
      4,
      4,
    ]);
  });
});
