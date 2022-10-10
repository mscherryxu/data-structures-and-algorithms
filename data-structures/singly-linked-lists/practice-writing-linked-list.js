// notes from Structy

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D -> NULL

const printLinkedList = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

const recursivelyPrintLinkedList = (head) => {
  if (head === null) return;
  console.log(head.val);
  recursivelyPrintLinkedList(head.next);
};

/* Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListValues = (head) => {
  const values = [];
  let current = head;
  while (current !== null) {
    values.push(current);
    current = current.next;
  }
  return values;
};

// recursive solution
const recursiveLinkedListValues = (head) => {
  const values = [];
  fillValues(head, values);
  return values;
};

const fillValues = (head, values) => {
  if (head === null) return;
  values.push(head.val);
  fillValues(head.next, values);
};

// sum list
const sumList = (head) => {
  let sum = 0;
  let current = head;
  while (current !== null) {
    sum += current.val;
    current = current.next;
  }
  return sum;
};

// recursive solution
const recursiveSumList = (head) => {
  if (head === null) return 0;
  return head.val + sumList(head.next);
};
