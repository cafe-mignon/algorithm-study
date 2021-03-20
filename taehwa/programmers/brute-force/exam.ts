export default function solution(answers: number[]) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = patterns.map((pattern) => {
    let score = 0;

    answers.forEach((answer, index) => {
      if (answer === pattern[index % pattern.length]) score++;
    });

    return score;
  });

  const highestScore = Math.max(...scores);

  const result: number[] = [];

  scores.forEach((score, index) => {
    if (score === highestScore) {
      result.push(index + 1);
    }
  });

  return result.sort((a, b) => a - b);
}
