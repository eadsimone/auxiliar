<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 05/04/16
 * Time: 12:39
 */
/*
 * Task
Objective
Today, we're learning about the Array data structure. Check out the Tutorial tab for learning materials and an instructional video!

Task
Given an array, A, of N integers, print A's elements in reverse order as a single line of space-separated numbers.

Input Format

The first line contains an integer, N (the size of our array).
The second line contains N space-separated integers describing array A's elements.

Constraints

1≤N≤1000
1≤Ai≤10000, where Ai is the ith integer in the array.
Output Format

Print the elements of array A in reverse order as a single line of space-separated numbers.

Sample Input

4
1 4 3 2
Sample Output

2 3 4 1
 *
 */

$handle = fopen ("php://stdin","r");
fscanf($handle,"%d",$n);
$arr_temp = fgets($handle);

$arr_temp ="1 4 3 2";

$arr = explode(" ",$arr_temp);
array_walk($arr,'intval');


function p_reverse($ar){

    $result ="";
    $contador =count($ar)-1;
    for ($contador;$contador >=0;$contador--){

        $result.= $ar[$contador];
        $result.=" ";
    }
    return $result;
}

echo p_reverse($arr);