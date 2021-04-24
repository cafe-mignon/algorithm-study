import { singleNumber1, singleNumber2 } from "../singleNumber";

describe("LeetCode - Array - 05. Single Number", () => {
  it("hash", () => {
    const answer = singleNumber1([2, 2, 1]);
    expect(answer).toBe(1);
  });

  it("bit operation", () => {
    const answer = singleNumber2([2, 2, 1]);
    expect(answer).toBe(1);
  });
});
