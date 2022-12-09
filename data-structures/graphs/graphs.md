# Graphs [NYC Coder Slides by Alvee Akand](https://docs.google.com/presentation/d/1Bm7VyihBibC3KnexFm5JwpfFv465vCCLf-4ZFZ_10og/edit#slide=id.g35f391192_00)

## Review of previous data structures

- Arrays and linked lists are both linear data structures.
- Trees are a non-linear data structure and have hierarchical relationships.
  - Always start at the root.
  - Relationships are encoded in nodes.
  - Node has value and relationship with left and right.
  - A node can have 0-2 children in a binary tree.
    - Each node can only have one parent.

## What is a graph?

- A non-linear data structure made up of a finite set of vertices connected by a set of edges.
- Many ways to go through structure, which makes it non-linear.
- **Vertices** include the values.
- **Edges** are the connection between vertices.
- There is no limit to how many edges a vertex can have.
- Can encode information in edges.
- Graphs can define broader range of relationships.
  - In the real world, most of the data isn't hierarchical.

## What is a path?

- A set of vertices connected through edges.

## What is a degree of a vertex?

- Number of edges from a vertex

## What is a cycle?

- A path with repeated vertices (start and end are the same vertex).

## What is in-degree? What is out-degree?

- If there are directions indicated in a graph, use in-degree or out-degree of vertex.
- In-degree of a vertex is how many arrows pointing to a specific vertex.
- Out-degree of a vertex is how many arrows are pointing out of vertex.

## Types of Graphs

- 2 broad types:
  - Undirected graph
  - Directed graph
- Both of these can also be weighted:
  Weights denote the cost of travelling between vertices.

## Applications

- Social Network
  - i.e. Instagram, if only one party is following the other party, it's unidirectional
  - If both parties follow each other, it's bidirectional

## Subcategories

- Trees: Undirected graph with no cycles which is connected. All vertices are connected by edges.
- Rooted trees: A tree with a designated root node where each node points to child nodes.
- DAG (directed acyclic graph). A root tree where edges spread out from the root is a DAG.

## Assumptions of graphs

1. No self-loops in a graph.
2. No parallel edges (not a multigraph).

## How are graphs represented?

- 3 ways:
  - Edge list
    - An array of all edges in a graph.
    - Notation:
      - Unweighted: [u,v]
      - Weighted: [u,v,w]
      - u represents outgoing vertex, v represents incoming vertex, and w represents the weight.
    - The edges do not follow a particular order.
    - Rarely used since there's no order.
    - Usually an edge list is converted to an adjacency list.
  - Adjacency matrix
    - Adjacent/neighbors are terms you will see a lot.
    - Matrix is a 2-dimensional array of connected vertices.
  - Adjacency list
    - A hash map is used to store nodes.
    - Keys are the vertices, and values are the list of the edges.
    - The list can be an array, linked list, or doubly linked list.
  - [Visuals for each graph.](https://visualgo.net/en/graphds?slide=1)

```js
// Class for undirected graph
class AdjacencyList {
  constructor() {
    this.list = {};
  }

  addVertex(v) {
    if (!this.list[v]) {
      this.list[v] = [];
    }
  }

  addEdge(v1, v2) {
    this.list[v1].push(v2);
    this.list[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.list[v1] = this.list[v1].filter((v) => v !== v2);
    this.list[v2] = this.list[v2].filter((v) => v !== v1);
  }

  removeVertex(v) {
    // while vertex has neighbors:
    while (this.list[v].length) {
      // removeEdge(vertex, neighbor);
      const neighbor = this.list[v].pop();
      this.removeEdge(v, neighbor);
    }
    // remove vertex from list
    delete this.list[v];
  }
}

const myGraph = new AdjacencyList();
```

## Space Complexity

- Multivariable analysis
- |V| = total number of vertices
- |E| = total number of edges
- Rows are `u` and columns are `v`
- Space complexity is O(|V^2|) in adjacency matrix.
- Look at chart in slides and VisualAlgo to understand
- Adjacency List takes up less space and are more common.

## Time Complexity

- For adjacency matrix (used for dense graphs):
  - Adding a vertex is O(|V|^2)
  - Adding/removing an edge is O(1)
- For adjacency list (used for sparse graphs):

  - Remove a vertex is O(|V| + |E|)
  - Remove edge is O(deg(u)) <!-- Number of edges -->

- Read articles and watch videos for more information on graphs
- [Code Signal graph problems](https://app.codesignal.com/arcade/graphs-arcade/kingdom-roads/nCMisf4ZKpDLdHevE/) are free
- Additional reference book for graphs: Algorithms (4th Edition) by Robert Sedgewick and Kevin Wayne
