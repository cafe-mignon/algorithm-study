function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  strs.sort((a, b) => a.length - b.length);

  let prefix = strs[0];

  for (let str of strs) {
    prefix = getCommonPrefix(prefix, str);
  }

  return prefix;
}

function getCommonPrefix(str1: string, str2: string) {
  let i = 0;
  let prefix = "";
  while (str1[i] && str2[i] && str1[i] === str2[i]) {
    prefix += str1[i];
    i++;
  }

  return prefix;
}

export default longestCommonPrefix;
