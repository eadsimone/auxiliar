/**
 * Created by edesimone on 24/01/18.
 */


var a = ['one', 'two', 'three'];
//"A man, a plan, a canal, Panama!", "Was it a car or a cat I saw?"
var b = "A man, a plan, a canal, Panama!";

a.reverse();
//b.reverse();

console.log(a); // ['three', 'two', 'one']
console.log(b);

var arrayOfStrings = b.split("");

function palindrome(myString){

    /* remove special characters, spaces and make lowercase*/
    var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    /* reverse removeChar for comparison*/
    var checkPalindrome = removeChar.split('').reverse().join('');

    /* Check to see if myString is a Palindrome*/
    if(removeChar === checkPalindrome){

        document.write("<div>"+ myString + " is a Palindrome <div>");
    }else{

        document.write("<div>" + myString + " is not a Palindrome </div>");
    }
}
// palindrome('"Oh who was it I saw, oh who?"')
// palindrome('"Madam"')