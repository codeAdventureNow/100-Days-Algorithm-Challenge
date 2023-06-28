// export function electionsWinners(votes: number[], k: number): number {
//   //   console.log(Math.max(...votes));
//   //   console.log(votes.length);

//   const mostVotes = Math.max(...votes);
//   const eligibleToWin: number = [];

//   for (let i = 0; i < votes.length; i++) {
//     if (votes[i] + k > mostVotes) {
//       eligibleToWin.push(votes[i]);
//     }
//   }

//   return eligibleToWin.length;
// }

console.log(electionsWinners([2, 3, 5, 2], 3));

export function electionsWinners(votes: number[], k: number): number {
  let inTheRunning = 0;
  const mostVotes = Math.max(...votes);
  const sortedVotes = votes.sort((a, b) => b - a);
  console.log(sortedVotes);

  //edge case for no votes left
  if (sortedVotes[0] !== sortedVotes[1] && k === 0) {
    return 1;
  }

  votes.forEach((voteCount) => {
    if (mostVotes - voteCount < k) {
      inTheRunning++;
    }
  });

  return inTheRunning;
}
