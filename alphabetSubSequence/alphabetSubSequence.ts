export function alphabetSubsequence(s: string): boolean {
  const chars: string[] = s.split('');
  const charValues: number[] = [];

  chars.forEach((char: string) => {
    charValues.push(char.charCodeAt(0));
  });
  console.log(charValues);

  if (new Set(charValues).size !== charValues.length) {
    return false;
  }

  for (let i = 0; i < charValues.length - 1; i++) {
    if (charValues[i] >= charValues[i + 1]) return false;
  }

  return true;
}

console.log(alphabetSubsequence('zab'));
// console.log(alphabetSubsequence('effg'));
// console.log(alphabetSubsequence('cdce'));
// console.log(alphabetSubsequence('ace'));
// console.log(alphabetSubsequence('bxz'));

//  Why are we pushing to 0
//Because we are pushing the convert string into a unicode number in the same order the string letters occurred.
// charValues.push(char.charCodeAt(0));

// We charValues.length -1 because for the last character there is no character after that we need to compare it to.

// https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html
