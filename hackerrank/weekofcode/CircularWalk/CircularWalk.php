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
 *
 * R[i] = (R[i-1] x g + seed) mod p
 *
 */

$handle = fopen("./CircularWalk.txt", "r");

//$handle = fopen ("php://stdin", "r");
function circularWalk($n, $s, $t, $r_0, $g, $seed, $p){
    // Complete this function
}

fscanf($handle, "%d %d %d", $n, $s, $t);
fscanf($handle, "%d %d %d %d", $r_0, $g, $seed, $p);
$result = circularWalk($n, $s, $t, $r_0, $g, $seed, $p);
echo $result . "\n";