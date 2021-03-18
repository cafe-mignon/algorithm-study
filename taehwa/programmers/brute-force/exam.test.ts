import solution from "./exam";

describe("Bruteforce - Exam", () => {
  it("should return [1] when input is [1, 2, 3, 4, 5]", () => {
    const answer = solution([1, 2, 3, 4, 5]);
    expect(answer).toEqual([1]);
  });
});
