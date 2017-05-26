<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 08/04/16
 * Time: 19:55
 */

//$_fp = fopen("php://stdin", "r");
/* Enter your code here. Read input from STDIN. Print output to STDOUT */

$_fp = fopen("/home/edesimone/www/auxiliar/hackerrank/keyfile.txt", "r");
//$_fpen = fopen("/home/edesimone/www/auxiliar/hackerrank/keyfileen.txt", "r");//to english
$_fpen = fopen("/home/edesimone/www/auxiliar/hackerrank/keyfilech.txt", "r");//to chinese

$counter=0;
$ar =[];

//$line1 = fgets( $_fp );
while( $line = fgets( $_fp ) ) {

    $lineen = fgets( $_fpen );

    $keyvalor = trim($line, "\n");
    $keytranslate = trim($lineen, "\n");

    $pr= '<'.$keyvalor.' "'.$keytranslate.'">';
    echo $pr."\n";

    $counter++;
}