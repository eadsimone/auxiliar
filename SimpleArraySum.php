<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 28/03/16
 * Time: 16:19
 *
 *
     * You are given an array of integers of size NN. Can you find the sum of the elements in the array?

    Input
    The first line of input consists of an integer NN. The next line contains NN space-separated integers representing the array elements.
    Sample:

    6
    1 2 3 4 10 11
    Output
    Output a single value equal to the sum of the elements in the array.
    For the sample above you would just print 3131 since 1+2+3+4+10+11=311+2+3+4+10+11=31.
 *
 */

$arr_temp = "1 2 3 4 10 11";
$arr = explode(" ",$arr_temp);


function suminteger($item2, $key, &$vsum)
{
    echo "$key. $item2<br />\n";

    global $avsum;
    $vsum = $vsum+$item2;

    $avsum = $vsum;
}
$avsum='';
array_walk($arr,'suminteger',0);
print_r($avsum);

