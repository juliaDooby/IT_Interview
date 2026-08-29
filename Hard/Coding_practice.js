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



Задача по олимпиадному программированию
Вопрос задан 5 лет назад
Изменён 5 лет назад
Просмотрен 684 раза
1

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


Примеры тестовых заданий на собеседовании на тестировщика ПО
Главная / Блог / Примеры тестовых заданий на собеседовании на тестировщика ПО
Примеры тестовых заданий на собеседовании на тестировщика ПО
Тестировщики ПО - важные игроки в команде разработки, проверяющие продукты на ошибки и недостатки до их релиза. Если вы собираетесь пройти собеседование на должность тестировщика, подготовка к встрече с работодателем будет ключевым моментом. В этой статье мы рассмотрим примеры задач, которые могут встретиться вам на собеседовании.

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

Удачи на ваших будущих собеседованиях!

Теги:reactсобеседование
Хабы:ReactJSJavaScriptTypeScriptВеб-разработка
+26

164

56
+56


29

Карма
Andrei Chmelev@andry36
Senior Full Stack Engineer / Tech Lead

Подписаться

Комментарии 56




Alex_Diamond
3 фев 2025 в 16:44
Подскажите, пожалуйста, пару интересных вопросов для сеньоров по этой задаче.


+1



andry36
4 фев 2025 в 16:31
Спасибо, что обратили внимание на задачу!
Я бы задал вопросы, связанные с производительностью и оптимизацией, например:
Как организовать параллельную загрузку нескольких профилей и синхронизировать их результат в одном компоненте?
Как выстроить отказоустойчивость при сбоях сети (ретраи, отмена запросов, механизмы кэширования)?
Как решать проблему при работе в среде SSR, где запросы нужно делать ещё до рендера?
Как совместить подход с Suspense и Error Boundaries для более реактивной UX-модели?


+3



dark_gf
3 фев 2025 в 18:11
Вопрос в общем хороший, у меня больше инетресует вот эта часть:

    <Profile username="john_doe">      {(user) => (user === null ? <Loading /> : <Badge info={user} />)}    </Profile>

Видя такой код я могу предположить что в проекте вашем может быть такого очень много, что имхо есть намек к не очень хорошему проекту )))


+4



SergeyEgorov
3 фев 2025 в 19:10
Тоже хотел спросить- Это весь код компонента App, или что-то не показано с какой-то целью?


-3



andry36
4 фев 2025 в 16:40
Да, в статье показан только упрощённый фрагмент компонента App. Он служит примером того, как использовать <Profile> на практике - без лишнего кода, не относящегося к сути задачи.


0



andry36
4 фев 2025 в 16:39
Благодарю за мнение.
Этот пример с функцией в children демонстрирует, что это обычный React-проп, которому можно передавать функцию как значение.
Сама идея упрощена для собеседования (в статье это указано), чтобы оценить именно понимание жизненного цикла и эффектов - в боевом проекте, конечно, принято грамотно разделять ответственность и не плодить запросы во всех мелких компонентах.


0



Zukomux
3 фев 2025 в 19:46
Простите, но запрос данных в эффекте это моветон. Если нужна загрузка данных, то ее надо оформлять хуком и делать функциональную композицию на уровне "умного" компонента(контроллера)


+1



Xao
3 фев 2025 в 21:45
А уже хук будет вызывать внутри useEffect? Давайте угадаю, на выходе хотим три стейта - loading, error и result?

Начиная с React 19, этот подход устарел окончательно, лучше сделать запрос, получить промис и передать его дальше потребителям, используя Suspense и новый метод use. А ошибку ловить в ErrorBoundary.


+4



Anaferat
4 фев 2025 в 05:19
А почему мы считаем что подход от команды реакт лучше?


+4



js2me
4 фев 2025 в 09:27
Больше возникает вопрос - почему хранение бизнес логики приложения в слое предоставления правильное решение и почему команда React тоже так считает?

Почему это считается правильным только во фронтенд веба ?)


+4



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


0



andry36
4 фев 2025 в 16:56
В последнем абзаце речь идёт о том, что полноценная реализация Suspense для произвольных запросов (без специальных фреймворков, типа Relay или Next.js) всё ещё считается нестабильной API. Другими словами, официальной документации и гарантий для общего случая пока нет, и React-команда может менять поведение или интерфейсы в будущем. Поэтому, если вы хотите «чистый» Suspense без дополнительных библиотек, стоит учесть, что это пока не является полностью поддерживаемым сценарием, и ваши решения могут сломаться в следующих версиях React.


