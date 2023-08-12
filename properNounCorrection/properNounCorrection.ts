//My solution
// export function properNounCorrection(noun: string): string {
//   const nounChars = noun.split('');
//   const firstLetterCapitalized = nounChars[0].toUpperCase();
//   const remainingLetters: string[] = [];

//   for (let i = 1; i < nounChars.length; i++) {
//     let lowerCase = nounChars[i].toLowerCase();
//     remainingLetters.push(lowerCase);
//   }
//   return firstLetterCapitalized.concat(remainingLetters.join(''));
// }

export function properNounCorrection(noun: string): string {
  const firstLetter = noun[0].toUpperCase();
  const remainingLetters = noun.slice(1, noun.length).toLowerCase();

  return firstLetter.concat(remainingLetters);
}
console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));
