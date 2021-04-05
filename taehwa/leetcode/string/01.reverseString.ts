function reverseString(s: string[]): void {
  let temp: string;
  const size = s.length;

  for (let i = 0; i < size / 2; i++) {
    temp = s[i];
    s[i] = s[size - i - 1];
    s[size - i - 1] = temp;
  }
}
