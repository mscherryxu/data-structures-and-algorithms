# Binary Trees [NYC Coder Slides by Alvee Akand](https://docs.google.com/presentation/d/1GivCq4W2UfDoC3k9Bv3K1kz5u6pYUEk46pAIdVMbZPU/edit#slide=id.g35f391192_00)

## What is a tree?

- A data structure made up of linked nodes.
- Is also a type of graph.
- One node can link to any number of children.
- We will mainly be using binary trees and binary search trees.

## What is a binary tree?

- A binary tree is a specific category of trees.
- A binary tree node can point to 2 child nodes at most.
- Properties:
  - Non-linear
  - Hierarchical
    - Can only go from parent node to child node, but not vice versa.
  - Acyclic
    - A node cannot reference itself.
  - Recursive
    - Any children of the tree can be the root of its subtree.

```js
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
```

### Terminology

- **Root node** is at the top of the tree.
- **Leaf nodes** are the last nodes of a tree and both left and right points to `null`.
- **Link/edge** are the connections between the nodes.
- **Siblings** share the same parent node.
- **Level** refers to all the nodes that are a certain distance/steps from the root.
- **Depth** is node-specific. This is in reference to the root. Root has as depth of 0. Depth of 1 means the node is one step away from the root.
- **Height** is also node-specific. This is in reference from the furthest leaf node.
- **Height of a tree** is the height of the root node.
- **Path** is an ordered list of nodes that are connected by edges.

Directories and DOM are structured as trees.

### Definition of a BST

- A binary search tree (BST) is a type of binary tree.
- A valid BST is defined as follows:
  - The left subtree of a node contains only nodes with values less than the node's values.
  - The right subtree of a node contains only nodes with values greater than the node's values.
  - Both the left and right subtrees must also be binary search trees.

```js
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    // Time complexity: O(n)
  }

  find(val) {
    // Time complexity: O(n)
  }

  remove(val) {
    // Time complexity: O(n)
  }
}
```

Heap data structure does what Leetcode does in the background: converts input array into a BST.

```js
/* Leetcode Problem 700. Search in a Binary Search Tree
You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

Example 1:

Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]
Example 2:

Input: root = [4,2,7,1,3], val = 5
Output: []

Constraints:
The number of nodes in the tree is in the range [1, 5000].
1 <= Node.val <= 107
root is a binary search tree.
1 <= val <= 107
*/

var searchBST = function (root, val) {
  let curNode = root;

  while (curNode !== null) {
    if (val < curNode.val) {
      curNode = curNode.left;
    } else if (val > curNode.val) {
      curNode = curNode.right;
    } else {
      return curNode;
    }
  }

  return null;
};
```

- In BST, if the tree size is doubled, only need 1 more operation since we will be looking at right/left of node.
- In a BST that is not balanced (skewed left/right), it would be O(n) for the search method.
- Self-balancing trees, such as AVL tree, imbed additional info in node.
  - Each node will need more space to hold more info, such as height.
  - If height exceeds a certain value, tree would re-balance itself.
  - Has 4 different rotations.

```js
/* Leetcode Problem 701. Insert into a Binary Search Tree
You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

Example 1:
Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]
Explanation: Another accepted tree is:

Example 2:
Input: root = [40,20,60,10,30,50,70], val = 25
Output: [40,20,60,10,30,50,70,null,null,25]
Example 3:

Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
Output: [4,2,7,1,3,5]
 
Constraints:
The number of nodes in the tree will be in the range [0, 104].
-108 <= Node.val <= 108
All the values Node.val are unique.
-108 <= val <= 108
It's guaranteed that val does not exist in the original BST.
*/

var insertIntoBST = function (root, val) {
  let newNode = new TreeNode(val);

  if (root === null) return newNode;

  let curNode = root;
  while (true) {
    if (val < curNode.val) {
      // insert if can't go left
      if (curNode.left === null) {
        curNode.left = newNode;
        return root;
      }
      // go left
      curNode = curNode.left;
    } else {
      // insert if can't go right
      if (curNode.right === null) {
        curNode.right = newNode;
        return root;
      }
      // go right
      curNode = curNode.right;
    }
  }

  /* recursive solution
    if (root === null) {
        return newNode;
    } else if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }
    return root;
    */
};
```
