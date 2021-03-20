import solution from "./printer";

describe("Stack/Queue - Printer", () => {
  it("should return 1 when inputs are ([2, 1, 3, 2], 2)", () => {
    const answer = solution([2, 1, 3, 2], 2);
    expect(answer).toEqual(1);
  });

  it("should return 5 when inputs are ([1, 1, 9, 1, 1, 1], 0", () => {
    const answer = solution([1, 1, 9, 1, 1, 1], 0);
    expect(answer).toEqual(5);
  });
});
