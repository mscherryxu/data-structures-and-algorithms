// function returns true if it is a palindrome (any word that is spelled the same backwards and forwards) and returns false if it isn't
// only look at letters, ignores other characters and punctuation
function isPalindrome(string) {
  string = string.toLowerCase();
  const charactersArr = string.split("");
  const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

  const lettersArr = [];
  charactersArr.forEach((char) => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  if (lettersArr.join("") === lettersArr.reverse().join("")) return true;
  else return false;
}

isPalindrome("Madam I'm Adam");
