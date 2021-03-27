function intersect(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const result = [];

  while (nums1.length && nums2.length) {
    if (nums1[0] === nums2[0]) {
      result.push(nums1[0]);
      nums1.shift();
      nums2.shift();
    } else if (nums1[0] > nums2[0]) {
      nums2.shift();
    } else {
      nums1.shift();
    }
  }

  return result;
}

export default intersect;
