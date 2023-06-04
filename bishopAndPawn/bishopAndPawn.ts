export function bishopAndPawn(bishop: string, pawn: string): boolean {
  const board = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  //for x we turned the letters into numbers
  const bishopX = board[bishop[0]];
  //for y the string number was parsed into an integer
  const bishopY = parseInt(bishop[1]);
  const pawnX = board[pawn[0]];
  const pawnY = parseInt(pawn[1]);

  //First Test
  console.log(bishopX + bishopY);
  console.log(pawnX + pawnY);

  console.log(bishopX + pawnY);
  console.log(bishopY + pawnX);

  if (
    bishopX + bishopY === pawnY + pawnX ||
    bishopX + pawnY === pawnX + bishopY
  ) {
    return true;
  }
  return false;
}

//    bishop x/y total 2
console.log(bishopAndPawn('a1', 'c3'));
