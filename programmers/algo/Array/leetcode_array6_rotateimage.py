#https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/770/


def rotate_90(matrix):
    N = len(matrix)
    ret = [[0] * N for _ in range(N)]
    for r in range(N):
        for c in range(N):
            ret[c][N-1-r] = matrix[r][c]
    return ret

matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
matrix = [[1,2,3],[4,5,6],[7,8,9]]
print(rotate_90(matrix))