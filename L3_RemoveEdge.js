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
    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            item => item != v2
        )
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            item => item != v1
        )
    }
}

//Initial Setup
let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addEdge("Dallas","Tokyo")
g.addEdge("Dallas","Aspen")

//Run
g.removeEdge("Dallas","Aspen")