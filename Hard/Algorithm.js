Simplilearn - Online Certification Training Course Provider
All Courses
What do you want to learn?
For Business
Resources
More
Login
Software Development
ArticlesEbooksFree Practice TestsOn-demand WebinarsTutorials
HomeResourcesSoftware DevelopmentKruskal’s Algorithm: Key to Minimum Spanning Tree [MST]
Table of Contents
What is Kruskal's Algorithm?
Importance of Kruskal's Algorithm in Graph Theory
What is a Spanning Tree?
What is a Minimum Spanning Tree? 
How Many Edges Does a Minimum Spanning Tree Have? 
How Does Kruskal's Algorithm Work?
Key Components in Kruskal’s Algorithm
How to Find the Minimum Spanning Tree Using Kruskal’s Algorithm?
Implementation of Kruskal Algorithm in C
Implementation of Kruskal Algorithm in C++
Implementation of Kruskal Algorithm in Python
Implementation of Kruskal Algorithm in Java
Kruskal's Algorithm Time Complexity and Efficiency
Kruskal's Algorithm Applications
Conclusion
FAQs
Kruskal’s Algorithm: Key to Minimum Spanning Tree [MST]
By Haroon Ahamed Kitthu
Share This Article:
Last updated on Jul 14, 2026236456
Kruskal’s Algorithm: Key to Minimum Spanning Tree [MST]
Kruskal’s algorithm is the concept that is introduced in the graph theory of discrete mathematics. It is used to discover the shortest path between two points in a connected weighted graph. This algorithm converts a given graph into a forest, considering each node a separate tree. These trees can only link to each other if the edge connecting them has a low value and doesn’t generate a cycle in the MST structure. In this tutorial, you will learn more about the Kruskal's Algorithm.

Become a Job-Ready Full-Stack DeveloperAI-Powered Full Stack Developer ProgramEXPLORE COURSEBecome a Job-Ready Full-Stack Developer
What is Kruskal's Algorithm?
Kruskal's Algorithm is a classic algorithm used in graph theory to find the Minimum Spanning Tree (MST) of a connected, undirected graph. The MST is a subset of the edges that connects all the vertices without any cycles and with the minimum possible total edge weight. Kruskal's Algorithm is greedy, meaning it builds the MST by always choosing the next shortest edge that doesn't form a cycle.

Steps of Kruskal's Algorithm
Sort All Edges
Initialize Subsets
Iterate Over Sorted Edges
Repeat Until MST is Complete
Boost your career with our AI-Powered Full Stack Developer Course. Gain in-depth expertise in development and testing with the latest technologies. Enroll today and become a skilled Full Stack Developer!
Importance of Kruskal's Algorithm in Graph Theory
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


Recommended Reads
Professional Sentiment Survey by Simplilearn

16 Apr, 2026
Top Data Structures and Algorithms Every Data Science Professional Should Know

24215
11 Aug, 2026
Software Development
Here’s All You Need to Know About Minimum Spanning Tree in Data Structures

69727
3 Aug, 2026
Four Proven Reasons Why Gamification Improves Employee Training

29 May, 2019
An Extensive Look at RSA Algorithm From Top to Bottom

96289
27 Apr, 2025
Software Development
The Best Guide You'll Ever Need to Understand Spanning Tree in Data Structure

32941
23 Jul, 2024
prevNext
Get Affiliated Certifications
with Live Class programs
Microsoft 
AI-Powered Full Stack Developer Program
Learn through 100+ hours of core curriculum delivered in live online classes by industry experts
Enhance your coding skills using AI-driven tools like ChatGPT, CodeWhisperer, Copilot, and Hugging Face
9 months
View Program
Java Certification Training
Java Certification Training
24x7 learner assistance and support
View Program
Explore Related Categories
Java
Web Development
Programming
Technical
Software Engineering
Development
Technology
Web Designing
Manual Testing
Database Administration
Software Architecture
Application Development
Software Testing
Coding
Automation
Automation Testing
R Programming
Python
Database
View All Categories
Discover Related Roles
Choose the path that suits you best from among the most in-demand roles in the industry

View All Roles
Frontend Engineer
Frontend Engineer
some random description about Frontend Engineer. some random description about Frontend Engineer. some random description about Frontend Engineer. some random description about Frontend Engineer.

