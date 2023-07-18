export function incrementalBackups(
  lastBackupTime: number,
  changes: number[][]
): number[] {
  let needsBackUp = [];
  let uniqueBackUp = [];

  for (let i = 0; i < changes.length; i++) {
    for (let j = 0; j < changes.length; j++) {
      if (changes[i][j] > lastBackupTime) {
        needsBackUp.push(changes[i][1]);
      }
    }
  }

  needsBackUp.forEach((element) => {
    if (!uniqueBackUp.includes(element)) {
      uniqueBackUp.push(element);
    }
  });

  return uniqueBackUp.sort();
}

console.log(
  incrementalBackups(461620205, [
    [461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1],
  ])
);

// loop through array of arrays and if the time stamp exceeds last back up time, push i[0] into a new array
//sort the array in ascending order
