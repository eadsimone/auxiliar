<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 06/05/17
 * Time: 21:14
 *
 * Given two times,  and , in the 12-hour AM/PM format, we want to know which time occurs first during a day. For example, if  is 08:02PM and  is 06:51AM, then  occurs before .

Solve  queries where each query consists of some  and . For each query, print First if  occurs before ; otherwise, print Second.

Note: The day starts at 12:00AM (midnight) and ends at 11:59PM. The time 12:00PM denotes noon (midday).

Input Format

The first line contains an integer denoting  (the number of queries).
Each of the  subsequent lines contains two space-separated strings describing the respective values of  and .

Constraints

Output Format

For each query, print First if  occurs before ; otherwise, print Second.

Note: If using the given code stubs, complete the function so that it returns the appropriate string.

Sample Input 0

2
10:19PM 02:49AM
08:49AM 09:10AM
Sample Output 0

Second
First
Explanation 0

We perform the following  queries:

is 10:19PM and  is 02:49AM. Because AM always occurs before PM, we know that  occurs earlier and we print Second.
is 08:49AM and  is 09:10AM. Both times occur during the AM (first half of the day), so we compare their hours. Because , we know that  occurs earlier and we print First.
 */
$handle = fopen("./time.txt", "r");

//$handle = fopen ("php://stdin", "r");
function timeCompare($t1, $t2){
    // Complete this function
    //print First if t1  occurs before t2;
    //otherwise, print Second.;
    //10:19PM 02:49AM
    $start = strtotime($t1);
    $end = strtotime($t2);
    if($start-$end != 0) {
        if ($start-$end > 0)
            return "Second";

        else{
            return "First";

        }
    }


}

fscanf($handle, "%d",$q);
for($a0 = 0; $a0 < $q; $a0++){
    fscanf($handle, "%s %s", $t1, $t2);
    $result = timeCompare($t1, $t2);
    echo $result . "\n";
}
