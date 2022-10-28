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
}
```