$100,000
Software Engineer
Software Engineer
Software engineers are creative problem solvers. From building apps and platforms to optimizing systems at scale, this career path offers strong demand, diverse roles, and room to grow across industries, technologies, and specializations.

$115,000
Full Stack Developer
Full Stack Developer
Full-stack developers build the entire web experience, from back-end databases and APIs to front-end user interfaces. With global developer job postings up 27%, full-stack skills have become one of the most in-demand combinations in tech hiring.

$127,000
Front-End Developer
Front-End Developer
Front-end developers build everything users see and touch on the web. With global e-commerce sales projected to exceed $8 trillion by 2027 and nearly every business operating in a digital-first mode, demand for skilled front-end developers has never been stronger.

$126,000
Systems Analyst
Systems Analyst
With worldwide digital transformation spending forecast to reach nearly $3.9 trillion by 2027 and global public cloud spending expected to surpass $1 trillion, organizations need systems analysts who can turn complex business needs into scalable system requirements.

$102,240
Java Developer
Java Developer
Java is one of the most widely used languages, powering enterprise systems, cloud platforms, Android apps, and financial engines. A career in Java development offers long-term stability, high compensation, and broad industry relevance.

$117,931
Software Tester
Software Tester
Software testing offers a strong career opportunity for people who want stable growth and product impact. Testers help teams catch issues early, improve software quality, and enable faster releases, with BLS projecting 10% growth in the US job market from 2024 to 2034.

$131,450
prevNext
Follow us!

Refer and Earn
Company

About us
Careers
Newsroom
Alumni speak
Grievance redressal
Contact us
Work with us

Become an instructor
Blog as guest
Discover

Simplilearn SkillUp
SkillUp Sitemap
Resources
RSS feed
SimpliMentor GPT
For Businesses

Corporate training
Simplilearn SkillUp+
Guaranteed-to-run Classes
Corporate resources
Partners
Learn On the Go!

Get the Android App
Get the iOS App
Trending Post Graduate Programs

Product Management Certification Course | Product Management Training Course | Cloud Computing and DevOps Course
Trending Master Programs

PMP Plus Certification Training Course | Data Analyst Course | Data Science Certification | Cloud Architect Certification Training Course | DevOps Engineer Certification Training Course | Cyber Security Expert Course | Business Analyst Course | AI-Powered Automation Testing Course | AWS Cloud Architect Course
Trending Courses

PMP Certification Training Course | CSM Certification Course | Data Science with Python Course | AWS Certification | CEH Certification | AZ 900 Certification | CompTIA Security+ Certification | AZ 400 Certification | SAFe Certification | CISSP Certification Training | Tableau Certification Course | Lean Six Sigma Green Belt Certification | Lean Six Sigma Black Belt Certification | Power BI Certification Course | Java Certification Course | Python Certification Training Course
Trending Categories

Project Management Courses | Cloud Computing Courses | Generative AI Courses | Agile Certifications | Online Certifications | Agentic AI Courses | Cyber Security Courses | EC-Council Certifications | PeopleCert Certifications | Scrum Alliance Certifications | Software Development Courses | Web Development Courses | Scaled Agile Certifications | ISC2 Certifications | AXELOS Certifications | ISACA Certifications | PMI Certifications | CompTIA certifications | AWS Courses | Microsoft Certifications | AI Courses | Digital Marketing Courses
Trending Resources

Python Tutorial | JavaScript Tutorial | Java Tutorial | Angular Tutorial | Node.js Tutorial | Docker Tutorial | Git Tutorial | Kubernetes Tutorial | Power BI Tutorial | CSS Tutorial
Terms and ConditionsPrivacy PolicyRefund Policy
© 2009-2026 - Simplilearn Solutions. All Rights Reserved. The certification names are the trademarks of their respective owners.
Acknowledgement
PMP, PMI, PMBOK, CAPM, PgMP, PfMP, ACP, PBA, RMP, SP, OPM3 and the PMI ATP seal are the registered marks of the Project Management Institute, Inc.
*All trademarks are the property of their respective owners and their inclusion does not imply endorsement or affiliation.
Career Impact Results vary based on experience and numerous factors.
