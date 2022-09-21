# The Big O Notation

## Objectives

- Describe what it is
  - It's important to have a precise vocabulary to talk about how our code performs
  - Useful for discussing trade-offs between different approaches
  - When your code slows down or crashs, identifying parts of the code that are inefficient can help us with pain points in our applications
- Simplify big O expressions
- Time complexity and space complexity
  - Faster?
  - Less memory-intensive?
  - The problem with time
    - Different machines will record different times
    - The same machine will record different times
    - For fast algorithms, speed measurements may not be precise enough
  - If not time, then what?
    - Count the number of simple operations the computer has to perform!

## Big O Notation

- Only care about trends
  - O(1) is constant
  - O(n) is linear
    - The number of operations grow roughly proportional with n
    - i.e. one for loop
  - O(n<sup>2</sup>) is quadratic
    - O(n) operation nested inside of an O(n) operation, like nested for loops
  - Could be something entirely different!
- When n grows, what would the chart look like?
- Looking at worst case scenario

## Simplifying Big O Expressions

- **Time complexity** is the runtime of an algorithm as the size of the input increases
- Rules of thumbs
  - Constants don't matter
    - O(500) -> O(1)
    - O(2n) -> O(n)
    - O(13n<sup>2</sup>) -> O(n<sup>2</sup>)
  - Smaller terms don't matter
    - O(n + 10) -> O(n)
    - O(1000n + 50) -> O(n)
    - O(n<sup>2</sup> + 5n + 8) -> O(n<sup>2</sup>)
  - Big O Shorthands
    - Arithmetic operations are constant
    - Variable assignment is constant
    - Accessing elements in an array (by index) or object (by key) is constant
    - In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop
  
      ```js
      // O(n)
      function logAtLeast5(n) {
        for (let i = 0; i < Math.max(5, n); i++) {
          console.log(i);
        }
      }

      // O(1)
      function logAtMost5(n) {
        for (let i = 0; i < Math.min(5, n); i++) {
          console.log(i);
        }
      }
      ```

- **Space complexity** is the amount of memory we need to allocate in order to run the code in our algorithm
  - **Auxiliary space complexity** is the space required by algorithm only, not including space taken up by inputs
  - Rules of thumb
    - Most primitives are constant space
      - i.e. booleans, numbers, undefined, null
    - String require O(n) space, where n is the string length
    - Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)
    - O(1) is always the same no matter size of input
    - O(n) space is taken up by n numbers

## Logarithms

- 