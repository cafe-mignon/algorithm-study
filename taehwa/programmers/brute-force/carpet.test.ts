import solution from "./carpet";

describe("Brute force - Carpet", () => {
  it("should return [4, 3] when inputs are (10, 2)", () => {
    const answer = solution(10, 2);
    expect(answer).toEqual([4, 3]);
  });

  it("should return [3, 3] when inputs are (8, 1)", () => {
    const answer = solution(8, 1);
    expect(answer).toEqual([3, 3]);
  });

  it("should return [8, 6] when inputs are (24, 24)", () => {
    const answer = solution(24, 24);
    expect(answer).toEqual([8, 6]);
  });
});
