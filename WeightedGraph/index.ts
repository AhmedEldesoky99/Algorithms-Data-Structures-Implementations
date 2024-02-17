import { SimplePriorityQueue } from "../Priority Queue";

type edge = { node: string; weight: number };

interface nodeType {
  [name: string]: edge[];
}

class WeightedGraph {
  protected adjacencyList: nodeType;
  constructor() {
    this.adjacencyList = {};
  }
  isExist(vertex: string): boolean {
    if (this.adjacencyList[vertex]) return true;
    return false;
  }
  protected guardCondition(vertex1: string, vertex2: string): boolean {
    return !this.isExist(vertex1) || !this.isExist(vertex2) ? false : true;
  }
  addVertex(vertex: string): boolean {
    if (this.isExist(vertex)) return false;
    this.adjacencyList[vertex] = [];
    return true;
  }
  removeVertex(vertex: string): boolean {
    if (!this.isExist(vertex)) return false;
    const removedVertex = this.adjacencyList[vertex];

    removedVertex.forEach((v) => {
      this.removeEdge(vertex, v.node);
    });

    delete this.adjacencyList[vertex];
    return true;
  }
  addEdge(vertex1: string, vertex2: string, weight: number): boolean {
    if (!this.guardCondition(vertex1, vertex2)) return false;

    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });

    return true;
  }
  removeEdge(vertex1: string, vertex2: string) {
    if (!this.guardCondition(vertex1, vertex2)) return false;

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v: edge) => v.node !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v: edge) => v.node !== vertex1
    );

    return true;
  }
  getGraph() {
    return this.adjacencyList;
  }

  Dijkstra(start: string, finish: string) {
    const visited = new SimplePriorityQueue();
    const distances: { [vertex: string]: number } = {};
    const previous: { [vertex: string]: any } = {};
    let smallest: string;
    let path: string[] = [];
    //build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        visited.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        visited.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit
    while (visited.values.length) {
      smallest = visited.dequeue()?.val || "";
      if (smallest === finish) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END
        console.log(previous);
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            visited.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    console.log(visited);

    return path.concat(start).reverse();
  }
}

const graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
// console.log(graph.getGraph());

console.log(graph.Dijkstra("A", "E"));
