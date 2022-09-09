class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        //Condition to prevent vertex override
        if(!this.adjacencyList[vertex])
        this.adjacencyList[vertex] = []
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
}

//Initial Setup
let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");

//Run
console.log(g)
g.addEdge("Tokyo","Dallas")
console.log(g)