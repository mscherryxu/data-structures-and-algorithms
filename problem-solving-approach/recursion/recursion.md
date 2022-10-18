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
function countdown(n) {
  // base case
  if (n === 0) return;
  // recursive call
  countdown(n-1);
}
```