0



Vitaly_js
4 фев 2025 в 17:06
О чем-то таком я тоже догадался. Мой вопрос спровоцировало вот это предложение: "Начиная с React 19, этот подход устарел окончательно". На мой взгляд, что бы что-то устарело окончательно должен накопиться опыт, и этот опыт должен перейти в эффективные решения. Данное же предложение из доки подсказывает, что это далеко не так.


+1



Zukomux
5 фев 2025 в 07:16
И в итоге получаем компонент-мультитул. Тут и загрузка данных, и обработка ошибок, мапинг входных данных, формирование представления. Это подойдёт разве что для пет проекта, а в контексте статьи для проверки на джуна. Поменяйте роут с данными и придется 80% компонента переписать заново. Про тестирование я уже молчу


+1



andry36
4 фев 2025 в 16:46
Хук внутри себя всё равно будет использовать useEffect для запроса данных, так что это вопрос именно композиции и структурирования кода, а не принципиального отличия в подходе. Пример был упрощен оставляя пространство для вопроса "А как бы вы сделали это?" :)


0



Vitaly_js
4 фев 2025 в 18:03
Не обязательно же. Можно сделать через useSyncExternalStore. Тогда все эти задачи, которые вы проверяете в данном примере с монтирование/размонтирование, состоянием гонки и т.п. будут решены внутри объекта Profile и реакт тут вообще будет как бы ни при чем. Для использования надо только знать спецификацию useSyncExternalStore.


0



YuriyUl
4 фев 2025 в 08:46
а проброс функции в children не противоречит самому смыслу {children}?


+4



bycolour
4 фев 2025 в 16:56
Нет, это называется render function


+1



radist2s
4 фев 2025 в 12:20
Пожалуй, вы забыли про пару важных моментов: Abort Controller и React Strict Mode.


0



andry36
4 фев 2025 в 16:58
В статье я специально упомянул, что у нас якобы нет возможности вызвать abort(), чтобы проверить реакцию кандидата на ситуацию неуправляемого запроса. А Strict Mode помогает увидеть возможные побочные эффекты и дважды вызываемые функции - это тоже важно учитывать для корректной реализации асинхронной логики.


+1



radist2s
4 фев 2025 в 20:04
Просто обожаю технические задачи в вакууме на собеседованиях. Ваше идеальное решение не проходит даже базовую проверку на предотвращение рефетча (откройте консоль, и увидите как запрос выполняется дважды при первом маунте).

Меня всегда поражала подобная самоуверенность интервьюеров.


0



bakunovdo
5 фев 2025 в 06:17
Strict mode удалить нужно


0



username-ka
4 фев 2025 в 12:25
Прикольный вопрос, я бы не принял ни предложенное решение, ни сам факт существования подобного компонента. Весь мир использует tanstack-query в качестве стандарта де-факто, камон.


-1



andry36
4 фев 2025 в 17:01
Спасибо за комент!
"Весь мир использует..." громкое утверджение, сразу хочется попросить пруфы :)
Не все компании применяют именно tanstack-query. К тому же в задаче проверяются общие принципы работы с асинхронностью в React: если человек хорошо понимает эту логику, он без труда освоит и любую абстракцию вроде React Query или SWR.


+3



username-ka
4 фев 2025 в 19:29
У всех разные стандарты, это нормально. В моей реальности в 2025 году всё-таки стыдно было бы рисовать спиннеры руками "если данные null", тригерить загрузку в useEffect, игнорировать серверные компоненты и существование хуков.

"Не все компании применяют именно tanstack-query" - это действительно так. Но всерьёз кандидатов, который не задаёт первым вопросом "а нам точно надо такой велосипед напилить", я на своих интервью не рассматриваю.


0



onets
4 фев 2025 в 15:53
Есть callback hell, а это nano-micro-component hell, когда каждый уважающий себя микро-компонент лезет на сервер за данными. Когда их становится много - начинается подобное веселье.


0



andry36
4 фев 2025 в 17:02
Пример из статьи не призывает каждый микро-компонент делать собственный запрос. Это лишь иллюстрация ключевых вопросов, которые помогают оценить понимание React-хуков и потенциальных ловушек асинхронности. Для боевого применения, конечно, нужно распределять логику так, чтобы не превратить приложение в зоопарк из сотен запросов. Но на собеседовании хочется увидеть, как кандидат работает именно с базовой механикой React - тогда уже понятно, сможет ли он грамотно её применить внутри более продуманной архитектуры.


-1



