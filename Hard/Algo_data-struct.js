Kruskal's Algorithm is one of the cornerstone algorithms in graph theory, widely used for finding the Minimum Spanning Tree (MST) of a connected, weighted graph. Here's why it is essential:

1. Efficient MST Construction
Kruskal's Algorithm efficiently identifies the MST, which minimizes the total weight of edges in a graph while ensuring all vertices are connected without forming cycles. This is crucial in applications like network design, where minimizing cost or resources is a priority.

2. Simplicity and Versatility
The algorithm is simple to understand and implement, making it a go-to choice for students and researchers studying MST.

It works well on sparse graphs, which are common in real-world applications.

3. Wide Range of Applications
Network Design: Used in designing efficient communication networks, transportation systems, and electrical grids.
Clustering in Machine Learning: Helps form clusters by grouping connected components based on edge weights.
Approximation Algorithms: Forms the basis for approximating solutions to NP-hard problems like the traveling salesman problem (TSP).
4. Union-Find Data Structure Usage
Kruskal's Algorithm is often paired with the Union-Find (Disjoint Set) data structure, which optimizes cycle detection and component merging. This combination is a fundamental concept in algorithm design.

5. Comparison with Other MST Algorithms
Unlike Prim's Algorithm, which starts from an arbitrary vertex, Kruskal's is edge-centric, focusing on sorting and selecting edges by weight. This makes it particularly useful when dealing with a list of edges rather than an adjacency matrix.

6. Algorithmic Insights
Kruskal’s approach introduces key concepts in graph theory, such as greedy algorithms, edge sorting, and cycle detection. It is a foundation for more advanced optimization and computational graph theory algorithms.

Basics to Advanced - Learn It All!Java Certification Training CourseExplore ProgramBasics to Advanced - Learn It All!
What is a Spanning Tree?
A spanning tree is a subset of a graph that includes all the graph's vertices and some of the edges of the original graph, intending to have no cycles. A spanning tree is not necessarily unique - it is possible for there to be multiple spanning trees for a given graph. However, a given graph will always have at least one spanning tree. The edges in a spanning tree are called "branch edges," while the edges not in the spanning tree are called "cycle edges." And this type of graph helps find the minimum number of edges required to connect all vertices in a graph. It is also used to create minimally secured networks with redundant paths.

What is a Minimum Spanning Tree? 
A minimum spanning tree (MST) is a subset of the edges of a connected, edge-weighted graph that connects all vertices without any cycles and with the minimum possible total edge weight. It is a way of finding the most economical way to connect a set of vertices. A minimum spanning tree is not necessarily unique. All the weights of the edges in the MST must be distinct. If all the weights of the edges in the graph are the same, then any spanning tree of the graph is an MST. The edges of the minimum spanning tree can be found using the greedy algorithm or the more sophisticated Kruskal or Prim's algorithm.

Master Java programming and elevate your career with the Java Certification Course by Simplilearn. Gain in-demand skills and become job-ready. Enroll now and transform your future!
How Many Edges Does a Minimum Spanning Tree Have? 
A minimum spanning tree (MST) is a subset of the edges of a connected, undirected graph that connects all the vertices with the most negligible possible total weight of the edges. A minimum spanning tree has precisely n-1 edges, where n is the number of vertices in the graph.

Also Read: Prim's Minimum Spanning Tree
How Does Kruskal's Algorithm Work?
Kruskal's Algorithm is a greedy algorithm for finding the Minimum Spanning Tree (MST) of a connected, weighted graph. It works by selecting the edges with the smallest weights and adding them to the spanning tree, provided they do not form a cycle.

Steps of Kruskal's Algorithm
1. Sort the Edges by Weight
List all the edges in the graph and sort them in ascending order of their weights.
This ensures that the edges with the smallest weights are considered first.
2. Initialize the Spanning Tree
Start with an empty graph containing no edges.
Ensure that each vertex is treated as an independent subset (using a Union-Find data structure).
3. Iterate Through the Edges
For each edge (starting from the smallest weight):
Check if adding the edge to the spanning tree creates a cycle using the Union-Find technique.
If it doesn’t form a cycle, add the edge to the MST.
If it forms a cycle, skip the edge.
4. Repeat Until MST is Formed
Continue adding edges until the spanning tree has exactly (V - 1) edges, where V is the number of vertices.
Advance Your Full Stack Career!AI-Powered Full Stack Developer ProgramEXPLORE COURSEAdvance Your Full Stack Career!
Example Walkthrough
Graph:
Vertices: {A, B, C, D}

Edges (with weights):

A–B (1), B–C (4), A–C (3), C–D (2)
Step-by-Step Execution:
1. Sort edges by weight:

A–B (1), C–D (2), A–C (3), B–C (4)
2. Initialize MST:

MST starts empty, and each vertex is its own subset.

3. Add edges to MST:

Add A–B (1): No cycle is formed. Include it in MST.
Add C–D (2): No cycle is formed. Include it in MST.
Add A–C (3): No cycle is formed. Include it in MST.
Skip B–C (4): Adding it would form a cycle.
4. Final MST:

Edges in MST: A–B, C–D, A–C
Total weight: 1 + 2 + 3 = 6
Key Concepts in Kruskal's Algorithm
Greedy Strategy: Always select the edge with the smallest weight first.
Union-Find Data Structure: Used to detect cycles efficiently:
Find: Determines the root of a vertex’s subset.
Union: Merges two subsets when an edge connects them.
Complexity Analysis
1. Sorting Edges:

O(ElogE), where E is the number of edges

2. Union-Find Operations:

O(ElogV), where V is the number of vertices

3. Overall Time Complexity:

O(ElogE+ElogV)≈O(ElogV) for sparse graphs.

Want a clearer way to plan your software engineering journey? Use this Software Engineer Career Roadmap to understand the skills, projects, and career steps that matter.
Key Components in Kruskal’s Algorithm
Kruskal’s Algorithm relies on several fundamental components to efficiently find a graph's Minimum Spanning Tree (MST). These components ensure the algorithm processes edges systematically while avoiding cycles.

1. Graph Representation

Vertices (V)
Edges (E)
2. Edge Sorting

Purpose
Complexity
3. Disjoint Set Union (DSU) / Union-Find Data Structure

Role
Operations
Cycle Detection
4. Greedy Selection of Edges

Greedy Strategy
5. Cycle Detection

Importance
Method
6. Minimum Spanning Tree (MST) Construction

Criteria for Completion
Output
7. Time Complexity

Edge Sorting
Union-Find Operations
Overall Complexity
Build Projects and Gain Job-Ready SkillsJava Certification Training CourseExplore ProgramBuild Projects and Gain Job-Ready Skills
How to Find the Minimum Spanning Tree Using Kruskal’s Algorithm?
You will first look into the steps involved in Kruskal’s Algorithm to generate a minimum spanning tree:

Step 1: Sort all edges in increasing order of their edge weights.
Step 2: Pick the smallest edge.
Step 3: Check if the new edge creates a cycle or loop in a spanning tree.
Step 4: If it doesn’t form the cycle, include that edge in MST. Otherwise, discard it.
Step 5: Repeat from step 2 until it includes |V| - 1 edges in MST.
You will generate a minimum spanning tree structure using the steps mentioned above. So, now look at an example to understand this process better.

The graph G(V, E) below contains 6 vertices and 12 edges. You will create a minimum spanning tree T(V’, E’) for G(V, E) such that the number of vertices in T will be 6 and edges will be 5 (6-1).

Graph_for_Constructing_MST.

If you observe this graph, you’ll find two looping edges connecting the same node to itself again. And you know that the tree structure can never include a loop or parallel edge. Hence, you will need to remove these edges from the graph structure.

Removing_Loops-OR-Parallel_Edges.

The next step that you will proceed with is arranging all edges in a sorted list by their edge weights.

The Edges of the Graph
Edge Weight
Source Vertex

Destination Vertex

E

F

2

F

D

2

B

C

3

C

F

3

C

D

4

B

F

5

B

D

6

A

B

7

A

C

8

After this step, you will include edges in the MST so that the included edge does not form a cycle in your tree structure. The first edge you will pick is edge EF, with a minimum edge weight of 2.

Edge_EF_Insertion.

Add edge FD to the spanning tree.

Edge_DF_Insertion

Add edge BC and edge CF to the spanning tree as it does not generate any loop.

/Edge_BCandCF_Insertion.

Next up is edge CD. This edge generates the loop in Your tree structure. Thus, you will discard this edge.

Discarding_Edge_CD

Following edge CD, you have edge BF. This edge also creates the loop; hence you will discard it.

Discaeding_Edge_BF.

Next up is Edge BD. This edge also formulates a loop, so you will discard it as well.

Discarding_Edge_BD

Next on your sorted list is Edge AB. This edge does not generate any cycle, so you need not include it in the MST structure. By including this node, it will include 5 edges in the MST, so you don’t have to traverse any further in the sorted list. The final structure of your MST is represented in the image below:

Kruskals_Algorithm-Minimum_Spanning_Tree.

The summation of all the edge weights in MST T(V’, E’) is equal to 17, the least possible edge weight for any possible spanning tree structure for this particular graph.

Get the Coding Skills You Need to SucceedAI-Powered Full Stack Developer ProgramExplore ProgramGet the Coding Skills You Need to Succeed
Implementation of Kruskal Algorithm in C
Any MST algorithm revolves around determining whether adding an edge would result in a loop or not. Union Find is the most popular algorithm for determining this. The Union-Find algorithm separates vertices into clusters, allowing you to determine whether two vertices belong to the same cluster and, hence, if adding an edge will produce a cycle.

The strategy to implement the Kruskal algorithm using Union-Find is given below:

Construct a structure to keep track of the source and destination nodes, as well as their weight.
Sort all the edges of a graph according to their edge-weight values.
Create three distinct sets to maintain nodes of a graph, their hierarchy in a tree, and corresponding ranks for every node.
Primarily, all rank values should be initialized to 0 and parent values to -1 (representing each node as its own tree itself).
For each insertion of an edge in MST, you will update the rank and parent of each node.
Do not insert the edge connecting two nodes if they have the same parent node, as this will cause a cycle in the tree structure.
Now, you will understand this implementation strategy with the help of an example. The graph for which you will develop a minimum spanning tree using Kruskal’s approach is given below:

Graph_for_Implementing_Kruskals_Algorithm.

Initially, you must create two sets to maintain each node's parent and rank values. You will also create a structure to keep the edges of the graph. For all the nodes in the graph, you will initialize parent values to -1 and rank values to 0. The reason is that you need to treat all the graph nodes as trees themselves.

Initialising_Parent_and_Rank_set_values-Kruskals_Algorithm.

Additionally, remember that whenever you join two disjoint tree structures together, the rank of one being pointed to will increase by one. So, once you add edges into the MST, the included nodes' rank and parent values will change. This particular graph will show the state of sets, like the figure below.

Set_Updation-Kruskals_Algorithm.

The C program to implement Kruskal’s algorithm using the strategy mentioned above is as follows:

#include <stdlib.h>
#include <string.h>
#include <stdio.h>
//structure that denotes a weighted edge
struct Edge
{
int source, destination, weight;
};
//structure that denotes a weighted, undirected and connected graph
struct Graph
{
int Node, E;struct Edge* edge;
};
//allocates memory for storing graph with V vertices and E edges
struct Graph* GenerateGraph(int Node, int E)
{
struct Graph* graph = (struct Graph*)(malloc(sizeof(struct Graph
)));
graph->Node = Node;
graph->E = E;
graph->edge = (struct Edge*)malloc(sizeof( struct Edge));
return graph;
}
//subset for Union-Find
struct tree_maintainance_set {int parent;int rank;};
//finds the set of chosen element i using path compression
int find_DisjointSet(struct tree_maintainance_set subsets[], int I)
{
//find root and make root as parent of i
if (subsets[i].parent != i)
subsets[i].parent= find_DisjointSet(subsets, subsets[i].parent);return subsets[i].parent;
}
//Creates the Union of two sets
void Union_DisjointSet(struct tree_maintainance_set subsets[], int x, int y){int xroot = find_DisjointSet(subsets, x);int yroot = find_DisjointSet(subsets, y);
//connecting tree with lowest rank to the tree with highest rank
if (subsets[xroot].rank < subsets[yroot].rank)subsets[xroot].parent = yroot;
else if (subsets[xroot].rank > subsets[yroot].rank)subsets[yroot].parent = xroot;
//if ranks are same, arbitrarily increase the rank of one node
else{subsets[yroot].parent = xroot;subsets[xroot].rank++;}}
//function to compare edges using qsort() in C programming
int myComp(const void* a, const void* b)
{
struct Edge* a1 = (struct Edge*)a;
struct Edge* b1 = (struct Edge*)b;
return a1->weight > b1->weight;
}
//function to construct MST using Kruskal’s approach
void KruskalMST(struct Graph* graph)
{int Node = graph->Node;
struct Edgeresult[Node]; 
int e = 0; int i = 0;      
//sorting all edges
qsort(graph->edge, graph->E, sizeof(graph->edge[0]),myComp);
//memory allocation for V subsets
struct tree_maintainance_set* subsets= (struct tree_maintainance_set*)malloc(Node * sizeof(struct tree_maintainance_set));
//V subsets containing only one element
for (int v = 0; v < Node; ++v) {subsets[v].parent = v;subsets[v].rank = 0;}
//Edge traversal limit: V-1
while (e < Node - 1 && i < graph->E)
{struct Edge next_edge = graph->edge[i++];
int x = find_DisjointSet(subsets, next_edge.source);
int y = find_DisjointSet(subsets, next_edge.destination);
if (x != y) 
{result[e++] = next_edge;
Union_DisjointSet(subsets, x, y);}
}
//printing MST
printf("Edges created in MST are as below: \n");
int minimumCost = 0;
for (i = 0; i < e; ++i)
{
printf("%d -- %d == %d\n", result[i].source,result[i].destination, result[i].weight);minimumCost += result[i].weight;
}
printf("The Cost for created MST is : %d",minimumCost);
return;
}
int main()
{
int Node = 4;
int E = 6;
struct Graph* graph = GenerateGraph(Node, E);
//Creating graph with manual value insertion
// add edge 0-1
graph->edge[0].source = 0;
graph->edge[0].destination = 1;
graph->edge[0].weight = 2;}
// add edge 0-2
graph->edge[1].source = 0;
graph->edge[1].destination = 2;
graph->edge[1].weight = 4;
// add edge 0-3
graph->edge[2].source = 0;
graph->edge[2].destination = 3;
graph->edge[2].weight = 4;
// add edge 1-3
graph->edge[3].source = 1;
graph->edge[3].destination = 3;
graph->edge[3].weight = 3;
// add edge 2-3
graph->edge[4].source = 2;
graph->edge[4].destination = 3;
graph->edge[4].weight = 1;
// add edge 1-2
graph->edge[5].source = 1;
graph->edge[5].destination = 2;
graph->edge[5].weight = 2;
KruskalMST(graph);
return 0;
}
Output:
Kruskals_Algorithm_Program_Output

You can verify this output’s accuracy by comparing it with the above MST structure. The overall cost for this MST is 5.

Learn the fundamentals of C, its history, key concepts, data types, functions, and practical applications in real-world scenarios. Perfect for aspiring developers, this C Programming Basics course equips you with a strong foundation to confidently start coding in C.

Implementation of Kruskal Algorithm in C++
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// Define an edge structure
struct Edge {
    int src, dest, weight;
};

// A class to represent a graph
class Graph {
public:
    int V, E; // V -> number of vertices, E -> number of edges
    vector<Edge> edges; // collection of all edges

    Graph(int V, int E);
    void addEdge(int u, int v, int w);
    int find(vector<int>& parent, int i);
    void Union(vector<int>& parent, vector<int>& rank, int x, int y);
    void kruskalMST();
};

// Constructor
Graph::Graph(int V, int E) {
    this->V = V;
    this->E = E;
    edges.resize(E);
}

// Function to add an edge to the graph
void Graph::addEdge(int u, int v, int w) {
    Edge edge = {u, v, w};
    edges.push_back(edge);
}

// A utility function to find set of an element i (uses path compression technique)
int Graph::find(vector<int>& parent, int i) {
    if (parent[i] != i) {
        parent[i] = find(parent, parent[i]);
    }
    return parent[i];
}

// A function that does union of two sets of x and y (uses union by rank)
void Graph::Union(vector<int>& parent, vector<int>& rank, int x, int y) {
    int xroot = find(parent, x);
    int yroot = find(parent, y);

    if (rank[xroot] < rank[yroot]) {
        parent[xroot] = yroot;
    } else if (rank[xroot] > rank[yroot]) {
        parent[yroot] = xroot;
    } else {
        parent[yroot] = xroot;
        rank[xroot]++;
    }
}

// The main function to construct MST using Kruskal's algorithm
void Graph::kruskalMST() {
    vector<Edge> result; // Store the resultant MST
    int e = 0; // An index variable, used for result[]
    int i = 0; // An index variable, used for sorted edges

    // Step 1: Sort all the edges in non-decreasing order of their weight.
    sort(edges.begin(), edges.end(), [](Edge a, Edge b) {
        return a.weight < b.weight;
    });

    // Allocate memory for creating V subsets
    vector<int> parent(V);
    vector<int> rank(V, 0);

    // Create V subsets with single elements
    for (int v = 0; v < V; ++v) {
        parent[v] = v;
    }

    // Number of edges to be taken is equal to V-1
    while (e < V - 1 && i < edges.size()) {
        // Step 2: Pick the smallest edge. And increment the index for next iteration
        Edge next_edge = edges[i++];

        int x = find(parent, next_edge.src);
        int y = find(parent, next_edge.dest);

        // If including this edge does not cause a cycle, include it in result
        // and increment the index of result for next edge
        if (x != y) {
            result.push_back(next_edge);
            Union(parent, rank, x, y);
            e++;
        }
        // Otherwise discard the next_edge
    }

    // Print the resultant MST
    cout << "Following are the edges in the constructed MST\n";
    for (const auto& edge : result) {
        cout << edge.src << " -- " << edge.dest << " == " << edge.weight << endl;
    }
}

int main() {
    int V = 4; // Number of vertices in graph
    int E = 5; // Number of edges in graph
    Graph graph(V, E);

    // Add edges
    graph.addEdge(0, 1, 10);
    graph.addEdge(0, 2, 6);
    graph.addEdge(0, 3, 5);
    graph.addEdge(1, 3, 15);
    graph.addEdge(2, 3, 4);

    // Function call
    graph.kruskalMST();

    return 0;
}
Explanation
Edge Structure: Defines an edge with source (src), destination (dest), and weight (weight).
Graph Class: Contains vertices (V), edges (E), and a collection of edges (edges). Functions to add edges, find the set of an element, the union of two sets, and the main function to compute the MST (kruskalMST).
addEdge: Adds an edge to the graph.
Find: Finds the representative (root) of the set that element i is part of, with path compression to speed up future queries.
Union: Unites two sets (x and y), using union by rank to keep the tree flat.
kruskalMST: Sorts the edges by weight; Uses a union-find structure to manage disjoint sets; Iterates through the edges, adding them to the MST if they don't form a cycle until the MST contains V-1 edges.
Main Function: Creates a graph, adds edges, and calls kruskalMST to find and print the MST.
Boost Your Coding Skills. Nail Your Next InterviewAI-Powered Full Stack Developer ProgramExplore ProgramBoost Your Coding Skills. Nail Your Next Interview
Implementation of Kruskal Algorithm in Python
Step 1: Define the Union-Find (Disjoint Set) Data Structure

class DisjointSet:
    def __init__(self, vertices):
        self.parent = {v: v for v in vertices}
        self.rank = {v: 0 for v in vertices}
    
    def find(self, item):
        if self.parent[item] == item:
            return item
        else:
            self.parent[item] = self.find(self.parent[item])
            return self.parent[item]
    
    def union(self, set1, set2):
        root1 = self.find(set1)
        root2 = self.find(set2)
        
        if root1 != root2:
            if self.rank[root1] > self.rank[root2]:
                self.parent[root2] = root1
            elif self.rank[root1] < self.rank[root2]:
                self.parent[root1] = root2
            else:
                self.parent[root2] = root1
                self.rank[root1] += 1
Step 2: Define the Kruskal's Algorithm

def kruskal(vertices, edges):
    # Sort edges by weight
    edges = sorted(edges, key=lambda edge: edge[2])
    
    # Initialize Disjoint Set
    disjoint_set = DisjointSet(vertices)
    
    mst = []
    
    for edge in edges:
        u, v, weight = edge
        # Check if including this edge would form a cycle
        if disjoint_set.find(u) != disjoint_set.find(v):
            disjoint_set.union(u, v)
            mst.append(edge)
    
    return mst
Step 3: Example Usage

# List of vertices in the graph
vertices = ['A', 'B', 'C', 'D', 'E']

# List of edges in the graph (u, v, weight)
edges = [
    ('A', 'B', 1),
    ('A', 'C', 3),
    ('B', 'C', 3),
    ('B', 'D', 6),
    ('C', 'D', 4),
    ('C', 'E', 2),
    ('D', 'E', 5)
]

# Compute the Minimum Spanning Tree using Kruskal's Algorithm
mst = kruskal(vertices, edges)

# Print the result
print("Edges in the Minimum Spanning Tree:")
for edge in mst:
    print(edge)
Explanation
Disjoint Set Class: Initialization: Creates a parent pointer and rank for each vertex; Find Operation: Implements path compression to find the root of a set; Union Operation: Uses union by rank to attach smaller depth trees under the root of deeper trees.
Kruskal's Algorithm: Sorting Edges: Sorts the edges based on their weights in ascending order; Initialization of Disjoint Set: Creates disjoint sets for each vertex; Edge Selection: Iterates through the sorted edges and includes an edge in the MST if it doesn’t form a cycle; Returning MST: The MST is returned as a list of edges.
Example Usage: Defines vertices and edges; Calls the Kruskal function and prints the MST edges.
Elevate your coding skills with Simplilearn's Python Training! Enroll now to unlock your potential and advance your career.
Implementation of Kruskal Algorithm in Java
import java.util.*;

class Edge implements Comparable<Edge> {
    int src, dest, weight;

    // Comparator function used for sorting edges based on their weight
    public int compareTo(Edge compareEdge) {
        return this.weight - compareEdge.weight;
    }
};

class Subset {
    int parent, rank;
};

class Graph {
    int V, E; // Number of vertices and edges
    Edge[] edges; // Collection of all edges

    Graph(int v, int e) {
        V = v;
        E = e;
        edges = new Edge[E];
        for (int i = 0; i < e; ++i) {
            edges[i] = new Edge();
        }
    }

    // A utility function to find the set of an element i (uses path compression)
    int find(Subset[] subsets, int i) {
        if (subsets[i].parent != i)
            subsets[i].parent = find(subsets, subsets[i].parent);
        return subsets[i].parent;
    }

    // A function that does union of two sets of x and y (uses union by rank)
    void union(Subset[] subsets, int x, int y) {
        int xroot = find(subsets, x);
        int yroot = find(subsets, y);

        // Attach smaller rank tree under root of high rank tree
        if (subsets[xroot].rank < subsets[yroot].rank)
            subsets[xroot].parent = yroot;
        else if (subsets[xroot].rank > subsets[yroot].rank)
            subsets[yroot].parent = xroot;
        else {
            subsets[yroot].parent = xroot;
            subsets[xroot].rank++;
        }
    }

    // The main function to construct MST using Kruskal's algorithm
    void kruskalMST() {
        Edge[] result = new Edge[V]; // This will store the resultant MST
        int e = 0; // An index variable, used for result[]
        int i = 0; // An index variable, used for sorted edges
        for (i = 0; i < V; ++i)
            result[i] = new Edge();

        // Step 1: Sort all the edges in non-decreasing order of their weight.
        Arrays.sort(edges);

        // Allocate memory for creating V subsets
        Subset[] subsets = new Subset[V];
        for (i = 0; i < V; ++i)
            subsets[i] = new Subset();

        // Create V subsets with single elements
        for (int v = 0; v < V; ++v) {
            subsets[v].parent = v;
            subsets[v].rank = 0;
        }

        i = 0; // Index used to pick the smallest edge

        // Number of edges to be taken is equal to V-1
        while (e < V - 1) {
            // Step 2: Pick the smallest edge. And increment the index for next iteration
            Edge nextEdge = edges[i++];

            int x = find(subsets, nextEdge.src);
            int y = find(subsets, nextEdge.dest);

            // If including this edge does not cause a cycle, include it in result
            // and increment the index of result for next edge
            if (x != y) {
                result[e++] = nextEdge;
                union(subsets, x, y);
            }
            // Else discard the nextEdge
        }

        // Print the contents of result[] to display the built MST
        System.out.println("Following are the edges in the constructed MST:");
        for (i = 0; i < e; ++i)
            System.out.println(result[i].src + " -- " + result[i].dest + " == " + result[i].weight);
    }
}

