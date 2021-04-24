import maxProfit from "../maxProfit";

describe("LeetCode - Array - 02. Best time to Buy and Sell stock II", () => {
  it("should return 7 when input array is [7, 1, 5, 3, 6, 4]", () => {
    const answer = maxProfit([7, 1, 5, 3, 6, 4]);
    expect(answer).toBe(7);
  });
  it("should return 3 when input array is [2, 2, 5]", () => {
    const answer = maxProfit([2, 2, 5]);
    expect(answer).toBe(3);
  });
  it("should return 0 when input array is [5, 4, 3, 2, 1]", () => {
    const answer = maxProfit([5, 4, 3, 2, 1]);
    expect(answer).toBe(0);
  });
});
