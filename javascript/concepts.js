/**
 * Created by edesimone on 25/01/18.
 */
//
// // The call() method calls a function with a given this value and arguments provided individually.
// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }
//
// function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = 'food';
//     this.category = 'food';
// }
//
// console.log(new Food('cheese', 5).name);
// // expected output: "cheese"
//
// //Note: While the syntax of this function is almost identical to that of call(), the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.
//
// var numbers = [5, 6, 2, 3, 7];
//
// //var max = Math.max.apply(null, numbers);
//
// var max = Math.max.apply(this, numbers);
//
// console.log(max);
// // expected output: 7
//
// var min = Math.min.apply(null, numbers);
//
// console.log(min);
// // expected output: 2
//
//
// /*
//  * closure Closure
//  *
//  * A closure is the combination of a function and the lexical environment within which that function was declared.
//  * */
// function init() {
//     var name = 'Mozilla'; // name is a local variable created by init
//     function displayName() { // displayName() is the inner function, a closure
//         alert(name); // use variable declared in the parent function
//     }
//     displayName();
// }
// //init();
// /*---------------------*/
// function makeAdder(x) {
//     return function(y) {
//         return x + y;
//     };
// }
//
// var add5 = makeAdder(5);
// var add10 = makeAdder(10);
//
// console.log(add5(2));  // 7
// console.log(add10(2)); // 12


/*----------------------------------------------------------------------*/


// const arr = [10, 12, 15, 21];
// **********not works!!******
// for (var i = 0; i < arr.length; i++) {
//     setTimeout(function() {
//         console.log('Index: ' + i + ', element: ' + arr[i]);
//     }, 3000);
// }
//
//
// for (let i = 0; i < arr.length; i++) {
//     // using the ES6 let syntax, it creates a new binding
//     // every single time the function is called
//     // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
//     setTimeout(function() {
//        console.log('Index: ' + i + ', element: ' + arr[i]);
//     }, 3000);
// }
// for (var i = 0; i < arr.length; i++) {
//     // pass in the variable i so that each function
//     // has access to the correct index
//     setTimeout(function(i_local) {
//         return function() {
//             console.log('The index of this number is: ' + i_local);
//         }
//     }(i), 3000);
// }

/*********************************
 *Cleaner code in inner functions
 *********************************/
var list = document.getElementById('list');

for (let i = 1; i <= 5; i++) {
    var item = document.createElement('li');
    item.appendChild(document.createTextNode('Item ' + i));

    item.onclick = function(ev) {
        console.log('Item ' + i + ' is clicked.');
    };
    list.appendChild(item);
}
// to achieve the same effect with 'var'
// you have to create a different context
// using a closure to preserve the value
for (var i = 1; i <= 5; i++) {
    var item = document.createElement('li');
    item.appendChild(document.createTextNode('Item ' + i));

    (function(i){
        item.onclick = function(ev) {
            console.log('Item ' + i + ' is clicked.');
        };
    })(i);
    list.appendChild(item);
}

/*************************************************************************************************
 * Master the JavaScript Interview: What’s the Difference Between Class & Prototypal Inheritance? *
 **************************************************************************************************/
/*
 Class Inheritance: A class is like a blueprint — a description of the object to be created. Classes inherit from classes and create subclass relationships: hierarchical class taxonomies.
 “Classes inherit from classes and create subclass relationships: hierarchical class taxonomies.”

 In fact, class inheritance causes many well known problems in OO design:
 The tight coupling problem (class inheritance is the tightest coupling available in oo design), which leads to the next one…
 The fragile base class problem
 Inflexible hierarchy problem (eventually, all evolving hierarchies are wrong for new uses)

 Prototypal Inheritance: A prototype is a working object instance. Objects inherit directly from other objects.
 "A prototype is a working object instance. Objects inherit directly from other objects.”
 */

/*************************************************************************************************
 * What is a Pure Function? *
 **************************************************************************************************/
/*Pure Functions
 A pure function is a function which:

 Given the same input, will always return the same output.
 Produces no side effects.

 example
 Math.max(2, 8, 5); // 8

 Pure functions are completely independent of outside state, and as such, they are immune to entire classes of bugs that have to do with shared mutable state
 Pure functions are also extremely independent — easy to move around, refactor, and reorganize in your code, making your programs more flexible and adaptable to future changes.
 !! A function is only pure if, given the same input, it will always produce the same output.
 const highpass = (cutoff, value) => value >= cutoff;
 */

/*************************************************************************************************
 * What is Function Composition? *
 **************************************************************************************************/
/*
 Function composition is the process of combining two or more functions to produce a new function. Composing functions together is like snapping together a series of pipes for our data to flow through.
 */
const toSlug = input => encodeURIComponent(
    join('-')(
        map(toLowerCase)(
            split(' ')(
                input
            )
        )
    )
);

console.log(toSlug('JS Cheerleader')); // 'js-cheerleader'

/*************************************************************************************************
 * Curry or Partial Application? *
 **************************************************************************************************/
/*
 Partial Application:a function that takes a function with multiple parameters and returns a function with fewer parameters.

 Curry: A function that takes a function with multiple parameters as input and returns a function with exactly one parameter.
 Additionally, curried functions have a built-in iterator mechanism:
 A curried function will partially apply one argument at a time, never doing more work than it can do with a single argument

 */

/*************************************************************************************************
 * What is Functional Programming? *
 **************************************************************************************************/
/*
Functional programming (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects
 Functional programming is a programming paradigm, ther examples of programming paradigms include object oriented programming and procedural programming.
 Conclusion
 Functional programming favors:

 Pure functions instead of shared state & side effects
 Immutability over mutable data
 Function composition over imperative flow control
 Lots of generic, reusable utilities that use higher order functions to act on many data types instead of methods that only operate on their colocated data
 Declarative rather than imperative code (what to do, rather than how to do it)
 Expressions over statements
 Containers & higher order functions over ad-hoc polymorphism
/*

 /*************************************************************************************************
 * What is a Promise? *
 **************************************************************************************************/
/*
 A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred).
 A promise may be in one of 3 possible states: fulfilled, rejected, or pending.
 Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

 How Promises Work
 A promise is an object which can be returned synchronously from an asynchronous function. It will be in one of 3 possible states:

 Fulfilled: onFulfilled() will be called (e.g., resolve() was called)
 Rejected: onRejected() will be called (e.g., reject() was called)
 Pending: not yet fulfilled or rejected
 A promise is settled if it’s not pending (it has been resolved or rejected).

 Once settled, a promise can not be resettled. Calling resolve() or reject() again will have no effect.
 The immutability of a settled promise is an important feature.
 */
const wait = time => new Promise((resolve) => setTimeout(resolve, time));

wait(3000).then(() => console.log('Hello!')); // 'Hello!'