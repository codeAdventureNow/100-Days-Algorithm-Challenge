export function almostIncreasingSequence(sequence: number[]): boolean {
  let countDescending = 0;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      countDescending++;
      if (
        sequence[i] <= sequence[i - 2] &&
        sequence[i + 1] <= sequence[i - 1]
      ) {
        return false;
      }
    }
  }

  return countDescending <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));

//What happens when you are at index[0] and there is no index[-1]

//There can not be more than one in our count descending for this to be true.

// if index 1 is less than index 0  increase count, meaning-   if the later value is heading in the decreasing direction increase the count.

//ex. 1  if index[2] = 2 <= index[1] = 3  count ++
