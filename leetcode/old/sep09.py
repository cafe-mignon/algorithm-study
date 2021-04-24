from itertools import zip_longest

class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
        x= map(int, version1.split('.'))
        y= map(int, version2.split('.'))
        zipped= zip_longest(x,y, fillvalue=0)
        #print(list(zipped))
        for i,j in zipped:
            if i==j:
                continue
            elif i<j:
                return -1
            else:
                return 1
        return 0


sol= Solution()
#print(sol.compareVersion('0.1', '1.1'))
#print(sol.compareVersion('1.0.1', '1'))
#print(sol.compareVersion('7.5.2.4', '7.5.3'))
#print(sol.compareVersion('1.01', '1.001'))
#print(sol.compareVersion('1.0', '1.0.0'))
print(sol.compareVersion('1.0', '1.0.1'))
