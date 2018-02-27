// var highestInteger = function (a){
//     var solution=-1;
//     var max = (a.length >= 1) ? Math.max(...a) : null;//validate array is not null
//     if(max !==null) {
//         for (var i=0; i <= a.length; i++){
//             if ((solution <= a[i]) && (a[i] < max) ) {
//                 solution = a[i];
//             }
//         }
//     }
//
//     return solution;
//
// }
//
// var ar= [1,2,3,4];
//
// console.log(highestInteger(ar));

var fizzBuzzBoom = function (limit) {
    var resultArray = [];
    var ramdomArray = ['Fizz','Buzz','FizzBuzz','Boom','fizzBuzzBoom'];
    for (var i=0; i < limit; i++){

        var randomNumber = Math.floor(Math.random() * limit);
        var randomNumberSelect = Math.floor(Math.random() * ramdomArray.length);
        if(i === randomNumber){
            resultArray.push(ramdomArray[randomNumberSelect]);
        } else {
            resultArray.push((i).toString());
        }
    }
    return resultArray;
}
console.log(fizzBuzzBoom(5));