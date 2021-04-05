function firstUniqChar(s: string): number {
  const hash: { [key: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] !== undefined) {
      hash[s[i]] = -1;
      continue;
    }

    hash[s[i]] = i;
  }

  const answer = Object.values(hash).find((val) => val >= 0);

  return answer === undefined ? -1 : answer;
}
