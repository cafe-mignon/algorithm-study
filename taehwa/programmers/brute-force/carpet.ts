export default function solution(brown: number, yellow: number) {
  const range = Math.floor(Math.sqrt(yellow));

  for (let i = 1; i <= range; i++) {
    const height = i;
    const width = yellow / i;

    if (Math.floor(width) === width) {
      const edges = getEdgeTiles(width, height);

      if (edges === brown) {
        return [width + 2, height + 2];
      }
    }
  }

  throw Error("No answer");
}

function getEdgeTiles(width: number, height: number) {
  return width * 2 + (height + 2) * 2;
}
