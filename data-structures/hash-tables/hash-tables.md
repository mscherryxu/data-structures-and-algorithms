# [Hash Tables by Alvee Akand](https://docs.google.com/presentation/d/14SGqvWScvuQrWZqOzV_HasOTO7tnIlympT22ZnKpZHs/edit#slide=id.g35f391192_00)

## Outline

- Hash table intro
- Hash functions
- Discuss a Hash Table class
- Solve problems

## Abstract Data Type (ADT)

- Tells you about the general operations that you can perform with a data structure, such as a `List`
  - Can add, remove, and search on `List`
  - get (index)
- Gives you a sense of what operations are available and what type of data you're representing.

## What is a hash table?

- Implementation of an ADT that is also called `dictionary` or `map`
- Represents key-value pairs
- Methods
  - set (key, value)
  - remote (key)
  - get (key) -> returns value
  - search (key) -> returns true/false
- Hash table is an implementation of the dictionary/map ADT.
  - JS -> Objects {}
  - Python -> Dictionary
  - Java -> Map (Hash map, hash table)
- How is a hash table built?
  - Has 2 parts:
    - Array: stores data
    - Hash function: computes the index at which to store the data
  - Use array as a base of the structure
  - Create a key 'name' with a value 'Al'
    - `user['name'] = 'Al'`
  - Hash function takes in a key as an input and outputs an index
  - Keys are unordered in hash tables, but `Map` object is ordered

## Hash Function Properties

- It is fast. (Assume O(1) time complexity)
- For a specific input or key, it will always return the same output or index.
- Spreads out the addresses or indices fairly evenly in the given range.
- A perfect hash function would distribute the values evenly across a given range.

You can choose which hash function might be relevant based on the data type you're working with.

## What are collisions?

- A collision occurs when a hash function outputs the same index position for different keys.
- Collisions are usually unavoidable.
- There are different ways to resolve them.

## How to resolve collisions?

Depends on various factors (dataset, table size, etc)

### Two Most Common Ways to Handle Collision Are...

1. Separate Chaining
   - A doubly linked list is formed if the output/index is the same after adding a key-value pair to the hash table
   - If the output is the same, the output is added to the doubly linked list
   - Uses a lot of memory

2. Linear Probing (falls under open addressing)
   - Open-addressing has a bunch of different techniques, such as linear probing, quadratic probing, and double hashing
   - Easier than separate chaining for unbounded data set
   - This technique, we can scan forwards one index at a time for the next empty/deleted slot (wrapping around when we have reached the last slot) whenever there is a collision
   - Not using extra memory space
   - Easier for unbounded data set

## Hash Table Methods

- get(key): returns the value for the given key.
- set(key, val): sets the value for the given key.
- remove(key): removes the given key.
- keys(): returns all the keys in the table.
- values(): returns all the values in the table.

## Hash Table Class

```js
class HashTable {
  constructor() {
    this.array = [];
  }

  get(key) {}
  set(key, val) {}
  remove(key) {}
  keys() {} // returns an array of keys
  values() {} // return an array of values
}
```

## Time Complexity

- get O(1)
- set O(1)
- remove O(1)
- keys() O(n)
- values() O(n)

`Map` object holds key-value pairs too, but remembers original insertion order of keys, while hash tables do not remember order.

Hash tables allow computer to remember things and help reduce number of operations.