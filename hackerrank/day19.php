<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 19/04/16
 * Time: 10:44
 */
/*
Objective
Today, we're learning about Interfaces. Check out the Tutorial tab for learning materials and an instructional video!

Task
The Advanced interface and the method declaration for the abstract int divisorSum(int n) method are provided for you in the editor below.
Write the Calculator class, which implements the Advanced interface.
The implementation for the divisorSum method must take an integer, n, as input, and return the sum of all its divisors.

Note: Do not use an access modifier (e.g.: public) in your class declaration, or your code will not compile.

Input Format

A single line containing an integer, n.

Constraints

1≤n≤1000
Output Format

You are not responsible for printing anything to stdout.
The locked Solution class in the editor below will call your code and print the necessary output.

Sample Input

6
Sample Output

I implemented: AdvancedArithmetic
12
Explanation

The integer 6 is evenly divisible by 1, 2, 3, and 6.
Our divisorSum method should return the sum of these numbers, which is 1+2+3+6=12.
The Solution class then prints
I implemented: Advanced on the first line, followed by the sum returned by divisorSum (which is 12) on the second line.

*/


interface AdvancedArithmetic{
    public function divisorSum($n);
}

class Calculator implements AdvancedArithmetic{

    public function divisorSum($x)
    {
        $resultfinal=0;
        for($i = 1; $i < $x; $i ++) {
            if ($x % $i == 0) {
                $resultfinal += $i;
            }
        }
        return $resultfinal;
    }

}



//$n=intval(fgets(STDIN));
$n=6;
$myCalculator=new Calculator();
if($myCalculator instanceof AdvancedArithmetic)//checking if Calculator has implemented AdvancedArithemtic
{
    $sum=$myCalculator->divisorSum($n);
    echo "I implemented: AdvancedArithmetic\n".$sum;
}
else
{
    echo "Wrong answer";// You will get this output if you dont implement
}
?>