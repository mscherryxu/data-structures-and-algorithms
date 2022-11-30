# Stacks and Queues by Alvee [NYC Coders slides](https://docs.google.com/presentation/d/1OZIGs80yQLrrLiCjsLSfAzedNYmhSTWO0KYyJ0l16UM/edit#slide=id.g35f391192_00)

## What is a stack

- An ordered collection of elements where elements are added to and removed from the top.
- Follows LIFO (Last In First Out).
- Do not have a fixed size.

### What are some use cases for stacks?

- Gives order to data.
- Function called last is the first one to be executed.
- Can unravel recursion with a stack. Recursion implicitly uses call stack.

### Stack Methods

- Push(val): adds a value to the stack (O(1)).
- Pop: removes and returns the last value that was inserted (O(1)).
- Peek: returns the value at the top of the stack.
- Size: returns the number of values in the stack.
- isEmpty: checks if the stack is empty or not.

### Implementation

- A stack can be implemented using:
  - Array
  - Linked List
    - Add and remove from the head of the list.
- The optimal implementation uses a linked list.
- Arrays are not used since they are fixed size whereas stacks are dynamic.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(val) {
    // create a new node with value `val`
    const newHead = new Node(val);
    // point the new node's next to head
    newHead.next = this.head;
    // update head to new node
    this.head = newHead;
    // increment size property
    this.size++;
  }

  pop() {
    // edge case: return null if stack is empty
    if (isEmpty()) return null;

    // save reference to old head
    const oldHead = this.head;
    // update head reference to old head's next
    this.head = oldHead.next;
    // delete the old head from memory
    oldHead.next = null;
    // decrement size
    this.size--;

    // return the old head value
    return oldHead.value;
  }

  peek() {
    return this.head ? this.head.value : null;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

const myStack = new Stack();
myStack.push(1);
```

## Queue

- FIFO (First In First Out)
- Head is the left-most element and tail is the right-most element in Linked List.

### Queue Methods

- Enqueue is similar to push array method (O(1)).
- Dequeue is similar to shift array method (O(n)).
- Peek: returns the value at the beginning of the queue.
- Size: returns the number of values in the queue.
- isEmpty: checks if the queue is empty or not.

```js
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(val) {
    // create the new node
    const newTail = new Node(val);
    // append to the tail if it exists
    if (thi.tail !== null) {
      this.tail.next = newTail;
    }
    // update the tail reference
    this.tail == newTail;
    // update head reference if it's null
    if (this.head === null) {
      this.head = newTail;
    }
    // increment the size
    this.size++;

    /* Completed method in lines 129 to lines 139 in group programming
    let node = new Node(val);
    if (this.size === 0) {
      this.tail = node;
    } else {
      if (this.size === 1) {
        this.tail.next = node;
      }
      this.head.next = node;
    }
    this.head = node;
    this.size += 1; */
  }
  dequeue() {
    // return null if queue is empty
    if (this.isEmpty()) return null;

    // store old head
    const oldHead = this.head;

    // update head reference
    this.head = oldHead.next;

    // remove old head's next reference
    oldHead.next = null;

    // update tail reference if queue has become empty
    if (this.head === null) {
      this.tail = null;
    }

    // update size
    this.size--;

    // return old head value
    return oldHead.value;

    /* Completed method in lines 166 to lines 176 in group programming
    if (this.size === 0) return null;
    let node = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.next;
      node.next = null;
    }
    this.size -= 1;
    return node;
    */
  }

  peek() {
    return this.head ? this.head.value : null;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.dequeue(); // returns 1
```
