# Objectives

- Explain what a class is
- Understand how JS implements the idea of classes
- Define terms like abstraction, encapsulation, and polymorphism
- Use ES2015 classes to implement data structures

## What is a class?

- A blueprint for creating objects with pre-defined properties and methods.
- Syntactic sugar and JS is not truly object-oriented.

## Why do we need to learn this?

We're going to implement data structures as classes.

## The Syntax

```js
// `this` refers to the individual instance of the class
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let firstStudent = new Student("Blossom", "Utonium");
let secondStudent = new Student("Bubbles", "Utonium");
```

The method to create new objects must be called constructor. Constructor runs whenever a new student/class is instantiated.

The class keyword creates a constant, so you cannot redefine it. Watch out for the syntax as well!