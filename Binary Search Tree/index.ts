import { Queue } from "../Queue/UsingArray";

type node = BSTNode | null;

class BSTNode {
  data: any;
  left: node;
  right: node;

  constructor(data: any) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  root: node;
  constructor() {
    this.root = null;
  }
  insert(data: any) {
    const node = new BSTNode(data);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let temp: any = this.root;
    while (true) {
      if (data === temp.data) return undefined;
      if (data > temp.data) {
        if (temp.right === null) {
          temp.right = node;
          return this;
        }
        temp = temp.right;
      } else {
        if (temp.left === null) {
          temp.left = node;
          return this;
        }
        temp = temp.left;
      }
    }
  }
  find(data: any) {
    if (!this.root) return undefined;
    let isFound = false;
    let temp: any = this.root;
    while (!isFound && temp) {
      if (data > temp.data) {
        temp = temp.right;
      } else if (data < temp.data) {
        temp = temp.left;
      } else if (data === temp.data) {
        isFound = true;
      }
    }
    if (isFound) return temp;
    else return undefined;
  }
  BFS() {
    const queue: any[] = [];
    const visited: any[] = [];
    let current = this.root;

    queue.push(current);

    while (queue.length) {
      current = queue.shift();

      visited.push(current?.data);

      if (current?.left) queue.push(current.left);

      if (current?.right) queue.push(current.right);
    }
    return visited;
  }
  preOrderTraverse(node: node, visited: node[]): node[] {
    if (node) visited.push(node.data);
    if (node?.left) this.preOrderTraverse(node?.left, visited);
    if (node?.right) this.preOrderTraverse(node?.right, visited);
    return visited;
  }

  inOrderTraverse(node: node, visited: node[]): node[] {
    if (node?.left) this.inOrderTraverse(node?.left, visited);
    if (node) visited.push(node.data);
    if (node?.right) this.inOrderTraverse(node?.right, visited);
    return visited;
  }
  postOrderTraverse(node: node, visited: node[]): node[] {
    if (node?.left) this.postOrderTraverse(node?.left, visited);
    if (node?.right) this.postOrderTraverse(node?.right, visited);
    if (node) visited.push(node.data);
    return visited;
  }
  DFS(mode: string) {
    let visited: node[] = [];
    switch (mode) {
      case "preOrder": {
        return this.preOrderTraverse(this.root, visited);
      }
      case "inOrder": {
        return this.inOrderTraverse(this.root, visited);
      }
      case "postOrder": {
        return this.postOrderTraverse(this.root, visited);
      }
      default:
        throw new Error("mode: preOrder | inOrder |  postOrder");
    }
  }
}

const tree = new BST();

//        10
//    6       15
// 3    8   12     20

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(12);
tree.insert(3);
tree.insert(8);
tree.insert(20);

// console.log(tree.find(4));
// console.log(tree.find(10));

// console.log(tree.BFS());

console.log(tree.DFS("preOrder"));
console.log(tree.DFS("inOrder"));
console.log(tree.DFS("postOrder"));
