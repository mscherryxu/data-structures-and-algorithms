/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

const isAnagram = (s, t) => {
  // edge case
  if (s.length !== t.length) return false;

  // create separate hash maps
  const sChar = {};
  const tChar = {};

  for (let i = 0; i < s.length; i++) {
    if (sChar[s[i]]) sChar[s[i]]++;
    else sChar[s[i]] = 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (tChar[t[i]]) tChar[t[i]]++;
    else tChar[t[i]] = 1;
  }
  // loop through s hash map and compare values
  for (let char in sChar) {
    if (sChar[char] === tChar[char]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};
