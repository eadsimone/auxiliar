/*
In javascript, which of the following snippets returns a ramdom number between 0 and 10 ?
*/
/*Math.rand()*10;
Math.random()*10;
random()*10;
Math.random(0,10); //BIEN!
rand(10);*/


/*---------------------------------------------------------------------------------------------------------------------------*/
/*
The following factorial function written by your colleague Fred is supposed to return the factorial of a number , but is broken.
    Fix the factorial function
As a reminder factorial(N) = 1 * 2* 3 *...*n
function factorial(n) {
    if(n=0){
    return 1;
    }else{
    return n * factorial(n);
    }
}
*/
function factorial(n) {
    if (n === 0) {
        return 1;
    }

    // This is it! Recursion!!
    return n * factorial(n - 1);
}

/*---------------------------------------------------------------------------------------------------------------------------*/
a(i, j) should return true if at least one of the arguments equals 1 or if their sum is equal to 1
Both given arguments will always be numbers
For example:
a(1,5) return true;
a(2,3) return false;
a(-3,4) return true;

const a = (i,j)=> {
    if ((i===1)|| (j===1) || (i+j===1)){
        return true;
    } else {
        return false;
    }
}
/*---------------------------------------------------------------------------------------------------------------------------*/
In css, what do the following values correspond to?
    margin 10px 20px 15 px -10px;

NOTE:/**
 *margin-top
 margin-right
 margin-bottom
 margin-left
 */
/

/*---------------------------------------------------------------------------------------------------------------------------*/
In js, how do you declare a variable with a value of 2 ?

    int Mynumber=2;
    Number mynumber =2;
    var myNumber = 2;
/*---------------------------------------------------------------------------------------------------------------------------*/
In html , which of the following suggestions corresponds to a valid nesting elements?
    <section> <div> <p> <span>
    <div> <section> <span> <p> //WRONG!!
    <div <p> <section> <span>
/*---------------------------------------------------------------------------------------------------------------------------*/
In HTML, what is the name of the element used to display a multiline text field?

    <textarea> Tag
The <textarea> tag defines a multi-line text input control.

/*---------------------------------------------------------------------------------------------------------------------------*/
In CSS, padding is used to set:

outer margins
inner alignments
inner margins //bien!!
outet alignemts

/*---------------------------------------------------------------------------------------------------------------------------*/
var a = "5";
var b = "5";
var sum = a+b;
What is the value of sum?
    "55" //BIEN!!
    10
    "a+b"
/*---------------------------------------------------------------------------------------------------------------------------*/
What does HTML stand for?

    HyperText markup languague
/*---------------------------------------------------------------------------------------------------------------------------*/
the following snippet:
var i=3;
function change(j){
    j=4;
}
change(i);
console.log(i);
will output to the console...

NaN
undefined
4
3//BIEN!!!
/*---------------------------------------------------------------------------------------------------------------------------*/
which of the following expresssions will evaluate to true?
    All correct answers are expected
4.0===4 //TRUE
"1"+2==3//FALSE
2==="2" //FALSE
"a"==='a'//TRUE
3=3 //UNCAUGHT
"1"==1 //TRUE
/*---------------------------------------------------------------------------------------------------------------------------*/
/*write the body of the hellopropierties(obj) function.
    this function takes an object obj such as this one:
{
    john:12,
    brian:true,
    doe: 'hi',
    fred:false
}
And returns an array containing all of its propierties, prefixed with "Hello-", like this:
['Hello-john','Hello-brian','Hello-doe','Hello-fred']
obj is always defined as javascript obj.
*/

function helloPropierties(obj){
    var arraySolution=[];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + " -> " + obj[key]);
            let itemarray = "Hello-"+key;
            arraySolution.push(itemarray);
        }
    }
    return arraySolution;
}
helloPropierties({john:12,
    brian:true,
    doe: 'hi',
    fred:false});
/*---------------------------------------------------------------------------------------------------------------------------*/

