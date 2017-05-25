<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 17/05/17
 * Time: 22:57
 */

/*passed*/

$handle = fopen("./duplication.txt", "r");

//$handle = fopen ("php://stdin", "r");
function getTInitial($x, $long) {
    $result ='';
    for ($i=0; $i < $long; $i++) {
        if ($x[$i] == '0') {
            $result .= '1';
        } else {
            $result .= '0';
        }
    }
    return $result;
}

function getExtend($x){
    // Complete this function
    $len = strlen($x);
    if ($len <= 1000) {
        $tinitial = getTInitial($x, $len);
        $x .= $tinitial;
        return getExtend($x);
    } else {
        return $x;
    }
}

function duplication($x, $aExtended){
    $result =trim($aExtended[$x]);
    return $result;
}
$aExtended = getExtend('0');

fscanf($handle, "%d",$q);
for($a0 = 0; $a0 < $q; $a0++){
    fscanf($handle, "%d",$x);
    $result = duplication($x, $aExtended);
    echo $result . "\n";
}


