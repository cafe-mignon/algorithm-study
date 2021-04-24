# https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/
import sys
def removeDuplicates(nums) -> int:
    num= -sys.maxsize - 1
    for i in nums[:]:
        if num == i:
            nums.remove(i)
            continue
        else:
            num= i
    return nums

def removeDuplicates2(nums) -> int:
    distinted= list(set(nums))
    print(distinted)
    return len(distinted)
                
#print(removeDuplicates([1,1,2]))
print(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))