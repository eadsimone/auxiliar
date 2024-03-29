<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 30/04/16
 * Time: 00:29
 */
/*
The Tower of Hanoi is a famous game consisting of 33 rods and a number of discs of incrementally different diameters. The puzzle starts with the discs neatly stacked on one rod, ordered by ascending size with the smallest disc at the top. The game's objective is to move the entire stack to another rod, obeying the following rules:

Only one disc can be moved at a time.
Each move consists of taking the topmost disc from a stack and moving it to the top of another stack.
No disc may be placed on top of a smaller disc.
Gena has a modified version of the Tower of Hanoi. His Hanoi has 44 rods and NN discs ordered by ascending size. He made a few moves (following the rules above), but stopped and lost his place. He wants to restore the tower to its original state by making valid moves. Given the state of Gena's Hanoi, help him calculate the minimum number of moves needed to restore the tower to its original state.

Note: Gena's rods are numbered from 11 to 44. All discs are initially located on rod 11.

Input Format

The first line contains a single integer, NN, denoting the number of discs.
The second line contains NN space-separated integers, where the ithith integer is the index of the rod where the disk with diameter ii is located.

Constraints

1≤N≤101≤N≤10
Output Format

Print the minimum number of moves Gena must make to restore the tower to its initial, ordered state on the first rod.

Sample Input

3
1 4 1
Sample Output

3
Explanation

3 moves are enough to build the tower. Here is one possible solution:
*/