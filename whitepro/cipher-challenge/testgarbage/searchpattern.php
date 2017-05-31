<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 31/05/17
 * Time: 10:02
 */


$myFile = "./encrypted.txt";
$lines = file($myFile);

$trimmed = file($myFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);


$handle = fopen("./encrypted.txt", "r");

$line = fgets($handle);

while ($userinfo = fscanf($handle, "%s\t%s\t%s\n")) {
    list ($name, $profession, $countrycode) = $userinfo;
    //list ($name, $profession, $countrycode) = $userinfo;
    echo $userinfo;

}
fclose($handle);