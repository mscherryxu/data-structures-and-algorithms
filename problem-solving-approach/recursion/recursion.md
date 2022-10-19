# Recursion (from NYC Coders)

How to visualize and think about recursion.

## What is recursion?

- A method of solving problems.
- Break down problems into subproblems.
- Find the smallest possible subproblem.
- Use subproblem solutions to solve the main problems.

## Recursive function

- A base case to stop the recursion.
- A function that calls itself.
- The state must converge towards the base case.

```js
function recursion() {
  recursion();
}

recursion();
```

Whenever you make a call, the function is put on the call stack until computer runs out of memory.

```js
// example
function countdown(n) {
  console.log(n);

  // base case
  if (n === 0) return;

  // recursive call
  countdown(n-1);
  return;
}

countdown(2);
```

Recursion implicitly uses the call stack.

For the example:

- Global execution context
  - Contains global memory
    - Contains `countdown function`
- `countdown(2)` has its own execution context
  - Local memory with `n: 2`
  - Another execution context is created `countdown(1)`
    - Local memory with `n: 1`
    - Next execution context is created `countdown(0)`
      - Local memory with `n: 0`
- Call stack
  - Contains `countdown(2)`, `countdown(1)`, `countdown(0)`
  - Will be empty after running all functions and global execution context will still be there if app is still running.

## Example #1

```js
/* Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory. 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

const reverseString = (s) => {
  helper(0, s.length-1, s);
}

const helper = (l, r, arr) => {
  // base case
  if (l >= r) {
    return;
  }

  // swap values at l and r index
  [arr[l], arr[r]] = [arr[r], arr[l]];

  // make recursive call
  helper(l + 1, r - 1, arr);
}

reverseString(["i", "c", "e"]);
// swapping occurs in the global execution context
```

**Think of inputs, outputs, and constraints.**

Strings are immutable, if characters are swapped, it'll be a new string.

## Example #2

```js
/* 
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

Example 1:

Input: num = 14
Output: 6
Explanation: 
Step 1) 14 is even; divide by 2 and obtain 7. 
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3. 
Step 4) 3 is odd; subtract 1 and obtain 2. 
Step 5) 2 is even; divide by 2 and obtain 1. 
Step 6) 1 is odd; subtract 1 and obtain 0.

Example 2:

Input: num = 8
Output: 4
Explanation: 
Step 1) 8 is even; divide by 2 and obtain 4. 
Step 2) 4 is even; divide by 2 and obtain 2. 
Step 3) 2 is even; divide by 2 and obtain 1. 
Step 4) 1 is odd; subtract 1 and obtain 0.

Example 3:

Input: num = 123
Output: 12
*/

// case 1: 0, return 0
// case 2: odd, num -= 1
// case 3: even, num /= 2

function numberOfSteps (num) {
  // base case
  if (num === 0) {
    return 0;
  }

  // recursive calls

  // even
  if (num % 2 === 0) {
    const steps = numberOfSteps(num / 2);
    return 1 + steps;
  } else { // odd
    const steps = numberOfSteps(num - 1);
    return 1 + steps;
  }
}
```