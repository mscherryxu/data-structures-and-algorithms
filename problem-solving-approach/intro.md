# Algorithms and Problem Solving Patterns

## Objectives

- Define what an algorithm
  - A process or set of steps to accomplish a certain task
  - It's the **foundation** for being a successful problem solving and developer
- Devise a plan to solve algorithms
- Compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer

## How do you improve?

1. Devise a plan for solving problems
   - Understand the problem
   - Explore concrete examples
   - Break it down
   - Solve/simplify
   - Look back and refactor
   - Strategies are adapted from George Polya's book - How To Solve It - great resource for anyone who wants to become a better problem solver
2. Master common problem solving patterns

## Understand the Problem

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can outputs be determined from inputs? Do I have enough information to solve the problem?
   - It's okay to not be able to answer this question until you start solving the problem.
5. How should I label the important pieces of data that are a part of the problem?

Write a function which takes 2 numbers and returns their sum.

## Explore Concrete Examples

- Coming up with examples can help you understand the problem better.
- Examples also provide sanity checks that your eventual solution works how it should.
- User stories!
  - Given an input, what's the output?
- Unit tests!
  - To layout how a feature should work

1. Start with simple examples (with input and output)
2. Progress to more complex examples
   - Is it case-sensitive?
   - Do we return all the letters? { a: 4, b:0, c: 0 }
3. Explore examples with empty inputs
4. Explore examples with invalid inputs

## Break It Down

- Write down comments to understand problem
- Communicate what you're doing at an interview
  - "Here are the steps that I'm planning to take, is this the right way to go about it?"
  - Explicitly write out the steps you need to take.
  - Forces you to think about code before you write it.
  - Also helps catch any lingering questions.
  - Dive in and start writing code.

## Solve or Simplify

- Solve the problem, if you can't solve a simpler problem
  - Go to a place where you can start
  - Breaking it down into steps
- Simplify
  - Find the core difficulty in what you're trying to do
  - Temporarily ignore that difficulty
  - Write a simplified solution
  - Then incorporate that difficulty back in

```js
/* Write a function which takes in a string and returns counts of each character in the string */

// Ask questions if upper/lower case letters?
// Alphanumeric characters?

function charCount(str) {
  // make object to return at end
  const result = {};
  // loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    // if char is a number/letter AND is a key in result, add one to count
    if (result[char]) {
      result[char]++;
    }
    // if char is a number/letter AND is NOT a key in result, set value to 1
    else {
      result[char] = 1;
    }
  }
  return result;
}
```

Can ask interviewer questions before coding.
