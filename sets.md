# Sets

- Cannot have 2 same elements in a set

  ```js
  const mySet = new Set();
  // Can add multiple data types in set
  mySet.add(60);
  mySet.add(21);
  mySet.add(56);
  mySet.add({
    name: 'Dom',
    age: 24
  });
  mySet.add("dcode");
  mySet.add(67.89)l;

  // Find size of set
  console.log("How big is mySet? ", mySet.size);

  // Check for value (returns true/false)
  console.log("Does the set contain the number 25? ", mySet.has(25))

  // Delete item
  mySet.delete("dcode");

  // Loop through set
  for (let item of mySet) {
    console.log(item);
  }

  // Convert set into an array
  const myArray = Array.from(mySet);

  console.log("array", myArray);
  console.log("mySet", mySet);
  ```