Vitaly_js
4 фев 2025 в 16:50
Представьте, что вы разрабатываете библиотеку компонентов внутри большой компании, и этой библиотекой будут пользоваться другие команды (вполне реальный сценарий в больших IT-компаниях). Задача: написать реализацию компонента Profile, чтобы им удобно и ожидаемо могли пользоваться в самых разных контекстах.

Не очень люблю такое, потому что это смахивает на чисто синтетическую задачу или банальное запудривание мозгов соискателю.

Вот вы сами пишете, что уже есть fetchProfile Тогда зачем нужен вот этот вот компонент? Реэкспортируйте вы этот fetchProfile и тогда действительно его можно использовать в разных контекстах. И внутри реакт компонентов, и внутри какой-нибудь rtkquery. По сути, вся задача - это прослойка между пользовательским кодом и fetchProfile , которая уже откидывает часть контекстов в которых будет использована.

Вы действительно проверяете знания реакта, но, на мой взгляд, в неестественных условиях, т.е. создаете дополнительно пространство для стресса и для траты времени на муру.


-2



andry36
4 фев 2025 в 17:20
Спасибо за комментарий!
Понимаю, что такая постановка задачи может показаться искусственной, но для собеседований она довольно типична: нам нужно в ограниченное время проверить, как кандидат мыслит в контексте React, понимает ли он тонкости хуков и асинхронных запросов.
На интервью часто задают подобные микро-задачи, чтобы быстро увидеть, как разработчик работает со стейтом, эффектами и обработкой ошибок на практике - без вдавания в детали полной архитектуры приложения.

Т.е. что это не замена реального проектного кода, а тестовое окружение, где проявляются навыки кандидата.


+1



Vitaly_js
4 фев 2025 в 17:46
Так в этом и проблема. Ваша задача быстро проверить навыки. А задача соискателя не ударить в грязь лицом. Если вы даете липовую задачу, действительно, можно не думая начать решать и вроде как показывать навыки. А можно начать рефлексировать и пытаться выяснить, а что тут проверяют?

Создавая искусственные ограничения вы не "упрощаете" задачу, а наоборот создаете реальные препятствия для ее решения. И как выше заметили можете создавать неверное представление о проекте.

fetchProfile не позволяет отменять запросы. А fetchData1, fetchData2 тоже не позволяют? Как должен ответить соискатель? Решить задачу слепо заткнув дыру в архитектуре или поставить под сомнение реализацию fetchProfile ? В любом случае это игра ва-банк. Ты можешь показать себя либо безынициативным сразу взявшись за работу, либо наоборот излишне инициативным, либо неуверенным, либо болтливым и все это ровно из-за "липовости" тестового примера.

И да, это действительно типично для собеседований, поэтому я и говорю, что такое не очень люблю. Вроде как хотят протестировать навыки (точно хотите навыки протестировать?)), вроде как сами же думают, что речь идет о реальных условиях, но тестируются далеко не только навыки и далеко не в реальных условиях.


+2



Ione1991
4 фев 2025 в 17:58
Не совсем понятен первый пример с lastUsernameFetched. Разве там условие не будет всегда ложно?


0



aw350me
4 фев 2025 в 17:59
Боже, как же все это противно выглядит.

Я все понимаю и про плюсы реакта и джаваскрипта в целом, у каждого языка есть свои недостатки, но конкретно этот пример показывает насколько же банальная работа с запросами это вязкая, противная, неоднозначная и нагроможденная работа в вебе с джс и реактом конкретно.

Сильно отталкивает от изучения и даже просто наблюдения за, казалось бы, перспективными и популярными разработками в сфере разработки веб приложений


+3



questpc
5 фев 2025 в 07:23
Это просто им движет желание сделать "слишком хорошо" или идеально. По факту же консоль браузера в поисках ошибок обычный пользователь смотреть не будет. И непонятно почему сервер вернет null. Если пользователь отсутствует, то сервер вероятно вернет не 200 код вообще и ошибка будет на уровне запроса.

Частое тыканье в имена пользователей вообще лучше всего решить загрузкой данных для всех отображаемых в данный момент. Ну или Profile создавать не одну инстанцию а на каждый клик отдельно.


0



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


+1



taujavarob
6 фев 2025 в 21:58
А теперь правильное идеальное решение:

Супер интересное решение. Браво!

Но в реале наверняка надо в key помещать какое-то Id , так как имена в списке могут совпадать.

Да и что будет если кто-то использует Profile без обёртки ProfileWrapper? - но это конечно, наверное, организационный момент, хотя, согласно "правилу Мерфи" - такое рано или поздно произойдет. 


