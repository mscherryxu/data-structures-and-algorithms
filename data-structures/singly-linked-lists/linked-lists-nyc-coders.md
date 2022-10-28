# Linked Lists by Alvee Akand

## What is a linked list?

- A linear data structure.
- Each unit is represented as a node.
- A node has pointer(s) to other nodes.
- Non-contiguous in memory.
  - Nodes can be added anywhere in RAM.
- Recursive structure.

## Node Class

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// const head = new Node(1);
// head.next = new Node(2);
// console.log(head)

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value) {
    // create a new Node
    const node = new Node(value);
    // if Linked List is empty
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return value;
  }

  search(target) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === target) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }
    return null;
  }
}
```

## Doubly Linked List

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.prev = head;
```

## Time Complexity Comparison

| | Singly Linked List | Doubly Linked List
| - | ----------- | ----------- | 
| Add at Head | O(1) | O(1) |
| Add at Tail | O(1) | O(1) |
| Remove at Head | O(1) | O(1) |
| Remove at Tail | O(n) | O(1) |
| Remove at Index | O(n) | O(n) |
| Search |  O(n) | O(n) |

## Example

- Always keep track of next node for any changes

```js
/* 
Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1] 

Input: head = [1,2]
Output: [2,1]

Input: head = []
Output: []
*/

const reverseList = head => {
  // case 1: empty
  if (head === null) return null;

  // case 2: one node
  if (head.next === null) return head;

  // general case
  let prev = null;
  let cur = head;

  while (cur !== null) {
    // save next node's reference
    const nextNode = cur.next;
    // update current node's next property to previous node
    cur.next = prev;
    // update prev reference
    prev = cur;
    // update cur reference
    cur = nextNode;
  }
  return prev;
}
```

### Recursive Solution to Example

```js
const reverseList = head => {
  // case 1: empty
  if (head === null) return null;

  // case 2: one node
  if (head.next === null) return head;

  // general case
  const reversedHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return reversedHead;
}
```