package WeekofCode23NotSolved;

/**
 * Created by edesimone on 20/09/16.
 *
 *
 * CubeCraft is a game consisting entirely of cubes (or voxels) having a side length equal to , and each voxel's vertices have integer coordinates. After playing this game for a while, Jessie is eager to create something impressive so she decides to build a lighthouse.

 First, Jessie decides she wants the lighthouse to have a round base; because there is no such thing as a perfect circle in a cubic world, she defines a circle with integer radius  to be the set of all cubes having centers with a Euclidean distance to the center of the circle (which coincides with the center of some cube) . Because  is the Euclidean distance between the center points of two cubes, the value of  for a single cube is .

 Next, she chooses an  grid for the base of the lighthouse. This presents some difficulty for Jessie because there are landscape features (e.g., rocks, trees, etc.) in the grid. She doesn't want to change the landscape and cannot build over it, so she must find the maximum radius of any circle she can place inside the grid's free space (i.e., where no landscape obstructions are contained within the confines of the circle). Note that circle have to be placed completely inside the grid, i.e. there should be no points with euclidean distance to the center  outside the grid.

 Given  and the landscape features of Jessie's grid, find and print the maximum possible value of .

 Input Format

 The first line contains an integer, , denoting the side dimensions of the grid where Jessie wants to build the lighthouse.
 Each line  of the  subsequent lines contains a string of  characters describing the landscape features of row  in the grid. A . indicates that  is empty, and a * indicates that it's obstructed.

 Constraints

 It is guaranteed that the grid contains at least one empty cell (i.e., input will always contain at least one . character).
 Output Format

 Print the value of  denoting the maximum integer radius of the circle Jessie can place inside the grid's free space (recall that  may be ).

 Sample Input 0

 9
 *********
 ****.****
 **.....**
 **.....**
 *.......*
 **.....**
 **.....**
 ****.****
 *********
 Sample Output 0

 3
 Explanation 0
 Build a lighthouse with radius  at the center of the grid. Note that it will fill ALL free cells.

 Sample Input 1

 5
 .*.*.
 *...*
 .....
 *...*
 .*.*.
 Sample Output 1

 2
 Explanation 1
 Build a lighthouse with radius  at the center of the grid.

 Sample Input 2

 5
 ***.*
 **..*
 ***.*
 *****
 *****
 Sample Output 2

 0
 Explanation 2
 Jessie can place a lighthouse with radius  (which is exactly one cube) at any free cell.
 */
public class Lighthouse {
}