0



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


0



Vitaly_js
7 фев 2025 в 12:21
Это же _стандартное_ решение, которое явно рекомендовано вот тут:

Это стандартное решение, когда речь идет о коде без эффектов. В данном случае, оно, очевидно, не подходит. По сути, вы заявляете, что у вас есть компонент Profile, который имеет сайдэффекты и зависит от клиентских данных. Но по факту, он от клиентских данных не зависит и любой кто будет его использовать как есть, т.е. просто посылая новые данные в username никакого эффекта не получат. Только изучая документацию или исходный код они узнают, что частью публичного интерфейса является так же и инфраструктурное свойство key.

По сути, вы убираете из реакта функциональность useEffect, и реализуете ее окольными путями.

В документации прямо пишут:

Effects are an escape hatch from the React paradigm. They let you “step outside” of React and synchronize your components with some external system like a non-React widget, network, or the browser DOM.

Вы же, вместо того, что бы синхронизировать компонент используя встроенные средства, делаете такую синхронизацию средствами предназначенными для другого.

Команда реакт не советует так делать. Эти оптимизации логичны и работают как оптимизации именно когда нет useEffect


0



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


0



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


0



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


0



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


0



taujavarob
13 фев 2025 в 02:35
вы предлагаете решить ее запросами к серверу которые будут просто повисать в воздухе. Тогда у меня встречный вопрос - это зачем? Зачем пропускать запросы, которые не планируется показывать на экране?

Незачем. Хотя для сервера это не имеет значение, так как мы не можем передать серверу что запрос уже не нужен. Но это поправимо. - При "размонтировании" компонента запросу посылается Cancel. Это помогает не забивать ограниченное количество запросов к сайту в броузере. Но это не относится к использованию или нет key-техники. И в том и в другом случае это нужно применять.

Если добавить кэшпрофилей, то уже нет никакого смысла работать с ключами и отключать компонент.

Почему? Какая разница есть кеш или нет? Кеш находится вне компонента и использование key-техники никак не затрагивает есть он или нет.

Минуточку, сброс ВСЕХ стейтов компонента - это не ровно сбрасывать стейт в общем случае. Разрабы реакта показали, что они имеют в виду.

Они явно написали, что если вы хотите при каждом изменение пропсов сбрасывать стейт компонента, то используйте key-технику, иначе пишите тонну дополнительного кода в своём компоненте. - выбор что использовать довольно ясен.


0



Vitaly_js
13 фев 2025 в 16:03
После вопроса про кэш уже хочется задать вопрос, вы точно понимаете, что делает key? Вы не забыли про вот эту вот особенность: "... React will recreate the DOM ..."? То, что все useMemo и другие мемоизированные элементы скинутся? Речь идет именно о сбрасывании ВСЕХ стейтов компонента и перерисовку на экране.

Иными словами, вот берете вы данные из кэша и вам не нужно пересоздавать дом. Реакт сам выполнит сверку и найдет дом узлы, которые нужно обновить. А если внутри есть компоненты, которые не зависят от входных пропсов, ну не знаю, какая-нибудь косметика она вообще даже в сверке участвовать не будет. А вот при использовании key она будет вся пересоздана.

Мне вот любопытно, вы все это учитываете? И не забываем, что из-за эффектов могут быть переходные состояния и в вашем случае они всегда будут идти из начального состояния в чем далеко не всегда есть смысл. При этом вы сами пишете, что все эффекты все равно нужно полностью сконфигурировать. Просто вместо того, что бы сконфигурировать еще и зависимости, вы должны так спроектировать, что бы всегда все шло из начального состояния.

Если выкинуть эффекты, оно наверное так и будет. Хотя продумать, что мемные компоненты без зависимостей от входа должны быть вынесены куда-то в другое место иначе они все будут так же пересоздаваться впустую.


0



taujavarob
14 фев 2025 в 04:31
После вопроса про кэш уже хочется задать вопрос, вы точно понимаете, что делает key? Вы не забыли про вот эту вот особенность: "... React will recreate the DOM ..."? То, что все useMemo и другие мемоизированные элементы скинутся? Речь идет именно о сбрасывании ВСЕХ стейтов компонента и перерисовку на экране

Это я помню. Сброс всех стейтов - это именно то что нам надо. В данном случае.

Про кэш и useMemo - современная реализация кэша, типа TanStack Query, вполне имеет реализацию, когда кэш находится на самом верхнем уровне (ключом к нему являются обычно символьное значение) и такой кэш никак не волнует сброс состояния в различных компонентах приложения.

