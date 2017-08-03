/**
 * Created by edesimone on 31/07/17.
 */
var salutation = "Hello";
var greeting = salutation + "world";

console.log(greeting);
//-------------------new way

var salutation = "Hello";
var greeting = `${salutation},world`;

console.log(greeting);

// /------------------


var greeting = `you
    see crazy 
${salutation}

,world`;

console.log(greeting);

//-----------------------------
// function tag(strings, ...values) {
//     console.log(strings);
//     console.log(values);
//
// }
//
//
// var message = tag `Ìt's ${new Date().getHours()} I'm sleepy`;
//
// console.log(message);

//-----------------------------------------

function tag(strings, ...values) {
    if(values[0] < 20) {
        values[1] = 'awake';
    }
    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}


var message = tag `Ìt's ${new Date().getHours()} I'm ${""}`;

console.log(message);