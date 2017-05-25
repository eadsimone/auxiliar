<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 14/03/17
 * Time: 20:38
 */
//$handle = fopen ("php://stdin","r");
$handle = fopen("./input2.txt", "r");
fscanf($handle,"%d",$n);

function printMinNumber ($n) {
    if ($n==2){
        return "min(int, int)";
    } if ($n <=50){
        return "min(int, ".printMinNumber($n-1).")";
    }
}

//$r = printMinNumber($n);
//echo $r;

/*for eadesimone*/
function findMinNumber ($n) {
    if ($n==2) {
        return "min(int, int)";
    }if ($n <=50){
        return "min(int, ".findMinNumber($n-1).")";
    }
}
echo  findMinNumber($n);