<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 08/04/16
 * Time: 19:55
 */

/*
 Objective
Today, we're getting started with Exceptions by learning how to parse an integer from a string and print a custom error message. Check out the Tutorial tab for learning materials and an instructional video!

Task
Read a string, S, and print its integer value; if S cannot be converted to an integer, print Bad String.

Note: You must use the String-to-Integer and exception handling constructs built into your submission language. If you attempt to use loops/conditional statements, you will get a 0 score.

Input Format

A single string, SS.

Constraints

1≤|S|≤6, where |S| is the length of string S.
SS is composed of either lowercase letters (a−z) or decimal digits (0−9).
Output Format

Print the parsed integer value of SS, or Bad StringBad String if SS cannot be converted to an integer.

Sample Input 0

3
Sample Output 0

3
Sample Input 1

za
Sample Output 1

Bad String
Explanation

Sample Case 0 contains an integer, so it should not raise an exception when we attempt to convert it to an integer. Thus, we print the 33
Sample Case 1 does not contain any integers, so an attempt ot convert it to an integer will raise an exception. Thus, our exception handler prints Bad StringBad String.
 *
 */


//$handle = fopen ("php://stdin","r");
$handle = fopen("/home/edesimone/www/auxiliar/hackerrank/day16/input01.txt", "r");

fscanf($handle,"%s",$S);

/*function checkNum($x) {

    if (!intval($x)) {
        throw new Exception('Bad String');
    }
    echo $x;
}

try {
    checkNum($S);
} catch (Exception $e) {
    echo   $e->getMessage();
}*/


/* sin usar condicinoal */
function createCar($n)
{
    try {
        echo intval($n);
    } catch (Exception $e) {
        echo "Bad String";
        //die("Bad String");
    }
}

createCar($S);



