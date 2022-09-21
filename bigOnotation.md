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

## Big O Notation allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

- Only care about trends
  - O(1) is constant
  - O(n) is linear
    - i.e. one for loop
  - O(n^2) is quadratic
    - O(n) operation nested inside of an O(n) operation, like nested for loops
  - Could be something entirely different!
- When n grows, what would the chart look like?
- Looking at worst case scenario

## Simplifying Big O Notations

- 