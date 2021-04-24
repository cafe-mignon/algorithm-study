function isPalindrome(s: string): boolean {
  const trimmedS = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return trimmedS === trimmedS.split("").reverse().join("");
}
