<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 29/04/16
 * Time: 17:07
 */
/*
 * Jumping on the Clouds
 *
 * Emma is playing a new mobile game involving nn clouds numbered from 0 to n−1.
 * A player initially starts out on cloud c0, and they must jump to cloud cn−1.
 * In each step, she can jump from any cloud ii to cloud i+1 or cloud i+2.

There are two types of clouds, ordinary clouds and thunderclouds.
The game ends if Emma jumps onto a thundercloud, but if she reaches the last cloud (i.e., cn−1), she wins the game!

jump(1).png

Can you find the minimum number of jumps Emma must make to win the game? It is guaranteed that clouds c0c0 and cn−1cn−1 are ordinary-clouds and it is always possible to win the game.

Input Format

The first line contains an integer, nn (the total number of clouds).
The second line contains nn space-separated binary integers describing clouds c0,c1,…,cn−1c0,c1,…,cn−1.

If ci=0ci=0, the ithith cloud is an ordinary cloud.
If ci=1ci=1, the ithith cloud is a thundercloud.
Constraints

2≤n≤1002≤n≤100
ci∈{0,1}ci∈{0,1}
c0=cn−1=0c0=cn−1=0
Output Format

Print the minimum number of jumps needed to win the game.

Sample Input 0

7
0 0 1 0 0 1 0
Sample Output 0

4
Sample Input 1

6
0 0 0 0 1 0
Sample Output 1

3
Explanation

Sample Case 0:
Because c2c2 and c5c5 in our input are both 11, Emma must avoid c2c2 and c5c5. Bearing this in mind, she can win the game with a minimum of 44 jumps:

jump(2).png

Sample Case 1:
The only thundercloud to avoid is c4c4. Emma can win the game in 33 jumps:


*/
$handle = fopen("./input.txt", "r");

//$handle = fopen ("php://stdin","r");
fscanf($handle,"%d",$n);
$c_temp = fgets($handle);
$c = explode(" ",$c_temp);

function solution ($c){
    $i=0;
    $movimientos=0;
    $max=count($c)-1;
    while($i< $max ) {

        if($c[$i+2]==0){
            $movimientos++;
            $i=$i+2;
        }else if($c[$i+1]==0){
            $movimientos++;
            $i=$i+1;
        }
    }
    return $movimientos;

}
echo solution($c);

//array_walk($c,'intval');