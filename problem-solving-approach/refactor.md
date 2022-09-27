# Look Back and Refactor

Look at code line-by-line, how easy is it to read?

## Refactoring questions for self

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
  - Time and space complexity
- Can you think of other ways to refactor?
- How have other people solved this problem?
  - How do other companies write their code?

``` js
function charCount(str) {
  const obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    // regex for alphanumeric characters
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
```

```js
// this solution's runtime is faster than regex
function charCount(str) {
    const obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // uppercase (A-Z)
      !(code > 96 && code < 123)) { // lowercase (a-z)
        return false
      } 
  return true
}
```