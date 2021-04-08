#https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/646/

class Solution(object):
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        for i in range(0,k):
            x= nums.pop(len(nums)-1)
            nums.insert(0, x)
            