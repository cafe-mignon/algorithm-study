function removeDuplicates(nums: number[]): number {
  let prev = nums[0];

  let i = 1;
  while (i < nums.length) {
    if (nums[i] === prev) {
      nums.splice(i, 1);
    } else {
      prev = nums[i];
      i++;
    }
  }

  return nums.length;
}

export default removeDuplicates;
