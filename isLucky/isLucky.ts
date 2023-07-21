export function isLucky(n: number): boolean {
  const luckyN = n.toString();

  const half = luckyN.length / 2;
  const firstHalf = getTotal(luckyN.substring(0, half));

  const secondHalf = getTotal(luckyN.substring(half, luckyN.length));

  return firstHalf === secondHalf;
}

function getTotal(n: string) {
  return n
    .split('')
    .map((char) => parseInt(char))
    .reduce((num1, num2) => num1 + num2);
}

console.log(isLucky(1230));
console.log(isLucky(239017));

//turn the number into a string
//split the the string into two equal halves
//if the halves add up to be equal return true

//return false
