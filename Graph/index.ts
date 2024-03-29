//undirected graph
export class Graph {
  protected adjacencyList: any;
  constructor() {
    this.adjacencyList = {};
  }

  protected guardCondition(vertex1: string, vertex2: string): boolean {
    return !this.isExist(vertex1) || !this.isExist(vertex2) ? false : true;
  }

  isExist(vertex: string): boolean {
    if (this.adjacencyList[vertex]) {
      return true;
    }
    return false;
  }

  addVertex(vertex: string): Boolean {
    //if already exist
    if (this.adjacencyList[vertex]) return false;
    //case not exist
    this.adjacencyList[vertex] = [];
    return true;
  }

  addEdge(vertex1: string, vertex2: string): boolean {
    if (!this.guardCondition(vertex1, vertex2)) return false;

    if (!this.adjacencyList[vertex1].includes(vertex2))
      this.adjacencyList[vertex1].push(vertex2);

    if (!this.adjacencyList[vertex2].includes(vertex1))
      this.adjacencyList[vertex2].push(vertex1);

    return true;
  }
  removeEdge(vertex1: string, vertex2: string): boolean {
    if (!this.guardCondition(vertex1, vertex2)) return false;
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v: string) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v: string) => v !== vertex1
    );

    return true;
  }

  removeVertex(vertex: string): boolean {
    if (!this.isExist(vertex)) return false;
    const removedVertex: string[] = this.adjacencyList[vertex];
    for (let i = 0; i < removedVertex.length; i++) {
      this.removeEdge(vertex, removedVertex[i]);
    }
    delete this.adjacencyList[vertex];

    return true;
  }

  //depth first graph
  DFGIterative(vertex: string): string[] {
    let stack: string[] = [vertex];
    let result: string[] = [];
    let visitedVertex: { [name: string]: boolean } = {};
    let currentVertex: string;

    visitedVertex[vertex] = true;

    while (stack.length) {
      currentVertex = stack.pop() || "";
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor: string) => {
        if (!visitedVertex[neighbor]) {
          visitedVertex[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  DFGRecursion(vertex: string): string[] {
    let result: string[] = [];
    let visitedVertex: { [name: string]: boolean } = {};
    let adjacencyList = this.adjacencyList;

    function DFS(vertex: string) {
      if (!adjacencyList[vertex]) return;
      visitedVertex[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((v: string) => {
        if (!visitedVertex[v]) DFS(v);
      });
    }
    DFS(vertex);

    return result;
  }
  //Breadth first graph
  BFGIterative(vertex: string): string[] {
    let queue: string[] = [vertex];
    let result: string[] = [];
    let visitedVertex: { [name: string]: boolean } = {};
    let currentVertex: string;

    visitedVertex[vertex] = true;

    while (queue.length) {
      currentVertex = queue.shift() || "";
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor: string) => {
        if (!visitedVertex[neighbor]) {
          visitedVertex[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
  getGraph() {
    return this.adjacencyList;
  }
}

const citiesGraph = new Graph();
citiesGraph.addVertex("Portsaid");
citiesGraph.addVertex("Suez");
citiesGraph.addVertex("Cairo");
citiesGraph.addVertex("Domiatta");
citiesGraph.addVertex("Alex");
citiesGraph.addVertex("Isamalia");
citiesGraph.addVertex("Aswan");

// citiesGraph.removeVertex("Aswan");

citiesGraph.addEdge("Portsaid", "Isamalia");
citiesGraph.addEdge("Portsaid", "Domiatta");
citiesGraph.addEdge("Isamalia", "Suez");
citiesGraph.addEdge("Alex", "Domiatta");
citiesGraph.addEdge("Portsaid", "Cairo");
citiesGraph.addEdge("Alex", "Cairo");
citiesGraph.addEdge("Suez", "Cairo");
citiesGraph.addEdge("Cairo", "Aswan");
citiesGraph.addEdge("Aswan", "Alex");
citiesGraph.addEdge("Aswan", "Suez");

citiesGraph.addEdge("Aswan", "Portsaid");
citiesGraph.removeEdge("Aswan", "Portsaid");

console.log("DFG Recursion", citiesGraph.DFGRecursion("Portsaid"));
console.log("DFG Iterative", citiesGraph.DFGIterative("Portsaid"));

console.log("BFG Iterative", citiesGraph.BFGIterative("Portsaid"));

console.log(citiesGraph.getGraph());
