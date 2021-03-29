export default function containsDuplicate(nums: number[]): boolean {
  const hash: { [key: number]: boolean } = {};

  for (const num of nums) {
    if (hash[num]) return true;
    hash[num] = true;
  }

  return false;
}
