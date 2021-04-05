function isAnagram(s: string, t: string): boolean {
  const hash: { [key: string]: number } = {};

  for (let char of s) {
    hash[char] = hash[char] + 1 || 1;
  }

  for (let char of t) {
    if (hash[char] === undefined) return false;
    hash[char]--;
  }

  return Object.values(hash).every((val) => val === 0);
}
