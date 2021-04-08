#https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/567/

def moveZeroes(nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        #for i,n in enumerate(nums[:]):
        #    if n == 0:
        #        nums.append(nums.pop(i))

        #for i,n in enumerate(nums[:]):
        #    if n == 0:
        #        nums.pop(i)
        #        nums.append(0)
        #return nums
        shifted= 0
        for i in range(0,len(nums[:])):
            if nums[i-shifted] == 0:
                nums.pop(i-shifted)
                nums.append(0)
                shifted= shifted+1
        return nums
              
        #i=0
        #while(True):
        #    if nums[i] == 0:
        #        nums.pop(i)
        #        nums.append(0)
        #        i=i+1
        #        continue
        #return nums

                
#print(moveZeroes([0,0,1]))
#print(moveZeroes([0,1,0,3,12]))
print(moveZeroes([0]))
#print(moveZeroes([0,0,1]))