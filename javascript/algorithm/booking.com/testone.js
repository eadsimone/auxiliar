'use strict';
// const foo = () =>{
//     return 5;
// };
// let myvar = foo();
// console.log(myvar);
//
// /*
//  * Complete the function below.
//  */
// const jumpingfloor=[];
// function getLuckyFloorNumber(n) {
//     var str = n.toString();
//     var re = /(4|13)/i;
//     var found = str.match(re);
//     if (found === null){
//         //var toint=parseInt(str);
//         return n + jumpingfloor.length;
//     } else {
//         jumpingfloor.push(n);
//         var moved= jumpingfloor.length;
//         return getLuckyFloorNumber(n+moved);
//     }
// }
// console.log(getLuckyFloorNumber(1));
// console.log(getLuckyFloorNumber(4));
// console.log(getLuckyFloorNumber(11));
// console.log(getLuckyFloorNumber(12));
// console.log(getLuckyFloorNumber(113));

// function getLuckyFloorNumberBis(n) {
//     var jumpinfloornumber = 0,str ='', found='';
//     var re = /(4|13)/i;
//
//     for(let i=1; i<=n; i++){
//         str = i.toString();
//         found = str.match(re);
//         if (found !== null){
//             jumpinfloornumber++;
//         }
//     }
//     var solution =n + jumpinfloornumber;
//      str = solution.toString();
//      found = str.match(re);
//     if (found === null){
//         return solution;
//     }
//     return getLuckyFloorNumberBis(solution);
// }
//
// console.log(getLuckyFloorNumberBis(1));
// console.log(getLuckyFloorNumberBis(4));
// console.log(getLuckyFloorNumberBis(11));
// console.log(getLuckyFloorNumberBis(12));
// console.log(getLuckyFloorNumberBis(113));

// function packNumbers(arr) {
//     //arr.sort();
//     var solutionNumber =[],solutionCont=[];
//     var max = arr.length;
//     for (var i = 0; i < max; i++) {
//         var pos=  solutionNumber.indexOf(arr[i]);
//         if( pos === -1){
//             solutionNumber.push(arr[i]);
//             solutionCont.push(1);
//         } else {
//             solutionCont[pos]++;
//         }
//     }
//     console.log('ll');
// }
//
// packNumbers([5,5,5,7,7,3,4,7]);

// const info = {
//     name: 'Steve',
//     phone: 20655564,
//     email: 'SJ@yahoo.com',
//     sayName: function(){
//         console.log('Hello I am ' + info.name);
//     },
// };
//
// function invokeMethod(object, method) {
//     // method is a string that contains the name of a method on the object
//     // invoke this method
//     // nothing needs to be returned
//     const func = object[method]
//     //object.func();
//
//     //the describe above is similar to following function that reference to a function
//     //object.object[method];
//
//     // you can not add
//     //object.()=> {console.log('Can I add the function on this way?');};
//
//     // object.function(){
//     //     console.log('Can I add the function on this way?');
//     // };
//
//     object.agregado= func();
//     object.agregado();
// }
//
// invokeMethod(info, 'sayName');


function bigSorting(arr) {
    // Complete this function
    arr.sort(function(a, b) {
        return a - b;
    });
    //print number
    for(let i=0; i < arr.lenght; i++){
        console.log(arr[i]+'\n');
    }
}
