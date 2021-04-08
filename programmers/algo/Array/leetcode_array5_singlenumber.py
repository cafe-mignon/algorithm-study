#https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/549/

def singleNumber(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    res=0
    for n in nums:
        res= bool(res) != bool(n)
    return res

print(singleNumber([2,2,1]))