public class Kruskal {
    public static void main(String[] args) {
        int V = 4; // Number of vertices in the graph
        int E = 5; // Number of edges in the graph
        Graph graph = new Graph(V, E);

        // add edge 0-1
        graph.edges[0].src = 0;
        graph.edges[0].dest = 1;
        graph.edges[0].weight = 10;

        // add edge 0-2
        graph.edges[1].src = 0;
        graph.edges[1].dest = 2;
        graph.edges[1].weight = 6;

        // add edge 0-3
        graph.edges[2].src = 0;
        graph.edges[2].dest = 3;
        graph.edges[2].weight = 5;

        // add edge 1-3
        graph.edges[3].src = 1;
        graph.edges[3].dest = 3;
        graph.edges[3].weight = 15;

        // add edge 2-3
        graph.edges[4].src = 2;
        graph.edges[4].dest = 3;
        graph.edges[4].weight = 4;

        graph.kruskalMST();
    }
}
Explanation
1. Edge Class: This class represents an edge with source, destination, and weight. It is comparable to sorting edges by weight.

2. Subset Class: Represents a subset for union-find.

3. Graph Class: Contains methods for finding the MST using Kruskal's algorithm.

find(): Uses path compression.
union(): Uses union by rank.
kruskalMST(): Main method to perform Kruskal's algorithm.
4. Main Method: Initializes the graph, adds edges, and calls kruskalMST().

Learn Java With Expert-Led TrainingJava Certification Training CourseExplore ProgramLearn Java With Expert-Led Training
Kruskal's Algorithm Time Complexity and Efficiency
Kruskal's algorithm is a well-known algorithm for finding the minimum spanning tree of a graph. It is a greedy algorithm that makes use of the fact that the edges of a minimum spanning tree must form a subset of the edges of any other spanning tree.

The time complexity of Kruskal's Algorithm is O(ElogE), where E is the number of edges in the graph. This complexity is because the algorithm uses a priority queue with a time complexity of O(logE). However, the space complexity of the algorithm is O(E), which is relatively high.

Kruskal's Algorithm Applications
Kruskal's algorithm is popular in computer science for finding the minimum spanning tree in a graph. A greedy algorithm selects the cheapest edge that does not form a cycle in the graph. The following are some of the applications of Kruskal's algorithm:

Network Design: Kruskal's algorithm can be used to design networks with the least cost. It can be used to find the least expensive network connections that can connect all the nodes in the network.
Approximation Algorithms: Kruskal's algorithm can find approximate solutions to several complex optimization problems. It can also solve the traveling salesman problem, the knapsack problem, and other NP-hard optimization problems.
Image Segmentation: Image segmentation is partitioning an image into multiple segments. Kruskal's algorithm can be used to break down an image into its constituent parts in an efficient manner.
Clustering: Clustering is grouping data points based on their similarity.
Conclusion
Mastering Kruskal's Algorithm opens doors to understanding fundamental concepts in graph theory and tackling real-world problems efficiently. From network design to clustering in machine learning, this algorithm's applications are vast and impactful. By learning Kruskal's Algorithm from scratch, you are laying a strong foundation for more advanced topics in computer science.

Ready to take your skills to the next level? Enroll in Simplilearn’s AI-Powered Full Stack Developer Course. Gain comprehensive knowledge and hands-on experience in full-stack development, equipping you with the expertise to excel in the tech industry. Join now and start your journey to becoming a proficient developer!


FAQs
1. What is the Logic of Kruskal Algorithm?
Kruskal's Algorithm finds the Minimum Spanning Tree (MST) of a connected, undirected graph by iteratively selecting the shortest edge that does not form a cycle. It starts by sorting all edges by weight and then uses a union-find data structure to efficiently check and merge disjoint sets of vertices, ensuring no cycles are formed. The process continues until the MST contains V−1 edges, where V is the number of vertices.

2. What Are the Advantages of Kruskal’s Algorithm?
Kruskal's Algorithm has several advantages:

It is simple to understand and implement.
It works well with sparse graphs since it focuses on edges rather than vertices.
The algorithm can handle disconnected components and find the MST for each connected component.
It uses efficient data structures like union-find for cycle detection, making it computationally efficient with the time complexity of O(ElogE).
3. What is the Difference Between Dijkstra and Kruskal Algorithm?
Dijkstra's Algorithm finds the shortest path from a single source to all other vertices in a weighted graph, focusing on vertex distances. It uses a priority queue to explore the nearest vertex first. In contrast, Kruskal's Algorithm finds the Minimum Spanning Tree (MST) for the entire graph by selecting edges in ascending order of weight, focusing on edges and using union-find to prevent cycles. Dijkstra’s is used for shortest-path problems, while Kruskal’s is used for MST problems.

4. Where is Kruskal Algorithm Used in Real Life?
Kruskal's Algorithm is used in network design, such as constructing least-cost networks like telecommunications, electrical grids, and computer networks. It is also used in clustering algorithms in machine learning, image segmentation in computer vision, and various optimization problems where a minimum spanning tree is required. Its ability to efficiently manage and connect components with minimal total weight makes it valuable in diverse fields such as transportation, logistics, and resource management.

5. What is the difference between Prim’s and Kruskal’s?
Prim’s Algorithm grows the MST from a starting vertex by adding the smallest adjacent edge, focusing on vertices. Kruskal’s Algorithm is edge-centric, selecting edges by weight from a sorted list, independent of the starting vertex, and avoids cycles using Union-Find.

6. What is the rule of Kruskal's Algorithm?
Kruskal’s Algorithm selects edges in ascending order of weight, adding them to the MST if they connect disjoint components, avoiding cycles until V−1V-1V−1 edges are included.

7. Can Kruskal's Algorithm be applied to non-weighted graphs?
No, Kruskal’s Algorithm requires edge weights to identify the minimum spanning tree. For non-weighted graphs, weights must be assigned, or another algorithm like BFS/DFS must be used.

8. What are the challenges when implementing Kruskal’s Algorithm?
Challenges include efficiently sorting edges for large graphs, correctly implementing the Union-Find data structure, and ensuring cycle detection and subset management during MST construction.

Задача по олимпиадному программированию

Наткнулся на одну задачу, я ее точно решить не смогу, но если кто-то ее решит, то был бы рад прийти в восторг от решения :)

Задача, как по мне, довольно сложная

Прочитал на одном форуме, что это нужно решать с помощью волнового обхода

В поисках сокровищ известный археолог попал в огромную сеть двумерных пещер. Он вспомнил, что в университете как раз делал дипломную работу по этой местности: руками подсчитывал количество сталактитов, сталагмитов и сталагнатов и записывал всё это в рабочую тетрадь. Да, ошибиться легко. Приходилось проверять себя несколько раз. Теперь же у него с собой есть портативный сканер местности, который переводит всё в матрицу из 0 и 1. Только вот незадача, там нет возможности узнать количество объектов на карте. Для знаменитого археолога нет непреодолимых препятствий, а проверить свои студенческие расчеты очень хочется.

Нужно реализовать метод scan, который принимает на вход карту – матрицу NxM, состоящую только из 1 (каменная порода) и 0 (пустое пространство). Матрица – это 2D карта пещеры, вид сбоку, аля платформер.

Пример карты:

[  
  [1, 1, 0, 0, 0, 1, 0, 1, 1],  
  [1, 1, 0, 1, 0, 1, 0, 0, 0],  
  [0, 1, 0, 1, 0, 0, 0, 1, 1]  
]
Формат вывода

Метод scan возвращает объект с количеством каждого типа образования {ceil: 0, ﬂoor: 0, both: 0}

Если образование свисает с потолка и не касается пола – ceil
Если образование растет от пола и не касается потолка – ﬂoor
Если образование свисает с потолка и при этом еще и касается пола – both Результат вывода на примере карты выше: {ceil: 2, ﬂoor: 2, both: 1}
Вот как стоило рассматривать массив, чтобы получить такой результат:

введите сюда описание изображения

Примечания

У одного образования может быть несколько точек касания.

Пример 1:

[
  [1, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
]
Результат: {ceil: 1, ﬂoor: 0, both: 0}

Пример 2:

[  
  [1, 0, 1],  
  [1, 1, 1],  
  [0, 0, 1]  
]
Результат: {ceil: 0, ﬂoor: 0, both: 1}

Считаем, что по диагонали образования не пересекаются:

[  
  [1, 0, 1],  
  [0, 1, 0],  
]
Результат: {ceil: 2, ﬂoor: 1, both: 0}

javascriptалгоритмолимпиададискретная-математика
Поделиться
Отслеживать
задан 14 июн. 2021 в 10:04
KAVA's user avatar
KAVA
15544 бронзовых знака
1
Элементарная ж задача. Берёшь любую единицу, заменяешь её и всех её соседок на 2. Затем берёшь опять любую единицу, заменяешь её и всех её соседок на 3. На 4, на 5... И так, пока есть единицы. Дальше авось сам сообразишь. – 
Akina
 Commented14 июн. 2021 в 11:18 
1
@Akina Считаем, что по диагонали образования не пересекаются – 
Anton Shchyrov
 Commented14 июн. 2021 в 11:24
@Akina почему я должен так делать? Зачем? – 
KAVA
 Commented14 июн. 2021 в 13:41
Чтобы подход стал понятен. После чего станет очевидно, что можно сразу подсчитывать и обнулять. – 
Akina
 Commented14 июн. 2021 в 13:47
1
Если вы знакомы с теорией графов, то вам должно быть ясно что задача сводится к поиску компонент связности некоторого графа. Когда компоненты построены, их классифицируют на сталактиты, сталагмиты и т.п.. Если у вас нет таких знаний, то задача покажется трудной. – 
Stanislav Volodarskiy
 Commented14 июн. 2021 в 15:21
Показать ещё 2 комментария
1 ответ
Сортировка:

Наивысший рейтинг (по умолчанию)
4

Ну так и используйте волновой алгоритм

const data = [
[  
  [1, 1, 0, 0, 0, 1, 0, 1, 1],  
  [1, 1, 0, 1, 0, 1, 0, 0, 0],  
  [0, 1, 0, 1, 0, 0, 0, 1, 1]  
],
[
  [1, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
],
[  
  [1, 0, 1],  
  [1, 1, 1],  
  [0, 0, 1]  
],
[  
  [1, 0, 1],  
  [0, 1, 0],  
]
];

function buildPath(map, x, y, res) {
  // Если находимся за границей массива или
  // точку не нужно обрабатывать, то выходим
  if (
    y < 0 || y >= map.length ||
    x < 0 || x >= map[y].length ||
    map[y][x] !== 1
  )
    return;

  // Если на потолке
  if (y === 0)
    res.ceil = true;
  // Если на полу
  if (y === map.length - 1)
    res.floor = true;

  // Точку обработали
  map[y][x] = -1;

  // Проверяем соседние точки
  buildPath(map, x, y - 1, res);
  buildPath(map, x - 1, y, res);
  buildPath(map, x + 1, y, res);
  buildPath(map, x, y + 1, res);
}

function parse(map) {
  const res = {
    ceil: 0,
    floor: 0,
    both: 0
  };
  for (let i = 0; i < map[0].length; i++) {
    let testObj = {
      ceil: false,
      floor: false
    };
    // проверяем точку на потолке
    buildPath(map, i, 0, testObj);
    if (testObj.ceil) {  // если было касание потолка
      if (testObj.floor)  // и было касание пола
        res.both++;
      else
        res.ceil++;
    }
    
    testObj = {
      ceil: false,
      floor: false
    };
    // проверяем точку на полу
    buildPath(map, i, map.length - 1, testObj);
    if (testObj.floor) {  // если было касание пола
      if (testObj.ceil)  // и было касание потолка
        res.both++;
      else
        res.floor++;
    }
  }
  return res;
}

for (let i = 0; i < data.length; i++)
  console.log(parse(data[i]));

Задачи на знание методологий тестирования
Одной из первых областей, которую проверяют на собеседовании, является ваше понимание методологий тестирования. Вот несколько примеров вопросов, которые могут быть заданы:

Опишите процесс тестирования, начиная от разработки требований и заканчивая релизом продукта.
В чем разница между белым и черным ящиками при тестировании?
Какие виды регрессионного тестирования вы знаете?
Задания на проверку аналитических навыков
Аналитические навыки также важны для тестировщиков ПО. Вот примеры вопросов, которые проверяют эти навыки:

Как бы вы тестировали банкомат? Опишите ваш подход.
Допустим, есть веб-сайт с 5 разными кнопками. Как бы вы протестировали его функциональность?
Представьте, что вы нашли баг в продукте. Как вы будете документировать его?
Тестовые задания на практические навыки
Практические задания, обычно, проверяют ваши навыки работы с конкретными инструментами или технологиями. Например:

Напишите тест-кейс для функции "добавить товар в корзину" на веб-сайте.
Используйте Postman для тестирования API. Создайте коллекцию тестов, включающую различные типы запросов.
Задания на проверку навыков общения
Тестировщики часто взаимодействуют с разработчиками, менеджерами и другими членами команды, поэтому навыки общения также важны. Вот несколько примеров вопросов для проверки ваших коммуникативных навыков:

Опишите ситуацию, когда вам пришлось объяснить сложную техническую проблему нетехническому человеку. Как вы это сделали?
Ваши коллеги-разработчики считают, что найденный вами баг не является проблемой. Как вы будете действовать в этой ситуации?
Расскажите о случае, когда вам пришлось срочно изменить приоритеты в работе. Как вы справились с этим?
Задания на проверку стрессоустойчивости
Работа тестировщика ПО может быть стрессовой, особенно когда сроки поджимают или вы столкнулись с трудноуловимым багом. Вот несколько вопросов, которые могут помочь оценить вашу способность управлять стрессом:

Опишите ситуацию, когда вы работали под давлением. Как вы справились с этим?
Как вы реагируете на негативную обратную связь? Можете ли вы привести пример?
Что вы делаете, чтобы снизить уровень стресса во время работы?
Решения задач и ответы на вопросы для собеседования на должность тестировщика ПО
Давайте разберем некоторые из упомянутых вопросов и задач и обсудим возможные ответы или решения.

Задачи на знание методологий тестирования
Опишите процесс тестирования, начиная от разработки требований и заканчивая релизом продукта.

Вначале анализируются требования к продукту. Затем на их основе создаются тестовые случаи. После этого начинается процесс тестирования, включающий в себя функциональное и нефункциональное тестирование. По окончании тестирования создается отчет о тестировании, который включает информацию о найденных и исправленных багах. Затем происходит финальное тестирование перед релизом продукта.

В чем разница между белым и черным ящиками при тестировании?

Тестирование черного ящика основывается на требованиях и функциях программного продукта, не затрагивая внутреннюю структуру или работу кода. Тестирование белого ящика, наоборот, основывается на анализе внутренней структуры кода.

Какие виды регрессионного тестирования вы знаете?

Есть несколько видов регрессионного тестирования, включая полное, частичное и выборочное. Полное регрессионное тестирование включает повторное выполнение всех тестовых случаев, частичное - только тех, которые связаны с измененными функциями, а выборочное - случайного подмножества тестовых случаев. 

Задания на проверку аналитических навыков
Как бы вы тестировали банкомат? Опишите ваш подход.

Сначала я бы составил список всех функций банкомата - выдача наличных, прием наличных, проверка баланса, печать чеков и т.д. Затем я бы создал тест-кейсы для каждой из этих функций, проверяя их как отдельно, так и вместе. Также важно учесть граничные условия, такие как недостаток наличности в банкомате, неверный PIN-код или ситуация, когда банкомат не может связаться с банком.

Тестовые задания на практические навыки
Напишите тест-кейс для функции "добавить товар в корзину" на веб-сайте.

Тест-кейс может состоять из следующих шагов: 

Откройте веб-сайт и перейдите на страницу товара.

Убедитесь, что кнопка "Добавить в корзину" доступна.

Нажмите кнопку "Добавить в корзину" и проверьте, что товар добавлен в корзину.

Откройте корзину и убедитесь, что добавленный товар отображается с правильным названием, ценой и количеством.

Используйте Postman для тестирования API. Создайте коллекцию тестов, включающую различные типы запросов.

Создание коллекции тестов в Postman может включать следующие запросы:

GET-запрос для получения информации о товаре. 

POST-запрос для добавления нового товара. 

PUT-запрос для обновления информации о товаре. 

DELETE-запрос для удаления товара.

 Для каждого запроса добавьте соответствующие тесты для проверки статус-кода ответа, корректности данных и т.д. 

Задания на проверку навыков общения
Опишите ситуацию, когда вам пришлось объяснить сложную техническую проблему нетехническому человеку. Как вы это сделали?

Важно использовать аналогии и примеры из повседневной жизни для объяснения сложных технических понятий. Например, можно сравнить работу компьютера с работой офиса, где разные отделы (компоненты) взаимодействуют друг с другом для выполнения общей задачи.

Ваши коллеги-разработчики считают, что найденный вами баг не является проблемой. Как вы будете действовать в этой ситуации?

В этом случае важно донести свою точку зрения, объяснив, почему вы считаете этот баг важным. Приведите доказательства, такие как шаги для воспроизведения бага, скриншоты или видео. Если разногласия продолжаются, можно обсудить вопрос с менеджером проекта или другими заинтересованными сторонами.

Задания на проверку стрессоустойчивости
Опишите ситуацию, когда вы работали под давлением. Как вы справились с этим?

Важно показать, что вы умеете эффективно управлять своим временем и приоритетами, а также использовать стратегии снижения стресса. Например, вы можете рассказать о случае, когда вы работали над сложной задачей с жестким сроком, и как вы использовали методику timeboxing или техники релаксации для успешного выполнения задачи.

Как вы реагируете на негативную обратную связь? Можете ли вы привести пример?

Расскажите, что вы воспринимаете критику как возможность для обучения и роста. Например, если ваши коллеги указали на ошибки в вашем тестовом плане, вы были благодарны за их обратную связь, исправили ошибки и учли это в будущих проектах.

Что вы делаете, чтобы снизить уровень стресса во время работы?

Расскажите о своих стратегиях снижения стресса, таких как регулярные перерывы, занятия физической активностью, медитация, общение с коллегами или чтение. Важно показать, что вы умеете заботиться о своем здоровье и благополучии, даже в стрессовых ситуациях.


Топ-10 заданий по написанию кода для собеседования по React.js в 2024 году
19.05.2024
Цель этой статьи  —  ознакомить с топовыми заданиями по написанию кода и показать примеры их выполнения для успешного прохождения собеседования по ReactJS. Углубляясь в основные понятия и осваивая лучшие практики, вы получите полное представление о том, чего следует ожидать на собеседовании по React.js-программированию.

Задание 1. Получить и отобразить список пользователей
Напишите код для получения данных о пользователях из конечной точки REST с открытым исходным кодом и отобразите данные о пользователях в таблице, расположив их в соответствующем стиле по центру.

import React, { useEffect, useState } from 'react';
import "./styles.css";

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((result) => result.json())
      .then((data) => {
        console.log("users", data)
        setUsers(data)
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>User Details Table</h1>
      <table style={{ borderCollapse: 'collapse', margin: 'auto', width: '60%', border: '1px solid #ddd' }}>
        <thead>
          <tr style={{ border: '1px solid #ddd', backgroundColor: 'black', color: 'white' }}>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {
            users.length &&
            users.map((item) => (
              <tr style={{ border: '1px solid #ddd', backgroundColor: 'gray', color: 'white' }}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
export default App;
Альтернативный подход
А что, если придется использовать библиотеку Axios для получения данных о пользователях?

favicon
fsk.ru
Перейти
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserTable.css';

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users') // Использование Axios для получения данных о пользователях 
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className="user-table-container">
      <h2>User Details</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
Задание 2. Реализовать функцию поиска
Получите данные о пользователях и отобразите их имена. Кроме того, реализуйте функцию строки поиска по имени пользователя.

import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // Получение данных о пользователях из заданной конечной точки
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>User List</h2>
      <input
        type="text"
        placeholder="Search by username"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
Задание 3. Оптимизировать поиск с помощью debounce и отменяемого запроса
Оптимизируйте функциональность поиска, используя функцию debounce и возможность отмены запроса (cancelable request), и отобразите только отфильтрованные данные о пользователях.

import { useState, useEffect } from "react";

const App = () => {
  const [usersData, setUsersData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredUser, setFilteredUser] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("fetched data", data);
        setUsersData(data);
      })
      .catch((error) => {
        console.log("Errror While fetching user data");
      });
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const filterTimer = setTimeout(() => {
      try {
        fetch(
          `https://jsonplaceholder.typicode.com/users?username=${searchText}`,
          {
            signal: abortController.signal, // Передача сигнала AbortController в запрос на получение данных
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("FilteredUser ", data);
            setFilteredUser(data[0]);
          });
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request was aborted");
        } else {
          console.error("Error fetching user data:", error);
        }
      }
    }, 300);

    return () => {
      abortController.abort();
      clearTimeout(filterTimer);
    };
  }, [searchText]);

  const handleSearch = (value) => {
    setSearchText(value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h4>Users Data</h4>
      <input
        type="text"
        placeholder="Search by username"
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <table
        style={{
          borderCollapse: "collapse",
          margin: "auto",
          border: "1px solid red",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {usersData &&
            usersData.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <div>
        <h4>Search Result</h4>
        {filteredUser && filteredUser.name}
      </div>
    </div>
  );
};

export default App;
Задание 4. Реализовать функцию сортировки по имени пользователя
Напишите код для получения данных о пользователях и отображения имен пользователей. Должны быть две кнопки для сортировки имен по возрастанию и по убыванию.

import { useState, useEffect } from "react";

const App = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsersData(data);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  const handleAscendingSort = () => {
    const users = [...usersData].sort((a, b) =>
      a.username.localeCompare(b.username)
    );
    setUsersData(users);
  };

  const handleDescendingSort = () => {
    const users = [...usersData].sort((a, b) =>
      b.username.localeCompare(a.username)
    );
    setUsersData(users);
  };

  return (
    <div className="App">
      <h1>Example of short by username</h1>
      <button onClick={() => handleAscendingSort()}>
        Short by Ascending
      </button>
      <button onClick={() => handleDescendingSort()}>
        Short by Descending
      </button>
      {usersData &&
        usersData.map((user) => (
          <div key={user.id}>
            <p>{user.username}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
Задание 5. Создать управляемый компонент формы регистрации
Создайте форму регистрации пользователя с полями для имени пользователя, электронной почты и пароля. Проведите валидацию вводимых данных и отобразите соответствующие сообщения об ошибках. (Создайте управляемый компонент формы с состоянием для управления вводимыми значениями).

import React, { useState } from 'react';
import * as Yup from 'yup'; // Импорт Yup для валидации формы
import './UserRegistrationForm.css'; // Импорт CSS-файла для компонента

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const schema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  });
  
  const validateField = async (name, value) => {
    try {
      await schema.validateAt(name, { [name]: value });
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    } catch (error) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: error.message }));
    }
  };
  
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    await validateField(name, value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await schema.validate(formData, { abortEarly: false });
      // Имитация вызова API с задержкой
      setTimeout(() => {
        setLoading(false);
        setSuccessMessage('Registration successful!');
      }, 2000);
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach(fieldError => {
        validationErrors[fieldError.path] = fieldError.message;
      });
      setErrors(validationErrors);
      setLoading(false);
    }
  };
  
  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>
        <div>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>
        <div>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
      </form>
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default UserRegistrationForm;
Задание 6. Обеспечить переключение темного и светлого режимов
Реализуйте логику для изменения режима отображения в приложении с помощью Context API.

Файл DisplayModeContext.js:

import React, { createContext, useState, useContext } from "react";

// Создание контекста для режима отображения
const DisplayModeContext = createContext();

// Создание пользовательского хука для использования контекста режима отображения
export const useDisplayMode = () => {
  return useContext(DisplayModeContext);
};

// Создание компонента провайдера для контекста режима отображения
export const DisplayModeProvider = ({ children }) => {
  const [displayMode, setDisplayMode] = useState("light"); // Режим отображения по умолчанию - "светлый".

  const toggleDisplayMode = () => {
    setDisplayMode((prevMode) => (prevMode === "light" ? "dark" : "light")); // Переключение между "светлым" и "темным" режимами
  };

  return (
    <DisplayModeContext.Provider value={{ displayMode, toggleDisplayMode }}>
      {children}
    </DisplayModeContext.Provider>
  );
};
Файл App.js:

import "./styles.css";
import { useDisplayMode } from "./DisplayModeContext";

export default function App() {
  const { displayMode, toggleDisplayMode } = useDisplayMode();

  const appStyle = {
    background: displayMode === "light" ? "#ffffff" : "#333333",
    color: displayMode === "light" ? "#333333" : "#ffffff",
    padding: "5px",
  };

  return (
    <div style={appStyle}>
      <h3>Press below button to change the display mode</h3>
      <button onClick={() => toggleDisplayMode()}>
        {displayMode === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}
index.js:

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { DisplayModeProvider } from "./DisplayModeContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DisplayModeProvider>
      <App />
    </DisplayModeProvider>
  </StrictMode>
);
Задание 7. Создать менеджер задач
Создайте простое приложение-менеджер задач (ToDo-List) с возможностью добавлять и удалять задачи из списка.

import { useState } from "react";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [taskDetail, setTaskDetail] = useState("");

  const handleAddTask = () => {
    setTaskList([...taskList, taskDetail]);
    setTaskDetail("");
  };

  const handleRemoveTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  const handleTaskUpdate = (value) => {
    setTaskDetail(value);
  };

  return (
    <div>
      <>
        <h3>ToDO List</h3>
        <input
          type="text"
          placeholder="Add task detail here"
          value={taskDetail}
          onChange={(e) => handleTaskUpdate(e.target.value)}
        />
        <button onClick={() => handleAddTask()}>Add</button>
      </>
      <>
        <ul>
          {taskList &&
            taskList.map((item, index) => (
              <div key={index}>
                <li>
                  {item}{" "}
                  <button onClick={() => handleRemoveTask(index)}>
                    Remove
                  </button>
                </li>
              </div>
            ))}
        </ul>
      </>
    </div>
  );
}
Задание 8. Создать компонент корзины для покупок
Подготовьте JSON-данные для товаров и реализуйте приложение корзины для покупок, в котором пользователи могут добавлять выбранные товары, обновлять их количество, удалять их, а также выводить итоговую сумму полного заказа.

items.json:

// items.json
{
  "items": [
    {
      "id": 1,
      "name": "T-shirt",
      "price": 20
    },
    {
      "id": 2,
      "name": "Jeans",
      "price": 50
    },
    {
      "id": 3,
      "name": "Shoes",
      "price": 80
    }
  ]
}
App.js:

import { useState } from "react";
import "./styles.css";
import itemsData from "./items.json";

export default function App() {
  const [items, setItems] = useState(itemsData.items);
  const [cart, setCart] = useState([]);

  const addToCart = (itemId) => {
    const selectedItem = items.find((item) => item.id === itemId);
    const itemInCart = cart.find((item) => item.id === itemId);

    if (itemInCart) {
      const updatedCart = cart.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: (item.quantity || 1) + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...selectedItem, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity > 5) {
      return; // Запрет обновления количества при наличии больее 5 позиций
    }
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <h2>Available Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => addToCart(item.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Cart Total</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} -
            <select
              value={item.quantity || 1}
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value))
              }
            >
              {[...Array(5).keys()].map((number) => (
                <option key={number + 1} value={number + 1}>
                  {number + 1}
                </option>
              ))}
            </select>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total: ${calculateTotal()}</h2>
    </div>
  );
}
Задание 9. Создать компонент пагинации
Создайте компонент пагинации, который получает и отображает данные из API, показывая фиксированное количество элементов на странице.

