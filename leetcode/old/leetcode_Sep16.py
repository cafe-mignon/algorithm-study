class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        splited= s.split(' ')
        for rs in reversed(splited):
            if rs == '':
                continue
            else:
                return len(rs)
        return 0

sol= Solution()
ret= sol.lengthOfLastWord("b   a    ")
ret= sol.lengthOfLastWord("a ")
ret= sol.lengthOfLastWord("hello world")
ret= sol.lengthOfLastWord("")
print(ret)