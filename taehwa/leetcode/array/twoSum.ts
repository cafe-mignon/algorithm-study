function twoSum(nums: number[], target: number): number[] {
  const hash: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] !== undefined) {
      return [hash[nums[i]], i];
    }

    hash[target - nums[i]] = i;
  }

  return [];
}

export default twoSum;
