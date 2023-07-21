export function integerToStringOfFixedWidth(
  number: number,
  width: number
): string {
  const stringifiedNum = number.toString();
  const numberWidth = stringifiedNum.length;
  const widthDiff = width - numberWidth;

  if (numberWidth < width) {
    let padStart = '';

    for (let i = 0; i < widthDiff; i++) {
      padStart = padStart.concat('0');
    }
    return padStart.concat(stringifiedNum);
  }

  if (numberWidth > width) {
    return stringifiedNum.substring(width);
  }

  return stringifiedNum;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));

//return a string
//if  width is < less than number.length  shorten it by the difference number.length - width

//if width is > number.length   width - number.length
