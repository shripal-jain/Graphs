class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        //Condition to prevent vertex override
        if(!this.adjacencyList[vertex])
        this.adjacencyList[vertex] = []
    }
}