paginated.js:

import React, { useState, useEffect } from "react";

const PaginationComponent = ({ apiUrl, itemsPerPage }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiUrl}?_page=${currentPage}&_limit=${itemsPerPage}`
        );
        // Предположим, что API отвечает данными в формате JSON
        const jsonData = await response.json();
        setData(jsonData);
        // Получение общего количества элементов из заголовков ответа API
        const totalCount = response.headers.get("X-Total-Count");
        setTotalPages(Math.ceil(totalCount / itemsPerPage));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiUrl, currentPage, itemsPerPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <ol>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li> // Assuming 'name' is the property to display
        ))}
      </ol>
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;
App.js:

import PaginationComponent from "./paginated";

const App = () => {
  return (
    <div>
      <h1>Pagination Example</h1>
      <PaginationComponent
        apiUrl="https://jsonplaceholder.typicode.com/posts"
        itemsPerPage={10}
      />
    </div>
  );
};

export default App;
Задание 10. Создать галерею изображений с бесконечной прокруткой и ленивой загрузкой
Создайте галерею изображений, которая подгружает изображения по мере того, как пользователь прокручивает страницу вниз. Реализуйте ленивую загрузку для повышения производительности.

import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    try {
      // Используйте свой ID клиента, зарегистрировавшись как разработчик на Unsplash и создав приложение.
      const response = await fetch(
        `https://api.unsplash.com/photos/?client_id=weJDI4C21OzgEkJD2ZSkb5yt1aBQwiuHh2tVK4tvS5w&page=${page}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      if (Array.isArray(data)) {
        setImages((prevImages) => [...prevImages, ...data]);
        setPage((prevPage) => prevPage + 1);
      } else {
        console.error("Invalid data format:", data);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    )
      return;
    fetchImages();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="image-gallery">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
          />
        ))}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default App;

Basic Coding/Programming Interview Questions
Q #1) How can you reverse a string?

Answer: String is reversed with the following algorithm:

Initiate
The string that is to be reversed is declared.
Get the length of the string.
Start a loop and then swap the positions of the array elements.
Keep the exchanged positions.
Print the reversed string.
Q #2) What is a palindrome string?

Answer: After the string is reversed as discussed in Q #1, we need to put the following condition:

Code snippet:

1
2
3
4
5
if(actualtxt.equals(reversetxt)){
   return “Palindrome”;
else
     return “Not Palindrome”;
}
Thus, a palindrome string is one that, on reversing, remains the same; for example, ‘madam’ is a palindrome string.

Q #3) How to get the matching characters in a string?

Answer: To get the matching characters in a string, the following steps are followed:

Hash Map data structure is taken, which works with key-value pairs.
Loop through the strings, character by character, and verify if that character of the string exists in the hash map or not.
If the result is true, the counter for the character in the hash map is increased; otherwise, set the count to 1.
Once the loop ends, the HashMap is traversed and prints the characters with over 1 count.
Code snippet:

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
HashMap<Character, Integer> mp = new Hasheem<> ();
   for (int j = 0; j<text.length (); j++) {
       char ch = text.charAt(j);
          if(mp.containsKey(ch)){
                int cnt = mp.get(ch);
             mp.put(ch, ++cnt);
         }else{
            mp.put(ch, 1);
          }
}
Set<Character> charct = map.keySet();
  
for (Character ch: charct){
     int c= mp.get(ch);
     if(c>1){
        System.out.println(ch+ " - " + c);
     }
}
Q #4) How to get the non-matching characters in a string?

Answer: To get the non-matching characters in a string, the following steps are followed:

Hash Map data structure is taken, which works with key-value pairs.
Loop through the string, character by character and verify if that character of the string exists in the hash map or not.
If the result is true, the counter for the character in the hash map is increased, or otherwise, put a count as 1.
Once the loop ends, the Hash map is traversed, and the characters with a count equal to 1.
Code snippet:

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
HashMap<Character, Integer> mp = new Hasheem<> ();
   for (int j = 0; j<text.length (); j++) {
       char ch = text.charAt(j);
          if(mp.containsKey(ch)){
                int cnt = mp.get(ch);
             mp.put(ch, ++cnt);
         }else{
            mp.put(ch, 1);
          }
}
Set<Character> charct = map.keySet();
for (Character ch: charct){
     int c= mp.get(ch);
     if(c==1){
        System.out.println(ch+ " - " + c);
     }
}
Q #5) How to calculate the number of vowels and consonants in a string?

Answer: Here’s how to count vowels and consonants in a string:

Get the string on which the count has to be performed.
Run a loop from 0 to the length of the string.
Take a single character at a time and verify if it is a part of the group of vowels.
If the result is true, increase the count of vowels; otherwise, increment the count of consonants.
Code snippet:

1
2
3
4
5
6
7
8
9
10
for (int k = 0; k < text.length(); k++) {
    char c = text.charAt(k);
    if (c == 'a' || c == 'e' || c == 'i' || 
       c == 'o' || c == 'u') 
              owls += vowls
else
            consonts += consonts
}
System.out.println("Vowel count is " + vowls); 
System.out.println("Consonant count is: " + consonts); 
Q #6) How do you prove that the two strings are anagrams?

Answer: Two strings are called anagrams if they accommodate a similar group of characters in a varied sequence.

To check if two strings are anagrams, the following steps are followed:

Initialize two strings in two variables.
Check if the length of the two strings is similar; if not, then the strings are not an anagram.
If the result is true, take the two strings and store them in a character array.
Sort the two character arrays, then check if the two sorted arrays are alike.
If the result is true, the two strings are anagrams; otherwise, not anagrams.
Code snippet:

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
if (str1.length() != str2.length()) {  
       System.out.println(str1 + " and " +str2 + " not anagrams string");  
}else{
        char[] anagram1 = str1.toCharArray();  
         char[] anagram2 = str2.toCharArray(); 
         Arrays.sort(anagram1);  
         Arrays.sort(anagram2);
          anagrmstat = Arrays.equals(anagram1, anagram2); 
}
if (anagrmstat == true) {
     System.out.println(str1 + " and " +str2 + " anagrams string");  
}else{
    System.out.println(str1 + " and " +str2 + " not anagrams string");  
        }
}
Q #7) Find the count for the occurrence of a particular character in a string.

Answer: To count the occurrence of a particular character in a string, the following steps are followed:

Start with a string and a particular character whose occurrence shall be counted.
Start a loop from 0 to the length of the string.
Compare if a particular character of the string equals the character that is being searched.
If the result is true, then increment the value of the counter.
Code snippet:

1
2
3
4
5
6
7
for (int l=0; l<strng.length(); l++)
{
    if ( strng.charAt(l)== searchedcharacter)
          rslt ++;
  
}
System.out.println(rslt);
Q #8) How to verify if two strings are rotations mutually?

Answer: To verify if two strings are rotations mutually, the following steps are followed:

Initialize the two strings in two variables.
Check if the length of two strings is similar; if not, return false.
Join the string to itself.
Verify if the string that is rotated is present in the joined string.
If the result is true, the second string is a rotation of the first string.
Code snippet:

1
2
3
4
String concat  = org_string + org_string;
 if (concat.indexOf (rotat) !  = -1) {
     return true;
}
Q #9) How to calculate the number of numerical digits in a string?

Answer: To calculate the number of digits in a string, follow these steps:

Get the string on which the count has to be performed
Use the replaceAll function, which replaces all the numerical digits with “”.
Get the length of the string without digits.
Code snippet:

1
2
3
4
5
6
7
8
9
10
11
12
13
14
package introduction;
  
public class GG {
  
       public static void main(String[] args) {
               // TODO Auto-generated method stub
               String str = "TESTu45";
                str=str.replaceAll("\\d", "");
                int l = str.length();
                System.out.println("The length of the string without digit is:" + l);
  
        }
  
}
In this solution, a regular expression is utilized.

Q #10) How to compute the first character of a string that is not repeated?

Answer: To compute the first character of a string that is not repeated, the following steps are followed:

A Set data structure for the repeated characters and a list for the non-repeated characters is taken.
After segregating the repeated and non-repeated elements, the program prints the first element of the list in the console at the end of the iteration.
Code snippet:

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
Set<Character> repeated = new HashSet<>();
List<Character> nonRepeated = new ArrayList<>();
for (int m = 0; m < wrd.length(); m++) {
            char l = wrd.charAt(m);
            if (repeated.contains(l)) {
                continue;
            }
            if (nonRepeated.contains(l)) {
                nonRepeated.remove((Character) l);
                repeated.add(l);
            } else {
                nonRepeated.add(l);
            }
        }
        return nonRepeated.get(0);
    }
Q #11) How to search for a missing number in an array that contains integers from 1 to 100?

Answer: To search for a missing number in an array that contains integers from 1 to 100, the following steps are followed:

Take an integer array with the numbers from 1 to 100.
Compute the sum of the numbers, the summation shall be= l*(l+1)/2, where l is the number of integers.
Perform subtraction of the missing element from the total addition of numbers.
Q #12) How to get the matching elements in an integer array?

Answer: To get the matching elements in an integer array, the following steps are followed:

Build two loops.
In the first loop, collect elements one at a time and add up the number of instances of the selected element.
Code snippet:

1
2
3
4
5
6
7
8
for (m = 0; m < size; m++)  
        { 
            for (n = m + 1; n < size; n++)  
            { 
                if (arry[m] == arry[n])  
                    System.out.print(arr[m]); 
            } 
        } 
Q #13) How to delete the repeated elements in an integer array?

Answer: To delete the repeated elements in an integer array, the following steps are followed:

Build a hashmap that will pick all the elements that were present before.
Loop through the array and verify if the element already exists in the hash map
If the result is true, array traversal is continued; otherwise, the element is printed out in the console.
Code snippet:

1
2
3
4
5
6
7
8
HashMap<Integer,Boolean> m =  new HashMap<>();
    for (int j = 0; j < a.length); j++)
         {
            if (m.get(a[j]) == null) 
                System.out.print(a[j] + " "); 
                 mp.put(a[j], true); 
        } 
    } 
Q #14) Determine the largest and the smallest element of an array that is not sorted.

Answer: To determine the largest and the smallest element of an array, the following steps need to be followed:

Traverse the array, and monitor the maximum element found so far, till we are at the border of the array, the largest element is achieved.
Traverse the array, and monitor the minimum element found so far, till we are at the border of the array, the smallest element is achieved.
Q #15) Explain the bubble sort algorithm.

Answer: The bubble sort algorithm includes the following steps:

Begin from the first element, then perform a comparison with the following element in the array
If the present element is larger than the following element of the array, then swap their positions.
If the present element is lesser than the following element of the array, shift to the next element, and again repeat step 1.
Code snippet:

1
2
3
4
5
6
7
8
9
10
11
for(k = 0; k < arry.length; k++)
    {
        for(l = 0; l < arry.length-l-1; l++)
        {
            if( arry[l] > arr[l+1])
            {
                t = arry[l];
                arry[l] = arry[l+1];
                arry[l+1] = t;
            } 
        }
Scenario-Based Questions for Programming/Coding Interview
Q #16) Implement the insertion sort algorithm.

Answer: Implementation of insertion sort.

Code snippet:

1
2
3
4
5
6
7
8
9
10
11
for (m = 1; m < arry.length; m++) 
    {
        n = m;
        while (n> 0 && arry[n - 1] > arry[n]) 
        {
            k = arry[n];
            arry[n] = arry[n - 1];
            arry[n - 1] = k;
            n--;
        }
    }
Q #17) Determine the second-largest element of an array.

Answer: The second largest element of an array can be computed by the following steps:

State the largest element as the first element of the array and the second largest element as the second element of the array.
Iterate through the loop for traversing the array.
IF arry[i] is greater than the largest element, THEN
Second element? largest element
Largest element = arry[i]
IF the second element is less than arry[i] THEN
Second element = arry[i]
Code snippet:

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
if(arry[0] > arry[1]) {
      l = arry[0];
      s  = arry[1];
   } else {
      l = arry[1];
      s = arry[0];
   }
  
   for(i = 2; i < arry.length; i++) {
      if( l < a[i] ) {
         s = l;
         l = arry[i];
      } else if( s < arry[i] ) {
         s =  arry[i];
      }
   }
Q #18) Explain the reversal of an array.

Answer: Array reversal is performed in the following ways:

Take an array with elements.
Now, exchange the position of the first element with the final element, and similarly, the second element with the penultimate element.
This will continue until the entire array is reversed.
Code snippet:

1
2
3
4
5
for (t = 0; t < arr.length / 2; t++) { 
            tmp = arr[t]; 
            arr[t] = arr[arr.length - t - 1]; 
            arr[arr.length - t- 1] = tmp; 
        } 
Q #19) How to remove special characters in a string that is in lowercase?

Answer: Special characters in a string can be removed by using the replaceAll function in Java.

Code snippet:

1
2
string str = “Testing@”
str.replaceAll(“[^a-z0-9]”,””)
In this solution, a regular expression is utilized.

Q #20) How to perform swapping two strings without using a third variable?

Answer: Two strings are swapped without the help of the third variable by the following steps:

(i) Take two strings i, j, and append them then store them in the first string.

(ii) Using the substring method, extract the string:

j = substring(0,i.length()-j.length())
(iii) Store the string j in string i

i= subsrtirng(j.length)
Code snippet:

1
2
3
4
5
string i = “abc”, j =”def”;
    i = i+j;
    j = i. substring(0,i.length()-j.length());
    i = i.substring(j.length())
   System.out.println(i +””+j);
Q #21) How to traverse to the middle of a linked list?

Answer: To traverse to the middle of a linked list, the following steps are followed:

Declare two pointers, first and second, which are initialized to the linked list head.
Increment the first linked list by two nodes and the second by one node in each loop.
While the first node reaches the end of the list, the second node will point to the middle.
Code snippet:

1
2
3
4
5
6
7
8
9
10
11
first = second = head; 
 while(first !=null) { 
    first = first.next; 
     if(first != null && first.next != null) { 
          second = second.next; 
          first = first.next; 
     } 
} 
 return second; 
   
}
Q #22) Implement the process of reversing a linked list.

Answer: A linked list can be reversed by the following steps:

Declare three nodes preceding, present, and following.
While in the present node, the preceding will be null.
Let the present.next be preceding to reverse the list.
In each loop, present and preceding are incremented by 1.
Code snippet:

1
2
3
4
5
6
7
8
9
10
11
Node preceding=null;
Node following
while(present!=null)
 {
     following=present.next;
     present.next=preceding;
     preceding=present;
     present=following;
  }
return preceding;
}
Q #23) What is the process of deleting matched elements from a linked list that is not sorted?

Answer: To delete matched elements from a linked list that is not sorted, perform the following steps:

Travel from the head to the tail of the linked list.
For every value in the linked list, verify if it’s already present in the hash table.
If the result is true, the element is not added to the hash table.
Code snippet:

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
HashSet<Integer> h = new HashSet<>(); 
        
        node present = head; 
        node preceding = null; 
        while (present != null)  
        { 
            int presentval = present.value; 
               
            if (h.contains(presentval)) { 
                preceding.next = present.next; 
            } else { 
                h.add(presentval); 
                preceding = present; 
            } 
            present = present.next; 
        } 
    
    } 
Q #24) How to get the length of a linked list?

Answer: To get the length of a linked list, the following steps are followed:

Start a counter with a value of 0 and present the node as the head.
Till the present node is not null, perform these :
present = present -> next
counter = counter + 1
Counter value is returned.
Code snippet:

1
2
3
4
5
6
7
8
9
10
{ 
        Node present = head; 
        int c = 0; 
        while (present != null) 
        { 
            c = c + 1; 
            present = present.next; 
        } 
        return c; 
    } 
Q #25) How to search for a specific value in a linked list?

Answer: You complete the following steps to search for a specific value in a linked list:

Declare the present node as head.
Till the present node is not null, perform these :
present -> value is equal to the value being looked for, return true.
present = present -> next.
If not found, false is returned.
Code snippet:

1
2
3
4
5
6
7
8
9
Node present = head;  
        while (present != null) 
        { 
            if (present.value == value) 
                return true;     
            present = present.next; 
        } 
        return false;     
    } 
Q #26) How to verify if a number is prime or not?

Answer: To verify if a number is prime or not, the following steps are followed:

Start a loop from value 2(k) up to (number / 2)
If the number is perfectly divisible by k, then the number is non–prime.
If the number is not perfectly divisible except for 1 and by itself, then the number is prime.
Code snippet:

1
2
3
4
5
6
7
8
9
10
11
12
13
for(k = 2; k <= number / 2; k++)
  {
      if(number % k == 0)
      {
          stat = false;
          break;
      }
  }
  if (stat)
     System.out.println("Prime";
        
  else
      System.out.println("Not prime");
Q #27) How to get the third node of a linked list?

Answer: To get to the third node of the linked list, you perform the following steps:

Start a counter with a value of 0.
Iterate through the linked list and perform these steps:
If the value of the counter is 3, then the present node is returned.
The counter is increased by 1.
Modify the present such that it implies the next present.
Code snippet:

1
2
3
4
5
6
7
8
9
Node present = head; 
        int c = 0; 
        while (c != null) 
        { 
            if (c == 3) 
                return present.val; 
            c = c+1; 
            present = present.next; 
        } 
Q #28) Compute the first five Fibonacci numbers.

Answer: 0 and 1 are the first two Fibonacci numbers, and all the numbers after 0 and 1 are the sum of the two previous numbers.

Code snippet:

1
2
3
4
5
6
7
int num1=0, num2=1,t;
for ( int k = 0; k<5,k++)
{
   System.out.println(num1);
   t = num1 + num2;
   num1 = num2; num2 = t;
}
Q #29) How to reverse a number?

Answer: Reversal of a number is achieved in the following steps:

Take out the rightmost digit of the number.
Sum up the digits with the new reversed number.
Perform multiplication by 10.
Divide the number by 10.
Q #30) Determine the factors of a number.

Answer: The factors of a number are expressed by the following code snippet:

1
2
3
4
5
6
int no = 75;
  
         for(int j = 1; j <= no; j++) {
            if (no % j == 0) {
                System.out.print(j);
            }
Final Thoughts on Interview Questions for Coding Developers
We are hopeful that we have clarified many of the answers to your queries on the basic coding interview questions.

Most of the coding implementations that we have discussed are in Java; however, even if you are unaware of the language, the steps or the details of the algorithm given here for most of the questions will help you to prepare for an interview.

Work hard on your basics of programming, logic, and data structures, stay calm, and practice these programming interview questions.

Одна React-задача, демонстрирующая ключевые навыки на собеседовании
Простой
7 мин
60K
ReactJS
*
JavaScript
*
TypeScript
*
Веб-разработка
*
Кейс
Фото из сериала Silicon Valley
Фото из сериала Silicon Valley
Ниже - пример того, как я обычно представляю (и детально разбираю) один из моих любимых вопросов по фронтенд-разработке на собеседовании. Он основан на моем опыте интервьюирования в крупных IT-компаниях. Этот вопрос посвящён созданию небольшого React-компонента, который асинхронно получает данные на основе пропса username. Он кажется простым, но на самом деле показывает много нюансов понимания кандидатом хуков React, сайд-эффектов, состояния гонки (race conditions) и компромиссов в дизайне. Приятного чтения!

Как и у любых других вопросов для собеседования, у этого есть недостатки. Собеседование - искусственная ситуация с жёсткими временными ограничениями, и кандидат может нервничать или уставать. Моя цель - не поймать человека на ошибке, а понять, как он рассуждает о реальных проблемах, с которыми может столкнуться в работе.

Суть задачи на интервью
Перед вами один из возможных примеров использования компоненты <Profile>, который получает проп username и внутри делает запрос на некий API (например, fetchProfile(username)) – это некая абстракция: может быть GitHub, может быть корпоративный сервис, без разницы.

const App = () => {
  return (
    <Profile username="john_doe">
      {(user) => (user === null ? <Loading /> : <Badge info={user} />)}
    </Profile>
  );
};
Объяснить с
Представьте, что вы разрабатываете библиотеку компонентов внутри большой компании, и этой библиотекой будут пользоваться другие команды (вполне реальный сценарий в больших IT-компаниях). Задача: написать реализацию компонента Profile, чтобы им удобно и ожидаемо могли пользоваться в самых разных контекстах.

import React, { useState, useEffect, useRef } from 'react';
import fetchProfile from 'somewhere'; 
// Это фиктивная функция, которая возвращает Promise,
// резолвящийся в объект пользователя

function Profile() {
  // Допишите здесь логику
}
Объяснить с
Важный дисклеймер:

user === null ? <Loading /> : <Badge info={user} /> - это упрощённая проверка. В реальном мире сервер может вернуть null в ответ, и нам придётся делать дополнительную логику, чтобы корректно обрабатывать “нет данных” vs. “данные ещё загружаются”. Однако мы намеренно оставим такой код, чтобы посмотреть, заметит ли кандидат потенциальную проблему и предложит ли более надёжное решение (например, isLoading флаг).

Наш fetchProfile не даёт возможности вызвать abort(). Это сделано специально, чтобы проверить, знает ли кандидат про аборт запросов (AbortController) и как он будет рассуждать, если такой возможности нет.

Начинаем решение
Чаще всего кандидаты сначала пишут что-нибудь простое, используя функциональные компоненты и хуки:

import React, { useState, useEffect } from 'react';
import fetchProfile from 'profileApi'; // воображаемый модуль

const Profile = ({ username, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile(username).then(setUser);
  }, []);

  return children(user);
};
Объяснить с
Как ни странно, но на этом этапе у многих возникают сложности с пониманием того, что в children может быть функция, и её можно просто вызвать: children(user), даже не оборачивая во всякие <div>...</div> или <></>. Почему-то кандидатам с ними спокойнее.

Однако уже тут видно несколько типичных моментов:

Отсутствие зависимостей в useEffect.Часто люди забывают добавить username в массив зависимостей. Это значит, что если username поменяется, запрос на новый профиль не произойдёт.

Необработанные ошибки. А что если fetchProfile завершится ошибкой или вернёт null?

Уточняем детали
В интервью я обязательно спрашиваю: "А что, если проп username может динамически меняться? Например, пользователь кликает по списку пользователей?" Тогда кандидат обычно исправляет код, добавляя username в зависимости эффекта:

useEffect(() => {
  fetchProfile(username).then(setUser);
}, [username]);
Объяснить с
Теперь, если username меняется, мы делаем новый запрос. Так понятнее. Но…

Race condition (гонка состояний)
Дальше я описываю сценарий: представьте, что в вашем приложении две панели. Слева - список пользователей, справа - <Profile username={currentUsername} />. Пользователь начинает быстро кликать то по одному, то по другому пользователю.

Запрос A уходит для username = 'alice'.

Тут же пользователь кликает на username = 'bob', отправляется запрос B.

Запрос B возвращается быстрее, мы записываем в state данные bob.

Потом запрос A (более медленный) тоже возвращается, и внезапно перезаписывает state данными пользователя Alice!

"Может быть тут какая либо проблема?". К счастью в основном ответ да - при таком кейсе у нас может отображаться неправильная информация. На экране написано “bob”, а по факту в компоненте данные “alice”.

Разбор типичных решений
Приведу несколько реальных подходов, которые я видел от кандидатов. Самые экзотические - типа очереди запросов - опустим :)

