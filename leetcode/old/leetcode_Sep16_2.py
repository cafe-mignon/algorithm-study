from itertools import combinations
from typing import List

class Solution:
    def findMaximumXOR(self, nums: List[int]) -> int:
        maxXOR= 0
        for i in combinations(nums, 2):
            l= list(i)
            XORed= l[0] ^ l[1]
            maxXOR= max(maxXOR, XORed)
        return maxXOR

sol = Solution()
#ret= sol.findMaximumXOR([1,2,3])
ret= sol.findMaximumXOR([0])
print(ret)