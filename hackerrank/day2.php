<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 02/04/16
 * Time: 14:35
 */

$ar= [12.00, 20,8];

$mealC = number_format($ar[0], 2, '.', '');
$tipP = number_format($ar[1], 2, '.', '');
$taxP = number_format($ar[2], 2, '.', '');

$tip = $mealC * ($tipP/100);
$tax = $mealC * ($taxP/100);

$totalcost = round($mealC + $tip + $tax);

echo "The total meal cost is $totalcost dollars.";