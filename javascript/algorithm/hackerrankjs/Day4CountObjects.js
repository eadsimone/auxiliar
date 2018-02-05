/**
 * Created by edesimone on 31/01/18.
 */
/*Task

Complete the function in the editor. It has one parameter: an array,a, of objects. Each object in the array has two integer properties denoted by x and y .
The function must return a count of all such objects o in array a that satisfy o.x === o.y.

Input Format

The first line contains an integer denoting n.
Each of the n subsequent lines contains two space-separated integers describing the values of x and y*/.

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    var total=0;
    for (let key in objects) {
        let o = objects[key];
        total+= (o.x === o.y ) ? 1 :0;
    }
    return total;
}