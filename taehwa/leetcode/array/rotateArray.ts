function rotate1(nums: number[], k: number) {
  let temp: number;

  while (k > 0 && nums.length > 0) {
    temp = nums.pop() as number;
    nums.unshift(temp);
    k--;
  }
}
