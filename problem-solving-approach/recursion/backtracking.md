# Backtracking (NYC Coders)

## Recursive Tree

- Recursive processes can be visualized as trees.
- Each recursive call is thought of as a node.
- Helps model complex solutions more effectively (mazes, permutations, subsets, etc).

## Fibonacci Example

```js
function fibonacci(n) {
  // base case
  if (n <= 1) return n;
  // recursive case
  return fibonacci(n-1) + fibonacci(n-2);
}
```

- For every recursive call, you draw a new branch.
- [Visualgo](https://visualgo.net/en/recursion) - see it visually

## Backtracking Definition

- Technique for trying out all possible solutions and choosing all of them or only the best ones.
- Check each solution recursively and decides whether it's valid or not.
- If a path is invalid it "backtracks" and goes down a different path.

## Backtracking Template

```py
result = []

def backtrack(Path, Selection List):
  if meet the End Condition:
    result.add(Path)
    return

  for selection in Selection List:
    select
    backtrack(Path, Selection List)
    deselect
```

## Subsets Example

```js
/* 
Given an array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Constraints: 
- 1 <= nums.length <= 10
- -10 <= nums[i] <= 10
- All numbers of nums are unique

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/

const subsets = nums => {
  const initialPath = [];
  const result = [];

  helper(0, initialPath, nums, result);

  return result;
}

const helper = (i, path, input, output) => {
  // base case
  if (i === input.length) {
    // make a copy of path
    // add the copy to output
    output.push(path.slice());
    return;
  }

  // recursive calls
  // exclusion
  helper(i+1, path, input, output);
  // inclusion
  path.push(input[i]);
  helper(i+1, path, input, output);
  path.pop();
  return;
}

const userInput = [1,2];
subsets(userInput);
```

### Time complexity

- Time complexity to copy array (O(n)) * number of base cases (2^n) * number of intermediate nodes (O(1 * (2^n)))
- O(n * 2^n) + O(2^n) ~> O(n * (2^n))
- Total nodes = (2^(n+1)) - 1

### Space complexity

- Max possible size of the call stack
- As you go down the branch, your call stack increases.
- As you go up the branch, your call stack decreases.
- O(n)