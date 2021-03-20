export default function solution(num: string) {
  let counter = 0;

  const callback = (number: number) => {
    counter++;
  };

  const numArr = num.split("").map((value) => parseInt(value));

  permutation(numArr, [], num.length, isPrimeNumber, callback, []);

  return counter;
}

function isPrimeNumber(n: number) {
  if (n < 2) return false;

  const range = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= range; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function permutation(
  numbers: number[],
  picked: number[],
  toPick: number,
  isPrimeNumber: (num: number) => boolean,
  callback: (num: number) => void,
  result: number[],
) {
  for (let i = 0; i < numbers.length; i++) {
    const numberArr = [...picked, numbers[i]];
    const number = arrToInt(numberArr);

    if (isPrimeNumber(number) && !result.includes(number)) {
      callback(number);
      result.push(number);
    }

    const newNumbers = numbers.slice(0, i).concat(numbers.slice(i + 1));

    permutation(
      newNumbers,
      numberArr,
      toPick - 1,
      isPrimeNumber,
      callback,
      result,
    );
  }
}

function arrToInt(numbers: number[]) {
  return parseInt(numbers.join(""));
}
