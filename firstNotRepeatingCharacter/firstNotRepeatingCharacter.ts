export function firstNotRepeatingCharacter(s: string): string {
  let duplicates = {};
  const chars = s.split('');
  let answer = '_';
  let indexAnswer = Number.MAX_SAFE_INTEGER;

  chars.forEach((element, index) => {
    if (!duplicates.hasOwnProperty(element)) {
      duplicates[element] = {
        count: 1,
        index,
      };
    } else {
      duplicates[element].count++;
      duplicates[element].index = index;
    }
  });

  console.log(duplicates);
  for (const key in duplicates) {
    if (duplicates[key].count === 1 && duplicates[key].index < indexAnswer) {
      answer = key;
      indexAnswer = duplicates[key].index;
    }
  }

  return answer;
}

console.log(firstNotRepeatingCharacter('abacabad'));
// console.log(firstNotRepeatingCharacter('abacabaabacaba'));
