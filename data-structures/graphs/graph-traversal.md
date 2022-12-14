# Graph Traversal [NYC Coder Slides by Alvee Akand](https://docs.google.com/presentation/d/1P-JHWl1k3Hgy6tiHaOHrZoA7gOcJ27Nvq475Q3JXFB8/edit#slide=id.g35f391192_00)

## Learn how to traverse graphs using

- Breadth-first search
- Depth-first search

### Graphs are a way to draw relationships between things

- Complex relationships between data
- Unweighted graphs do not have directions
- Generally there will not be any duplicate values (no 2 roads are the same)
- [Graph traversal starter code](https://alvee.notion.site/Graph-Traversal-Starter-Code-c0e14c9ba6774147be197d015228562d)

## Breadth-First Search

- From the point you start, you explore the data structure by visiting the nearest neighbors (vertices/nodes) first before going anywhere else.
  - In binary trees, start from level 0 (root) to other levels.
- Graph does not have a fixed starting point.
- Source/start node has a level of 0, the number of nodes away from the source node is the level.

### Pseudocode

- Initialize a set for tracking visited vertices
- Initialize a queue for tracking traversal
- Add the start vertex to visited
- Enqueue the start vertex
- While the queue is not empty
  - Dequeue a vertex
  - For each neighbor of the vertex
    - If neighbor has not been visited
      - Add neighbor to visited
      - Enqueue neighbor

```js
const graph = {
  0: [1, 3, 6],
  1: [0, 4, 5],
  2: [5, 7],
  3: [0, 5],
  4: [1, 6],
  5: [1, 2, 3],
  6: [0, 4],
  7: [2],
};

// Set will be used to check which vertices were visited
// Queue (FIFO) will be used to maintain the order of vertices visited
function bfs(start, graph) {
  const visited = new Set();
  const queue = [];

  queue.push(start);
  visited.add(start);

  while (queue.length) {
    const vertex = queue.shift();
    console.log(vertex);

    for (let neighbor of graph[vertex]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

bfs(0, graph);
```

### Pseudocode (iterative BFS)

- Initialize a set for tracking visited vertices
- Initialize a stack for tracking traversal
- Add the start vertex to visited
- Push the start vertex to the stack
- While the stack is not empty
  - Pop a vertex from the stack
  - For each neighbor of the vertex
    - If neighbor has not been visited
      - Add neighbor to visited
      - Push neighbor to the stack

## Matrix

- Use a matrix when there is a dense graph.

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

- Unique ID are the coordinates (row, column).
- Moving toward neighbors:
  - Up (row - 1, 0)
  - Down (row + 1, 0)
  - Left (0, column - 1)
  - Right (0, column + 1)

### Graph DFS

```js
function bfs(startRow, startCol, matrix, target) {
  // direction vectors
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const q = new Queue();
  q.enqueue([startRow, startCol]);

  // create set
  // create and add unique identifier (coordinates) to set
  const visited = new Set();
  const coordKey = `${startRow} - ${startCol}`;
  visited.add(coordKey);

  while (q.getSize() !== 0) {
    // dequeue a vertex
    const [r, c] = q.dequeue();

    // return true if target value found
    const curVal = matrix[r][c];
    if (curVal === target) {
      return true;
    }
  }

  // explore neighbor
  // add neighbor to queue
  // if valid position and not visited
  for (let dir of dirs) {
    // const dr = dir[0];
    // const dc = dir[1];
    const [dr, dc] = dir; // shorter way to write dr, dc
    const nR = r + dr;
    const nC = c + dc;
    const coordKey = `${nR}-${nC}`;
    if (isValidPos(nR, nC, matrix) && !visited.has(coordKey)) {
      visited.add(coordKey);
      q.enqueue([nR, nC]);
    }
  }
  return false;
}

function isValidPos(r, c, matrix) {
  return r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length;
}
```

### Matrix DFS

```js
function isInvalidPos(r, c, matrix) {
  return r < 0 || r >= matrix.length || c < 0 || c >= matrix[0].length;
}

function dfs(r, c, matrix, target, visited = new Set()) {
  // base cases 1, 2
  if (isInvalidPos(r, c, matrix) || visited.has(matrix[r][c])) {
    return false;
  }

  // add current vertex value to visited
  const curNum = matrix[r][c];
  visited.add(curNum);

  // base case 3 (not part of general DFS traversal)
  if (matrix[r][c] === target) {
    return true;
  }

  // recursive calls
  const hasTarget =
    dfs(r - 1, c, matrix, target, visited) ||
    dfs(r + 1, c, matrix, target, visited) ||
    dfs(r, c - 1, matrix, target, visited) ||
    dfs(r, c + 1, matrix, target, visited);
  return hasTarget;
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const startRow = 0;
const startCol = 1;
const target = 9;

const res = dfs(startRow, startCol, arr, target);
console.log(res);

// Time complexity is O(V + E), goes through all vertices and edges
```

- Read articles from resources in slides
- Watch videos (graph traversals and shortest paths from CSE373) along with graph theory playlist
  - Watch MIT videos from lecture 13 after going through practice problems, articles, and previous videos
- Algorithms (4th Edition) by Robert Sedgewick & Kevin Wayne has a great graph section (in Java)
