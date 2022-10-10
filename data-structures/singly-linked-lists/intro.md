# Singly Linked Lists

## Objectives

- Define what a Singly Linked List is
- Compare and contrast Linked Lists with Arrays
- Implement insertion, removal and traversal methods on Singly Linked Lists

## What is a linked list?

- A data structure that contains a head, tail, and length property.
- Linked Lists consist of nodes, and each **node** has a **value** and a **pointer** to another node or null.
- Each element is a node. A node stores a piece of data (string/number, etc), but it also references the next node, or if it's at the very end, there is no next node. It references `null`.


- **Head** is the beginning of a linked link.
- **Tail** is the end, so we don't keep track of every single item in the middle.
- Must have **head**, do not always need **tail**
- We just keep track of the head and from the head we can figure out the next one and from there we can figure out the next one all the way until the end.
- A linked lists is a bunch of nodes pointing to another node.
- Unidirectional.

## Comparisons with arrays

### Lists

- Do not have indices!
- Connected via nodes with a **next** pointer
- Random access is not allowed
- Great at insertion and deletion

### Arrays

- Indexed in order
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index