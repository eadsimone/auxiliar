<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 06/05/17
 * Time: 12:43
 *
 * Consider an  grid where the top-left coordinate is  and the bottom-right coordinate is . We define the contents of the grid as an array of  strings of length , where the index  of a string corresponds to a row in the grid and the index  of a character in a string corresponds to a column. Each string consists of the characters O and/or X, where an O denotes an empty cell and an X denotes a cell containing a bug.

For example, if , then the grid has a bug at location  and looks like this:

image

Given an array of strings defining a grid with  bug in it, print the bug's location in the format r,c (where  is the row and  is the column).

Input Format

The first line contains an integer denoting  (the length and width of the grid).
Each line  of the  subsequent lines contains a string of  characters describing row  in the grid.

Constraints

Output Format

Print the bug's location in the format r,c, where  is its row and  is its column.

Note: If using the code stubs in the editor, return an array of two integers where index  contains the value of and index  contains the value of .

Sample Input 0

5
OOOOO
OXOOO
OOOOO
OOOOO
OOOOO
Sample Output 0

1,1
Explanation 0

The diagram below depicts the array and grid:

image

The bug is located at the intersection of row  and column , so we print 1,1.
 */

$handle = fopen("./input2.txt", "r");
//fscanf($handle,"%d",$n);

//$handle = fopen ("php://stdin", "r");

function findTheBug($grid){
    // Complete this function
    $max = sizeof($grid);
    for($r=0;$r < $max; $r++ ) {
        for($c=0;$c < $max; $c++ ) {
            if( $grid[$r][$c] =='X') {
                echo "encontro row".$r." col ".$c;
                $array = array($r,$c);
                return $array;
            } else {
                echo " NO encontro row".$r." col ".$c;
                echo " <br> ";
            }
        }
    }
}

fscanf($handle, "%d",$n);
$grid = array();
for($grid_i = 0; $grid_i < $n; $grid_i++){
    fscanf($handle,"%s",$grid[]);
}
// Return an array containing [r, c]
$result = findTheBug($grid);
echo implode(",", $result)."\n";
