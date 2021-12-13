/**
 * Created by edesimone on 31/03/16.
 */

/*
function foo() {
    console.log(this);
}
// normal function call
foo(); // `this` will refer to `window`

//In this case, the value of this is not set by the call. Since the code is not in strict mode, the value of this must always be an object so it defaults to the global object.

*/
//When I try to pass this to a function it throws an error.

/*
    function foo(this) {
        console.log(this);
    }
    foo(); //Uncaught SyntaxError: Unexpected token this(…) on chrome console.

//In this case, define a foo function with parameters and then call this without any value.
//Inside the function, the value of this is not set by the call. Since the code is not in strict mode, the value of this must always be an object so it defaults to the global object.

//When I try to pass a variable that points to window I get undefined.

    var that = this;
    function foo(that){
        console.log(that); //<-here is semicolon ';'
    }
    foo();  // undefined chrome console.
*/

 // If you understand  two cases descripted above may understand what happens here. For more information visit
 //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
