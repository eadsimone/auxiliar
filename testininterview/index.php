<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 28/06/18
 * Time: 15:48
 */

function add($param1, $param2) {
    if ( (-1000 <= $param1) &&( $param1<= 1000) && (-1000 <= $param2) && ($param2 <= 1000))
        return ($param1 + $param1);
}
add(1, 2);