# Recursion

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