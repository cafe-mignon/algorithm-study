function strStr(haystack: string, needle: string): number {
  if (needle === "") return 0;

  const match = haystack.match(`${needle}`);
  const index = match?.index;

  return index !== undefined ? index : -1;
}

export default strStr;
