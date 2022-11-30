/**
 * Use reduce to map
 */

const nums = [1, 2, 3, 4];

const result = nums.reduce((acc, num) => {
  acc.push(Math.pow(num, 2));
  return acc;
}, []);

// [1,4,9,16];

/**
 * Use reduce to filter
 */

const allNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenOnly = allNums.reduce((acc, num) => {
  console.log("accum", acc);
  if (num % 2 === 0) {
    acc.push(num);
  }
  return acc;
}, []);
