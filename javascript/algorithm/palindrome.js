"use strict";
/**
 * Created by edesimone on 24/01/18.
 */

function palindrome1(myString){

    /* remove special characters, spaces and make lowercase*/
    var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    /* reverse removeChar for comparison*/
    var checkPalindrome = removeChar.split('').reverse().join('');

    /* Check to see if myString is a Palindrome*/
    if(removeChar === checkPalindrome){

        console.log("it is a palindrome");
    }else{
        console.log("it is NOT a palindrome");
    }
}

const palindrome = (mystring) => {
    var removeChar = mystring.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    //mystring = removeChar.split('').join('');
    var count = Math.floor(removeChar.length / 2);
    var solution = false;
    var begin= 0, end = (removeChar.length)-1;
    for (let i=0; i < count ; i++,end--){
        //even
        if (end !== count ){
         if (removeChar[i] !== removeChar[end]) {
             console.log("es falso");
             return false;
         }
        }
        // if( (count % 2)===0 ) {
        //
        // }else{}
    }
    console.log("es true");
    return true;
};

palindrome1('"Oh who was it I O saw, oh who?"')
palindrome1('"Madam"');
palindrome1('"2,3,4,2"');

palindrome('"Oh who was it I O saw, oh who?"')
palindrome('"Madam"');
palindrome('"2,3,4,2"');