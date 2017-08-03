/**
 * Created by edesimone on 31/07/17.
 */
// var obj = {
//     color : 'gris'
// }
//
// console.log(obj.color);
//
// //-------------------------
//
// var {color,position} = {
//     color : 'blue',
//     name : 'John',
//     state: "New York",
//     position: "forward",
// }
//
// console.log(color);
// console.log(position);

//-------------------------

// function generaObj(){
//     return {
//         color : 'blue',
//         name : 'John',
//         state: "New York",
//         position: "forward",
//     }
// }
//
// var {name, state} =generaObj();
//
// console.log(name);
// console.log(state);

//-------------------------

// function generaObj(){
//     return {
//         color : 'blue',
//         name : 'John',
//         state: "New York",
//         position: "forward",
//     }
// }
//
// var {name: firstName, state: location} =generaObj();
//
// console.log(firstName);
// console.log(location);

//-------------------------
var [first,,,,fifth]= ["red","yellow","green","blue","orange"];

console.log(first);
console.log(fifth);