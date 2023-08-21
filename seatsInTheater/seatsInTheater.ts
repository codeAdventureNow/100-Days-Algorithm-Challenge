export function seatsInTheater(
  nCols: number,
  nRows: number,
  col: number,
  row: number
): number {
  const colDif = nCols - col + 1;
  const rowDif = nRows - row;
  return colDif * rowDif;
}

console.log(seatsInTheater(16, 11, 5, 3));
