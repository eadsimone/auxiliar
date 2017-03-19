<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 13/03/17
 * Time: 23:44
 *
 * For example if n= 8, candy total en bowl
 * t=3 tiempo de la fiesta
 * c=[5,2,4] c candy que saca
 *
 * Constraints
 *
 * 5<= n <= 100
 * 1 <= t <= 100
 * 1 <= ci <= n
 * ci <= bi(start), where bi(start) si the number of candies in thebowl at the start of minute i
 *
 * The first line contains two space-separated integers describing the respective values of n and t.
 * The second line contains space-separated integers describing the respective values of  C0,C1,...Ct
 *
 */
$handle = fopen("./input.txt", "r");
fscanf($handle,"%d %d",$n,$t);
$c_temp = fgets($handle);
$c = explode(" ",$c_temp);
array_walk($c,'intval');

//$resultado = TotalCandiesAdded($n, $t,$c);
//echo $resultado;

$result = TotalCandiesAddedByRobot($c, $n, $t);
echo $result;
/*
 * n total of bowl
 * t time of the party
 * $c array of sacadas
 * */
function TotalCandiesAdded($n, $t,$candyOut ){
    $totalCandiesBowl = $n;
    $totalAdding=0;
    //$qtyOfCandyT =  $n;
    //$max = sizeof($candyOut);//max should = $t

    if ((( $n >= 5 ) || ( $n <= 100 )) && (( $t >= 1 ) || ( $t <= 100 ))) {

        for($i = 0; $i < $t; $i++)
        {
            if (( $candyOut[$i] >= 1 ) || ( $candyOut[$i] <= $n )) {
                if ($totalCandiesBowl-$candyOut[$i] < 5) {
                    //agrego $n - ($totalCandiesBowl-$candyOut[$i])
                    if (($i+1)!=$t){
                    $addinByRobot= $n-($totalCandiesBowl-$candyOut[$i]);
                    $totalAdding = $totalAdding + $addinByRobot;
                    $totalCandiesBowl = $n;
                    }
                } else {
                    $totalCandiesBowl = $totalCandiesBowl-$candyOut[$i];
                }
            }
        }
    }
    return $totalAdding;
}
/*en la cuenta ezequiel de simone eadesimone@gmail.com*/

/*
 * n total of bowl
 * t time of the party
 * $c array of sacadas
 * */

function TotalCandiesAddedByRobot($aCandiesOut, $n, $t){
    $totalCandiesKeepInBowl = $n;
    $resultAdding=0;
    if ((( $n >= 5 ) || ( $n <= 100 )) && (( $t >= 1 ) || ( $t <= 100 ))) {
        for($i = 0; $i < $t; $i++)
        {
            if (( $aCandiesOut[$i] >= 1 ) || ( $aCandiesOut[$i] <= $n )) {
                if ($totalCandiesKeepInBowl-$aCandiesOut[$i] < 5) {
                    if (($i+1)!=$t){
                        $addinByRobot= $n-($totalCandiesKeepInBowl-$aCandiesOut[$i]);
                        $resultAdding += $addinByRobot;
                        $totalCandiesKeepInBowl = $n;
                    }
                } else {
                    $totalCandiesKeepInBowl = $totalCandiesKeepInBowl-$aCandiesOut[$i];
                }
            }
        }
    }
    return $resultAdding;
}
$result = TotalCandiesAddedByRobot($c, $n, $t);
echo $result;