Локальная переменная вне компонента
Иногда пытаются сделать что-то вроде:

let lastUsernameFetched = null;
function Profile({ username, children }) {
  const [user, setUser] = useState(null);
  lastUsernameFetched = username;

  useEffect(() => {
    fetchProfileManaged(username).then((profile) => {
      if (lastUsernameFetched !== username) {
        setUser(profile);
      }
    });
  }, [username]);

  return children(user);
}
Объяснить с
По сути, мы храним состояние (lastUsernameFetched) на уровне модуля. Но что, если на странице несколько экземпляров <Profile>? Придётся как-то разделять их по идентификаторам. Это далеко не лучшее решение…

Использование useRef для отслеживания текущего username
Иногда кандидаты придумывают хранить текущий username в useRef, чтобы при получении результата сравнивать, совпадает ли он со значением пропса. Кандидат начинает спрашивать про структуру ответа, и в этом месте мы обычно вводим предположение, что username в объекте профиля всё-таки есть. В результате вижу такое решение:

const Profile = ({ username, children }) => {
  const [user, setUser] = useState(null);
  const usernameRef = useRef(username);

  useEffect(() => {
    fetchProfile(username).then((profile) => {
      if (usernameRef.current === profile?.username) {
        setUser(profile);
      }
    });
  }, [username]);

  return children(user);
};
Объяснить с
Почему-то часто встречал заблуждение, что useRef(username) всегда будет передавать в usernameRef актуальное значение пропса 🤷‍♂️ (хотя на самом деле это лишь начальное значение). После выяснения этого обстоятельства встречаются исправления в виде:

...
useEffect(() => {
  usernameRef.current = username;
}, [username]);
...
Объяснить с
Это приводит к лишнему вызову эффекта, но чаще встречается, к счастью, такой ответ:

const Profile = ({ username, children }) => {
  const [user, setUser] = useState(null);
  const usernameRef = useRef(username);

  useEffect(() => {
    usernameRef.current = username;
    fetchProfile(username).then((profile) => {
      if (usernameRef.current === profile?.username) {
        setUser(profile);
      }
    });
  }, [username]);

  return children(user);
};
Объяснить с
Отлично, идем дальше.

А если у нас в приложении две страницы, и пользователь уходит со страницы с <Profile> раньше, чем придёт ответ от fetchProfile будет ли тут какая-либо проблема?

"Да, будет", ведь компонент может быть размонтирован, а асинхронный вызов вернётся. Возникает сценарий, когда React ругается - “Can’t perform a React state update on an unmounted component…”.

Тогда нередко вижу такой решение:

...
useEffect(() => {
  return () => {
    usernameRef.current = null;
  }
}, []);
...
Объяснить с
Это, как правило, вовсе не гарантирует, что setUser никогда не будет вызван (мало ли, если не хороший сервер вернёт null).

Идеальное решение
Часто самый простой подход (при отсутствии AbortController) - завести внутри useEffect переменную-флаг:

const Profile = ({ username, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isLive = true;
    setUser(null);
    fetchProfile(username)
      .then((profile) => {
        if (isLive) {
          setUser(profile);
        }
      })
      .catch((err) => {
        // Здесь можно обсудить дополнительные аспекты обработки ошибок.
        // Если интересно, какие именно - пишите вопросы к статье :)
      });

    return () => {
      isLive = false;
    };
  }, [username]);

  return children(user);
};
Объяснить с
Пока isLive = true, состояние обновляется при поступлении ответа

Если компонент размонтировался или username изменился (а значит, эффект сработает заново), переменная isLive сбрасывается в false. В результате старый запрос, вернувшийся с задержкой, не изменит состояние.

Таким образом, удаётся избежать гонки при обновлении состояния и предупредить возникновение ошибки в React при вызове setState на размонтированном компоненте.

Добавление блока catch наглядно показывает возможность обработки ошибок от сервера или сети. При необходимости можно обсудить способы уведомления пользователя и логирования таких ошибок.

Примечание: для упрощения здесь не рассматривается сценарий, когда username или children могут оказаться "пустыми" (например, null, undefined или пустая строка), а также ситуация, когда children не является функцией. Однако здорово, если кандидат обратит внимание и на эти нюансы.

Почему мне нравится этот вопрос
Он небольшой по объёму и наглядно показывает ключевые аспекты работы с React: получение данных, состояние загрузки, корректный рендер и работу с пропами.

Он проверяет базовые знания React: хуки, сайд-эффекты, “cleanup” при размонтировании, изменение пропсов со временем - всё это ключевые концепции во фронтенд-разработке на React.

Он выявляет важные крайние случаи:

Проп username может меняться, пока запрос ещё выполняется.

При уходе со страницы до завершения запроса может случиться попытка обновить state размонтированного компонента.

Сервер может вернуть null или ошибку.

Может возникнуть состояние гонки при быстрых переключениях пользователя.

Его можно масштабировать. Джуны могут представить простую рабочую версию, а для синьоров я могу задать дополнительные вопросы про оптимизацию, отмену запросов, работу с несколькими запросами одновременно.

Итог
Моя цель в подобных React-вопросах - не просто услышать готовое решение, а понять, как человек рассуждает:

Задаёт ли он уточняющие вопросы: “Что если username меняется?”, “Что если у нас много быстрых кликов?”, “Нужна ли отмена запроса?”

Понимает ли он асинхронные эффекты и их подводные камни?

Учитывает ли он необходимость освободить ресурсы при размонтировании компонента?

Думает ли о загрузке / ошибках / логировании - ведь сервер может вернуть null, ошибку, или просто долго висеть.

В конце концов, главное - это структура размышлений. Точно так же, как в системном дизайне мы обсуждаем компромиссы по сложности, памяти, пропускной способности, здесь в React-собеседовании смотрим на подход к работе с данными, пропами, асинхронностью, состоянием и реактивным UI.

Теги:reactсобеседование
Хабы:ReactJSJavaScriptTypeScriptВеб-разработка

Подскажите, пожалуйста, пару интересных вопросов для сеньоров по этой задаче.

andry36
4 фев 2025 в 16:31
Спасибо, что обратили внимание на задачу!
Я бы задал вопросы, связанные с производительностью и оптимизацией, например:
Как организовать параллельную загрузку нескольких профилей и синхронизировать их результат в одном компоненте?
Как выстроить отказоустойчивость при сбоях сети (ретраи, отмена запросов, механизмы кэширования)?
Как решать проблему при работе в среде SSR, где запросы нужно делать ещё до рендера?
Как совместить подход с Suspense и Error Boundaries для более реактивной UX-модели?

dark_gf
3 фев 2025 в 18:11
Вопрос в общем хороший, у меня больше инетресует вот эта часть:

    <Profile username="john_doe">      {(user) => (user === null ? <Loading /> : <Badge info={user} />)}    </Profile>

Видя такой код я могу предположить что в проекте вашем может быть такого очень много, что имхо есть намек к не очень хорошему проекту )))

SergeyEgorov
3 фев 2025 в 19:10
Тоже хотел спросить- Это весь код компонента App, или что-то не показано с какой-то целью?

andry36
4 фев 2025 в 16:40
Да, в статье показан только упрощённый фрагмент компонента App. Он служит примером того, как использовать <Profile> на практике - без лишнего кода, не относящегося к сути задачи.

andry36
4 фев 2025 в 16:39
Благодарю за мнение.
Этот пример с функцией в children демонстрирует, что это обычный React-проп, которому можно передавать функцию как значение.
Сама идея упрощена для собеседования (в статье это указано), чтобы оценить именно понимание жизненного цикла и эффектов - в боевом проекте, конечно, принято грамотно разделять ответственность и не плодить запросы во всех мелких компонентах.

Zukomux
3 фев 2025 в 19:46
Простите, но запрос данных в эффекте это моветон. Если нужна загрузка данных, то ее надо оформлять хуком и делать функциональную композицию на уровне "умного" компонента(контроллера)

Xao
3 фев 2025 в 21:45
А уже хук будет вызывать внутри useEffect? Давайте угадаю, на выходе хотим три стейта - loading, error и result?

Начиная с React 19, этот подход устарел окончательно, лучше сделать запрос, получить промис и передать его дальше потребителям, используя Suspense и новый метод use. А ошибку ловить в ErrorBoundary.

Anaferat
4 фев 2025 в 05:19
А почему мы считаем что подход от команды реакт лучше?

js2me
4 фев 2025 в 09:27
Больше возникает вопрос - почему хранение бизнес логики приложения в слое предоставления правильное решение и почему команда React тоже так считает?

Почему это считается правильным только во фронтенд веба ?)

Vitaly_js
4 фев 2025 в 12:27
Из документации по реакт:

Only Suspense-enabled data sources will activate the Suspense component. They include:

Data fetching with Suspense-enabled frameworks like Relay and Next.js

Lazy-loading component code with lazy

Reading the value of a cached Promise with use

Suspense does not detect when data is fetched inside an Effect or event handler.

The exact way you would load data in the Albums component above depends on your framework. If you use a Suspense-enabled framework, you’ll find the details in its data fetching documentation.

Suspense-enabled data fetching without the use of an opinionated framework is not yet supported. The requirements for implementing a Suspense-enabled data source are unstable and undocumented. An official API for integrating data sources with Suspense will be released in a future version of React.

Что имеется в виду в последнем абзаце?

andry36
4 фев 2025 в 16:56
В последнем абзаце речь идёт о том, что полноценная реализация Suspense для произвольных запросов (без специальных фреймворков, типа Relay или Next.js) всё ещё считается нестабильной API. Другими словами, официальной документации и гарантий для общего случая пока нет, и React-команда может менять поведение или интерфейсы в будущем. Поэтому, если вы хотите «чистый» Suspense без дополнительных библиотек, стоит учесть, что это пока не является полностью поддерживаемым сценарием, и ваши решения могут сломаться в следующих версиях React.

Vitaly_js
4 фев 2025 в 17:06
О чем-то таком я тоже догадался. Мой вопрос спровоцировало вот это предложение: "Начиная с React 19, этот подход устарел окончательно". На мой взгляд, что бы что-то устарело окончательно должен накопиться опыт, и этот опыт должен перейти в эффективные решения. Данное же предложение из доки подсказывает, что это далеко не так.

Zukomux
5 фев 2025 в 07:16
И в итоге получаем компонент-мультитул. Тут и загрузка данных, и обработка ошибок, мапинг входных данных, формирование представления. Это подойдёт разве что для пет проекта, а в контексте статьи для проверки на джуна. Поменяйте роут с данными и придется 80% компонента переписать заново. Про тестирование я уже молчу

andry36
4 фев 2025 в 16:46
Хук внутри себя всё равно будет использовать useEffect для запроса данных, так что это вопрос именно композиции и структурирования кода, а не принципиального отличия в подходе. Пример был упрощен оставляя пространство для вопроса "А как бы вы сделали это?" :)

Vitaly_js
4 фев 2025 в 18:03
Не обязательно же. Можно сделать через useSyncExternalStore. Тогда все эти задачи, которые вы проверяете в данном примере с монтирование/размонтирование, состоянием гонки и т.п. будут решены внутри объекта Profile и реакт тут вообще будет как бы ни при чем. Для использования надо только знать спецификацию useSyncExternalStore.

YuriyUl
4 фев 2025 в 08:46
а проброс функции в children не противоречит самому смыслу {children}?

bycolour
4 фев 2025 в 16:56
Нет, это называется render function

radist2s
4 фев 2025 в 12:20
Пожалуй, вы забыли про пару важных моментов: Abort Controller и React Strict Mode.

andry36
4 фев 2025 в 16:58
В статье я специально упомянул, что у нас якобы нет возможности вызвать abort(), чтобы проверить реакцию кандидата на ситуацию неуправляемого запроса. А Strict Mode помогает увидеть возможные побочные эффекты и дважды вызываемые функции - это тоже важно учитывать для корректной реализации асинхронной логики.

radist2s
4 фев 2025 в 20:04
Просто обожаю технические задачи в вакууме на собеседованиях. Ваше идеальное решение не проходит даже базовую проверку на предотвращение рефетча (откройте консоль, и увидите как запрос выполняется дважды при первом маунте).

Меня всегда поражала подобная самоуверенность интервьюеров.

bakunovdo
5 фев 2025 в 06:17
Strict mode удалить нужно

username-ka
4 фев 2025 в 12:25
Прикольный вопрос, я бы не принял ни предложенное решение, ни сам факт существования подобного компонента. Весь мир использует tanstack-query в качестве стандарта де-факто, камон.

andry36
4 фев 2025 в 17:01
Спасибо за комент!
"Весь мир использует..." громкое утверджение, сразу хочется попросить пруфы :)
Не все компании применяют именно tanstack-query. К тому же в задаче проверяются общие принципы работы с асинхронностью в React: если человек хорошо понимает эту логику, он без труда освоит и любую абстракцию вроде React Query или SWR.

username-ka
4 фев 2025 в 19:29
У всех разные стандарты, это нормально. В моей реальности в 2025 году всё-таки стыдно было бы рисовать спиннеры руками "если данные null", тригерить загрузку в useEffect, игнорировать серверные компоненты и существование хуков.

"Не все компании применяют именно tanstack-query" - это действительно так. Но всерьёз кандидатов, который не задаёт первым вопросом "а нам точно надо такой велосипед напилить", я на своих интервью не рассматриваю.

onets
4 фев 2025 в 15:53
Есть callback hell, а это nano-micro-component hell, когда каждый уважающий себя микро-компонент лезет на сервер за данными. Когда их становится много - начинается подобное веселье.

andry36
4 фев 2025 в 17:02
Пример из статьи не призывает каждый микро-компонент делать собственный запрос. Это лишь иллюстрация ключевых вопросов, которые помогают оценить понимание React-хуков и потенциальных ловушек асинхронности. Для боевого применения, конечно, нужно распределять логику так, чтобы не превратить приложение в зоопарк из сотен запросов. Но на собеседовании хочется увидеть, как кандидат работает именно с базовой механикой React - тогда уже понятно, сможет ли он грамотно её применить внутри более продуманной архитектуры.

Vitaly_js
4 фев 2025 в 16:50
Представьте, что вы разрабатываете библиотеку компонентов внутри большой компании, и этой библиотекой будут пользоваться другие команды (вполне реальный сценарий в больших IT-компаниях). Задача: написать реализацию компонента Profile, чтобы им удобно и ожидаемо могли пользоваться в самых разных контекстах.

Не очень люблю такое, потому что это смахивает на чисто синтетическую задачу или банальное запудривание мозгов соискателю.

Вот вы сами пишете, что уже есть fetchProfile Тогда зачем нужен вот этот вот компонент? Реэкспортируйте вы этот fetchProfile и тогда действительно его можно использовать в разных контекстах. И внутри реакт компонентов, и внутри какой-нибудь rtkquery. По сути, вся задача - это прослойка между пользовательским кодом и fetchProfile , которая уже откидывает часть контекстов в которых будет использована.

Вы действительно проверяете знания реакта, но, на мой взгляд, в неестественных условиях, т.е. создаете дополнительно пространство для стресса и для траты времени на муру.


andry36
4 фев 2025 в 17:20
Спасибо за комментарий!
Понимаю, что такая постановка задачи может показаться искусственной, но для собеседований она довольно типична: нам нужно в ограниченное время проверить, как кандидат мыслит в контексте React, понимает ли он тонкости хуков и асинхронных запросов.
На интервью часто задают подобные микро-задачи, чтобы быстро увидеть, как разработчик работает со стейтом, эффектами и обработкой ошибок на практике - без вдавания в детали полной архитектуры приложения.

Т.е. что это не замена реального проектного кода, а тестовое окружение, где проявляются навыки кандидата.


Vitaly_js
4 фев 2025 в 17:46
Так в этом и проблема. Ваша задача быстро проверить навыки. А задача соискателя не ударить в грязь лицом. Если вы даете липовую задачу, действительно, можно не думая начать решать и вроде как показывать навыки. А можно начать рефлексировать и пытаться выяснить, а что тут проверяют?

Создавая искусственные ограничения вы не "упрощаете" задачу, а наоборот создаете реальные препятствия для ее решения. И как выше заметили можете создавать неверное представление о проекте.

fetchProfile не позволяет отменять запросы. А fetchData1, fetchData2 тоже не позволяют? Как должен ответить соискатель? Решить задачу слепо заткнув дыру в архитектуре или поставить под сомнение реализацию fetchProfile ? В любом случае это игра ва-банк. Ты можешь показать себя либо безынициативным сразу взявшись за работу, либо наоборот излишне инициативным, либо неуверенным, либо болтливым и все это ровно из-за "липовости" тестового примера.

И да, это действительно типично для собеседований, поэтому я и говорю, что такое не очень люблю. Вроде как хотят протестировать навыки (точно хотите навыки протестировать?)), вроде как сами же думают, что речь идет о реальных условиях, но тестируются далеко не только навыки и далеко не в реальных условиях.


Ione1991
4 фев 2025 в 17:58
Не совсем понятен первый пример с lastUsernameFetched. Разве там условие не будет всегда ложно?


aw350me
4 фев 2025 в 17:59
Боже, как же все это противно выглядит.

Я все понимаю и про плюсы реакта и джаваскрипта в целом, у каждого языка есть свои недостатки, но конкретно этот пример показывает насколько же банальная работа с запросами это вязкая, противная, неоднозначная и нагроможденная работа в вебе с джс и реактом конкретно.

Сильно отталкивает от изучения и даже просто наблюдения за, казалось бы, перспективными и популярными разработками в сфере разработки веб приложений

questpc
5 фев 2025 в 07:23
Это просто им движет желание сделать "слишком хорошо" или идеально. По факту же консоль браузера в поисках ошибок обычный пользователь смотреть не будет. И непонятно почему сервер вернет null. Если пользователь отсутствует, то сервер вероятно вернет не 200 код вообще и ошибка будет на уровне запроса.

Частое тыканье в имена пользователей вообще лучше всего решить загрузкой данных для всех отображаемых в данный момент. Ну или Profile создавать не одну инстанцию а на каждый клик отдельно.

Kergan88
5 фев 2025 в 16:37
В интервью я обязательно спрашиваю: "А что, если проп username может динамически меняться? Например, пользователь кликает по спис

В этих случаях есть стандартное рекомендованное командой реакта решение - использовать ключи. Т.е.:

<Profile key={username} username={username}>
В итоге username внутри компонента меняться не будет. В этом случае нам не надо писать "мусорный" код, вместо этого гарантия корректности будет обеспечена на уровне фреймворка.

Дальше я описываю сценарий: представьте, что в вашем приложении две панели. Слева - список пользователей, справа - . Пользователь начинает быстро кликать то по одному, то по другому пользователю.

Поскольку реакт гарантирует корректность, об этом думать не надо, и ни чего по этому поводу делать не надо. Все будет работать правильно само по себе.

"Да, будет", ведь компонент может быть размонтирован, а асинхронный вызов вернётся. Возникает сценарий, когда React ругается - “Can’t perform a React state update on an unmounted component…”.

Нет, не будет. Это не является какой-либо проблемой. Корректность работы компонента уже гарантирована, и поэтому можно не думать о подобных вещах.

Идеальное решение

А теперь правильное идеальное решение:

const Profile = ({ username, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => fetchProfile(username).then(setUser), []);

  return children(user);
};
Чтобы обеспечить тот же интерфейс, который требуется изначально, можно объявить дополнительный компонент:

const ProfileWrapper = ({ username, children }) => (
  <Profile key={username} username={username}>
    {children}
  </Profile>
);
Код работает корректно, согласно требованиям, ни каких проблем не имеет.

ЗЫ: а при использовании suspense компонент будет и вовсе выглядеть так:

const Profile = ({ username, children }) => children(use(fetchProfile(username)));
с соответствующей оберткой. И, что характерно - все будет работать как надо. Без ненужных изъебов. KISS.

taujavarob
6 фев 2025 в 21:58
А теперь правильное идеальное решение:

Супер интересное решение. Браво!

Но в реале наверняка надо в key помещать какое-то Id , так как имена в списке могут совпадать.

Да и что будет если кто-то использует Profile без обёртки ProfileWrapper? - но это конечно, наверное, организационный момент, хотя, согласно "правилу Мерфи" - такое рано или поздно произойдет. 

Kergan88
7 фев 2025 в 06:18
Супер интересное решение.

Это же _стандартное_ решение, которое явно рекомендовано вот тут:
https://react.dev/learn/you-might-not-need-an-effect "Resetting all state when a prop changes"

Но в реале наверняка надо в key помещать какое-то Id , так как имена в списке могут совпадать.

В каком списке? Это один компонент-панелька, который не выводится в массиве.

Да и что будет если кто-то использует Profile без обёртки ProfileWrapper?

То же самое, что и в том случае, если кто угодно будет использовать любой другой компонент _непредназначенным образом_. В крайнем случае можно импортировать только обертку. Все равно это выглядит гораздо проще. Ну и работает корректнее - тут, как уже отметили, "идеальное" решение автора-то по факту глючное - если быстро протыкать например по 5 разным юзерам, то начнут запросы приходить по очереди и мы увидим как на панельке с задержкой переключается пять юзеров)

Смысл то моего подхода именно в том, чтобы не писать когнитивно сложный код, когда можно его не писать. Тогда и места для ошибки не будет. Нельзя ошибиться в кодле, который не написан) а автор вот решил такой код написать - и посадил ошибку.

Vitaly_js
7 фев 2025 в 12:21
Это же _стандартное_ решение, которое явно рекомендовано вот тут:

Это стандартное решение, когда речь идет о коде без эффектов. В данном случае, оно, очевидно, не подходит. По сути, вы заявляете, что у вас есть компонент Profile, который имеет сайдэффекты и зависит от клиентских данных. Но по факту, он от клиентских данных не зависит и любой кто будет его использовать как есть, т.е. просто посылая новые данные в username никакого эффекта не получат. Только изучая документацию или исходный код они узнают, что частью публичного интерфейса является так же и инфраструктурное свойство key.

По сути, вы убираете из реакта функциональность useEffect, и реализуете ее окольными путями.

В документации прямо пишут:

Effects are an escape hatch from the React paradigm. They let you “step outside” of React and synchronize your components with some external system like a non-React widget, network, or the browser DOM.

Вы же, вместо того, что бы синхронизировать компонент используя встроенные средства, делаете такую синхронизацию средствами предназначенными для другого.

Команда реакт не советует так делать. Эти оптимизации логичны и работают как оптимизации именно когда нет useEffect

Kergan88
8 фев 2025 в 06:19
Это стандартное решение, когда речь идет о коде без эффектов. 

Нет, это стандартное решение, когда надо сбрасывать стейт при изменении пропса. По линку буквально описан кейс из статьи - даже компонент тот же самый с пропсом - Profile и userId.

Только изучая документацию или исходный код они узнают, что частью публичного интерфейса является так же и инфраструктурное свойство key.

Так написано же: "Note that in this example, only the outer ProfilePage component is exported and visible to other files in the project." (в моем посте это ProfileWrapper). Интерфейс точно такой же, как требуется. Тому, кто использует компонент, ни чего про ключи знать не надо.

По сути, вы убираете из реакта функциональность useEffect, и реализуете ее окольными путями.

useEffect остался там, где был: "useEffect(() => fetchProfile(username).then(setUser), []);" вместе со всей своей функциональностью.

Вы же, вместо того, что бы синхронизировать компонент используя встроенные средства

