<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 31/05/17
 * Time: 10:02
 */


$encriptedFilePath = "./encrypted.txt";
//$lines = file($myFile);

$encriptedFile = file($encriptedFilePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

$plainFilePath = "./plain.txt";
//$lines = file($myFile);

$plainFile = file($plainFilePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);


$max = sizeof($encriptedFile);
for($i = 0; $i < $max;$i++)
{
    $trimmed = trim($encriptedFile[$i]);
}
