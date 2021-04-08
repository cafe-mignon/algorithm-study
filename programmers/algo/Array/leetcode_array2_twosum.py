#https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/546/

def twoSum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    for i,x in enumerate(nums):
        for j,y in enumerate(nums):
            if i is not j and x+y == target:
                    return [i,j]
        
#print(twoSum([2,7,11,15], 9))
#print(twoSum([3,2,4], 6))
print(twoSum([-1,-2,-3,-4,-5],-8))

a= -3
b= -5
print(a+b)