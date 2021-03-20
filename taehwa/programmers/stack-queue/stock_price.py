def solution(prices):
    size = len(prices)
    answer = []
    for i in range(0, size):
        streak = 0
        for j in range(i + 1, size):
            if prices[j] < prices[i]:
                streak = j - i
                break
        answer.append(size - i - 1 if streak == 0 else streak)
    return answer


solution([1, 2, 3, 2, 3])
