export function makeArrayConsecutive2(statues: number[]): number {
  let count = 0;
  const sortedStatues = statues.sort();
  const min = sortedStatues[0];
  const max = sortedStatues[sortedStatues.length - 1];

  for (let i = min; i < max; i++) {
    if (!statues.includes(i)) {
      count++;
    }
  }

  return count;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
