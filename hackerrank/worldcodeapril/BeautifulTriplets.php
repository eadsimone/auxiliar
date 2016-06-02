<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 29/04/16
 * Time: 17:07
 */
/*
 * Jumping on the Clouds
 *
 Erica wrote an increasing sequence of nn numbers (a0,a1,…,an−1a0,a1,…,an−1) in her notebook. She considers a triplet (ai,aj,ak)(ai,aj,ak) to be beautiful if:

i<j<ki<j<k
a[j]−a[i]=a[k]−a[j]=d
Given the sequence and the value of dd, can you help Erica count the number of beautiful triplets in the sequence?

Input Format

The first line contains 2 space-separated integers, n (the length of the sequence) and d (the beautiful difference), respectively.
The second line contains n space-separated integers describing Erica's increasing sequence, a0,a1,…,an−1a0,a1,…,an−1.

Constraints

1≤n≤104
1≤d≤20
0≤ai≤2×104
ai>ai−1 for 0<i≤n−1
Output Format

Print a single line denoting the number of beautiful triplets in the sequence.

Sample Input

7 3
1 2 4 5 7 8 10
Sample Output

3
Explanation

Our input sequence is 1,2,4,5,7,8,10, and our beautiful difference d=3. There are many possible triplets (ai,aj,ak)(ai,aj,ak),
but our only beautiful triplets are (1,4,7), (4,7,10) and (2,5,8). Please see the equations below:

7−4=4−1=3=d
10−7=7−4=3=d
8−5=5−2=3=d

Recall that a beautiful triplet satisfies the following equivalence relation: a[j]−a[i]=a[k]−a[j]=da[j]−a[i]=a[k]−a[j]=d where i<j<ki<j<k.


*/
$_fp = fopen("./input2.txt", "r");


//$_fp = fopen("php://stdin", "r");

$_fpp = fgets($_fp);
$arrayfline = explode(" ",$_fpp);


$c_temp = fgets($_fp);
$c = explode(" ",$c_temp);
$d = str_replace("\n","", $arrayfline[1]);

//1 2 4 5 7 8 10

function getSolucion ($c,$d,&$solution)
{

    for ($i = 0; $i < count($c); $i++) {

        for ($j = $i + 1; $j < count($c); $j++) {

            if ($c[$j] - $c[$i] == $d) {

                for ($k = $j; $k < count($c); $k++) {

                    if ($c[$k] - $c[$j] == $d) {
                        $solution++;
                        break;
                    }
                }
            }
        }
    }
    return $solution;
}


$solution=0;
echo getSolucion($c,$d,$solution);

/* en javascript paso todos los algoritmos*/
//function processData(input) {
//    //Enter your code here
//
//    var res = input.split("\n");
//
//    var c = res[0].split(" ");
//    var d = c[1];
//    var c = res[1].split(" ");
//
//    var solution=0;
//    //var trstr = res[1].replace(/\s+/g, '');
//    //var trstr2 = trstr.replace(/\r?\n|\r/g, '');
//
//
//    for (var i = 0; i < c.length; i++) {
//
//        for (var j = i + 1; j < c.length; j++) {
//
//            if (c[j] - c[i] == d) {
//
//                for (var k = j; k < c.length; k++) {
//
//                    if (c[k] - c[j] == d) {
//                        solution++;
//                    }
//                }
//            }
//        }
//    }
//    console.log(solution);
//
//}
//
//process.stdin.resume();
//process.stdin.setEncoding("ascii");
//_input = "";
//process.stdin.on("data", function (input) {
//    _input += input;
//});
//
//process.stdin.on("end", function () {
//    processData(_input);
//});


