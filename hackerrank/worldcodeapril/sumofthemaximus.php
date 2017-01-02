<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 30/04/16
 * Time: 01:22
 */

/*
 * Alexey is playing with an array, AA, of nn integers. His friend, Ivan, asks him to calculate the sum of the maximum values for all subsegments of AA. More formally, he wants Alexey to find F(A)=∑l=1n∑r=ln maxl≤x≤r A[x]F(A)=∑l=1n∑r=ln maxl≤x≤r A[x].

Alexey solved Ivan's challenge faster than expected, so Ivan decides to add another layer of difficulty by having Alexey answer mm queries. The ithith query contains subsegment [Li,Ri][Li,Ri], and he must calculate the sum of maximum values on all subsegments inside subsegment [Li,Ri][Li,Ri].

More formally, for each query ii, Alexey must calculate the following function:

F(A,Li,Ri)=∑l=LiRi∑r=lRimaxl≤x≤r A[x]F(A,Li,Ri)=∑l=LiRi∑r=lRimaxl≤x≤r A[x].

Can you help Alexey solve this problem?

Input Format

The first line contains 22 space-separated positive integers, nn (the length of array AA) and mm (number of queries), respectively.
The second line contains nn space-separated integers, a0,a1,…,an−1a0,a1,…,an−1 describing each element ajaj (where 0≤j<n0≤j<n) in array AA.
Each of the mm subsequent lines contains 22 space-separated positive integers describing the respective values for LiLi and RiRi in query ii (where 0≤i<m0≤i<m).

Constraints

1≤n,m≤1350001≤n,m≤135000
−109≤ai≤109−109≤ai≤109
1≤Li≤Ri≤n1≤Li≤Ri≤n
Output Format

For each query ii (where 0≤i<m0≤i<m), print its answer on a new line.

Sample Input

3 6
1 3 2
1 1
1 2
1 3
2 2
2 3
3 3
Sample Output

1
7
15
3
8
2
Explanation

The answer for the second query is shown below: F(A,1,2)=max1≤x≤1A[x]+max1≤x≤2A[x]+max2≤x≤2A[x]F(A,1,2)=max1≤x≤1A[x]+max1≤x≤2A[x]+max2≤x≤2A[x] =1+3+3=7=1+3+3=7
The answer for the third query is shown below: F(A,1,3)=max1≤x≤1A[x]+max1≤x≤2A[x]+max1≤x≤3A[x]+max2≤x≤2A[x]+max2≤x≤3A[x]+max3≤x≤3A[x]F(A,1,3)=max1≤x≤1A[x]+max1≤x≤2A[x]+max1≤x≤3A[x]+max2≤x≤2A[x]+max2≤x≤3A[x]+max3≤x≤3A[x] =1+3+3+3+3+2=15
 */