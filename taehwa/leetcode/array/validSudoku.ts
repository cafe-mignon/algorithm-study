function isValidSudoku(board: string[][]): boolean {
  const row: { [key: string]: boolean }[] = new Array(9)
    .fill(0)
    .map((_) => ({}));
  const col: { [key: string]: boolean }[] = new Array(9)
    .fill(0)
    .map((_) => ({}));
  const square: { [key: string]: { [key: string]: boolean } } = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const num = board[i][j];
      if (num === ".") continue;
      if (row[i][num]) return false;
      if (col[j][num]) return false;
      if (!square[`${Math.floor(i / 3)}-${Math.floor(j / 3)}`]) {
        square[`${Math.floor(i / 3)}-${Math.floor(j / 3)}`] = {};
      }
      if (square[`${Math.floor(i / 3)}-${Math.floor(j / 3)}`][num]) {
        return false;
      }

      row[i][num] = true;
      col[j][num] = true;
      square[`${Math.floor(i / 3)}-${Math.floor(j / 3)}`][num] = true;
    }
  }

  return true;
}

export default isValidSudoku;
