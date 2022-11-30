/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

const isValid = (s) => {
  // edge case: return false if s has an odd number of characters
  if (s.length % 2 !== 0) return false;

  // initialize a stack
  const stack = [];

  // initialize a map for matching pairs
  const match = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);

  // iterate through s
  for (const bracket of s) {
    // if open parenthesis push to stack
    if (match.has(bracket)) {
      stack.push(bracket);
      // else match pairs and pop off stack
    } else {
      // if stack is not empty, compare with top bracket
      if (stack.length !== 0) {
        const lastOpen = stack.pop();
        if (match.get(lastOpen) !== bracket) {
          return false;
        }
      } else {
        // else return false
        return false;
      }
    }
  }
  // return true if stack is empty
  return stack.length === 0;
};
