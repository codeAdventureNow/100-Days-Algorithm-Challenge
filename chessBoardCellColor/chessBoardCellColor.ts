/// my solution

// export function chessBoardCellColor(cell1: string, cell2: string): boolean {
//   const board = {
//     A: 1,
//     B: 2,
//     C: 3,
//     D: 4,
//     E: 5,
//     F: 6,
//     G: 7,
//     H: 8,
//   };

//   const cell1X = board[cell1[0]];
//   const cell1Y = parseInt(cell1[1]);
//   const cell2X = board[cell2[0]];
//   const cell2Y = parseInt(cell2[1]);

//   const cell1IsDark = (cell1X + cell1Y) % 2 === 0 ? true : false;
//   const cell2IsDark = (cell2X + cell2Y) % 2 === 0 ? true : false;

//   return cell1IsDark === cell2IsDark;
// }

//                       A index is 0 1 is 1,   '01' these are the indexes of the string.  We take those and turn them into numbers
// console.log(chessBoardCellColor('A1', 'C3'));
// console.log(chessBoardCellColor('A1', 'H3'));

//brown cells are even
//tan cells are odd

/// Dylan solution with update variable names by me

export function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const board = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
  };

  const cell1TotalCheckEven = (board[cell1[0]] + parseInt(cell1[1])) % 2;
  const cell2TotalCheckEven = (board[cell2[0]] + parseInt(cell2[1])) % 2;

  return cell1TotalCheckEven === cell2TotalCheckEven;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
