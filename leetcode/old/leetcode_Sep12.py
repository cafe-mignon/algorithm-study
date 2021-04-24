import numpy
import itertools
from typing import List
def allSubArrays(xs):
        n = len(xs)
        indices = list(range(n+1))
        for i,j in itertools.combinations(indices,2):
            yield xs[i:j]

class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        mymax= -10000
        mymax = max(mymax, )
        return int(mymax)
        #return list(subarr)
        # mymax= -10000
        # for i in subarr:
        #     mymax= max(mymax , int(numpy.prod(i)))
            
        # return mymax

sol= Solution()
print(sol.maxProduct([2,3,-2,4]))