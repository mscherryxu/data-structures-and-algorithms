# Frequency Counters

This pattern uses objects or sets to collect values/frequencies of values.

This can often avoid the need for nested loops or O(n<sup>2</sup>) operations with arrays/strings.

## Example

Write a function called **same**, which accepts 2 arrays. The function should return true if every value in the array has its corresponding value squared in the 2nd array. The frequency values must be the same.

```js
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
```

```js
// O(n^2) solution
const same = (arr1, arr2) => {
  // edge case, if arr1.length !== arr2.length, return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1)
  }
  return true;
}
```

```js
// O(n) solution
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const frequencyCounter1 = {}
  const frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
```

## Anagrams

Given 2 strings, write a function to determine if the 2nd string is an anagram of the 1st. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as *cinema*, formed from *iceman*.

```js
validAnagram(", ") // true
validAnagram("aaz", "zza") // false
validAnagram("texttwisttime", "timetwisttext") //true
```