//undirected graph
class Graph {
  private adjacencyList: {
    [name: string]: string[];
  };
  constructor() {
    this.adjacencyList = {};
  }

  private guardCondition(vertex1: string, vertex2: string): boolean {
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
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
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

citiesGraph.removeVertex("Aswan");

citiesGraph.addEdge("Portsaid", "Isamalia");
citiesGraph.addEdge("Portsaid", "Domiatta");
citiesGraph.addEdge("Isamalia", "Suez");
citiesGraph.addEdge("Alex", "Domiatta");
citiesGraph.addEdge("Portsaid", "Cairo");
citiesGraph.addEdge("Alex", "Cairo");
citiesGraph.addEdge("Suez", "Cairo");
citiesGraph.addEdge("Cairo", "Aswan");
citiesGraph.addEdge("Aswan", "Portsaid");

citiesGraph.removeEdge("Aswan", "Portsaid");

console.log(citiesGraph.getGraph());
