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
}

const graph = new WeightedGraph();

graph.addVertex("Portsaid");
graph.addVertex("Ismalia");
graph.addVertex("Cairo");

graph.addEdge("Portsaid", "Ismalia", 75);

// graph.removeEdge("Portsaid", "Ismalia");

graph.removeVertex("Portsaid");

console.log(graph.getGraph());
