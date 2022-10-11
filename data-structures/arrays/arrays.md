# Array Patterns II (from NYC Coders)

## Outline

- Learn the following patterns:
  - 2D Arrays/Matrix
  - Merge Intervals
  - Sliding windows

## Process

- Pattern introduction and walkthrough
- Pair program on LeetCode problems
- Discussion and walkthrough

## 2D Arrays/Matrix

- Rows r = 0, r = 1, r = 2
- Columns c = 0, c = 1, c = 2

```js
array = [1,2,3];
maxtrix = [
  [1,2,3], 
  [4,5,6], 
  [7,8,9]
  ];

matrix[0]; // [1,2,3]

/*        column
         1  2  3

row 0    1  2  3
row 1    4  5  6
row 2    7  8  9
*/
// 1 has a position of (0,0)
// 5 has a position of (1,1)
```

```js
/*
Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0].
 

Example 1:

Input: image = [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
Example 2:

Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
*/

const flipAndInvertImage = (image) => {
    // flip each array in matrix
    const reversed = [];
    for (let i = 0; i < image.length; i++) {
        const row = image[i];
        const reversedRow = [];
        for (let j = row.length - 1; j >= 0; j--) {
          // then change 1 -> 0 and 0 -> 1
            if (row[j] === 0) {
             reversedRow.push(1);   
            } else {
             reversedRow.push(0);
            }
        }
        reversed.push(reversedRow);
    }
    return reversed;
};
```