<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 30/04/16
 * Time: 01:22
 */

/*
 *
 * Shashank loves trees and math. He has a rooted tree, TT, consisting of NN nodes uniquely labeled with integers in the inclusive range [1,N][1,N]. The node labeled as 11 is the root node of tree TT, and each node in TT is associated with some positive integer value (all values are initially 00).

Let's define FkFk as the kthkth Fibonacci number. Shashank wants to perform 22 types of operations over his tree, TT:

UU XX kk
Update the subtree rooted at node XX such that the node at level 00 in subtree XX (i.e., node XX) will have FkFk added to it, all the nodes at level 11 will have Fk+1Fk+1 added to them, and so on. More formally, all the nodes at a distance DD from node XX in the subtree of node XX will have the (k+D)th(k+D)th Fibonacci number added to them.
QQ XX YY
Find the sum of all values associated with the nodes on the unique path from XX to YY. Print your sum modulo 109+7109+7 on a new line.
Given the configuration for tree TT and a list of MM operations, perform all the operations efficiently.

Note: F1=F2=1F1=F2=1.

Input Format

The first line contains 22 space-separated integers, NN (the number of nodes in tree TT) and MM (the number of operations to be processed), respectively.
Each line ii of the N−1N−1 subsequent lines contains an integer, PP, denoting the parent of the (i+1)th(i+1)th node.
Each of the MM subsequent lines contains one of the two types of operations mentioned in the Problem Statement above.

Constraints

1≤N,M≤1051≤N,M≤105
1≤X,Y≤N1≤X,Y≤N
1≤k≤10151≤k≤1015
Output Format

For each operation of type 22 (i.e., QQ), print the required answer modulo 109+7109+7 on a new line.

Sample Input

5 10
1
1
2
2
Q 1 5
U 1 1
Q 1 1
Q 1 2
Q 1 3
Q 1 4
Q 1 5
U 2 2
Q 2 3
Q 4 5
Sample Output

0
1
2
2
4
4
4
10
Explanation

Intially, the tree looks like this:
https://s3.amazonaws.com/hr-challenge-images/15909/1460699464-aa0383b7a1-fib.png

After update operation 1 11 1, it looks like this:

https://s3.amazonaws.com/hr-challenge-images/15909/1460699732-cd71b94a79-fib1.png

After update operation 2 22 2, it looks like this:

https://s3.amazonaws.com/hr-challenge-images/15909/1460699891-9084e7038d-fib2.png
 */