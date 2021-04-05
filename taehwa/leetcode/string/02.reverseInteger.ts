function reverse(x: number): number {
  const result = parseInt(Math.abs(x).toString().split("").reverse().join(""));

  return result > 2 ** 31 - 1 ? 0 : result * Math.sign(x);
}
