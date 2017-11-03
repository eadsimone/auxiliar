// Q1:
//     Capitalizer
// Given a string str, convert the first character from lowercase to uppercase. Other characters should remain the same.
// ​
// Input
// The first line contains a single string str with lower and uppercase characters.
// ​
// Output
// Output str with the first character in the uppercase format. If str’s first character is already in the uppercase format, just output str.
// ​
// Constraints
// ​Str - single string str with lower and uppercase characters.
// ​
// Example
// Input/Output:
// ​	Input​	Output​
//  ​samsung  	​Samsung
//  ​zEaLOT	    ​ZEaLOT

/*function converFirstString (srt){
    var fchar=srt.substr(0,1).toUpperCase();
    var res = srt.substr(1);
    return fchar+res;
}

var texto = 'samsung';
console.log(converFirstString(texto));*/

// ejercicio 2
// Q2:
//     Vowels and Consonants
// Your program is supposed to delete all vowels from a given string, insert a dot (.)
// before each consonant and convert them to lower case.
// (A, O, Y, E, U, I are vowels, the other letters are consonants.)
// ​
// Input
// A single string.
// ​
// Output
// The resulting string.
// ​
// Constraints
// ​Letters of the English alphabet.
// ​
// Example
// Input/Output:
// ​	Input​	     ​Output
// 1 ​	​asdfghjkl  	​.s.d.f.g.h.j.k.l
// ​2	​consonant  	​.c.n.s.n.n.t



var str ='asdfghjkl';

//var newstr = str.replace(/[aeiou]/g, '.');

//str=str.split('');

/*var solution = str.split('').map(function(x) {

    var vowels = "aeiouAEIOU";
    var n = vowels.indexOf(x);
    if (n === -1){
        return x;
     }
        // else {
    //     return '';
    // }

});*/

/*var sol = solution.join('.');
console.log(sol);*/

/*function vowelsandconsonant(str) {
    var soution = '';
    var vowels = "aeiouAEIOU";

    for(var i=0;i< str.length; i++){

        var n = vowels.indexOf(str[i]);
        if (n === -1){
            soution = soution + '.' + str[i].toLowerCase();
        }
    }
    return soution;
}

console.log(vowelsandconsonant(str.trim().split('')));*/

//-----------------------------------------------------------------------------------
// Q1:
//     Dora Learning the Alphabet
// Dora is learning the English Alphabet. She writes down letters that she can remember in the following format: {a, b, c, d}.
// Unfortunately, Dora sometimes forgets that she already wrote down a letter and writes it again: {a, b, c, d, a}.
// Help Dora find out how many distinct letters she has written down.
// ​
// Input
// A set of letters.
// ​
// Output
// The number of distinct letters in the line.
// ​
// Constraints
// Input set of letters, each separated with a comma, and with curly braces at the beginning and at the end of the line..
// ​
// Example
// ​Input/Output:
// ​	Input​	​Output
// ​	​{a, b, c}	​3
//  ​{b, a, b, a}	​2

//
// function setOfLetter(arrayofletter){
//
//     arrayofletter = arrayofletter.replace(/[{()}]/g, '');
//
//     var resultDistintA = [];
//     var res = arrayofletter.split(",");
//
//     for (var i=0;i< res.length ; i++) {
//          if (resultDistintA.indexOf(res[i]) == -1){
//              resultDistintA.push(res[i]);
//          }
//     }
//     return resultDistintA.length;
// }
//
// var aletter = "{a,b,c}";
// var aletter = "{b,a,b,b,a}";
//
// console.log(setOfLetter(aletter));

//-------------------------------------------------------------------------------------------------
// Steve and a Prime Number
// Steve is learning prime numbers at school. A number is called prime if it has two different dividers: one and itself.
// Steve was given a homework to check if numbers n and m are prime or not, and if m follows n in a sequential list of prime numbers.
// ​
// Input
// A single line contains two numbers - n and m. It's guaranteed that n is a prime number.
// ​
// Output
// Output YES if number m turns out to be a prime number following number n in the list of prime numbers.
// ​
// Constraints:
//     2 ≤ n < m ≤ 50
// ​
// Example
// Input/Output:
// ​	​Input	​Output
//   ​	​3 5	​YES
//    ​7 11	​YES


function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

//given a prime number return next prime
function nextPrime(n) {
    var i= n +1;
    for (i; i <=50; i++){
        if( isPrime(i) ){
            return i;
            break;
        }
    }
    return 0;
}

function stevePrimeNumber(n, m) {

    if( (n % 2) == 1 && (m === nextPrime(n)) ){
        return "YES"
    } else {
        return "NO";
    }

}

console.log(stevePrimeNumber(3,5));
console.log(stevePrimeNumber(3,7));
console.log(stevePrimeNumber(7,11));