<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 22/05/17
 * Time: 10:55
 */

$handle = fopen ("php://stdin", "r");
fscanf($handle,"%d %d",$n,$m);
$A_temp = fgets($handle);
$A = explode(" ",$A_temp);
$A = array_map('intval', $A);
$C_temp = fgets($handle);
$C = explode(" ",$C_temp);
$C = array_map('intval', $C);
$B = array();
for($B_i = 0; $B_i < $n; $B_i++) {
    $B_temp = fgets($handle);
    $B[] = explode(" ",$B_temp);
    $B[$B_i] = array_map('intval', $B[$B_i]);
}
// Write Your Code Here

?>