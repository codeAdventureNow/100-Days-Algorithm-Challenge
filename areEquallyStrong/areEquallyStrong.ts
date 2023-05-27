//my solution

// export function areEquallyStrong(
//   yourLeft: number,
//   yourRight: number,
//   friendsLeft: number,
//   friendsRight: number
// ): boolean {
//   const yourLeftMatchesOneArm =
//     yourLeft === friendsLeft || yourLeft === friendsRight;

//   const yourRightMatchesOneArm =
//     yourRight === friendsLeft || yourRight === friendsRight;

//   return yourLeftMatchesOneArm && yourRightMatchesOneArm;
// }

//Dylan solution
export function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number
): boolean {
  const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
  const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
  const friendsWeakest =
    friendsLeft <= friendsRight ? friendsLeft : friendsRight;
  const friendsStrongest =
    friendsLeft >= friendsRight ? friendsLeft : friendsRight;

  return yourWeakest === friendsWeakest && yourStrongest === friendsStrongest;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
console.log(areEquallyStrong(15, 10, 15, 1));
console.log(areEquallyStrong(15, 23, 15, 23));

//my left would need to match his left or right   AND
//my right would need to match his left or right
