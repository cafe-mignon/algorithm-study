class Solution(object):
    def isAnagram(self, s, t):
        ss=set(list(s))
        st=set(list(t))
        if sorted(ss) == sorted(st):
            return True
        else:
            return False

sol = Solution()
#res = sol.isAnagram("anagram","nagaram")
res = sol.isAnagram("rat","car")
print(res)