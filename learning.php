<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 01/04/16
 * Time: 13:50
 */


$stdin = fopen('php://stdin', 'r');


$f = fopen( 'php://stdin', 'r' );


$tt= fgets( $f );

print_r()
while( $line = fgets( $f ) ) {
    echo $line;
}

fclose( $f );

print_r($stdin);
?>