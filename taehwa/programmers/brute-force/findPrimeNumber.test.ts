import solution from "./findPrimeNumber";

describe("Brute force - Find prime number", () => {
  it('should return 3 when input is "17"', () => {
    const answer = solution("17");
    expect(answer).toBe(3);
  });

  it('should return 2 when input is "011"', () => {
    const answer = solution("011");
    expect(answer).toBe(2);
  });
});
