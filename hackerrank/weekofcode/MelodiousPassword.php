<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 16/03/17
 * Time: 20:12
 */

//$handle = fopen ("php://stdin","r");
//fscanf($handle,"%d",$n);

//$handle = fopen("./input2.txt", "r");
//fscanf($handle,"%d",$n);


function isVocal($findme){
    $vocales = 'aeiou';
    $pos = strpos($vocales, $findme);

    if ($pos === false) {
        //echo "The string '$findme' was not found in the string '$mystring'";
        return false;
    } else {
        return true;
    }
}

function generatePassword($n, $pass, $i, $a)
{
    $max = sizeof($pass);
    if ($max == $n) {
        //imprimir
        $comma_separated = implode("", $pass);
        echo $comma_separated . "\n";
    } else {
        while ($i < sizeof($a)) {

            if(($n ==1) || ($max == 0) ){
                array_push($pass, $a[$i]);
                generatePassword($n, $pass, $i+1, $a);
                array_pop($pass);
            } else{

                if (isVocal($pass[$max-1])) {
                    if (!(isVocal($a[$i]))){
                        array_push($pass, $a[$i]);
                        generatePassword($n, $pass, $i+1, $a);
                        array_pop($pass);
                    }
                } else {
                    if (isVocal($a[$i])){
                        array_push($pass, $a[$i]);
                        generatePassword($n, $pass, $i+1, $a);
                        array_pop($pass);
                    }
                }
            }
            $i++;
        }
    }
}

$aConsonants = array('b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'z');//take out y
$aVowel = array('a','e','i','o','u');

$totalChars = array('b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'z','a','e','i','o','u');

$totalChars = array('w', 't', 'v', 'g', 'l', 'o', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'z','a','e','i','o','u');
$totalChars = array('w', 't','v','g','l','o','h','i','x','q','j','r','k','p','a','m','d','e','z','c','n','u','b','f','s');
//                   w    t   v   g   l   o   h   i   x   q   j   r   k   p   a   m   d   e   z   c   n   u   b   f   s

$t =0;
generatePassword(6,[],$t,$totalChars);



