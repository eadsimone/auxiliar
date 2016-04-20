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
Today, we're building on our knowledge of Arrays by adding another dimension. Check out the Tutorial tab for learning materials and an instructional video!

Context
Given a 6×66×6 2D Array, AA:

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
We define an hourglass in AA to be a subset of values with indices falling in this pattern in AA's graphical representation:

a b c
  d
e f g
There are 1616 hourglasses in AA, and an hourglass sum is the sum of an hourglass' values.

Task
Calculate the hourglass sum for every hourglass in AA, then print the maximum hourglass sum.

Input Format

There are 6 lines of input, where each line contains 6 space-separated integers describing 2D Array A; every value in A will be in the inclusive range of −9 to 9.

Constraints

−9≤A[i][j]≤9
0≤i,j≤5
Output Format

Print the largest (maximum) hourglass sum found in A.

Sample Input

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
Sample Output

19
Explanation

AA contains the following hourglasses:

1 1 1   1 1 0   1 0 0   0 0 0
  1       0       0       0
1 1 1   1 1 0   1 0 0   0 0 0

0 1 0   1 0 0   0 0 0   0 0 0
  1       1       0       0
0 0 2   0 2 4   2 4 4   4 4 0

1 1 1   1 1 0   1 0 0   0 0 0
  0       2       4       4
0 0 0   0 0 2   0 2 0   2 0 0

0 0 2   0 2 4   2 4 4   4 4 0
  0       0       2       0
0 0 1   0 1 2   1 2 4   2 4 0
The hourglass with the maximum sum (1919) is:

2 4 4
  2
1 2 4
 *
 */

$handle = fopen("/home/edesimone/www/auxiliar/hackerrank/inputerrormatriz.txt", "r");

//$handle = fopen ("php://stdin","r");
$arr = array();
for($arr_i = 0; $arr_i < 6; $arr_i++) {
    $arr_temp = fgets($handle);
    $arr[] = explode(" ",$arr_temp);
    //array_walk($arr[$arr_i],'intval');
}

function getSum($fila,$columna,$arr){

    if( ($fila+2 <count($arr) ) && ($columna+2 < count($arr[$fila]) )){

        $sum=0;
        $sum = $sum + ($arr[$fila][$columna] + $arr[$fila][$columna+1] + $arr[$fila][$columna+2]);
        $sum = $sum + ($arr[$fila+1][$columna+1]);
        $sum = $sum + ($arr[$fila+2][$columna] + $arr[$fila+2][$columna+1] + $arr[$fila+2][$columna+2]);

        return $sum;
    }else{
        //echo "fuera de margen";
        return -9999;
    }
}

function recorre($arra){
    $resultfinal=-9999;

    for($f=0;$f<count($arra);$f++){
        for($c=0;$c<count($arra[$f]);$c++){
            $valor = getSum($f,$c,$arra);
          if($resultfinal<= $valor){
              $resultfinal = $valor;
          }
        }
    }
    echo $resultfinal;
}

recorre($arr);

//echo "<pre>";
//print_r($arr);
//echo count($arr);
//echo "</pre>";

