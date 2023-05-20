// not sure if this right answer it is failing the test

export function addBorder(picture: string[]): string[] {
  const wall = '*'.repeat(picture[0].length + 2);

  picture.unshift(wall);
  picture.push(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = '*'.concat(picture[i], '*');
  }

  return picture;
}

export function addBorder(picture: string[]): string[] {
  const wall = '*'.repeat(picture[0].length + 2);

  picture.unshift(wall);
  picture.push(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = '*'.concat(picture[i], '*');
  }

  return picture;
}
// console.log(addBorder(['abc', 'ded']));