Наоборот, я как раз предлагаю использовать встроенные средства, предлагаемые фреймворком, вместо того чтобы писать для синхронизации свои велосипеды. В итоге мой код выше работает правильно (и не может не работать, потому что там негде ошибиться), а код автора с велосипедами - _не работает_ правильно (потому что синхронизация стейта - сложная задача, и даже в таких примитивных кейсах делать ее руками - значить обосраться). Не говоря уже о том, что сам код гораздо проще и лучше поддерживается.

Команда реакт не советует так делать.

Это прямая ложь, я выше дал ссылку, где рассматривается буквально наш кейс и команда реакта четко и однозначно говорит "используйте в этом и похожих случаях ключи".

@taujavarob

Оно понятное, но оно основано на том, что у вас в компоненте нет никакого состояния

Если бы состояния не было, то нам не надо было бы его обнулять при помощи key. Состояние то у нас есть, просто нам не надо поддерживать "непрерывность" этого состояния при изменении пропса - наоборот, нам надо состояние сбрасывать. И вот в таких случаях, когда надо сбрасывать состояние при изменении пропсов - и надо использовать ключи.

Возможно, наверное, всё приложение создавать в таком стиле "рубки" - но оно будет какое-то странное для React.

Наоборот, это и есть react-way. Напомню, что реакт - это порт внутреннего php-фреймворка, основа его логики - если мы что-то сделали, то пришел новый ответ с сервера, который заново с нуля и полностью отрендерил всю страницу. Реакт изначально сделан так, чтобы эмулировать такое поведение (и чтобы можно было потом с наименьшими болями портировать код с php на js), это основа его архитектуры.

В React все хороводят вокруг "состояния", а в случае key состояния нет вообще. 

Все верно, состояние и работа с ним - это сложно и чревато ошибками. Если есть возможность написать код так, чтобы избежать работы с состоянием или положить работу с ним на плечи самого фреймворка - так и надо делать. Чтобы не обосраться со сложным кодом - надо просто не писать сложный код.

Vitaly_js
8 фев 2025 в 10:38
Нет, это стандартное решение, когда надо сбрасывать стейт при изменении пропса. По линку буквально описан кейс из статьи - даже компонент тот же самый с пропсом - Profile и userId.

По ссылке которую вы дали, данный вид оптимизаций может быть выполнен если не используется сайдэффект. Если сайдэффект используется то для этого существует useEffect. О чем прямо написано в первом же абзаце. И пример, который вы упоминаете так же useEffect не использует. Поэтому никакое это не стандартное решение.

Вы взяли частный случай случай оптимизации и заменили им общий случай использования useEffect. Разумеется подобный подход командой реакт не продвигается.

Интерфейс точно такой же, как требуется. Тому, кто использует компонент, ни чего про ключи знать не надо.

Это понятно, что все что угодно можно замаскировать. Но в данном случае, использовать обертку, инфраструктурное свойство только для того, что бы не использовать по назначению useEffect - это антишаблон. Вы просто вынесли и замаскировали зависимость useEffect в шапку компонента. Спрашивается зачем, если для сайдэффектов есть useEffect и возможность задания зависимостей для него.

useEffect остался там, где был: "useEffect(() => fetchProfile(username).then(setUser), []);" вместе со всей своей функциональностью.

Вы прочитайте полностью раздел на который ссылаетесь. Он прямо так и называется: "Вам возможно не нужны эффекты". Иными словами, семантику useEffect вы игнорируете. И относитесь к нему как к useMemo например. Так же игнорируете возможность настроить useEffect через массив зависимостей перенося их в шапку компонента. Это и называете проигнорировали функциональность.

Наоборот, я как раз предлагаю использовать встроенные средства, предлагаемые фреймворком, вместо того чтобы писать для синхронизации свои велосипеды.

Какие велосипеды? Ниже человек дал ссылку в которой разработчики Реакт объяснили смысл предупреждения об обновлении стейта на размонтированном компоненте. Проблема действительно есть, но автор статьи использовал пример в котором проблемы нет. Тем не менее, знать о том, что такая проблема существует полезна. И именно для таких вещей придуман useEffect. Если убрать избыточную функциональность для данного примера. То получится ровно тоже самое что и у вас.

const Profile = ({ username, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile(username)
      .then(setUser)
      .catch((err) => {
        // Здесь можно обсудить дополнительные аспекты обработки ошибок.
        // Если интересно, какие именно - пишите вопросы к статье :)
      });
  }, [username]);

  return children(user);
А вот ваше решение:

const Profile = ({ username, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => fetchProfile(username).then(setUser), []);

  return children(user);
};
Вы просто решили работать с useEffect как с useMemo в соответствии с теми рекомендациями, которые содержатся в приведенном вами разделе документации. Но так делать никто не советовал, потому что useEffect не равно useMemo.

 В итоге мой код выше работает правильно (и не может не работать, потому что там негде ошибиться)

Вообще-то нет. Вы так спешили, что неправильно сконфигурировали useEffect. Поэтому как раз ваш код не работает.

а код автора с велосипедами - _не работает_ правильно (потому что синхронизация стейта - сложная задача, и даже в таких примитивных кейсах делать ее руками - значить обосраться).

Он работает правильно. Избыточно в данной ситуации, но все корректно. Никакой сложной задачи в синхронизации стейта нет. Это как раз обычная для реактразработчика задача. Проблема этого кода именно в смысловой нагрузке, а не в технической реализации.

Это прямая ложь, я выше дал ссылку, где рассматривается буквально наш кейс и команда реакта четко и однозначно говорит "используйте в этом и похожих случаях ключи".

Неужели?

Раздел называется "You Might Not Need an Effect". Так, у нас уже не наш случай.

Пример из статьи

export default function ProfilePage({ userId }) {
  return (
    <Profile
      userId={userId}
      key={userId}
    />
  );
}

function Profile({ userId }) {
  // ✅ This and any other state below will reset on key change automatically
  const [comment, setComment] = useState('');
  // ...
}
Вы видите тут эффекты?

Kergan88
10 фев 2025 в 08:15
То получится ровно тоже самое что и у вас.

Не получится. Мой код _работает правильно_, а ваш - _не_ работает правильно_. Это весьма принципиальная разница.

Я еще раз повторяю - если вы сами занимаетесь велосипедной синхронизацией, то вы уже обосрались. Потому что вы пишите код, в котором можно ошибиться миллионом разных способов. И вы - ошиблись. А у меня код правильный просто потому, что _ошибиться негде_. Вот и ошибок нет.

Он работает правильно. 

Нет, не работает. Если быстро поменять несколько юзеров (быстрее, чем они догружаются), то компонент их все выведет подряд, хотя должен вывести только последнего.

Поэтому как раз ваш код не работает.

Так приведите юзкейс, в котором он не работает. Я выше привел юзкейс, в котором не работает ваш.

Вы видите тут эффекты?

Этот раздел иррелевантен эффектам. Там описывается рекомендованный командой реакта универсальный способ полного сброса стейта компонента.

Если вам надо сбрасывать стейт в общем случае (если нет специфичной для вашего кейса причины, по которой так делать нельзя) - вы используете ключи. Либо пишете говнокод с ошибками.

Vitaly_js
10 фев 2025 в 11:27
Я еще раз повторяю - если вы сами занимаетесь велосипедной синхронизацией, то вы уже обосрались. Потому что вы пишите код, в котором можно ошибиться миллионом разных способов. И вы - ошиблись. А у меня код правильный просто потому, что _ошибиться негде_. Вот и ошибок нет.

Я же говорю, вы поспешили. И useEffect сконфигурировали как useMemo, у вас setup функция промис возвращает. Понятно, что легко правится, просто на фоне таких вот выражений выглядит иронично.

Нет, не работает. Если быстро поменять несколько юзеров (быстрее, чем они догружаются), то компонент их все выведет подряд, хотя должен вывести только последнего.

Минуточку. Вы как и автор статьи все скидываете в одну кучу. Но автор объяснил для чего он это делал. Задачи накидывались для того, что бы посмотреть как они решаются сами по себе. А вы выражаетесь так как будто реально будете подобное использовать и у нас тут финальное решение. Но, дело в том, что у нас тут не финальное решение. У нас тут нет списка требований, который объясняет как должно вести себя приложение. Вы, почему то решили, что данное предсказуемое поведение компонента - это проблема. Допустим, но вы предлагаете решить ее запросами к серверу которые будут просто повисать в воздухе. Тогда у меня встречный вопрос - это зачем? Зачем пропускать запросы, которые не планируется показывать на экране? Вы уверены, что проблема в данном случае в данном компоненте, а не в пользовательском опыте?

Так приведите юзкейс, в котором он не работает. Я выше привел юзкейс, в котором не работает ваш.

Если добавить кэшпрофилей, то уже нет никакого смысла работать с ключами и отключать компонент. Еще раз хочу напомнить, что автор в одну кучу свалил все и работу с транспортной системой и конфигурирование компонента. Далее, если у вас внешний источник данных - это какой-нибудь обсервер, тоже нет никакого смысла работать с ключами. Никакого существенного упрощения там не будет.

Вы что оптимизируете? Вот создатели реакта понимали, что это частный случай оптимизации. Что если исключить эффекты у нас не будет никаких промежуточных состояний из которых компонент будет переходить из одного в другое. И тогда да, можно каждый раз отрисовывать актуальное состояние компонента. А когда такие состояния есть сразу возникают вопросы к пользовательскому опыту. Насколько они должны быть плавными? Должны ли быть обработки промежуточных действий? Зачем собственно постоянно все скидывать в нуль?

Этот раздел иррелевантен эффектам. Там описывается рекомендованный командой реакта универсальный способ полного сброса стейта компонента.

Если вам надо сбрасывать стейт в общем случае (если нет специфичной для вашего кейса причины, по которой так делать нельзя) - вы используете ключи. Либо пишете говнокод с ошибками.

Минуточку, сброс ВСЕХ стейтов компонента - это не ровно сбрасывать стейт в общем случае. Разрабы реакта показали, что они имеют в виду. А для того, что бы минимизировать использование подхода, только подходящими случаями они расположили этот раздел в разделе посвященном компонентам без эффектов.

taujavarob
13 фев 2025 в 02:35
вы предлагаете решить ее запросами к серверу которые будут просто повисать в воздухе. Тогда у меня встречный вопрос - это зачем? Зачем пропускать запросы, которые не планируется показывать на экране?

Незачем. Хотя для сервера это не имеет значение, так как мы не можем передать серверу что запрос уже не нужен. Но это поправимо. - При "размонтировании" компонента запросу посылается Cancel. Это помогает не забивать ограниченное количество запросов к сайту в броузере. Но это не относится к использованию или нет key-техники. И в том и в другом случае это нужно применять.

Если добавить кэшпрофилей, то уже нет никакого смысла работать с ключами и отключать компонент.

Почему? Какая разница есть кеш или нет? Кеш находится вне компонента и использование key-техники никак не затрагивает есть он или нет.

Минуточку, сброс ВСЕХ стейтов компонента - это не ровно сбрасывать стейт в общем случае. Разрабы реакта показали, что они имеют в виду.

Они явно написали, что если вы хотите при каждом изменение пропсов сбрасывать стейт компонента, то используйте key-технику, иначе пишите тонну дополнительного кода в своём компоненте. - выбор что использовать довольно ясен.

Vitaly_js
13 фев 2025 в 16:03
После вопроса про кэш уже хочется задать вопрос, вы точно понимаете, что делает key? Вы не забыли про вот эту вот особенность: "... React will recreate the DOM ..."? То, что все useMemo и другие мемоизированные элементы скинутся? Речь идет именно о сбрасывании ВСЕХ стейтов компонента и перерисовку на экране.

Иными словами, вот берете вы данные из кэша и вам не нужно пересоздавать дом. Реакт сам выполнит сверку и найдет дом узлы, которые нужно обновить. А если внутри есть компоненты, которые не зависят от входных пропсов, ну не знаю, какая-нибудь косметика она вообще даже в сверке участвовать не будет. А вот при использовании key она будет вся пересоздана.

Мне вот любопытно, вы все это учитываете? И не забываем, что из-за эффектов могут быть переходные состояния и в вашем случае они всегда будут идти из начального состояния в чем далеко не всегда есть смысл. При этом вы сами пишете, что все эффекты все равно нужно полностью сконфигурировать. Просто вместо того, что бы сконфигурировать еще и зависимости, вы должны так спроектировать, что бы всегда все шло из начального состояния.

Если выкинуть эффекты, оно наверное так и будет. Хотя продумать, что мемные компоненты без зависимостей от входа должны быть вынесены куда-то в другое место иначе они все будут так же пересоздаваться впустую.

taujavarob
14 фев 2025 в 04:31
После вопроса про кэш уже хочется задать вопрос, вы точно понимаете, что делает key? Вы не забыли про вот эту вот особенность: "... React will recreate the DOM ..."? То, что все useMemo и другие мемоизированные элементы скинутся? Речь идет именно о сбрасывании ВСЕХ стейтов компонента и перерисовку на экране

Это я помню. Сброс всех стейтов - это именно то что нам надо. В данном случае.

Про кэш и useMemo - современная реализация кэша, типа TanStack Query, вполне имеет реализацию, когда кэш находится на самом верхнем уровне (ключом к нему являются обычно символьное значение) и такой кэш никак не волнует сброс состояния в различных компонентах приложения.

Просто вместо того, что бы сконфигурировать еще и зависимости, вы должны так спроектировать, что бы всегда все шло из начального состояния.

Но эта конфигурация есть не более чем действие по освобождению ресурсов при размонтировании компонентов. Не более того. - и тогда не надо думать как сбросить состояние компонента (и возможно нижележащих его children компонентов).

Хотя продумать, что мемные компоненты без зависимостей от входа должны быть вынесены куда-то в другое место иначе они все будут так же пересоздаваться впустую.

Да, кэш будет в другом месте. Это верно. Так и реализован кэш в TanStack Query.

Vitaly_js
14 фев 2025 в 11:44
Это я помню. Сброс всех стейтов - это именно то что нам надо. В данном случае.

Если под данным случаем вы понимаете реализацию какого-то профиля, то напоминаю вам использование key не учитывает ни кэш, ни то, что весь компонент со всеми дочерними элементами особенно если они обернуты в memo может вообще не требовать перерисовки. Вы просто каждый раз пересоздаете весь дом, скидываете все состояния. В зависимости от сложности использование key увеличивает время работы скриптов и отрисовки на экране и все это просто для того, что бы не конфигурировать зависимости. Напоминаю, использование кэша не приводит к пересозданию всего дома. Обновляются только конкретные элементы.

Я понимаю, что можно полностью плевать на любые оптимизации реакта. Но такой подход все таки не является общим случаем при использовании реакта. Поэтому сами разработчики предлагают его использовать только в конкретных узких случаях, когда компонент переключается в начальное состояние. Когда используется кэш в начальное состояние никто не переключается, поэтому пересоздавать весь Дом не нужно.

Про кэш и useMemo - современная реализация кэша, типа TanStack Query, вполне имеет реализацию, когда кэш находится на самом верхнем уровне (ключом к нему являются обычно символьное значение) и такой кэш никак не волнует сброс состояния в различных компонентах приложения.

Так об этом и речь. У нас есть кэш, и вместо того, что бы его использовать вы предлагает убирать старый дом, строить новый дом точно такой же как и старый, но с другими данными из кэша. В данном случае вообще состояние компонента обслуживается в другом месте. Зачем сам то компонент скидывать и пересоздавать дом? Почитайте какой кейс описан в документации. Когда у компонента нет вот этих сайдэффектов все сильно упрощается.

Но эта конфигурация есть не более чем действие по освобождению ресурсов при размонтировании компонентов. Не более того. - и тогда не надо думать как сбросить состояние компонента (и возможно нижележащих его children компонентов).

В том то и дело, в вашем случае вы не думаете о том, о чем нужно думать. Вы говорите, что упрощается сбрасывание в начальное состояние вообще всего. Это так. Вопрос, зачем? Вот если у вас есть мемные компоненты зачем их сбрасывать в нуль? Они зависят от своих свойств. Если у нескольких профилей один и тот же набор свойств, то получая данные из кэша эти компоненты даже в сверке участвовать по сути не будут. А вы предлагаете их создавать с нуля по новому. Зачем?

Я просто интереса ради взял пару простеньких компонентов внедрил в них хук, который просто по строке выбирает данные из массива. Получился такой импровизированный кэш. И посмотрел как все это работает. Без key 200 мс, с key 360мс. Разумеется не одна итерация.

Понятное дело мелочь. Но если вот так вот не думать на протяжении всего приложения может что-то существенное и получится.

Да, кэш будет в другом месте. Это верно. Так и реализован кэш в TanStack Query.

мемные компоненты это memo(ComponentName), а кэш - это данные, которые в них передаются.

taujavarob
15 фев 2025 в 06:41
Если под данным случаем вы понимаете реализацию какого-то профиля, то напоминаю вам использование key не учитывает ни кэш, ни то, что весь компонент со всеми дочерними элементами особенно если они обернуты в memo может вообще не требовать перерисовки

Случай, когда есть список имён слева и, при клике на имя в списке, справа появляется Профиль с этим именем.- то есть всякий раз приходится сбрасывать состояние компонента Профиль, обращаться к бакенду и выводить присланную.с бакенда информацию. - что тут можно то закешировать то? Разве что то что присылает бакенд, но тот кеш не зависит от реализации нашего компонента Профиль.

использование кэша не приводит к пересозданию всего дома. Обновляются только конкретные элементы.

В данном случае (по клике на имя в списке слева) мемоизация (Profile) никак не помогает. memo(Profile) всегда при каждом клике будет терять своё состояние и обращаться к бакенду за новым.

Я понимаю, что можно полностью плевать на любые оптимизации реакта. Но такой подход все таки не является общим случаем при использовании реакта.

Я не знаю что такое "общий случай" в React. - React предлагает много патернов для решения ваших задач. Вы вольны выбрать любой из них, который конкретно подходит в данном случае (слева список, справа Profile, который постоянно меняется при клике по имени в списке.)

Если у нескольких профилей один и тот же набор свойств, то получая данные из кэша эти компоненты даже в сверке участвовать по сути не будут.

У разных Profile разное имя. Что там может быть одинаковое? При смене имени состояние в Profile сбрасывается. Key-техника отлично подходит для данного случая - сброса состояния в Profile.

мемные компоненты это memo(ComponentName), а кэш - это данные, которые в них передаются

Мы разобрали случай, когла слева список имён а справа один(!) Profile с одним именем. Мемоизация Profile в данном случае не нужна вовсе. Ибо пропсы у него всегда будет меняться при клике по имени в списке.

Интересный случай, когда есть список компонентов Profile. К примеру. - в этом случае можно мемоизировать компонет Profile (memo(Profile)) , но раз это список то нужно будет также использовать key (как всегда для списка) - в этом случае при изменении списка memo(Profile) перерендится не будет, если данный профиль останется в списке при изменении (если нет, если исчезает из списка и потом снова появляется в списке , то создание, монтирование и рендер Profile будут производить всегда (независимо от мемоизация).

Так что использовпние memo(Profile) и key-техники в случае списка Profile, так и в случае наличия одного (или несколько) Profile на форме - нормально вполне.

Я думаю можно применять такую тактику разработки:

Использовать первоначально всюду key-технику. И мемоизацию компонент.

И в продакшен.

Если кто-то обнаружит медленную работу на клиенте, то подключать кеш сетевых запросов (типа что есть у TanStack Query) - и в продакшен.

Если снова со аременем кто-то на слабом компьютере обнаружит медленно работу по перерисовке дисплея компьютера, то купить ему новый компьютер только тогда заниматься более тонкой оптимизацией рендера.

Я как-то не вижу особого смысла заранее всюду писать memo или useMemo или useCallback (это необходимо при разработке библиотеки компонентов, но не в приложении). - тут наверное нужно применить принцип "не делай предварительной оптимизации если и так всё работает нормально.

Vitaly_js
15 фев 2025 в 11:56
Случай, когда есть список имён слева и, при клике на имя в списке, справа появляется Профиль с этим именем.- то есть всякий раз приходится сбрасывать состояние компонента Профиль, обращаться к бакенду и выводить присланную.с бакенда информацию. - что тут можно то закешировать то? Разве что то что присылает бакенд, но тот кеш не зависит от реализации нашего компонента Профиль.

Все что угодно. С одной стороны весь запрос к беку, а с другой стороны использовать мемные компоненты для различных данных профиля. Кэш, конечно, не зависит, а вот компонент, который использует данные может как учитывать кэш, так и каждый раз все скидывать и рисовать с нуля, хотя, данные получает моментально из кэша.

В данном случае (по клике на имя в списке слева) мемоизация (Profile) никак не помогает. memo(Profile) всегда при каждом клике будет терять своё состояние и обращаться к бакенду за новым.

Все зависит от реализации. Я имел в виду именно дочерние компоненты. Сам же профайл при получении нового id сразу получает данные из кэша, поэтому он ничего не скидывает и открисовывается новыми данными. Реакт запускает сверку и обновляет нужные дом узлы. Он не создает дом по новой как в случае с key

Я не знаю что такое "общий случай" в React.

Можете открыть документацию по реакт. И в обучающем приложении как раз рассказаны базовые возможности реакта. Это и есть общие случаи.

У разных Profile разное имя. Что там может быть одинаковое? При смене имени состояние в Profile сбрасывается. Key-техника отлично подходит для данного случая - сброса состояния в Profile.

Вы забываете суть данной статьи. Она не описывает реальное приложение, а предложена на подумать. Там все что угодно может быть. Например, там может быть название города пользователя, с иконкой и краткой информацией. Что может совпадать у тысяч пользователей. Выделяя эту информацию в мемный компонент, получая данные из кэша и вам уже не нужно перерисовывать на экране эту часть пользователя, если города совпадают. А вот если вы работаете через key эта часть будет полностью пересоздана, даже если у разных пользователей эта часть профиля совпадает.

Мы разобрали случай, когла слева список имён а справа один(!) Profile с одним именем. Мемоизация Profile в данном случае не нужна вовсе. Ибо пропсы у него всегда будет меняться при клике по имени в списке.

Еще раз посмотрите, что и как тут разбирается. А так же для чего.

То что разбирается конкретный небольшой функционал, что бы посмотреть на навыки вовсе не означает, что имеется в виду компонент из одной строки =) А Profile не нужно мемоизировать только если родительский компонент не перерисовывается. Но вообще, я повторяю, я имел в виду дочерние для Profile компоненты.

Я как-то не вижу особого смысла заранее всюду писать memo или useMemo или useCallback (это необходимо при разработке библиотеки компонентов, но не в приложении). - тут наверное нужно применить принцип "не делай предварительной оптимизации если и так всё работает нормально.

Без проблем. Но, что мешает вам тогда убрать вообще реакт. Взять шаблонизатор и всю страницу перерисовывать при каждом чихе? Вы понимаете, что использование реакт уже само по себе есть предварительная оптимизация?

Никто не говорит, что нужно от балды везде пихать всякое. Я говорю о том, что нужно понимать, что и как работает. Если вы понимаете с какими данными работаете, тогда зачем вам например лишний раз их обновлять на экране, когда в этом нет необходимости?

Я понимаю, если на вас насели и вы просто не спроектировали систему и сделали кое как. Но если вы во всем разобрались. Потратили на это время, зачем делать плохо?

taujavarob
16 фев 2025 в 06:58
Например, там может быть название города пользователя, с иконкой и краткой информацией. Что может совпадать у тысяч пользователей. Выделяя эту информацию в мемный компонент, получая данные из кэша и вам уже не нужно перерисовывать на экране эту часть пользователя, если города совпадают

Ок. Придумать такое конечно можно. При этом это будет работать если город не меняется при кликах по разным профилям. Но обычно и Профиль и Карточка Товара- это всегда с чистого листа выводится. То есть со сброса состояния.

Но, что мешает вам тогда убрать вообще реакт. Взять шаблонизатор и всю страницу перерисовывать при каждом чихе? Вы понимаете, что использование реакт уже само по себе есть предварительная оптимизация?

Мешает что на рынке растёт только количество React разработчиков. А остальных - не растёт или падает. Да и при необходимости оптимизировать React вполне подходит. Да, при необходимости. И только при необходимости.

Я понимаю, если на вас насели и вы просто не спроектировали систему и сделали кое как. Но если вы во всем разобрались. Потратили на это время, зачем делать плохо?

Не считаю key-технику чем-то "плохим". Одна из возможностей. А совершествование и оптимизация? - смотри ниже:

"Из выступления Педро Дуарте на конференции Next.js в 2021 году. Педро — один из создателей Radix UI, и здесь он описывает, сколько времени им потребовалось, чтобы реализовать полностью доступное раскрывающееся меню, которое хорошо работает во всех браузерах и поддерживает все программы чтения с экрана:

