/*Task

Create a Polygon class that has the following properties:

    A constructor that takes an array of integer values describing the lengths of the polygon's sides.
A perimeter() method that returns the polygon's perimeter.
Locked code in the editor tests the Polygon constructor and the perimeter method.
    */

class Polygon {
    constructor(a) {
        this.pol = a.slice(0);
    }
    perimeter(){
        var result = 0;
        for (let i=0;i < this.pol.length; i++){
            result += this.pol[i];
        }
      return result;
    }
}

// let triangle = new Polygon([3, 4, 5]);
//
// // Print the perimeter
// console.log(triangle.perimeter());

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());