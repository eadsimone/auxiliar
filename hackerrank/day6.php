<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 05/04/16
 * Time: 12:39
 */
/*
 * Task
Suppose you have a String, S, of length N that is indexed from 0 to N−1. You also have some String, R, that is the reverse of String S.
S is funny if the condition |S[i]−S[i−1]|=|R[i]−R[i−1]|is true for every character i from 1 to N−1.

Note: For some String S, S[i] denotes the ASCII value of the ith 0-indexed character in S. The absolute value of an integer, x, is written as |x|.

Input Format

The first line contains an integer, T (the number of test cases).
Each line i of the T subsequent lines contain a String, S.

Constraints

1≤T≤10
2≤ length of S≤10000
Output Format

For each String Sj (where 0≤j≤T−1), print whether it is Funny or Not Funny on a new line.

Sample Input

2
acxz
bcxz
Sample Output

Funny
Not Funny
Explanation

Test Case 0: S="acxz"
|c−a|=2=|x−z|
|x−c|=21=|c−x|
|z−x|=2=|a−c|
As each comparison is equal, we print Funny.

Test Case 1: S="bcxz"S="bcxz"
|c−b|=1|c−b|=1, but |x−z|=2|x−z|=2
At this point, we stop evaluating S (as |c−b|≠|x−z||c−b|≠|x−z|) and print Not Funny.
 *
 */


$_fp = fopen("php://stdin", "r");
/* Enter your code here. Read input from STDIN. Print output to STDOUT */
$counter=0;
$ar =[];
while( $line = fgets( $_fp ) ) {
    $ar[$counter]=$line;
    //echo "line:".$line;
    //echo "array:".$ar[$i];
    $counter++;
}

$ar[0] = 2;
$ar[1] = "acxz";
$ar[2] = "bcxz";
//
////$st = $ar[1];
//$st = $ar[2];
//$S= $st;
//$R = strrev($S);

function funny($S,$R){

    for ($contador=1;$contador < strlen($S);$contador++){

        $restaS = ord($S[$contador])-ord($S[$contador-1]);
        $restaR = ord($R[$contador])-ord($R[$contador-1]);

        if (abs($restaS) == abs($restaR) ){
            $result = "Funny";
        }else{
            $result= "Not Funny";
            $contador = strlen($S) +1;
        }
    }

    return $result;
}

for ($cta=1;$cta < count($ar);$cta++){

    $st = $ar[$cta];
    $S = trim($st, "\n");
    $R = strrev($S);

    echo funny($S,$R);
    echo "\n";
}