Dropdown Menu:
2,000+ hours
6 months
50 reviews
1,000s commits"

Вывод? - совершенству нет предела если есть ресурсы. Если у вас есть 2000 часов на реализацию Dropdown Menu, то оно конечно можно.

P. S. Вспомнил как выпустили iOS v1.0, в которой не было операции "копи-пасте" - ну, не успели. Бывает. Потом, через 6 месяцев, конечно, обновили версию и эта операция появилась. - но требование бизнеса успеть выпустить раньше всё же часто оказывается реальным. А оптимизация - часто это уже потом.

Спасибо за ответы. Беседа была интересная. Удачи! :-)

taujavarob
9 фев 2025 в 02:06
И вот в таких случаях, когда надо сбрасывать состояние при изменении пропсов - и надо использовать ключи.

Согласен с вами. Надо рассматривать и такую возможность как "рубить" "лист" или даже "сук" дерева компонентов, если это не приводит к потери производительности при смене key.

@Vitaly_js, - @Kergan88 имеет в виду раздел с названием "Resetting all state when a prop changes" в You Might Not Need an Effect.

В этом случае не имеет значение вообще что происходит (используется ли useEffect) в том компоненте, что монтируется в "дерево" с помощью key. - главное просто "сбросить всё состояние" компонента, и неважно как оно было установлено, с помощью useEffect или другим путём. Просто "рубится", создаётся новый "лист" или "сук" с новым состоянием и монтируется в "дерево". И всё. Довольно простое решение. В данном случае.

Vitaly_js
9 фев 2025 в 10:54
У автора статьи был усеченный случай, который должен был показывать общее поведение. Поэтому не нужно пытаться сюда впихнуть частные случаи, которые можно по разному оптимизировать.

Тем более, что при работе с запросами сбрасывать все состояния и переключение на нужные состояния это не одно и тоже.

То, что автор использовал setUser(null) вовсе не означает, что нужно все бросать и начинать оптимизацию. Переключение пользователей может быть вообще без фазы сброса, если брать все из кэша. В зависимости от различного поведения в useEffect компонент при изменении пропсов может вести себя по разному. Автор, во всяком случае, хотел проверить умение работать именно в этом случае.

Поэтому имеет значение, что и как происходит в эффектах и оптимизации начинать уже с финальным компонентом.

Или вы в принципе начинаете новый компонент зафигачив что-то в key?
    
taujavarob
10 фев 2025 в 03:36
Или вы в принципе начинаете новый компонент зафигачив что-то в key?

Это хороший вопрос. Я просто не знал вовсе про key до этого. - Но вот сейчас задумался- а почему бы его не использовать, ведь код становится проще. Гораздо проще.

taujavarob
8 фев 2025 в 01:24
Это же _стандартное_ решение, которое явно рекомендовано вот тут:

Оно понятное, но оно основано на том, что у вас в компоненте нет никакого состояния, как только username меняется, а более точно как только значение key меняется, компонент "отрезается" от дерева компонентов, создаётся заново и "пришивается" к дереву.

Такое поведение возможно, но для React он странное. В React все хороводят вокруг "состояния", а в случае key состояния нет вообще. Оно не нужно тогда. Поменялся key - руби компонент со всем его состоянием и возможно состоянием всех его children, создавай заново и монтируй снова в дерево компонентов.

Возможно, наверное, всё приложение создавать в таком стиле "рубки" - но оно будет какое-то странное для React.

UnknownHero
6 фев 2025 в 04:24
1. Key решает проблему и будет показывать только последнее состояние и не важно что там вызывалось до этого.
2. По "Can’t perform a React state update on an unmounted component…” https://github.com/reactwg/react-18/discussions/82
3. Dependency тоже условный для сценария с key, можно не писать если код стайл позволяет.

Ох уж эти собесы с задачками.

walkwithmeinhell
6 фев 2025 в 05:44
Объясните плиз, как работает идеальное решение, если юзер быстро кликает по рандомным юзернеймам. С useref понял как люди предлагали. В идеальном не понимаю как и зачем тот setUser(null) в начале useeffect

taujavarob
5 мар 2025 в 07:36
и зачем тот setUser(null) в начале useeffect

Если у вас уже есть старый user и при обращении на сервер произошла ошибка, то у вас новый user не заменит старого user. Для этого и нужно "сбросить" значение user на null перед обращением на сервер.

archyCuber
19 фев 2025 в 15:42
А что думаете насчет варианта с withResolvers?

function Profile({
  username,
  children,
}: {
  username: string;
  children: (user: User | null) => ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(null);
    const { promise, reject } = fetchProfile(username);
    promise.then(setUser);

    return () => {
      reject();
    };
  }, [username]);

  return children(user);
}

let fetchCount = 1;

function fetchProfile(username: string) {
  console.log(`🛜 Fetched ${getPluralizedTimes(fetchCount)}`);
  let { promise, resolve, reject } = Promise.withResolvers();
  setTimeout(
    () => resolve({ name: `Full Name ${username}`, username }),
    200 * fetchCount
  );
  return { promise, reject };
}

Структуры данных
Question 1
What is the time complexity of accessing an element by index in an array?
O(n) linear time for sequential searching
O(log n) logarithmic time for binary operations
O(n²) quadratic time for nested loop operations
O(1) constant time for direct index access

About Data Structure
Knowledge and skill in using Data Structures and algorithms properly help programmers and give them the ability to quickly solve complex problems most efficiently.

The algorithm is a set of instructions implemented in a computer to solve problems or for data computation. A data structure is the way a computer manages and stores data in memory to efficiently utilize it for computation.

Designers create interview questions for developers working on applications related to artificial intelligence, graphics, and operating systems to ensure efficient data management.

 
Beginner-Level Questions for Data Structure Interview
Q #1) Explain what a data structure is.

Answer: It is an efficient way of organizing data in order to use it effectively for retrieving and storing data in computer memory, exchanging information between applications via TCP/IN packets, ordering and sorting, memory allocation, and file directory management.

Data structures in Java are of two types: Primitive and Non-Primitive

Primitive type contains char, int, float, double, and pointer.
Non-Primitive type contains Array, Linked List, Stack, Queue, Tree, and Graphs.
Non-primitive Data Structure image:

Non-primitive Data Structure
Q #2) Describe what an algorithm is.

Answer: A set of rules to be followed on input data to get the desired output is called an algorithm. Programmers, mathematicians, and scientists mainly use these.

In daily life, people can apply algorithms to monitor traffic and reroute vehicles, monitor crime, track parcel deliveries, render financial data, and predict treatment procedures based on patients’ medical data.

Q #3) How do data structures and algorithms relate to each other?

Answer: Data structure is a format for organizing, managing, and storing data in an optimized manner in computer memory, whereas an algorithm is a set of rules to be followed to resolve data handling problems and retrieve the desired output. Sorting, searching, and shortest path algorithms are among the most commonly applied algorithms to data structures.

A real-life example is a recipe for a food delicacy. The algorithm will outline the steps to cook and the order in which ingredients are mixed to achieve the desired output, in this case, the desired taste.

Q #4) List various areas in which data structure is used.

Answer: Data structure can be used for storing data, data exchange, ordering, and sorting, searching, indexing, resource/ services management, and scalability in applications.

Various domain areas include:

Artificial intelligence
Machine Learning
Database management
Blockchain
Graphics
Simulation
Compiler design
Cryptography
Statistical and Numerical Analysis
Development of operating systems
Processing in speech and image
Q # 5) List types of data structures with their example.

Answer: Data structure is divided into the following main categories:

Primitive data structures in C are:
char
pointer
integers
float
double
Non-primitive data structure is further divided into Linear and Non-Linear
Linear
Array
Linked List
Stack
Queue
Non-linear
Tree
Graph
Q #6) List and describe various data structures supported in the C programming language.

Answer: The following are the data structures found in C:

Array: Similar type elements stored sequentially in memory are known as arrays in C. They are of two types: single-dimensional and multidimensional arrays.
Stack: It follows the last-in-first-out (LIFO) approach with a Push function to add elements and a Pop function to remove elements from a linear data structure called Stack, where both insert and delete are performed from one end of the stack.
Queue: It is similar in structure to Stack. Queue follows the first-in-first-out (FIFO) approach, where elements are added from the back and removed from the front of the queue.
Linked List: Unlike an array, a Linked List is not stored sequentially in memory, composed of a data section and an address section known as a node that holds the address of the next element. They are of 3 types: single link, doubly link, and circular link.
Trees: With one root node and multiple sub-nodes designed on top of the linked list.
Hashing: Hash table maps keys to values and is used for implementing an associative array. It uses a hash function for calculating indexes in an array of buckets.
Q #7) What are the benefits offered by the data structure?

Answer: Benefits offered are listed below:

Storing data efficiently in storage devices.
Convenient retrieval of data from the storage device.
Processing small and large data effectively.
Saves time during the storage, retrieval, or processing of data.
Reuse and scale data using data structures like an array, tree, graph, stack, or linked list.
Q #8) Differentiate between linear and non-linear data structures.

Answer: Major differences between Linear and Non-linear data structures are listed below:

Linear data structure
Non-linear data structure
Elements sequentially connected in linear data structure.	Elements hierarchically connected in non-linear data structure.
It is easier to implement linear data structure.	It is difficult to understand and implement non-linear data structure as compared to linear data structure
Data elements can be found at single level	Elements can be found at multiple level.
Traversal of data is in single run for linear data structure	Multiple runs are required to traverse data for non-linear data structure
Linear data structure cannot utilize memory efficiently	Non-linear data structure uses memory efficiently
Data structure is directly proportional to its size.	Time complexity remains same with increase in input size.
Used in application development software.	Applied in image processing and artificial intelligence
Array, Linked List, Stack and Queue are examples of linear data structure	Map, Graph and Tree are some examples of non-linear data structure.
Q #9) What is an array as a data structure?

An array is a collection of elements of similar data types stored in adjacent memory locations. The lowest and highest addresses correspond to the first and the last elements of the array.

An index can access elements in the array, with 0 as an index for the first element, and the last element index is the total array size minus 1. Arrays are further divided into single and multidimensional arrays.

In Java array is declared as below:

Array myarr[] = new Array[5];

Q #10) Explain with examples – single and two-dimensional arrays.

Answer: A one-dimensional array is a data structure that stores data values of similar data types in adjacent memory blocks. In Java, number array memory for the array is allocated using the ‘new’ keyword, as defined below:

num = new int [5];

num = {2,4,6,8,10};

Data elements in the array are accessed using the index, starting with 0 as the first element’s index.

A multi-dimensional array stores multiple data elements of similar data types in a table-like format with several columns and rows.

nums = new int[2][4];

Above is a two-dimensional array of 2 rows and 4 columns.

Data Structure Scenario-Based Interview Questions
Q #11) Describe Linked List.

Answer: Linked list data structure where elements are linked using pointers, with elements not stored in adjacent memory locations. It comprises nodes, with each node containing a data field and a link referencing the next node in the list. Various operations linked list supports include insertion, deletion, display, and searching for an element using a given key.

linkedlist
Q #12) List the differences between arrays and linked lists.

Answer: Both arrays and linked lists belong to the linear data structure. The differences between them are listed below:

Array
Linked List
Elements of similar data types are collected in Array	Elements are connected to the next list using pointers.
Elements can be accessed randomly with the help of index in Array	Elements in linked list are accessed sequentially and not randomly as in arrays.
Elements stored in adjacent memory location	Elements in linked list can be stored anywhere and reference for new elements using pointers.
Insertion and deletion operation on data stored in array are costlier,	Insertion and deletion operations are easy and quick in linked list.
Allocation of memory takes place during compile time in array	Allocation of memory takes place during run time in linked list
Array size should be specified during declaration / initialization of array.	With insertion / deletion of element in linked list, its size grows /shrinks
Q #13) Explain how linked lists are more efficient than arrays

Answer: The following points prove linked lists to be more efficient than arrays:

The array size, i.e., the number of elements in an array, is fixed. Arrays need to know the upper limit of storing similar elements in advance.
Inserting new elements in an array is expensive, as it requires shifting existing elements to create room for new elements.
Deleting any of the existing elements from the middle of the array is expensive, as all the elements after that element need to be moved
Linked List provides the advantage of dynamic size and ease of insertion and deletion over arrays, making it more efficient than arrays.
Q #14) Describe various scenarios where linked lists and arrays are used.

Answer: We list the scenarios explaining why a linked list or array is used.

Linked List is used:

When it is critical to maintain the time taken for the insertion or deletion of elements.
When the number of elements is not certain, a linked list is preferred.
Linked List is used to store elements when random access to any element inside the list is not needed.
When it is required to insert elements in the middle of the list, a Linked list is preferred.
Arrays are used:

It is needed to access elements at random.
When the number of elements is already known, arrays are preferred to allocate memory for the total number of elements.
When iterating through all the elements, it should be quick for performance.
When memory is of concern, an array takes less memory than a linked list.
Q #15) Explain the Doubly linked list as a data structure and its uses.

Answer: A linked list that can move back and forth in both directions is called a doubly linked list. Doubly linked lists are used when it is frequently required to find the location of the previous node. Insertion, deletion, searching, and traversal are some operations applied to a doubly linked list.

doublyLL
Q #16) Describe Stack as a data structure and its use.

Answer: A stack holds a linear sequence of items of an abstract data type in a particular order. It follows LIFO in inserting and removing elements.

The operations performed on Stack are:

Push(data) – inserts data to the top of the stack,
Peek() returns a copy of the element on the top of the stack.
Pop – removes data from the top of the stack
stack
Q #17) Explain Queue as a data structure and its use.

Answer: Queue is an abstract data structure that differs from Stacks as it opens at both ends, and follows FIFO (First In First Out) order when data handling operations are performed on it. One end of the Queue data structure allows insertion of data, whereas the other is used to remove data.

The queue is used when the processing of data is not immediately needed, and a resource is shared across multiple consumers.

queue
Q #18) Explain how the stack differs from the queue?

Answer: The following are the differences between Stack and Queue:

Stack
Queue
Stack follows LIFO (Last In First Out) principle	Queue follows FIFO (First In First Out) principle
Insertion of data elements in Stack is carried out using Push operation	Insertion of data elements in Queue is done by Enqueue operation
Data is deleted using Pop operation in Stack	Dequeue is used to delete data in Queue
There exists no variants in Stack	There are three variants in Queue – circular, double-ended and priority
Stack is known to be vertical collection visual	Queue is known to be horizontal collection visual
Stack is simple implementation which used to solve recursive type of problems	Queue is complex implementation in comparison with Stack that solves problems that have sequential processing
Q #19) Describe a hash map as a data structure and its use.

Answer: A data structure known as a Hash Table stores values using a pair of keys and values. Each of these values is assigned to a unique key that is generated with a hash function. The name of the key accesses the associated value.

A Hash table or hash map implements an associative array abstract data type. Some of the uses of the hash tables include Password Verification, Pattern matching, Compiler design, file system, and creating a cryptographic message digest.

Q #20) How is collision in Java is controlled by HashMap?

Answer: The concept of Chaining is used by HashMap to handle the collision resolution in Java. Each hash code generated by the hash function is mapped to a specific bucket that contains a linked list for the case of collision. Creating a hash function that offers the best possible distribution of values throughout the hash map is the only way to avoid a collision.

Advanced Interview Questions on Data Structure
Q #21) How are variables stored in memory using data structures?

Answer:

In a Stack data structure, variables are stored, declared, and initialized during runtime, providing temporary storage in a special area of computer memory.
A heap is a memory space that supports dynamic memory allocation and stores global variables in computer programming languages.
Text or code segment is a sharable single copy to be in memory for the program for frequent execution. It is read-only to prevent any accidental modification.
The data segment is a virtual address space that contains global and static variables. It is not read-only, as variable values can be altered at run time.
Uninitialized data segments called Block started by the symbol (BSS) are initialized by the kernel to arithmetic 0 before the program starts execution, initializing global and static variables to zero.
Q #22) Describe Priority Queue.

Answer: Priority Queue has items stored by key value as in Hash Map, such that items with the highest value of keys will be at the rear and those with the lowest value of keys will be in front.

Principal operations using Priority Queue are insert/enqueue and remove/dequeue.

insert/enqueue inserts items at the rear of the queue.
remove/dequeue removes an item from the front of the queue.
peek –retrieves the element at the front of the queue.
isFull – checks if the queue is full.
isEmpty – verifies if the queue is empty.
Q #23) Explain Tree as a data structure and its use

Answer: A tree is a hierarchical data structure known as a collection of nodes. The tree has one node known as the root and originates from it, it has no parent. Each node represents a single parent connected to multiple edges, like children. The tree is used in predictive modeling, as it can handle large data and can be validated statistically.

Q #24) What is a binary tree in data structure?

Answer: A binary tree is a hierarchical data structure having elements with 2 children connected via a node. The structure contains Data, a Pointer to the left child, and a pointer to the right child.

In Java 8, when the number of elements in a bucket reaches a particular threshold, HashMap replaces Linked List with Binary Trees, as binary trees store at both left and right nodes, hence using more space than a singly linked list.

The binary tree structure is used to search information, manipulate hierarchical data, and sort data lists, creating router algorithms and forms that help in multi-stage decision-making.

Q #25) Explain Binary Search Tree in data structure.

Answer: Binary Search tree differs little from a binary tree in the following way:

The left and right sub-trees (children) should also be binary search trees with no duplicate nodes.
The node at the left sub-tree should contain nodes with keys less than the parent node key.
The node at the right sub-tree should contain nodes with keys greater than the parent node key.
A Binary Search tree is helpful in fast lookup, addition, and removal of data items, in lookup tables, and in implementing dynamic sets.

Q #26) Describe a Graph as a data structure and its use.

Answer: A graph is a data structure where a set of interconnected objects is connected by links. The objects are called vertices, and links connecting the vertices are known as edges.

Basic operations such as Adding Vertex, Adding Edge, and displaying Vertex can be carried out in a graph structure.

Graphs are very useful in designing electrical circuit connections, the study of the algorithm, the relationship between computer networks, the molecular and chemical structure of substances such as the DNA of the organism, parsing trees of language and grammar, and connecting nodes between cities.

Q #27) List the differences between Tree and Graph.

Answer: Tree and Graph are both non-linear data structures and are collections of nodes and edges. However, the following are the differences between the two:

Tree
Graph
Tree is Hierarchical model with pre-order, in-order and post-order traversals.	Graph is Network with breadth-first and depth first search movements.
Tree contains nodes with multiple child nodes, binary tree has only two child nodes	Node in graph can have any number of edges
There is unique node known as root in trees	There is no unique node for graph
There is no cycle in tree	A cycle can be formed in case of graph
All trees are graphs	All graphs are not trees
Graphs are used to find shortest path in computer network circuits	Trees are used in deleting, searching and inserting elements in tree, games software for applying conditions and creating decision trees.
Tree is defined as T={Node, Edge}	Graph is defined as {Vertice, Edge}
Q #28) Differentiate between Breadth-First Search (BFS) and Depth First Search (DFS).

Answer: The differences between BFS and DFS are listed below:

Breadth First Search (BFS)
Depth First Search (DFS)
Queue data structure is applied for Breadth First Search to locate shortest path.	Stack data structure is used by Depth First Search.
Suitable for searching vertices that are closer to given source.	Suitable for solutions away from source.
BFS are used for locating shortest single source in un-weighted graph as there is a vertex with minimum number of edges from vertex source.	DFS requires movement through more edges in order to reach a destination vertex from a source.
In BFS siblings are visited before the children	In DFS Children are visited before the siblings
In both BFS and DFS, the Time complexity is 0(V+E), and Adjacency List used is 0(V^2) for the adjacency matrix, where V stands for Vertices and E is for Edge.

Q #29) Suggest a data structure to build a dictionary or check the spellings.

Answer: Based on memory availability and desired functionalities for spell check and dictionary, the option we have is Hashing. It is observed that hashing is efficient when it is compared with self-balancing binary search trees and skip lists.

Hashing does not support Prefix search, where the user types prefixes and the auto-suggest feature – the dictionary displays all words starting with the prefix entered. For lookup and prefix search, a Trie is appropriate, making printing words in alphabetical order possible.

However, Trie needs lots of space; here we can try the Ternary Search Tree – for the time complexity of the search operation.

Q #30) Explain how you will convert infix expression (A + B) * (C + D) into prefix expression

Answer: The following are the three steps needed to be carried out to convert the given infix expression into a prefix expression.

Step 1: Reverse the infix expression – which is (D + C) * (B + A)

The simplified form of the above expression is DC + * BA +

Step 2: Find post expression – DC + BA + * is post expression of above infix expression

Step 3: Reverse the postfix expression – Reversing the above expression we will get * + AB + CD

Hence prefix expression of infix (A + B) * (C+ D) is * + AB + CD

Q #31) How can Stack be implemented in Java using an array?

Answer: Although the Array implementation of Stack in Java is not dynamic in nature, the program is as follows:

public class Array2Stack {
        int size, arr[], top;   
    Array2Stack(int size) {
        this.size = size;
        this.arr = new int[size];
        this.top = -1;
}
public void push(int pushedElement) {
    if (!isFull()) {
    top++;
    arr[top] = pushedElement;
    System.out.println("Pushed element: " + pushedElement);
    } 
       else { 
    System.out.println("Stack is full");
     }
  }
public int pop() {
    if (!isEmpty()) {
    int returnedTop = top;
    top--;
    System.out.println("Popped element: " + arr[returnedTop]);
    }
    else {
    System.out.println("Stack is empty !");
    }
    return -1;
    }
}
public int peek() {
    if (!this.isEmpty())
    return arr[top];
    else
    {
    System.out.println("Stack is empty !");
    return -1;
    }
}
public boolean isEmpty() {
    return (top == -1);
    }
public boolean isFull() {
    return (size - 1 == top);
    }
public static void main(String [] args) {
    Array2Stack arrstk = new Array2Stack(10);
    arrstk.pop();
System.out.println("*************");
    arrstk.push(15);
    arrstk.push(25);
    arrstk.push(49);
    arrstk.push(34);
System.out.println("*************");
    arrstk.pop();
    arrstk.pop();
    arrstk.pop();
System.out.println("*************");
    }
}
The output for the above program is given below

Stack is empty!

****************

Pushed element: 15

Pushed element: 25

Pushed element: 49

Pushed element: 34

****************

Popped element: 34

Popped element: 49

Popped element: 25

**************

Conclusion
The data structure is divided into primitive data, linear data, and non-linear data. It helps to store, manipulate, and organize data to manage it effectively. Various data structure differs from one another in the way data is connected. Data processing utilizes data structures like arrays, stacks, queues, linked lists, trees, graphs, and HashMap.


 🧩 Структуры данных
Что такое структуры данных и зачем их нужно знать
Структуры данных – это специализированные форматы для организации и хранения информации. Они определяют, как расположены и связаны между собой элементы данных, что напрямую влияет на скорость доступа и изменения данных. Структуры данных – фундаментальная часть информатики:

Они играют важную роль в построении масштабируемых и эффективных систем.
Эффективность многих алгоритмов напрямую зависит от определенных структур данных.
Можно представить структуры данных как чертежи для организации информации. Так же, как порядок вещей в вашем доме помогает быстрее находить нужные предметы, структуры данных определяют, как информация расположена в памяти компьютера и насколько быстро можно выполнять операции поиска, вставки или удаления.

Практический пример: представьте, что вы создаете конвейер обработки данных для обучения модели машинного обучения. Вам нужно выбрать лучший способ хранения и поиска всех данных для обучения. Здесь и вступают в дело структуры данных, поскольку они:

Позволяют оптимально организовывать, хранить и обрабатывать информацию.
Обеспечивают максимальную производительность конвейера, рациональное использование памяти и общую эффективность системы.
Базовые вопросы по структурам данных
Вопросы из этой категории проверяют ваше умение объяснять ключевые концепции реализации структур данных.

Какие бывают типы структур данных?
Структуры данных делятся на линейные и нелинейные:

Линейные структуры данных. Структура считается линейной, если все ее элементы расположены последовательно. В таких структурах данные хранятся в строгом порядке без иерархии. Каждый элемент (кроме первого и последнего) имеет как предшествующий, так и последующий элемент. Примеры линейных структур – массивы, списки, стеки, очереди.
Нелинейные структуры данных. В нелинейных структурах элементы связаны не последовательно, а могут соединяться с двумя и более другими элементами в произвольном порядке. Данные в таких структурах не организованы в линейную последовательность. Примеры нелинейных структур – деревья, графы, хеш-таблицы.
В чем заключается разница между массивом и связным списком?
Массивы и связные списки – это два способа хранения групп элементов, но они работают по-разному. Разберем основные различия.

Массив:

Представляет собой последовательность ячеек памяти, которые расположены подряд.
Позволяет быстро получать элементы по индексу за O(1), так как адрес каждого элемента вычисляется напрямую.
Сложно добавлять или удалять элементы в середине, потому что приходится сдвигать остальные элементы.
Связный список:

