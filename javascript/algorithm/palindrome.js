/**
 * Created by edesimone on 24/01/18.
 */

function palindrome(myString){

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
 palindrome('"Oh who was it I O saw, oh who?"')
 palindrome('"Madam"');
palindrome('"2,3,4,2"');