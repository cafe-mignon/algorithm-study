#https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/879/

def reverseString(s):
    """
    :type s: List[str]
    :rtype: None Do not return anything, modify s in-place instead.
    """
    for i in range(0,len(s)):
        x= i
        y= len(s)-1-i
        if(x >= y):
            break            

        # https://stackoverflow.com/questions/14836228/is-there-a-standardized-method-to-swap-two-variables-in-python
        # python swaping
        s[x], s[y] = s[y], s[x]
        # temp= s[x]
        # s[x]= s[y]
        # s[y]= temp

l= list("hello")
reverseString(l)
print(l)
            
        