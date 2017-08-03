/**
 * Created by edesimone on 31/07/17.
 */

var color = 'red';
var speed =10;
var car = {color, speed};

console.log(car.color);
console.log(car.speed);

//-----------------------------

function go(){
    console.log('vroom');
}

var car = {color, speed,go};

car.go();

//------------------------


var car = {
    color,
    speed,
    go(){console.log('vroom');}
};


//with string concatenation

var drive  = 'go';

var car = {
    color,
    speed,
    // [drive] : function () {console.log('vroom');
    // }
    [drive] : ()=> {console.log('vroom');
}

};