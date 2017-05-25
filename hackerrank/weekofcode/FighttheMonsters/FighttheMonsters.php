<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 19/05/17
 * Time: 10:24
 */


/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 14/03/17
 * Time: 20:38
 */
//$handle = fopen ("php://stdin","r");
$handle = fopen("./findthemonster.txt", "r");


//$handle = fopen ("php://stdin", "r");
function getMaxMonsters($n, $hit, $t, $h){
    // Complete this function
    sort($h);
    $j=0;
    $cantMuerto=0;

    for($i=0; $i < $t; $i++) {
        //puede ser que no haya mas mostros para matar
        $muerto = $h[$j]-$hit;
       if ($muerto <= 0) {
           $j++;
           $cantMuerto++;
       } else {
           $h[$j]= $muerto;
       }
    }
    return $cantMuerto;
}

fscanf($handle, "%d %d %d", $n, $hit, $t);
$h_temp = fgets($handle);
$h = explode(" ",$h_temp);
$h = array_map('intval', $h);
$result = getMaxMonsters($n, $hit, $t, $h);
echo $result . "\n";