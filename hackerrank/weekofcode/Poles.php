<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 17/03/17
 * Time: 00:47
 *
 * Kevin was thinking about telephone poles and came up with an idea for a fun programming challenge.
 * There are  n telephone poles ascending a mountain and each pole has a weight and a unique altitude.
 * Our program must move the poles into k number of stacks, but we can only rearrange the poles according to certain criteria:
 *
 * Poles can only be moved from higher altitudes to lower altitudes.
 * Stacks can only be formed at the initial pole altitudes.
 * A stack can consist of at least one pole.
 * The image below shows how poles can be moved into  stacks at altitudes  and .
 *
 *
 * Moving the poles down the mountain also costs money.
 * Moving a pole with weight wi and altitude xi  to an altitude of xj  where ( xi > xj)  costs  wi x (xi - xj).
 *
 * The poles will always be listed from lowest to highest altitude.
 *
6 2
10 15
12 17
16 18
18 13
30 10
32 1
 *
 * Sample Output 1
 *
 * 216
 */

$handle = fopen("./poles.txt", "r");

//$handle = fopen ("php://stdin","r");
fscanf($handle,"%d %d",$n,$k);

$mountain = array();

class Pole {
    public $altura;
    public $peso;

    public function __construct($altura, $peso) {
        $this->$altura = $altura;
        $this->$peso = $peso;
    }
}

for($a0 = 0; $a0 < $n; $a0++){
    fscanf($handle,"%d %d",$x_i,$w_i);

    $pphone = new Pole($x_i,$w_i);
    array_push($mountain, $pphone);
}

function calcultaMinCost($apoles, $numberofpoles){

}