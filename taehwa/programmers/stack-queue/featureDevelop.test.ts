import solution from "./featureDevelop";

describe("Stack/Queue - Feature Development", () => {
  it("should return [2, 1] when inputs are [93, 30, 55], [1, 30, 5]", () => {
    const answer = solution([93, 30, 55], [1, 30, 5]);
    expect(answer).toEqual([2, 1]);
  });

  it("should return [1, 3, 2] when inputs are [95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]", () => {
    const answer = solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
    expect(answer).toEqual([1, 3, 2]);
  });

  it("should return [4] when inputs are [40, 55, 80, 23], [4, 10, 5, 20]", () => {
    const answer = solution([40, 55, 80, 23], [4, 10, 5, 20]);
    expect(answer).toEqual([4]);
  });

  it("should return [1] when inputs are [99, 80, 95, 72], [1, 1, 1, 1]", () => {
    const answer = solution([99, 99, 99], [1, 1, 1]);
    expect(answer).toEqual([3]);
  });
});

// [5, 10, 1, 1, 20, 1]
