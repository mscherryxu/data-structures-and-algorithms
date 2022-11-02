# [Hash Tables by Alvee Akand](https://docs.google.com/presentation/d/14SGqvWScvuQrWZqOzV_HasOTO7tnIlympT22ZnKpZHs/edit#slide=id.g35f391192_00)

## Outline

- Hash table intro
- Hash functions
- Discuss a Hash Table class
- Solve problems

## Abstract Data Type (ADT)

- Gives you a sense of what operations are available
- A type (or class) for objects whose behavior is defined by a set of values and a set of operations.

## What is a hash table?

- ADT that is also called dictionary/map
- Represents key-value pairs
- Methods
  - set (key, value)
  - remote (key)
  - get (key) -> returns value
  - search (key) -> returns true/false
- Hash table is an implementation of the dictionary/map ADT.
- How is a hash table built?
  - Use array as a base of the structure
  - Create a key 'name' with a value 'Al'
    - `user['name'] = 'Al'`
  - Hash function that takes in a key as an input and outputs an index
  - Keys are unordered in hash tables, but `Map` object is ordered

## Hash Function Properties

- It is fast. (Assume O(1) time complexity)
- For a specific input, it will always return the same output.
- Spreads out the addresses and indices fairly evenly in the given range.
- A perfect hash function would distribute the values evenly across a given range.

## Collision Handling

- Adds value to end of linked list

### Separate Chaining

- Still have to copy with an unbounded data set

### Linear Probing

- Open-addressing has a bunch of different techniques, such as linear probing
- Easier than separate chaining for unbounded data set

## Hash Table Methods

- get(key): returns the value for the given key.
- set(key, val): sets the value for the given key.
- remove(key): removes the given key.
- keys(): returns all the keys in the table.
- values(): returns all the values in the table.