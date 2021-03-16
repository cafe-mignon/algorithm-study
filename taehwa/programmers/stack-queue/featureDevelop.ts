function solution(progresses: number[], speeds: number[]) {
  const daysLeft = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i]),
  );

  const answer = [];
  let prevMax = 0;
  let batch = 0;

  while (daysLeft.length) {
    const current = daysLeft.shift() as number;

    if (current >= daysLeft[0]) {
      if (current > prevMax) prevMax = current;
      batch++;
    } else {
      if (daysLeft[0] > prevMax) {
        answer.push(batch + 1);
        batch = 0;
      } else {
        batch++;
      }
    }
  }

  if (batch > 0) {
    answer.push(batch);
  }

  return answer;
}

export default solution;
