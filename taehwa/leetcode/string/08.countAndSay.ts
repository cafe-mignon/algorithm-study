function countAndSay(n: number): string {
  let answer = "1";
  for (let i = 1; i < n; i++) {
    answer = getNext(answer);
  }

  return answer;
}

function getNext(prev: string) {
  const group = prev.match(/(.)\1*/g)!;
  return group.map((g) => `${g.length}${g[0]}`).join("");
}

export default countAndSay;
