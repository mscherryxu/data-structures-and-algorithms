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

## Arrays

- Ordered
- When to use arrays
  - Access - O(1)
  - Searching - O(n)
  - Insertion - Depends on where element is inserted
    - If inserted end of array, O(1)
    - If inserted at beginning of array, every element of array will have to be reindexed, O(n)
  - Removal - Depends on where element is removed
    - Same as insertion due to reindexing
  - push and pop is faster than shift and unshift
- Big O of array methods (you don't need to know all this!)
  - push O(1)
  - pop O(1)
  - shift O(n)
  - unshift O(n)
  - concat O(n)
  - slice O(n)
  - splice O(n)
  - sort O(n * log n)
  - forEach/map/filter/reduce, etc O(n)
- Time complexity is best from adding/removing from end of array