function plusOne(digits: number[]): number[] {
  let surplus = 0;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];

    if (i === digits.length - 1) {
      digit += 1;
    } else {
      digit += surplus;
    }

    if (digit >= 10) {
      digit %= 10;
      surplus = 1;
    } else {
      surplus = 0;
    }
    digits[i] = digit;
  }

  if (surplus > 0) {
    digits.unshift(surplus);
  }

  return digits;
}

export default plusOne;