Состоит из узлов, где каждый узел хранит значение и ссылку на следующий элемент.
Легко вставлять и удалять элементы, так как изменения касаются только соседних узлов.
Поиск элемента требует O(n) времени, так как приходится перебирать узлы один за другим.
В целом: массивы быстрее для доступа по индексу, а связные списки удобнее для частых операций вставки и удаления.

Что такое стек?
Стек – это упорядоченный список, в котором добавлять и удалять элементы можно только с одного конца, который называется вершиной. Иными словами, стек работает по принципу LIFO (Last In, First Out) – последний добавленный элемент удаляется первым.

Применение стека:

Обратный порядок обработки данных (например, отмена действий "Ctrl + Z").
Управление рекурсией (вызовы функций хранятся в стеке).
Парсинг выражений (например, вычисление математических выражений).
Как реализовать стек с помощью массива?
Стек можно реализовать с использованием массива, соблюдая принцип LIFO. Для этого нужно представить массив как контейнер, где один конец служит вершиной.

Основные операции:

push (добавление элемента) – помещает элемент на вершину стека.
pop (удаление элемента) – удаляет верхний элемент из стека.
Пример реализации стека в Python с помощью списка и метода append() для операции push:

        
my_stack = []  # Создаем пустой стек
item = 1  

# Добавляем элемент в стек
my_stack.append(item)  

# Удаляем верхний элемент
my_stack.pop()  

    
Что такое очередь и как ее реализовать в Python?
Очередь – это структура данных, работающая по принципу FIFO (First In, First Out), то есть первый добавленный элемент удаляется первым. Представьте очередь в банке: посетители, стоящие впереди, обслуживаются первыми.

Способы реализации очереди в Python:

С использованием списка list. Можно использовать методы append() для добавления и pop() для удаления. Минус – pop(0) сдвигает все элементы, что делает операцию медленной (O(n)):
        
my_queue = []  
item = 1  

# Добавление в очередь (enqueue)
my_queue.append(item)  

# Удаление из очереди (dequeue)
my_queue.pop(0)  

    
С использованием deque из collections. Двусторонняя очередь deque () выполняет операции добавления и удаления намного быстрее (O(1)):
        
from collections import deque  

my_queue = deque()  
item = 1  

# Добавление в очередь
my_queue.append(item)  

# Удаление из очереди
my_queue.popleft()  

    
С использованием queue.Queue. Этот встроенный модуль предназначен для многопоточных очередей:
        
from queue import Queue  

my_queue = Queue(maxsize=3)  
item = 1  

# Добавление в очередь
my_queue.put(item)  

# Удаление из очереди
my_queue.get()  

    
🐍🎓 Библиотека Python для собеса
Подтянуть свои знания по Python вы можете на нашем телеграм-канале «Библиотека Python для собеса»
Что такое бинарное дерево поиска (BST) и как оно работает?
Бинарное (двоичное) дерево – это структура данных, в которой каждый узел имеет не более двух потомков: левого и правого.

Бинарное дерево поиска (Binary Search Tree, BST) — это особый вид бинарного дерева, где элементы упорядочены по следующим правилам:

Левое поддерево любого узла содержит только узлы с ключами меньшими, чем ключ этого узла.
Правое поддерево содержит только узлы с ключами большими, чем ключ этого узла.
Оба поддерева также должны быть бинарными деревьями поиска.
Поиск, вставка и удаление в сбалансированном дереве выполняются за O(log n), так как при каждом шаге поиска мы отбрасываем половину узлов. Если взять набор чисел [8, 3, 10, 1, 6, 14, 4, 7, 13], то дерево будет выглядеть так:

        
        8  
       / \  
      3   10  
     / \    \  
    1   6    14  
       / \   /  
      4   7 13  

    
Почему BST эффективны:

При поиске не нужно проверять все элементы, как в массиве.
Легко добавлять и удалять элементы.
Сбалансированные BST (например, AVL или Красно-черные деревья) гарантируют выполнение операций за O(log n).
Статья по теме
🌳 Деревья и графы: что это такое и почему их обязательно нужно знать каждому программисту
Что такое хеширование и как оно применяется в структурах данных?
Хеширование – это метод, который берет данные любой длины и преобразует их в фиксированное значение (хеш) с помощью хеш-функции.

Хеш-функция принимает входные данные и вычисляет для них уникальное числовое представление (хеш-значение). При этом:

Одинаковые входные данные всегда дают один и тот же хеш.
Разные данные должны давать различные хеши (хотя редкие коллизии возможны).
Хеширование выполняется быстро и эффективно.
Хеширование используется в ассоциативных массивах (словари в Python, объекты в JavaScript), где ключи преобразуются в индексы массива для быстрого поиска. Это позволяет выполнять операции поиска, вставки и удаления за O(1).

Статья по теме
🐍 Хэш-карты: незаменимый инструмент для Python-разработчика
Что такое куча и где она используется?
Куча – это структура данных, представляющая собой частично упорядоченное дерево, которое подчиняется определенным правилам.

Типы куч:
max-куча – каждый родительский узел содержит значение, которое больше или равно значениям его потомков.
min-куча – каждый родительский узел содержит значение, которое меньше или равно значениям его потомков.
Применение куч:
Приоритетные очереди – используются в алгоритмах планирования задач, сетевом программировании и маршрутизации.
Сортировка кучей – эффективный метод сортировки данных с временной сложностью O(n log n).
Алгоритм Дейкстры – используется в поиске кратчайших путей в графах.
Менеджмент памяти – куча применяется в динамическом управлении памятью в языках программирования.
Min-куча с узлами {2, 3, 8, 5, 10, 9, 15, 7} будет выглядеть так:

        
        2
       /   \
      3     8
     / \   / \
    5  10 9  15
   /
  7

    
Вопросы по структурам данных среднего уровня
Вопросы среднего уровня проверяют вашу техническую компетентность в реализации и использовании структур данных.

Как сбалансировать бинарное дерево поиска (BST)?
Сбалансированное бинарное дерево поиска (Balanced BST) – это дерево, в котором высота левого и правого поддерева остается примерно одинаковой. Балансировка дерева очень важна, так как она позволяет эффективно выполнять операции поиска, вставки и удаления.

Методы балансировки BST
Эти деревья автоматически балансируются при вставке и удалении элементов, что делает их полезными для баз данных, кэшей и других структур, требующих быстрой работы.

AVL-дерево:

Контролирует разницу высоты левого и правого поддерева каждого узла (не больше 1).
При нарушении баланса выполняются малые и большие повороты (правый, левый, правый-левый, левый-правый).
Обеспечивает O(log n) для всех операций.
Красно-черное дерево:

Поддерживает баланс с помощью цветов узлов (красный или черный) и строгих правил.
Позволяет быстро вставлять и удалять элементы, но менее строгое, чем AVL.
Обеспечивает O(log n) для операций, но с меньшим числом поворотов по сравнению с AVL.
Как реализовать min-кучу в Python?
Мин-куча – это бинарная куча, в которой родительский узел всегда меньше своих дочерних узлов. Основные операции:

Вставка – добавляет элемент, поддерживая структуру мин-кучи.
Извлечение минимума – удаляет корневой элемент (наименьший) и восстанавливает порядок кучи.
Мин-куча полезна для реализации приоритетных очередей, алгоритмов Дейкстры, сортировки кучей и различных оптимизационных задач. Куча хранится в виде списка, а поддержание ее свойств выполняется с помощью методов heapify_up (поднятие элемента) и heapify_down (просеивание вниз):

        
class MinHeap:
    def __init__(self):
        self.heap = []  # Используем список для хранения элементов

    def __len__(self):  # Возвращает размер кучи
        return len(self.heap)

    def __parent(self, i):  # Индекс родительского узла
        return (i - 1) // 2

    def __left(self, i):  # Индекс левого потомка
        return 2 * i + 1

    def __right(self, i):  # Индекс правого потомка
        return 2 * i + 2

    def __swap(self, i, j):  # Обмен значений двух узлов
        self.heap[i], self.heap[j] = self.heap[j], self.heap[i]

    def __heapify_up(self, i):  # Восстанавливает структуру кучи после вставки
        while i > 0 and self.heap[i] < self.heap[self.__parent(i)]:
            self.__swap(i, self.__parent(i))
            i = self.__parent(i)

    def __heapify_down(self, i):  # Восстанавливает структуру после удаления
        while True:
            smallest = i
            left = self.__left(i)
            right = self.__right(i)

            if left < len(self) and self.heap[left] < self.heap[smallest]:
                smallest = left
            if right < len(self) and self.heap[right] < self.heap[smallest]:
                smallest = right

            if smallest != i:
                self.__swap(i, smallest)
                i = smallest
            else:
                break

    def insert(self, val):  # Добавляет элемент в кучу
        self.heap.append(val)
        self.__heapify_up(len(self) - 1)

    def extract_min(self):  # Удаляет и возвращает минимальный элемент
        if not self.heap:
            return None
        min_val = self.heap[0]
        self.heap[0] = self.heap[-1]  # Заменяем корень последним элементом
        self.heap.pop()  # Удаляем последний элемент
        self.__heapify_down(0)  # Восстанавливаем порядок
        return min_val

    
Пример использования:

        
heap = MinHeap()
heap.insert(5)
heap.insert(3)
heap.insert(8)
heap.insert(1)

print(heap.extract_min())  # 1
print(heap.extract_min())  # 3
print(heap.extract_min())  # 5
print(heap.extract_min())  # 8

    
Что такое префиксное дерево и где оно применяется?
Префиксное дерево – это древовидная структура данных, предназначенная для эффективного хранения и поиска строк.

Структура префиксного дерева:

Каждый узел представляет один символ строки.
Путь от корня до узла образует полное слово или его часть.
Все строки с одинаковым префиксом имеют общий путь в дереве.
Применение префиксных деревьев:

Автодополнение – используется в поисковых системах для предсказания слов по введенным символам.
Проверка орфографии – помогает находить слова, близкие по написанию.
Словари и поиск по префиксам – позволяет быстро находить слова, начинающиеся с определенных букв.
Сжатие данных – используется для эффективного хранения строк.
Префиксное дерево на Python:
        
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        """Вставка слова в дерево"""
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True
    
    def search(self, word):
        """Поиск слова в дереве"""
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end_of_word
    
    def starts_with(self, prefix):
        """Проверка, есть ли слова с данным префиксом"""
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True

    
Пример использования:

        
trie = Trie()
words = ["кот", "код", "дом", "дар", "дол"]

for word in words:
    trie.insert(word)

test_words = ["кот", "код", "дом", "дар", "док", "дол", "ко", "до"]
print("Результаты поиска:")
for word in test_words:
    print(f"'{word}' есть в дереве: {trie.search(word)}")
    print(f"'{word}' является префиксом: {trie.starts_with(word)}")
    
Вывод:
    
Результаты поиска:
'кот' есть в дереве: True
'кот' является префиксом: True
'код' есть в дереве: True
'код' является префиксом: True
'дом' есть в дереве: True
'дом' является префиксом: True
'дар' есть в дереве: True
'дар' является префиксом: True
'док' есть в дереве: False
'док' является префиксом: False
'дол' есть в дереве: True
'дол' является префиксом: True
'ко' есть в дереве: False
'ко' является префиксом: True
'до' есть в дереве: False
'до' является префиксом: True

    
Как реализовать хеш-таблицу с разрешением коллизий?
Хеш-таблица – это структура данных, которая использует хеш-функцию для сопоставления ключей с индексами в массиве. Однако, коллизия происходит, когда два разных ключа приводят к одному и тому же индексу. Для разрешения коллизий применяются разные методы, включая цепное хеширование и открытую адресацию. Цепное хеширование проще в реализации и подходит для переменного размера данных, в то время как открытая адресация может быть более эффективной по памяти, но требует тщательной проработки хеш-функций и стратегии пробирования.

Цепное хеширование
При коллизии элементы с одинаковым хешем сохраняются в виде связанного списка (или другого контейнера) в том же индексе массива.
Каждый элемент хеш-таблицы – это не один объект, а список элементов, которые имеют одинаковый хеш.
Преимущество: не требуется дополнительной памяти для поиска свободных мест в массиве.

Недостаток: если хеш-функция неэффективна или слишком много коллизий, время поиска может увеличиться.

Открытая адресация
Вместо того, чтобы использовать дополнительные структуры данных, в случае коллизии ищется следующий свободный слот в массиве с помощью методов пробирования:

Линейное пробирование. Если ячейка занята, пробуем следующую (по модулю размера массива).
        
hash("cat") = 3 -> проверяем index 3, если занят, идем в index 4, потом в 5 и т.д.

    
Квадратичное пробирование. Вместо того, чтобы просто двигаться на 1 шаг, следующий шаг увеличивается квадратично (например, +1, +4, +9 и т.д.):
        
hash("cat") = 3 -> проверяем index 3, потом 3 + 1^2 = 4, потом 3 + 2^2 = 7 и т.д.

    
Двойное хеширование. Используются две хеш-функции. Если первая хеш-функция дает коллизию, используется вторая хеш-функция для определения шага пробирования:
        
hash1("cat") = 3, hash2("cat") = 7 -> если 3 занята, проверяем 3 + 7 (по модулю массива).

    
Преимущество: не нужно дополнительное пространство для хранения связанных списков, все сохраняется в массиве.

Недостаток: при частых коллизиях может потребоваться большое количество проб и перерасчетов хешей.

Что такое граф и как его можно представить?
Граф – это структура данных, состоящая из множества вершин (или узлов), соединенных между собой ребрами. Граф используется для отображения различных отношений и связей между объектами. Например, граф может моделировать социальные сети (пользователи как вершины, а их связи — ребра), маршруты в городах, зависимость задач в проекте и т.д.

Представления графа
1. Матрица смежности

Это способ представления графа с использованием двумерного массива. В этом массиве строки и столбцы соответствуют вершинам, а элементы массива показывают, существует ли реберное соединение между двумя вершинами:

Если в ячейке матрицы находится ноль (или специальное значение для несуществующих ребер), это означает, что между вершинами нет прямого соединения.
Если в ячейке указано положительное число, это будет вес ребра между вершинами (если граф взвешенный).
Преимущества:

Простой доступ к информации о связи между любыми двумя вершинами.
Легко реализовать и использовать для графов с малым количеством ребер.
Недостаток:

Требует O(V2) памяти, где V – количество вершин, что может быть неэффективно для разреженных графов (где ребер мало).
2. Список смежности

В этом представлении используется список списков. Каждый элемент основного списка представляет вершину графа, а вложенные списки содержат вершины, с которыми эта вершина непосредственно соединена.

Преимущества:

Эффективнее по памяти, особенно для разреженных графов (где количество рeбер значительно меньше, чем количество возможных ребер).
Операции поиска и добавления ребер проще и быстрее для разреженных графов.
Недостаток:

Для поиска информации о связи двух случайных вершин требуется пройти по списку смежности одной из них, что может занять больше времени, чем в матрице смежности.
Как провести поиск в глубину (DFS) и поиск в ширину (BFS) в графе?
Поиск в глубину (Depth-First Search, DFS)

DFS – это алгоритм обхода графа, который сначала исследует одну ветвь как можно глубже, а затем возвращается назад (бэктрекинг) и переходит к следующей.

Принцип работы:

Начинаем с начальной вершины.
Посещаем ее и помечаем как обработанную.
Переходим к одной из ее соседних вершин, которая еще не посещена.
Повторяем процесс, углубляясь вглубь, пока не дойдем до вершины, у которой нет непосещенных соседей.
Затем откатываемся назад (бэктрекинг) и ищем другие непосещенные вершины.
Продолжаем, пока не обработаем все вершины.
DFS можно реализовать рекурсивно (с использованием стека вызовов) или явно с помощью стека. Временная сложность будет равна O(V + E), где V – количество вершин, E – количество ребер.

Поиск в ширину (Breadth-First Search, BFS)

BFS – это алгоритм обхода графа, который проходит все вершины на текущем уровне перед тем, как спуститься на следующий уровень.

Принцип работы:

Начинаем с начальной вершины.
Помещаем ее в очередь.
Извлекаем вершину из очереди, посещаем ее и добавляем всех ее непосещенных соседей в очередь.
Повторяем процесс, пока очередь не станет пустой.
BFS удобно реализовывать с помощью очереди. Как и DFS, алгоритм BFS имеет временную сложность O(V + E).

Выбор алгоритма
Если нужно найти путь в лабиринте или дереве, DFS подходит лучше.
Если нужно найти кратчайший путь в невзвешенном графе, BFS работает лучше.
Оба алгоритма широко используются в поисковых задачах, графах, анализе сетей и алгоритмах маршрутизации.

В чем заключаются недостатки алгоритмов сортировки?
Алгоритмы сортировки играют ключевую роль в обработке данных, ускоряя поиск, упрощая анализ и улучшая визуализацию. Однако у каждого алгоритма есть недостатки, связанные с производительностью, использованием памяти и сложностью реализации.

Пузырьковая сортировка – простая, но медленная; временная сложность равна O(n²) в худшем и среднем случае:

        
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

    
Сортировка слиянием – быстрая, но требует дополнительной памяти. Временная сложность составляет O(n log n), а пространственная – O(n), так как создаются временные массивы:

        
def merge(left, right):
    if not left:
        return right
    if not right:
        return left
    if left[0] < right[0]:
        return [left[0]] + merge(left[1:], right)
    return [right[0]] + merge(left, right[1:])

def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left_half = merge_sort(arr[:mid])
    right_half = merge_sort(arr[mid:])
    return merge(left_half, right_half)

    
Быстрая сортировка – очень эффективна, но может работать медленно в худшем случае (если выбрать неудачный опорный элемент) со скоростью O(n²). Пространственная сложность O(log n) (из-за рекурсивных вызовов):

        
def partition(arr, low, high):
    i = low - 1
    pivot = arr[high]
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)
    return arr

    
Статья по теме
🚄 Сравнение 6 алгоритмов сортировки: пузырьком, выбором, кучей, вставками, слиянием и быстрая
Как выбрать алгоритм для поиска кратчайшего пути в графе?
Выбор алгоритма зависит от свойств графа:

Невзвешенный граф → BFS (поиск в ширину). BFS подходит, когда все ребра имеют одинаковый вес (или их вес не учитывается).
Граф с неотрицательными весами → Алгоритм Дейкстры. Дейкстра гарантирует оптимальный кратчайший путь в графе с неотрицательными весами.
Граф с отрицательными весами → Алгоритм Беллмана-Форда.
Оптимизация поиска с эвристикой → A*. A* работает как Дейкстра, но использует эвристику (например, евклидово расстояние), чтобы быстрее находить путь. Подходит для поиска пути на карте.
Продвинутые вопросы по структурам данных
Для тех, кто претендует на сеньорские роли, важно понимать связь структур данных с другими концепциями информатики.

Как можно применить динамическое программирование для решения задач на структуры данных?
Динамическое программирование – это метод решения задач, в которых одна и та же подзадача повторяется многократно. Вместо того чтобы вычислять ее заново, мы запоминаем (кешируем) результаты, что значительно ускоряет выполнение программы. Динамическое программирование особенно подходит для решения следующих типов задач:

Определение оптимального пути в графах и матрицах. Пример: найти путь с минимальной стоимостью в матрице, двигаясь только вправо или вниз.
Поиск наибольшей общей подпоследовательности (в строках, деревьях). Часто используется в алгоритмах сжатия данных, биоинформатике (например, сравнение ДНК).
Разбиение массивов и палиндромы. Пример: разбить строку на минимальное количество палиндромов.
Комбинаторика (например, определение количества способов забраться по лестнице).
Что такое B-дерево и в чем состоят его преимущества перед бинарным деревом поиска (BST)?
B-дерево – это сбалансированная древовидная структура данных, оптимизированная для работы с большими объемами данных и эффективного использования дисковой памяти. B-деревья широко используется в:

Файловых системах (NTFS, ext4, HFS+).
Базах данных (MySQL, PostgreSQL, MongoDB).
Индексации данных (Google Search, файловые индексы).
Основные свойства B-дерева:

Все листья находятся на одном уровне, поэтому дерево гарантированно сбалансировано.
Каждый узел может содержать несколько ключей (в отличие от бинарного дерева поиска).
Внутренние узлы используются как индексы, направляющие поиск в нужное поддерево.
Количество ключей в узле ограничено: узел хранит от t−1 до 2t−1 ключей (где t – минимальная степень B-дерева).
Если узел переполняется (больше 2t−1 ключей), он разделяется, поддерживая сбалансированность.
Главное преимущество B-дерева – меньшее число уровней и более быстрый доступ к данным, особенно на диске:

Преимущества B-дерева перед бинарным деревом поиска (BST)
Преимущества B-дерева перед бинарным деревом поиска (BST)
Что такое топологическая сортировка и где она применяется?
Топологическая сортировка – это способ упорядочивания вершин направленного ациклического графа (DAG) так, чтобы если есть ребро (u → v), вершина u предшествовала вершине v в порядке сортировки. Топологическая сортировка применима только к DAG, так как в графе не должно быть циклов.

Алгоритмы топологической сортировки
1. Метод удаления узлов с нулевой степенью входа (алгоритм Кана, O(V + E)):

Находим все вершины без входящих ребер и добавляем их в очередь.
Извлекаем вершину, добавляем ее в результат и удаляем исходящие ребра.
Если у какой-то вершины степень входа стала 0, добавляем ее в очередь.
Повторяем, пока не обработаем все вершины.
2. Метод DFS (O(V + E)):

Запускаем обход в глубину (DFS).
Когда вершина полностью обработана (все ее потомки посещены), добавляем ее в стек.
Разворачиваем стек → получаем топологическую сортировку.
Применение топологической сортировки
Планирование задач. Пример: у нас есть список зависимостей между задачами (что должно быть сделано раньше). Представляем задачи в виде DAG и выполняем топологическую сортировку.
Компиляция кода. Пример: некоторые файлы зависят от других. Сортируем файлы, сначала компилируя те, которые не имеют зависимостей.
Разрешение зависимостей. Пример: в пакетных менеджерах (npm, pip, apt) пакеты зависят от других. Выполняем топологическую сортировку для правильного порядка установки.
Распределение вычислений в многопоточности. Пример: некоторые вычисления требуют завершения других перед выполнением. Топологическая сортировка помогает определить порядок запуска потоков.
В чем заключается разница между мин-кучей и очередью с приоритетом?
Разница между мин-кучей и очередью с приоритетом заключается в том, что очередь с приоритетом – это абстрактная структура данных, а мин-куча –конкретный способ реализации очереди с приоритетом, обеспечивающий эффективные операции с приоритетами.

Мин-куча – полное бинарное дерево, в котором значение каждого узла меньше или равно значениям его дочерних узлов. Это позволяет эффективно находить и извлекать минимальный элемент. Основные операции, такие как вставка, удаление и поиск минимального элемента, выполняются за O(log n) или O(1) (для нахождения минимума).

Очередь с приоритетом – абстрактная структура данных, которая позволяет вставлять элементы с приоритетами и извлекать их в порядке приоритета (обычно минимального или максимального). Она может быть реализована разными способами, включая:

Мин-кучу (наиболее распространенный вариант).
Макс-кучу (если нужно извлекать максимальные элементы).
Обычный отсортированный или неотсортированный список (менее эффективные реализации).
Объясните концепцию и назначение системы непересекающихся множеств
Система непересекающихся множеств – это эффективная структура для работы с динамическими разбиениями элементов на множества, особенно полезная в решении задач, связанных с графами и сетями. Структура поддерживает две основные операции:

Find (найти) – определяет, к какому множеству принадлежит элемент.
Union (объединить) – объединяет два множества в одно.
Оптимизация работы структуры
Для повышения эффективности используются две техники:

Сжатие пути – ускоряет Find, делая дерево представления множества более плоским.
Объединение по рангу – уменьшает высоту дерева при Union.
Благодаря этим оптимизациям все операции работают за почти постоянное время O(α(n)), где α(n) — обратная функция Акермана, которая растет крайне медленно.

Применение системы непересекающихся множеств
Алгоритм Краскала – используется для поиска минимального остовного дерева (MST) в графе.
Поиск компонент связности – определяет, какие вершины соединены в графе.
Обнаружение циклов в графах – помогает проверять, содержит ли граф цикл.
Динамический перколяционный анализ – применяется в физике и моделировании сетей.
Объединение групп в системах управления доступом – например, для отслеживания пользователей в соцсетях или сетевых системах.
Что такое дерево отрезков и где оно применяется?
Дерево отрезков – это структура данных, предназначенная для эффективного выполнения запросов на отрезке и обновления элементов в массиве за логарифмическое время. Структура особенно полезна, когда необходимо многократно вычислять сумму, минимум, максимум, НОД (наибольший общий делитель) и другие операции на произвольных подотрезках массива.

