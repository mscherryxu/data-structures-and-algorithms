/* 
Note: "this is a secret note for you from a secret admirer"
Magazine: "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice for you"

This would return false since there is only one 'secret' in magazine.

Assume that all letters are lower case and there is no punctuation.
*/

function harmlessRansomNote(noteText, magazineText) {
  const noteArr = noteText.split(" ");
  const magazineArr = magazineText.split(" ");
  const magazineObj = {};

  magazineArr.forEach((word) => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  let noteIsPossible = true;
  noteArr.forEach((word) => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    } else {
      noteIsPossible = false;
    }
  });
  return noteIsPossible;
}

// Linear time complexity O(n + m) or O(n)
