/**
 * Created by edesimone on 28/07/17.
 *
 * The let keyword in ES6
 */


//step1
//
// var message = "hi";
// {
//
//     var message = "bye";
// }
//
// console.log(message);
//
// //step 2
// var message = "hi";
// function greet() {
//     var message = "bye";
// }

//console.log(message);

//step 3
//To help with this problem, we don't have LET in ES6, which will allow me to use block scoping.

let message = "hi";
{
    let message = "bye";
}

console.log(message);


var fs = [];
//es6 replace by
//for (let  i=0; i<10 ; i++){
for (var  i=0; i<10 ; i++){
    fs.push(() => console.log(i));
}

fs.forEach(function (f){
    f();
});