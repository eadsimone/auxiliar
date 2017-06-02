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


function getCode ($str) {

    $long = strlen($str);
    $acharspecial = array(
        " " => "S",
        "." => "X",
        "," => "Y",
        ";" => "Z",
        "[" => "L",
        "]" => "R",
        "-" => "M",
        "#" => "H",
        "*" => "A",
        "!" => "E",
        ":" => "D",
        "?" => "Q",
        "'" => "C",
    );

    $cont=0;
    $result="";

    for($i = 0; $i < $long; $i++) {
        if (array_key_exists($str[$i], $acharspecial)) {
            $result.= $cont;
            $result.= $acharspecial[$str[$i]];
            $cont=0;
        } else {
            $cont++;
        }
    }
    if ( $result === "") {
        $result=$cont;
    } else if ( $cont !== 0) {
        $result.=$cont;
    }
    return $result;

}

ini_set('max_execution_time', 300);

$max = sizeof($encriptedFile);
$maxPlainFile = sizeof($plainFile);


$maxPlainFile = 10000;

for($i = 0; $i < $max; $i++)
{
    $trimmed = trim($encriptedFile[$i]);
    $lineOfEncript = (string) getCode($trimmed);
    //$lineOfEncript = getCode($trimmed);

    for($j = 0; $j < $maxPlainFile; $j++)
    {
        $trimmedPlain = trim($plainFile[$j]);
        $lineOfPlain = (string) getCode($trimmedPlain);
        //$lineOfPlain = getCode($trimmedPlain);

        If ($lineOfEncript === $lineOfPlain) {
            echo "posible valor para crear table <br>";
            echo "line: ".$i."-->".$encriptedFile[$i]."=== line: ".$j."-->".$plainFile[$j];
            echo "<br>--------------<br>";
        }
    }
}
