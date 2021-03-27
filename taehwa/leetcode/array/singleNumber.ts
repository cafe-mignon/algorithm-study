export function singleNumber1(nums: number[]): number {
  const hash: { [key: number]: number } = {};

  for (const num of nums) {
    if (hash[num]) delete hash[num];
    else hash[num] = 1;
  }

  return parseInt(Object.keys(hash)[0]);
}

export function singleNumber2(nums: number[]): number {
  let a = 0;

  for (const num of nums) {
    a ^= num;
  }

  return a;
}
