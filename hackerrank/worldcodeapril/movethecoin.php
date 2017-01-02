<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 30/04/16
 * Time: 01:17
 */

/*
 *
 * Move the Coins
 *
 * Alice and Bob are playing a game, defined below:

There is an undirected tree graph with nn nodes that has the following properties:
Each node has cici golden coins.
Node 11 is root of the tree.
The parent node of some node uu is defined as p(u)p(u).
Moves
Players move in turns.
During a move, a player can select a node u>1u>1 and move one or more coins to p(u)p(u).
If the current player can't make any move, they lose the game.
The game quickly becomes boring because the result is determined by the tree's configuration and the number of coins in each node (assuming that both players play optimally).

Alice decides to instead challenge Bob by asking him qq questions. For each question ii:

Alice picks a node ui>1ui>1 and removes the edge between uiui and p(ui)p(ui).
She picks another node vv and draws a new undirected edge between uiui and vivi. So now p(ui)=vip(ui)=vi.
Bob must determine if the first player has a winning strategy for the new tree or not. It's possible that after Alice draws the new edge, the graph will no longer be a tree; if that happens, the question is invalid. Each question is independent, so the answer depends on the initial state of the graph (and not on previous questions).

Given the tree and the number of coins in each node, can you help Bob answer all qq questions?

Input Format

The first line contains an integer, nn (the number of nodes).
The second line contains nn space-separated integers, c1,c2,…,cnc1,c2,…,cn, describing the number of coins in each node.
Each of the n−1n−1 subsequent lines contains 22 space-separated integers denoting an undirected edge between nodes aa and bb, respectively.
The next line contains an integer, qq (the number of questions Alice asks).
Each of the qq subsequent lines contains 22 space-separated integers, uiui and vivi, respectively.

Constraints

1≤n,q≤5×1041≤n,q≤5×104
1≤a,b≤n1≤a,b≤n
0≤ci≤200≤ci≤20
For each question:

2≤ui≤n2≤ui≤n
1≤vi≤n1≤vi≤n
ui≠viui≠vi
Output Format

On a new line for each question, print YESYES if the first player has a winning strategy, print NONO if they do not, or print INVALIDINVALID if the question is not valid.

Sample Input

6
0 2 2 1 3 2
1 2
1 3
3 4
3 5
4 6
3
6 2
4 1
3 6
Sample Output

NO
YES
INVALID

Explanation

Initally the tree looks like this:

https://s3.amazonaws.com/hr-challenge-images/19994/1459406547-fb6e897a57-goldenagain.png

After the first question (6 26 2), the tree looks like this:

https://s3.amazonaws.com/hr-challenge-images/19994/1459406604-0f1ba4ec28-goldenagain1.png

Alice removes the edge conecting node 66 to 44 and makes 22 the new parent node of 66. Because this configuration does not result in a winning strategy, we print NONO on a new line.

After the second question (4 14 1), the tree looks like this:

https://s3.amazonaws.com/hr-challenge-images/19994/1459406662-83a17f629f-goldenagain5.png

Alice removes the edge conecting node 44 to 33 and makes 11 the new parent node of 44. Because this configuration results in a winning strategy, we print YESYES on a new line.

After the third question (3 63 6), the graph is no longer a tree:

https://s3.amazonaws.com/hr-challenge-images/19994/1459406666-8efce8aba5-goldenagain6.png

Alice removes the edge conecting node 33 to 11 and makes 66 the new parent node of 33. The graph is now partitioned into two separate subgraphs (one of which is also not a tree); because the game must be played on a single undirected tree graph, we print INVALIDINVALID on a new line.
 *
 */