import solution from "./truck";

describe("Stack/Queue - Truck", () => {
  it("should return 8 when inputs are (2, 10, [7, 4, 5, 6]", () => {
    const answer = solution(2, 10, [7, 4, 5, 6]);
    expect(answer).toBe(8);
  });

  it("should return 101 when inputs are 100, 100, [10]", () => {
    const answer = solution(100, 100, [10]);
    expect(answer).toBe(101);
  });

  it("should return 110 when inputs are 100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]", () => {
    const answer = solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
    expect(answer).toBe(110);
  });

  it("should return 5 when inputs are 5, 5, [1]", () => {
    const answer = solution(5, 5, [1]);
    expect(answer).toBe(6);
  });
});
