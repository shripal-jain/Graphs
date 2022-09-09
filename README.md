# Graph DSA

- ## What is a Graph?

  - Graph = Nodes(vertex) + Connections(Edge)

- ## Uses of Graph

  - Social Networks
  - Maps
  - Recomendations
  - Routing Algorithm
  - Visual Hierarchy
  - File System Optimizations

- ## Types of Graphs (Directions)

  - Weighted/Unweighted - values assigned to distances between vertices
    - Ex: Weighted - Maps (A(Mumbai) <--10km--> B(Pune))
  - Directed/Undirected - directions assigned to distanced between vertices
    - Ex: Directed - Insta followers (X follows Y, but Y may or may not follow X)
    - Ex: Undirected - Fb friends (can tranverse in both directions)

- ## How do we store graph?
  - ADJACENCY LIST (Winner - Real world data is sparser)
    - Can take up less space (in sparse graphs)
    - Faster to iterate over edges
    - Can be slower to look up specific edge
  - ADJACENCY MATRIX
    - Takes up more space (in sparse graphs)
    - Slower to iterate over edges
    - Faster to look up specific edge
- ## Steps

  - ### Adding vertex (L1_AddVertex.js)
    - Write a method called addVertex, which accepts a name of a vertex
    - It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
    - g.addVertex("Tokyo");
    ```
      {
        "Tokyo":[]
      }
    ```
  - ### Adding Edge (L2_AddEdge.js)

    - This function should accept two vertices, we can call them vertex1 and vertex2
    - The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
    - The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
    - Don't worry about handling errors/invalid vertices
    - Ex

    ```
    {
      "Tokyo":[],
      "Dallas":[],
      "Aspen":[]
    }

    g.addEdge("Tokyo", "Dallas")

    {
      "Tokyo":["Dallas"],
      "Dallas":["Tokyo"],
      "Aspen":[]
    }

    g.addEdge("Dallas", "Aspen")

    {
      "Tokyo":["Dallas"],
      "Dallas":["Tokyo", "Aspen"],
      "Aspen":["Dallas"]
    }

    ```

  - ### Removing Edge (L3_RemoveEdge.js)

    - This function should accept two vertices, we'll call them vertex1 and vertex2
    - The function should reassign the key of vertex1 to be an array that does not contain vertex2
    - The function should reassign the key of vertex2 to be an array that does not contain vertex1
    - Don't worry about handling errors/invalid vertices
    - Ex

    ```
    {
      "Tokyo": ["Dallas"],
      "Dallas": ["Tokyo", "Aspen"],
      "Aspen": ["Dallas"]
    }

    g.removeEdge("Tokyo", "Dallas")

    {
      "Tokyo": [],
      "Dallas": ["Aspen"],
      "Aspen": ["Dallas"]
    }
    ```

  - ### Removing vertex (L4_RemoveVertex.js)

    - The function should accept a vertex to remove
    - The function should loop as long as there are any other vertices in the adjacency list for that vertex
    - Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
    - delete the key in the adjacency list for that vertex
    - Ex

    ```
    {
      "Tokyo": ["Dallas", "Hong Kong"],
      "Dallas": ["Tokyo", "Aspen", "Hong Kong", "Los Angeles"],
      "Aspen": ["Dallas"],
      "Hong Kong": ["Tokyo", "Dallas", "Los Angeles"],
      "Los Angeles": ["Hong Kong", "Dallas"]
    }

    g.removeVertex("Hong Kong")

    {
      "Tokyo": ["Dallas"],
      "Dallas": ["Tokyo", "Aspen","Los Angeles"],
      "Aspen": ["Dallas"],
      "Los Angeles": ["Dallas"]
    }
    ```
