#https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/880/

def reverse(x):
    sign_factor= 1
    if x < 0:
        sign_factor= -1

    strx= str(abs(x))
    reveresed= strx[::-1]

    intx= int(reveresed) * sign_factor

    if -2**31 > intx or intx > 2**31:
        return 0
    return intx

print(reverse(-321))
print(reverse(123))
print(reverse(1534236469))