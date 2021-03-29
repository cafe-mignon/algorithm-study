/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let i = 0;
  let length = nums.length;

  while (i < length) {
    if (nums[i] !== 0) {
      i++;
      continue;
    }

    length--;
    nums.push(nums.splice(i, 1)[0]);
  }
}

export default moveZeroes;
