# Working with arrays, objects, and built-in methods through the lens of Big O

- Explain why adding elements to the beginning of an array is costly
- Compare and contrast runtime for arrays and objects, as well as built-in methods

## Objects

- Unordered, key-value pairs
- When to use objects
  - When you don't need order
  - O(1) - When you need fast access/insertion, removal, and updating
  - O(n) - Searching
- Big O of object methods
  - O(n) - Object.keys
  - O(n) - Object.values
  - O(n) - Object.entries
  - O(1) - Object.prototype.hasOwnProperty