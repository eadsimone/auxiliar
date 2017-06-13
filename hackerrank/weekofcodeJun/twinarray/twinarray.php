<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 13/06/17
 * Time: 10:31
 */

$handle = fopen ("php://stdin", "r");
function twinArrays($ar1, $ar2){
    // Complete this function
    $max = sizeof($ar1);
    $contraintN = pow(10, 5);//pow(2, 8)
    if(($max >= 2) && ($max <= $contraintN)){
        $mina = pow(10, 5);
        $minb = pow(10, 5);
        for  ($i=0; $i < $max; $i++) {
            if ( ($ar1[$i] >= 1) && ($ar1[$i] <= $contraintN) && ($ar1[$i] < $mina)){
                $mina = $ar1[$i];
            }
            if (($ar1[$i] >= 1) && ($ar1[$i] <= $contraintN) && ($ar2[$i] < $minb)){
                $minb = $ar2[$i];
            }
        }
        $sum = $mina+$minb;
        return $sum;
    }
}

fscanf($handle, "%i",$n);
$ar1_temp = fgets($handle);
$ar1 = explode(" ",$ar1_temp);
$ar1 = array_map('intval', $ar1);
$ar2_temp = fgets($handle);
$ar2 = explode(" ",$ar2_temp);
$ar2 = array_map('intval', $ar2);
$result = twinArrays($ar1, $ar2);
echo $result . "\n";

?>
