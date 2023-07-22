export function isTandemRepeat(inputString: string): boolean {
  const wordLength = inputString.length;

  if (wordLength % 2 === 0) {
    const halfwayPoint = wordLength / 2;
    const firstHalf = inputString.slice(0, halfwayPoint);
    const secondHalf = inputString.slice(halfwayPoint, wordLength);

    return firstHalf === secondHalf;
  }
  return false;
}

console.log(isTandemRepeat('tandemtandem'));
console.log(isTandemRepeat('qqq'));
console.log(isTandemRepeat('2w2ww'));

//divide the inputString by true if the result is odd return false

//if the both halves are === return true
