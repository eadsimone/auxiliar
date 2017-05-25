<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 06/05/17
 * Time: 21:41
 *
 * A country has  cities numbered from  to  and  bidirectional bus routes for traveling between cities. A pair of cities may be connected by multiple bus routes, and one or more bus routes may connect a city to itself.

For example, the diagram below has  cities and  bus routes given by the pairs , , , , , , :

image

In the graph above, city  has no bus routes; city  is only connected to itself; cities , , , and  are connected to each other; and cities  and  are connected to each other.

Jason wants to fly into one of the country's cities and then travel to as many connected cities as possible via the bus system. Given a map of the country, can you find the maximum number of connected cities Jason can visit?

Input Format

The first line contains two space-separated integers describing the respective values of n and m.
Each line  of the  subsequent lines contains two space-separated integers,  and , describing a bus route connecting cities  and .

Constraints

Output Format

Print an integer denoting the maximum number of cities Jason can visit.

Sample Input 0

8 5
1 2
7 4
7 3
5 8
1 3
Sample Output 0

5
Explanation 0

The diagram below depicts a map of n=8 cities and m=5  bus routes:

image

Jason has the following options:

Start from city  and only visit that  city.
Start from city  or city  and visit a total of  cities (i.e., cities  and ).
Start from any city in  and visit a total of  cities (i.e., all the connected cities in that set).
Because we want the maximum number of cities he can visit, we print  as our answer.
 */

//$handle = fopen ("php://stdin", "r");
$handle = fopen("./cities2.txt", "r");
fscanf($handle, "%d %d", $n, $m);
$route = array();
for($route_i = 0; $route_i < $m; $route_i++) {
    $route_temp = fgets($handle);
    $route[] = explode(" ",$route_temp);
    $route[$route_i] = array_map('intval', $route[$route_i]);
}
// Write Your Code Here

function searchAdy($city, $buses, $routes, &$visitados) {


    $max = sizeof($routes);
    for ($bus=0; $bus < $max ; $bus++){
        $arbuse = $routes[$bus];
        $keyofcity = array_search($city, $arbuse); // $key = 2;

        if ($keyofcity === 0) {
            $adyacente = $arbuse[1];
        } else if ($keyofcity == 1) {
            $adyacente = $arbuse[0];
        } else {
            $adyacente =false;
        }

        if($adyacente!==false) {
            if (!in_array($adyacente, $visitados )) {
                // array_push($visitados, $adyacente);
                $visitados[] = $adyacente;
                searchAdy($adyacente, $buses, $routes, $visitados);
            }
        }
    }
    return $visitados;
}

function maximunT ($maxcities, $buses,  $route) {
    $maxcitiesconnected = -1;
    $visitadosresult = array();

    for ($city=1; $city <=$maxcities ; $city++){
        if (!in_array($city, $visitadosresult )) {
            $visitados = array();
            $visitados [] = $city;
            $visitadosresult = searchAdy($city, $buses, $route, $visitados);
            $numbercitiesconnected = count($visitadosresult);


            if( $maxcitiesconnected < $numbercitiesconnected){
                $maxcitiesconnected = $numbercitiesconnected;
                echo $maxcitiesconnected;
                //echo "<br>";
            }
        }
    }
}
//n=8 cities and m=5  bus routes:
maximunT($n,$m,$route);