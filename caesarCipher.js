// caesarCipher takes a str and moves it num times to the right
// function keeps the space and capitalization of letter
// caesarCiper('boo') returns 'dqq'

function caesarCipher(str, num) {
  num = num % 26;
  const lowerCaseString = str.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let newString = "";

  for (let i = 0; i < lowerCaseString.length; i++) {
    const currLetter = lowerCaseString[i];
    if (currLetter === " ") {
      newString += currLetter;
      continue;
    }
    const currIndex = alphabet.indexOf(currLetter);
    let newIndex = currIndex + num;
    if (newIndex > 25) newIndex -= 26;
    if (newIndex < 0) newIndex += 26;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else newString += alphabet[newIndex];
  }
  return newString;
}
