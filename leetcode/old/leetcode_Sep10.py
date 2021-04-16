from itertools import permutations

class Solution:
    def getHint(self, secret: str, guess: str) -> str:
        bulls=[]
        cows=0
        x= list(map(int, secret))
        y= list(map(int, guess))
        idx=0
        for i,j in zip(x, y):
            if i==j:
                bulls.append(idx)
            idx=idx+1
        for target in sorted(bulls, reverse=True):
            del x[target]
            del y[target]
        for one_of_guessed in y:
            if one_of_guessed in x:
                cows=cows+1
                x.remove(one_of_guessed)
            
        return str(len(bulls))+"A"+str(cows)+"B"

sol= Solution()
ret= sol.getHint('1123','0111')
[1123, 0111]
[1,0],[1,1],[2,1],[3,1]
#printret= sol.getHint('=','11')
#ret= sol.getHint('1807','7810')
print(ret)
            