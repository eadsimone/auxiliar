<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 03/04/16
 * Time: 15:30
 */

/*Given an integer, nn, perform the following conditional actions:

If n is odd, print Weird.
If n is even and in the inclusive range of 2 to 5, print Not Weird.
If n is even and in the inclusive range of 6 to 20, print Weird.
If n is even and greater than 20, print Not Weird.
 *
 *
 */
$counter=0;
while( $line = fgets( $_fp ) ) {
    $ar[$counter]=$line;
    //echo "line:".$line;
    //echo "array:".$ar[$i];
    $counter++;
}

$valor = $ar[0];
//$valor = 3;

$OddNumbers ='/^\d*[13579]$/';
$EvenNumbers = '/^\d*[02468]$/';


if ((1 <= $valor) && ($valor <= 100)) {

    If (preg_match($OddNumbers, $valor, $matches, PREG_OFFSET_CAPTURE)) {

        echo "Weird";

    } elseif (preg_match($EvenNumbers, $valor, $matches, PREG_OFFSET_CAPTURE)) {

        if ((2 <= $valor) && ($valor <= 5)) {
            echo "Not Weird";
        } elseif ((6 <= $valor) && ($valor <= 20)) {

            echo "Weird";
        } elseif ((20 < $valor)) {
            echo "Not Weird";
        }
    }
}