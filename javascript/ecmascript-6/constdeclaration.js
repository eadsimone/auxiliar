/**
 * Created by edesimone on 31/07/17.
 */
//ECMAScript 2015 introduces us to constant declaration, a const declaration allows us to declare a variable that is read only

// var VALUE= 'Hello world';
// VALUE= 'foo bar';
// console.log('value: ', VALUE);
//
// //----------------------------------------
// const VALUE= {};
//
// VALUE.foo= 'bar';
// console.log('value: ', VALUE);


//----------------------------------------
const VALUE = {};

VALUE = 'bar';// error!!!
console.log('value: ', VALUE);


//common uses
//Perhaps you're using a third-party API, where you want to specify an API key, an API secret that will remain constant throughout the use of your application.
const API_KEY = 'xxxxxxx';

const port = 8080;
const PI = 3.1416;
