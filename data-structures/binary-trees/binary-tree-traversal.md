# Binary Tree Traversal [NYC Coder Slides by Alvee Akand](https://docs.google.com/presentation/d/12qJGgiX1rk5rVfDB43Grer3H-Xh-ZR37w1fT-LLxMK8/edit#slide=id.g35f391192_00)

## Breadth-First Search (also known as Level Order Traversal)

- Traversal means to go through each element systematically
- Level order traversal goes from left to right and top to bottom
  -Each node only has one parent

1. Always start at root
2. Use a queue data structure to keep track of traversal
3. For any given node, you have to add all of its children into the queue

### What is a queue?

- First In, First Out data structure
- Establishes an order to data insertion
- Has 3 operations
  - Enqueue to insert data
  - Dequeue to remove data
  - Size is the length of data
- Use while loop when you don't know how many times you need to traverse something
- In JS, we'll use an array as a queue
  - Enqueue -> array.push
  - Dequeue -> array.shift
  - Size -> array.length

```js
const BST = () => {
  // create a queue
  const q = [];
  // enqueue the root node in the queue
  q.push(root);
  // while queue is not empty
  while (array.length !== 0) {
    const currentQueueSize = q.length;
    // for each node in the queue
    for (let i = 0; i < currentQueueSize; i++) {
      // dequeue a node
      const node = q.shift();
      // perform operation(s) with node
      console.log(node.val);
      // if node has a left node
      if (node.left !== null) {
        // add left node to the queue
        q.push(node.left);
      }
      // if node has a right node
      if (node.right !== null) {
        // add right node to the queue
        q.push(node.right);
      }
    }
  }
};
```

```js
/* Leetcode Problem
637. Average of Levels in Binary Tree
Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].

Example 2:

Input: root = [3,9,20,15,7]
Output: [3.00000,14.50000,11.00000]
*/
const averageOfLevels = (root) => {
  const q = [];
  const result = [];

  q.push(root);

  while (q.length !== 0) {
    let sum = 0;
    const currentQueueSize = q.length;

    for (let i = 0; i < currentQueueSize; i++) {
      const node = q.shift();
      sum += node.val;

      if (node.left !== null) {
        q.push(node.left);
      }
      if (node.right !== null) {
        q.push(node.right);
      }
    }
    const average = sum / currentQueueSize;
    result.push(average);
  }
  return result;
};
```

## Depth-First Search

### There are 3 types of DFS

- Pre-Order Traversal
  - Using data from 1st access
- In-Order Traversal
  - Using data from 2nd access
- Post-Order Traversal
  - Using data from 3rd access

1. Traversal starts at root, jump to left child
2. From left child, jump left to null and go back from where you came from
3. From left child, jump right and go back up too
4. Goes back to parent
5. From right child, jump left and go back to node
6. From right child, jump right and go back up too
7. Root is then returned

4 takeaways

1. A downward array is a recursive call
2. An upward arrow is a return statement from recursive call that was made
3. Child node can't access parents directly
4. **We have access to each node 3 times**

   - 1st access is from parent node
   - 2nd access is return from left recursive call
   - 3rd access is from from right recursive call

```js
var preorderTraversal = (root) => {
  // base case
  if (root === null) return;

  // 1st access
  console.log("1A ", root.val);

  // recursive call #1
  preorderTraversal(root.left);
  // if you want to keep data, create a variable
  // i.e. const leftTreeReturnValue = preorderTraversal(root.left);

  // 2nd access
  console.log("2A ", root.val);

  // recursive call #2
  preorderTraversal(root.right);

  // 3rd access
  console.log("3A ", root.val);

  return;
};
```

In in-order traversal, elements are in sequential order.
In post-order traversal, the last element is the root node.

```js
/*
104. Maximum Depth of Binary Tree
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2
 
Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
*/

const maxDepth = (root) => {
  // base case: empty tree
  if (root === null) return 0;

  const leftMaxDepth = maxDepth(root.left);
  const rightMaxDepth = maxDepth(root.right);

  return 1 + Math.max(leftMaxDepth, rightMaxDepth);
};
```

- Go over 2 articles and videos in slides