Просто вместо того, что бы сконфигурировать еще и зависимости, вы должны так спроектировать, что бы всегда все шло из начального состояния.

Но эта конфигурация есть не более чем действие по освобождению ресурсов при размонтировании компонентов. Не более того. - и тогда не надо думать как сбросить состояние компонента (и возможно нижележащих его children компонентов).

Хотя продумать, что мемные компоненты без зависимостей от входа должны быть вынесены куда-то в другое место иначе они все будут так же пересоздаваться впустую.

Да, кэш будет в другом месте. Это верно. Так и реализован кэш в TanStack Query.


0



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


0



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


0



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


0



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


0



taujavarob
9 фев 2025 в 02:06
И вот в таких случаях, когда надо сбрасывать состояние при изменении пропсов - и надо использовать ключи.

Согласен с вами. Надо рассматривать и такую возможность как "рубить" "лист" или даже "сук" дерева компонентов, если это не приводит к потери производительности при смене key.

@Vitaly_js, - @Kergan88 имеет в виду раздел с названием "Resetting all state when a prop changes" в You Might Not Need an Effect.

В этом случае не имеет значение вообще что происходит (используется ли useEffect) в том компоненте, что монтируется в "дерево" с помощью key. - главное просто "сбросить всё состояние" компонента, и неважно как оно было установлено, с помощью useEffect или другим путём. Просто "рубится", создаётся новый "лист" или "сук" с новым состоянием и монтируется в "дерево". И всё. Довольно простое решение. В данном случае.


0



Vitaly_js
9 фев 2025 в 10:54
У автора статьи был усеченный случай, который должен был показывать общее поведение. Поэтому не нужно пытаться сюда впихнуть частные случаи, которые можно по разному оптимизировать.

Тем более, что при работе с запросами сбрасывать все состояния и переключение на нужные состояния это не одно и тоже.

То, что автор использовал setUser(null) вовсе не означает, что нужно все бросать и начинать оптимизацию. Переключение пользователей может быть вообще без фазы сброса, если брать все из кэша. В зависимости от различного поведения в useEffect компонент при изменении пропсов может вести себя по разному. Автор, во всяком случае, хотел проверить умение работать именно в этом случае.

Поэтому имеет значение, что и как происходит в эффектах и оптимизации начинать уже с финальным компонентом.

Или вы в принципе начинаете новый компонент зафигачив что-то в key?


0



taujavarob
10 фев 2025 в 03:36
Или вы в принципе начинаете новый компонент зафигачив что-то в key?

Это хороший вопрос. Я просто не знал вовсе про key до этого. - Но вот сейчас задумался- а почему бы его не использовать, ведь код становится проще. Гораздо проще.


0



taujavarob
8 фев 2025 в 01:24
Это же _стандартное_ решение, которое явно рекомендовано вот тут:

Оно понятное, но оно основано на том, что у вас в компоненте нет никакого состояния, как только username меняется, а более точно как только значение key меняется, компонент "отрезается" от дерева компонентов, создаётся заново и "пришивается" к дереву.

Такое поведение возможно, но для React он странное. В React все хороводят вокруг "состояния", а в случае key состояния нет вообще. Оно не нужно тогда. Поменялся key - руби компонент со всем его состоянием и возможно состоянием всех его children, создавай заново и монтируй снова в дерево компонентов.

Возможно, наверное, всё приложение создавать в таком стиле "рубки" - но оно будет какое-то странное для React.


0



UnknownHero
6 фев 2025 в 04:24
1. Key решает проблему и будет показывать только последнее состояние и не важно что там вызывалось до этого.
2. По "Can’t perform a React state update on an unmounted component…” https://github.com/reactwg/react-18/discussions/82
3. Dependency тоже условный для сценария с key, можно не писать если код стайл позволяет.

Ох уж эти собесы с задачками.


0



walkwithmeinhell
6 фев 2025 в 05:44
Объясните плиз, как работает идеальное решение, если юзер быстро кликает по рандомным юзернеймам. С useref понял как люди предлагали. В идеальном не понимаю как и зачем тот setUser(null) в начале useeffect


0



taujavarob
5 мар 2025 в 07:36
и зачем тот setUser(null) в начале useeffect

Если у вас уже есть старый user и при обращении на сервер произошла ошибка, то у вас новый user не заменит старого user. Для этого и нужно "сбросить" значение user на null перед обращением на сервер.


0



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
