const MAX = 2 ** 31 - 1;
const MIN = -(2 ** 31);

function myAtoi(s: string): number {
  const arr = s.trim().split("");

  let sign = 1;

  if (arr[0] === "+" || arr[0] === "-") {
    if (arr[0] === "-") sign = -1;
    arr.shift();
  }

  const lastIndex = arr.findIndex(
    (element) => isNaN(Number(element)) || element === " ",
  );

  if (lastIndex === 0) return 0;

  const result =
    lastIndex > 0
      ? Number(arr.slice(0, lastIndex).join(""))
      : Number(arr.join(""));

  return sign > 0 ? Math.min(MAX, result) : Math.max(MIN, result * sign);
}

export default myAtoi;
