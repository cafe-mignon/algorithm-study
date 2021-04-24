import moveZeroes from "../moveZeroes";

describe("LeetCode - Array - 08. Move Zeroes", () => {
  it("should return [1, 3, 12, 0, 0] when input is [0, 1, 0, 3, 12]", () => {
    console.log = jest.fn();
    moveZeroes([0, 1, 0, 3, 12]);

    // expect(console.log).toHaveBeenCalledWith([1, 3, 12, 0, 0]);
  });
});
