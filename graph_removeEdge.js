class Graph {

    constructor() {

        this.adjacencyList = {};


    }

    addVertex(vtx) {
     
        if (!this.adjacencyList[vtx]) {

            this.adjacencyList[vtx] = [];

            return true;

        }

        return false;
    }

    // connection 

    addEdge(vtx1, vtx2) {

        if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {

            this.adjacencyList[vtx1].push(vtx2);

            this.adjacencyList[vtx2].push(vtx1);

            return true;;

        }

        return false;
    }

    removeEdge(vtx1, vtx2) {

        if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {

            this.adjacencyList[vtx1] = this.adjacencyList[vtx2].filter(v => v != vtx2)

            this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(v => v != vtx1)

            return true;

        }

        return false;
    }
}

const g = new Graph();

g.addVertex("A");

g.addVertex("B")

g.addVertex("C")

g.addEdge("A", "B");

g.addEdge("B", "C");

g.addEdge("C", "A");

g.removeEdge("A", "B")

console.log(g)