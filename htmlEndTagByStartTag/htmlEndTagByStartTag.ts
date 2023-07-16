export function htmlEndTagByStartTag(startTag: string): string {
  let chars = startTag.split(' ');
  let newChars = chars[0].split('');

  newChars.splice(1, 0, '/');

  if (newChars[newChars.length - 1] === '>') {
    return newChars.join('');
  }

  newChars.push('>');
  return newChars.join('');
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));

//take the string and recreate it inserting / at index 1
//  split the string into an array
// insert /
// then join together
