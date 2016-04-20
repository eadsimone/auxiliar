<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 08/04/16
 * Time: 19:55
 */

/*
 * Objective
Objective
Today, we're working with binary numbers. Check out the Tutorial tab for learning materials and an instructional video!

Task
Given a base-1010 integer, nn, convert it to binary (base-22). Then find and print the base-1010 integer denoting the maximum number of consecutive 11's in nn's binary representation.

Input Format

A single integer, nn.

Constraints

1≤n≤10^6
10^6 =1000000
Output Format

Print a single base-1010 integer denoting the maximum number of consecutive 11's in the binary representation of nn.

Sample Input 1

5
Sample Output 1

1
Sample Input 2

13
Sample Output 2

2
Explanation

Sample Case 1:
The binary representation of 55 is 101101, so the maximum number of consecutive 11's is 11.

Sample Case 2:
The binary representation of 1313 is 11011101, so the maximum number of consecutive 11's is 22.
 *
 */

//$_fp = fopen("php://stdin", "r");
/* Enter your code here. Read input from STDIN. Print output to STDOUT */

$handle = fopen("/home/edesimone/www/auxiliar/hackerrank/input.txt", "r");

//$handle = fopen ("php://stdin","r");
fscanf($handle,"%d",$n);



function countunos($binario){
    $contador=0;
    $continuo=false;
    $result =0 ;

    for($i=0;$i<strlen($binario);$i++){

        if($binario[$i]==1){
            $contador++;
        }else{
            $contador=0;
        }
        if ($result < $contador){
            $result = $contador;
        }

    }

    return $result;
}
//me dio error con 524275
if ((1<=$n) && ($n<=1000000)){
    echo countunos(decbin($n));
}
