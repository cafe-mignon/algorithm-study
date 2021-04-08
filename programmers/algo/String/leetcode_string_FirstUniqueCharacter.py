#https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/881/

#from collections import OrderedDict

#def firstUniqChar(s): 
#    myset= list(OrderedDict.fromkeys(s).keys())
#    print(myset)

def firstUniqChar(s): 
    for i,c in enumerate(s):
        if s.count(c) == 1:
            return i
    return -1

print(firstUniqChar("leetcode"))
print(firstUniqChar("loveleetcode"))
print(firstUniqChar("aabb"))