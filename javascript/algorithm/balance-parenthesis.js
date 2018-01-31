/**
 * Created by edesimone on 31/01/18.
 */
// https://github.com/robhitt/balance-parenthesis-js/blob/master/index.js

var tokens = [ ['{','}'] , ['[',']'] , ['(',')'] ];

// *** Check if character is an opening bracket ***
function isOpenParenthesis(parenthesisChar) {
    for (var j = 0; j < tokens.length; j++) {
        if (tokens[j][0] === parenthesisChar) {
            return true;
        }
    }
    return false;
}

// *** Check if opening bracket matches closing bracket ***
function matches(topOfStack, closedParenthesis) {
    for (var k = 0; k < tokens.length; k++) {
        if (tokens[k][0] === topOfStack && tokens[k][1] === closedParenthesis) {
            return true;
        }
    }
    return false;
}

// *** Checks if item is any sort of paranthesis ***
function isParanthesis(char) {
    var str = '{}[]()';
    if (str.indexOf(char) > -1) {
        return true;
    } else {
        return false;
    }
}

// *** Prints answer of the string to the HTML page  ***
function printToScreen(bool) {
    if (bool) {
        console.log("balanced");
    } else {
        console.log("NOT balanced");
    }
}

// *** We excute this function upon the event ***
function isBalanced(inputStr) {


    if (inputStr === null) { printToScreen(true); }

    var expression = inputStr.split('');
    var stack = [];

    for (var i = 0; i < expression.length; i++) {
        if (isParanthesis(expression[i])) {
            if (isOpenParenthesis(expression[i])) {
                stack.push(expression[i]);
            } else {
                if (stack.length === 0) {
                    return printToScreen(false);
                }
                var top = stack.pop(); // pop off the top element from stack
                if (!matches(top, expression[i])) {
                    return printToScreen(false);
                }
            }
        }
    }

    var returnValue = stack.length === 0 ? printToScreen(true) : printToScreen(false);

}

isBalanced("as{asdf(}");//not balanced
isBalanced("as{asdf(})");//not balanced
isBalanced("as{asdf(asf)asdf}");// balanced