Дерево отрезков строится в виде двоичного дерева, где:

Каждый лист соответствует отдельному элементу массива.
Каждый внутренний узел агрегирует информацию из двух дочерних узлов (например, хранит сумму элементов соответствующего подотрезка).
Основные операции и их сложность:

Построение дерева – O(n).
Запрос на отрезке – O(log n).
Обновление элемента – O(log n).
Применение:

Вычисление суммы элементов на отрезке – в обработке финансовых данных или статистике.
Поиск минимума/максимума на отрезке – в алгоритмах оптимизации.
Определение НОД на отрезке – в задачах теории чисел.
Обнаружение пересечений в геометрии – в задачах обработки отрезков.
Обновления и обработка данных в играх – для управления состоянием игровых объектов.
Что такое суффиксное дерево и как его реализовать на Python?
Суффиксное дерево – это структура данных, которая компактно хранит все суффиксы строки, позволяя быстро искать подстроки. Его построение обычно выполняется по одному суффиксу за раз, но использование суффиксных ссылок может ускорить процесс.

Это наивный метод построения дерева, работающий за O(n²), поскольку каждый новый суффикс вставляется по одному символу за раз:

        
class SuffixTreeNode:
    def __init__(self):
        self.children = {}  # Словарь для хранения дочерних узлов
        self.start = 0  # Начальный индекс подстроки, представленной ребром
        self.end = 0  # Конечный индекс подстроки, представленной ребром

class SuffixTree:
    def __init__(self, text):
        self.root = SuffixTreeNode()
        self.text = text + "$"  # Добавляем специальный символ, обозначающий конец строки

    def insert_suffix(self, index):
        node = self.root
        i = index
        while i < len(self.text):
            c = self.text[i]
            if c not in node.children:
                # Создаём новый дочерний узел
                new_node = SuffixTreeNode()
                new_node.start = i
                new_node.end = len(self.text) - 1 
                node.children[c] = new_node
            node = node.children[c]
            i += 1

    def build_tree(self):
        """
        Строит суффиксное дерево для заданного текста.
        """
        for i in range(len(self.text)):
            self.insert_suffix(i)

    
Если нужен более эффективный алгоритм построения суффиксного дерева, стоит рассмотреть алгоритм Укконена, который строит его за O(n).

Что такое квадродеревья и для чего они используются?
Квадродеревья – это иерархическая древовидная структура данных, которая рекурсивно делит двумерное пространство на четыре равные части (квадранта). Этот метод разбиения пространства эффективен для хранения и обработки пространственных данных.

Квадродеревья особенно полезны там, где требуется быстрое разбиение пространства и эффективное управление пространственными данными:

Обработка изображений – используются для сжатия изображений и эффективного хранения данных о пикселях.
Обнаружение столкновений в играх – помогают ускорить проверку пересечений объектов на сцене.
Географические информационные системы (ГИС) – позволяют эффективно хранить и быстро искать пространственные данные (карты и координаты объектов).
Практические вопросы по структурам данных
Правильный выбор структуры данных зависит от требований задачи. Важно не только знать, какие структуры существуют, но и понимать их применение в реальных сценариях.

Сервис райдшеринга
Для эффективного сопоставления водителей и пассажиров в реальном времени лучше использовать такую комбинацию структур:

Квадродеревья для работы с геоданными и быстрого поиска ближайших водителей.
Приоритетные очереди для ранжирования потенциальных совпадений по расстоянию и срочности.
Хэш-таблицы для быстрого доступа к местоположению водителей и пассажиров.
Система рекомендаций товаров
Оптимальное решение включает:

Разреженную матрицу взаимодействий пользователь-товар.
Хэш-таблицы для эффективного сопоставления пользователей и товаров.
Приоритетные очереди для ранжирования рекомендаций.
Графовые структуры для анализа связей между пользователями и товарами.
Обнаружение спам-аккаунтов в соцсети
Граф является отличным выбором для этой задачи. Пользователи представляются как узлы, их связи – как ребра. Анализ топологии сети помогает выявить подозрительные паттерны: плотные кластеры, изолированные узлы, резкие всплески активности.

Мессенджер
Необходимо использовать:

Хэш-таблицы для хранения ID пользователей и их списков контактов.
Очереди для каждого пользователя (сохранение порядка сообщений).
АВЛ-деревья для эффективного отслеживания статуса пользователей (онлайн/офлайн)
Проверка правописания
Оптимальной структурой будет префиксное дерево. Каждый узел представляет букву, а пути в дереве формируют слова. Это обеспечивает быстрый поиск по префиксу и позволяет эффективно предлагать исправления для опечаток.

Стратегия в реальном времени (RTS) с обработкой запросов по области
Для игр важно эффективно проверять наличие зданий на карте и обновлять данные.

Возможные решения:

Дерево отрезков – позволяет быстро обрабатывать диапазонные запросы (например, проверить, есть ли здания в заданной области) и вносить изменения (добавлять новые постройки).
Квадродерево – подходит для 2D-карт, когда требуется пространственное разбиение.
Советы по подготовке к собеседованию
Структуры данных – сложная и обширная область, поэтому при подготовке к собеседованию нужно использовать структурированный подход.

1. Освойте базовые структуры данных

Сосредоточьтесь на понимании фундаментальных структур данных:

Массивы
Связные списки
Стек и очередь
Деревья и графы
Хеш-таблицы
Важно не просто знать их устройство, но и понимать, как они управляют данными и какую временную сложность имеют основные операции (вставка, удаление, поиск).

2. Реализуйте структуры данных с нуля

Простого знания теории недостаточно – важно уметь реализовать структуры данных самостоятельно. Попробуйте написать их на языке программирования, который используете. Для отработки навыков можно использовать платформы с задачами по программированию, например, LeetCode, CodeSignal или Stepik.

3. Разберитесь в преимуществах и недостатках различных структур данных

Каждая структура данных имеет свои сильные и слабые стороны. Например:

Массивы обеспечивают быстрый доступ по индексу, но дорого обходятся при вставке/удалении.
Связные списки легко модифицировать, но они требуют обхода для доступа к элементам.
Будьте готовы обсуждать эти компромиссы на собеседовании и объяснять, какую структуру выбрать в зависимости от требований задачи.

4. Связывайте теорию с реальными приложениями

Чтобы выделиться среди кандидатов, показывайте, как структуры данных применяются в реальных задачах, например:

Веб-разработка (использование хеш-таблиц для кэширования данных).
Базы данных (применение B-деревьев для индексирования).
Машинное обучение (графовые структуры для кластеризации пользователей).
Связывая теорию с практическими примерами, вы продемонстрируете глубокое понимание предмета.

Производительность алгоритмов и О-нотация
Работа с массивами и поисковыми алгоритмами
Структуры данных: списки, стеки, очереди, деревья
Алгоритмы сортировки и их сложность
Хеш-таблицы и ассоциативный доступ
Динамическое программирование
Графовые алгоритмы
Строковые алгоритмы и криптография

Top Data Structure 
A data structure can be any organization, management, and storage format of data that allows efficient access and modification. It is a collection of data values, relationships amongst them, and the various functions or operations that can be applied to the data.

Data structures are a foundational concept of programming which is heavily utilized in algorithm design. As such, it is important for any programmer, irrespective of their primary programming language, to have a good understanding of the concept as well as what data structure questions are commonly asked.

Here we cover data structure interview questions that you might expect when applying for a position. 

Top Data Structure Interview Questions and Answers
Any programming language interview can have a few or many questions based on data structures. Here are the top data structures and algorithms interview questions with their respective answers.

If you prefer, you may download our Data Structure Interview Questions and Answers PDF. 

1. What is a data structure?
A data structure is a convenient way to organize and manipulate data. There are many kinds of data structures and each of them has distinct applications.

For instance, compiler implementations use hash tables for looking up identifiers. Similarly, B-trees are suitable for databases. Data structures are used in Artificial Intelligence, compiler design, database management, graphics, numerical analysis, operating systems, and statistical analysis.

2. How does a linear data structure differ from a non-linear data structure?
If the elements of a data structure form a sequence or a linear list then it is called a linear data structure. Non-linear data structures are those in which the traversal of nodes is done non-linearly.

Arrays, linked lists, stacks, and queues are examples of linear data structures, while graphs and trees are examples of non-linear data structures.

3. What are the applications of data structures?
Some practical applications of data structures are:

Storing data in a tabular form. For example, the contact details of an individual can be stored in arrays.
Arrays are widely used in image processing and speech processing.
Music players and image sliders use linked lists to switch between items.
A queue is used for job scheduling - the arrangement of data packets for communication.
A tree is used by the decision tree algorithm in machine learning.
Technologies like blockchain and cryptography are based on hashing algorithms.
Matrices are widely used to represent data and plot graphs, and perform statistical analysis.
4. What is the difference between file structure and storage structure?
File Structure: A hard disk or external device (such as USB), stores data that remains intact till manually deleted. Such a representation of data into secondary or auxiliary memory is called a file structure. 
Storage Structure: In this type of structure, data (variables, constants, etc.) are stored in the main memory, i.e. RAM, and is deleted once the function that uses this data has been completed.
5. What are the various operations that can be performed on a data structure?
The following are the operations that can be performed on a data structure:

Deletion: Deleting an existing element from the data structure.
Insertion: Adding a new element to the data structure.
Searching: Find the location of an element, if it exists, in the data structure.
Sorting: Arranging elements of the data structure in ascending or descending order for numerical data, and dictionary order for alphanumeric data.
Traversal: Accessing each element of the data structure once for processing.
6. Explain the postfix expression.
In a postfix expression, the operator is fixed after the operands. Some examples are:

B++ (i.e. B+B)
AB+ (i.e. A+B)
ABC*+ (i.e. A+B*C)
AB*CD*+ (i.e. A*B + C*D)
7. Which data structures are used for BFS and DFS of a graph?
Breadth-First Search (BFS) of a graph uses a queue. Depth First Search (DFS) of a graph uses a stack, but it can also be implemented using recursion through a function call stack.

Suggested Course

The Data Science Course 2024: Complete Data Science Bootcamp

8. What is a multidimensional array?
If an array has more than two dimensions, it is called a multidimensional array. They are also called an array of arrays. For example, a 3-D array will look like:

int 3darr[10][20][30] 
– this array can store 10*20*30 elements.

Assigning values
int ndarr[2][3][5] = {{{1,2,4,5},{5,6,7,9}, {6,5,4,3}}, {{1,1,3,4}, {2,3,4,6}, {5,6,7,8}}};

Accessing elements
To access each element, we need three nested loops, say i,j,k, so that we can get the value as ndarr[i][j][k]

9. What is a stack? State some applications.
A stack is a linear data structure that follows either the LIFO (Last In First Out) or FILO (First In Last Out) approach for accessing elements. Push, pop, and peek are the basic operations of a stack.

Stack

Some applications of a stack are:

Checking for balanced parentheses in an expression
The evaluation of a postfix expression
Implementing two stacks in an array
Infix to postfix conversion
Reversing a string
10. What is a queue? How is it different from a stack?
A queue is a form of linear structure that follows the FIFO (First In First Out) approach for accessing elements. Dequeue, enqueue, front, and rear are basic operations on a queue. Like a stack, a queue can be implemented using arrays and linked lists.

In a stack, the item that is most recently added is removed first. Contrary to this, in the case of a queue, the item least recently added is removed first.

11. What is a binary search? When is it best used?
A binary search is an algorithm that starts with searching from the middle element. If the middle element is not the target element then it checks if it should search the lower half or the higher half. The process continues until the target element is found.

The binary search works best when applied to a list with sorted or ordered elements.

12. How do you reference all the elements in a one-dimension array?
We can reference all the elements in a one-dimension array using an indexed loop. The counter runs from 0 to the maximum array size, say n, minus one. All elements of the one-dimension array are referenced in sequence by using the loop counter as the array subscript.

13. What are FIFO and LIFO?
Both FIFO and LIFO are approaches to accessing, storing, and retrieving elements from a data structure. LIFO stands for Last In First Out. In this approach, the most recently stored data is the one to be extracted first.

FIFO stands for First In First Out. With this approach, the data that is stored earliest will be extracted first.

14. What is a linked list?
In a linked list, elements are stored linearly, but the physical placements do not relate to the order in the memory; instead, each element points to the next node. The last one points to a terminator indicating the end of the list. There are many types of linked lists, such as single, double, circular, and multiple. A simple singly linked list can be drawn as:

Linked List

15. How does dynamic memory allocation help in managing data?
Dynamic memory allocation helps in storing simple structured data types. It can also combine separately allocated structured blocks for forming composite structures that contract and expand as required.

16. What is the difference between NULL and VOID?
While NULL is a value, VOID is a data type identifier. A variable assigned with a NULL value represents an empty value. The VOID is used for identifying pointers having no initial size.

17. If you are using the language C to implement the heterogeneous linked list, what pointer type should be used?
We can use void pointers. Unsigned char pointers are another option. This way, we can store any data type in the list. For example:

structa{

structa *next;

s_ize d_size;

 }

18. How does Pop differ from Push?
Both push and pop operations pertain to a stack. Data is added to the stack using the push operation, while it is retrieved using the pop operation.

19. How does variable declaration affect memory allocation?
The total amount of memory to be allocated or reserved in the case of a variable declaration depends on the data type used. For instance, declaring an integer type variable reserves 4 bytes of memory space while declaring a double variable reserves 8 bytes of the available memory.

20. Write the syntax in C to create a node in the singly linked list.
newNode = Node(data); //creates a new node.

21. What is data abstraction?
Data abstraction helps in dividing complex data problems into smaller, easy-to-manage parts. It starts with specifying all the involved data objects and the various operations to be performed without worrying too much about the way data is stored.


22. Write a C program to insert a node in a circular singly list at the beginning.
In a circular linked list, the last pointer points to the head (first node). For this, we use an external pointer that points to the last node, and the last->next points to the first node. We take the last node pointer because it saves us from traversing the entire list while inserting a node in the beginning or end. 

Program steps

Create a node N
N->next = last->next
last->next = N
Code:

struct Node *addBeginning(struct Node *last, int data)

{

/*check if list empty, if so create a node, else proceed as below*/

// dynamically create a node

 struct Node *N 

= (struct Node *)malloc(sizeof(struct Node)); 

 // Assign the data. 

 N -> data = data; 

 // last pointer becomes the first node 

 N -> next = last -> next; 

 last -> next = N; 

 return last; 

}

23. How do you insert a new item in a binary search tree?
As a binary search tree doesn’t allow for duplicates, the new item to be inserted must be unique. Assuming it is, we will proceed with checking whether the tree is empty or not. If it is empty, then the new item will be inserted into the root node.

However, if the tree is non-empty, then we will refer to the key of the new item. When it is smaller than the root item’s key, the new item will be added to the left subtree. If the new item’s key is bigger than the root item’s key, then the new item is inserted into the right subtree.


24. How does the selection sort work on an array?
The selection sort begins with finding the smallest element. It is switched with the element present at subscript 0. Next, the smallest element in the remaining subarray is located and switched with the element residing in the subscript 1.

The aforementioned process is repeated until the biggest element is placed at the subscript n-1, where n represents the size of the given array.


25. Write the pseudocode to perform in-order traversal on a binary tree.
In-order traversal is a depth-first traversal. The method is called recursively to perform traversal on a binary tree. The code is as follows:

structbtnode

{

structbtnode *left;

structbtnode *right;

}

*root = NULL, *temp = NULL;

voidinorder(struct btnode *temp)

{

if (root == NULL)

{

printf("Root is empty");

return;

}

if (temp->left != NULL)

inorder(temp->left);

if (temp->right != NULL)

inorder(t->right);

}
26. Write the recursive C function to count the number of nodes present in a binary tree.

staticint counter = 0;

intcountnodes(struct node *root)

{

if(root != NULL)

{

countnodes(root->left);

counter++;

countnodes(root->right);

}

return counter;

}
27. Write a recursive C function to calculate the height of a binary tree.
To find the height using recursion, we find the maximum of the height of subtrees on the left and right sides and then add it with the root. 

staticint counter = 0;

intcountnodes(struct node *root)

{

if(root != NULL)

{

countnodes(root->left);

counter++;

countnodes(root->right);

}

return counter;

}
28. How is memory affected by signed and unsigned numbers?

For signed numbers, the first bit is reserved for indicating whether the number is positive or negative. Hence, it has one bit less for storing the value. Unlike signed numbers, unsigned numbers have all the bits available for storing the number.

The effect of the aforementioned can be seen in the value range available to signed and unsigned numbers. While an unsigned 8-bit number can have a range of 0 to 255, an 8-bit signed number has a range varying from -128 to 127.

29. Do all declaration statements result in a fixed memory reservation?
Except for pointers, all declaration statements result in a fixed memory reservation. Instead of allocating memory for storing data, a pointer declaration results in allocating memory for storing the address of the pointer variable.

For pointers, actual memory allocation for the data happens during runtime.

30. How does an array differ from a stack?
A stack follows the LIFO approach. This means that data manipulation follows a specific sequence where the latest data element is the one to be retrieved first.

Unlike a stack, an array doesn’t follow any particular sequence for adding or retrieving data. Adding or retrieving an element in an array is done by referring to the array index.

31. What is an AVL tree?
AVL Tree

An AVL tree is a type of Binary Search Tree which is always in a partially-balanced state. The measure of the balance is given by the difference of the heights of the subtrees from the root node of the AVL tree.

32. How does an array differ from a linked list?
The following are the differences between an array and a linked list:

Additional Memory: For each element belonging to a linked list, extra memory space is required for storing the pointer. Arrays have no such requirement.
Cache: In comparison to linked lists, arrays have better cache locality, which can significantly enhance performance in various scenarios.
Insertion and Deletion: It is easy to add or delete elements in a linked list. Inserting and deleting elements for an array is comparatively expensive.
Random Access: Linked lists do not allow random access, while arrays do.
Size: While the size of an array is fixed, the size of a linked list is dynamic.
33. What are Infix, Prefix, and Postfix notations?
Infix Notation: Operators are written between the operands. This is the standard way of writing expressions. For example: A * (B + C) / D
Postfix Notation/Reverse Polish Notation: Operators are written after the operands, hence the name. For example: A B C + * D /
Prefix Notation/Polish Notation: Operators are written before the operands. / * A + B C D is the prefix notation equivalent of the aforementioned postfix notation example.
34. What is a linked list and what are the various types?
In a linked list, each element is a distinct object. Like arrays, linked lists are a linear type of data structure. In addition to data, every element of a linked list has a reference to the next element. The various types of linked lists are:

Singly linked list: Each node stores the address or reference of the next node in the linked list, except for the last node that stores NULL.
Doubly linked list: Each node keeps two references. One point to the next node and the other points to the previous node.
Circular linked list: In this type of linked list, all nodes are connected to form a circle. There is no NULL at the end. A circular linked list can either be a single circular linked list or a double circular linked list.
35. How will you implement a stack using queue and vice-versa?
It is possible to implement a stack using two queues. There are two options: either to make the push operation costly or the pop operation costly.

A queue can also be implemented with two stacks. There are two options: either to make the enQueue operation costly or the deQueue operation costly.

36. Which data structures are used for implementing LRU cache?
By organizing items in order of use, a Least Recently Used or LRU cache allows quick identification of an item that hasn’t been put to use for the longest time. There are two data structures are used for implementing an LRU cache:

Queue: Implemented using a doubly-linked list. The maximum size of the queue is determined by the total number of frames available, i.e. the cache size. While the most recently used pages will be near the rear end of the queue, the least recently used pages will be near the queue’s front end.
Hashmap: This has the page number as the key along with the address of the corresponding queue node as the value.
37. What are the various approaches for developing algorithms?
There are 3 main approaches to developing algorithms:

Divide and Conquer: Involves dividing the entire problem into a number of subproblems and then solving each of them independently.
Dynamic Programming: Identical to the divide and conquer approach with the exception that all subproblems are solved together
Greedy Approach: Finds a solution by choosing the next best option.
38. State some examples of both greedy and divide and conquer algorithms.
Examples of algorithms that follow the greedy approach are:

Dijkstra’s Minimum Spanning Tree
Graph – Map Coloring
Graph – Vertex Cover
Job Scheduling Problem
Knapsack Problem
Kruskal’s Minimal Spanning Tree
Prim’s Minimal Spanning Tree
Travelling Salesman
Examples of the divide and conquer approach are:

Binary Search
Closest Pair (or Points)
Merge Sort
Quick Sort
Strassen’s Matrix Multiplication
39. How does insertion sort differ from selection sort?
Both insertion and selection approaches maintain two sub-lists, sorted and unsorted. Each takes one element from the unsorted sub-list and places it into the sorted sub-list. The distinction between the two sorting processes lies in the treatment of the current element.

Insertion sort takes the current element and places it in the sorted sublist at the appropriate location. Selection sort searches for the minimum value in the unsorted sub-list and replaces the same with the present element.

40. What do you understand by shell sort?
The shell sort can be understood as a variant of the insertion sort. The approach divides the entire list into smaller sub-lists based on some gap variable. Each sub-list is then sorted using insertion sort.

41. Can you explain tree traversal?
The process for visiting all the nodes of a tree is called tree traversal. It always starts from the root node and there are three ways of doing it:

In-order Traversal
Pre-order Traversal
Post-order Traversal
42. What is a spanning tree? What is the maximum number of spanning trees a graph can have?
A spanning tree is a subset of a graph that has all the vertices but with the minimum possible number of edges. A spanning tree cannot be disconnected and does not have cycles.

The maximum number of spanning trees that a graph can have depends on how many connections there are. A complete undirected graph with n number of nodes can have a maximum of n-1 number of spanning trees.

43. How does Kruskal's Algorithm work?
Kruskal’s algorithm treats a graph as a forest and each node in it as an individual tree. A tree connects to another tree only if it:

Has the least cost among all the available options
Does not violate MST properties
44. What is a heap?
A heap is a special balanced binary tree in which the root node key is compared with its children and arranged accordingly. It can be of two types:

Min-Heap: The parent node has a key value less than its children.
Max-Heap: The parent node has a key value greater than its children.
45. What is recursion?
The ability to allow a function or module to call itself is called recursion. Either a function f calls itself directly or calls another function ‘g’ that in turn calls the function ‘f. The function f is known as the recursive function and it follows recursive properties, which are:

Base criteria: Where the recursive function stops calling itself.
Progressive approach: Where the recursive function tries to meet the base criteria in each iteration.
46. What is the Tower of Hanoi problem?
The Tower of Hanoi is a mathematical puzzle that comprises three towers (or pegs) and more than one ring. Each ring is of varying size and stacked upon one another such that the larger one is beneath the smaller one.

The goal of the Tower of Hanoi problem is to move the tower of the disk from one peg to another without breaking the properties.

47. How do the BFS (Breadth-First Search) and DFS (Depth First Search) algorithms work?
The BFS algorithm traverses a graph in the breadthwards motion. It uses a queue to remember the next vertex for starting a search when a dead end occurs in any iteration.

A DFS algorithm traverses a graph in the depthward motion. It uses a stack for remembering the next vertex to start a search when coming across a dead end in an iteration.

48. What do you understand by hashing?
The technique of converting a range of key values into a range of indexes of an array is known as hashing. It is possible to create associative data storage using hash tables where data indices can be found by providing the corresponding key values.

49. What is a Minimum Spanning Tree? How does Prim’s algorithm find it?
An MST or Minimum Spanning Tree is a spanning tree in a weighted graph that has the minimum weight of all the possible spanning trees. Each node is treated as a single tree by Prim’s algorithm while adding new nodes to the spanning tree from the available graph.

50. What is the interpolation search technique?
The interpolation search technique is an enhanced variant of binary search. It works on the probing position of the required value.

51. How do you check if the given Binary Tree is BST or not?
Simply perform an in order traversal of the given binary tree while keeping track of the previous key value. If the current key value is greater, then continue, otherwise return false. The binary tree is BST if the in order traversal of the binary tree is sorted.


FAQs
What data structures are asked in interviews?
You’ll be asked about stacks, queues, arrays, linked lists, heaps and trees in your dsa interview questions. Your interviewer will test you on all of them, so don’t leave out any data structure.

What is DS and why is it required?
A data structure is a collection of data stored in a particular way that makes it easy to manage and manipulate. With good data structure usage, you can efficiently traverse and abstract data, as well as reuse it. This is why data structure interview questions are present for almost every software development role.

What is the difference between data structures and algorithms?
A data structure allows you to store data in an efficient and organized manner. An algorithm is a sequence of steps that tell how to solve a particular problem.

What are the 3 characteristics of data structures?
The 3 characteristics of data structures are whether they are linear or nonlinear; whether they are homogenous or heterogenous; and whether they are static or dynamic. These properties determine what data structure it is. For example, an array is linear and a graph is nonlinear.
    
