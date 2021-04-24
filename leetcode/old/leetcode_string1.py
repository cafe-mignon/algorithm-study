class Solution(object):
    def reverseString(self, s):
        """
        :type s: List[str]
        :rtype: None Do not return anything, modify s in-place instead.
        """
        for i in range(0,len(s)):
            x= i
            y= len(s)-1-i
            if(x >= y):
                break            

            s[x], s[y] = s[y], s[x]
        # temp= s[x]
        # s[x]= s[y]
        # s[y]= temp

sol= Solution()
sol.reverseString(["h","e","l","l","o"])
            
        