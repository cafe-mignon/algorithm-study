import itertools

def solution(answers):
    answer= []
    #1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
    #2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
    #3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
    patterns= [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]

    scores= [0,0,0]
    #for pattern in patterns:
    for n in range(0,3):
        for i,j in zip(itertools.cycle(patterns[n]), answers):
            if i==j:
                scores[n] = scores[n] +1

    #가장 높은 점수를 구해서 각 스코어에 해당하는 값 넣어주기.
    max_score= max(scores)
    for n, score in enumerate(scores):
        if max_score == score:
            answer.append(n+1)
    print(answer)
    #가장 잘 푼 사람을 리턴한다.
    return answer

solution([1,3,2,4,2])