<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 22/05/17
 * Time: 11:29
 */

$handle = fopen ("php://stdin", "r");
function propertyOfString($s){
    // Complete this function
}

fscanf($handle, "%d",$n);
fscanf($handle, "%s",$s);
$result = propertyOfString($s);
echo implode("\n", $result)."\n";
