/**
 * Created by edesimone on 19/06/17.
 */

/*
public boolean isValid(String s) {
// Start typing your Java solution below
// DO NOT write main() function
    if(s == null || s.length() == 0)
        return true;

    /!*always be a par number *!/
    /!*if(s.length() % 2 == 1)
     return false;*!/

    Stack<Character> stack = new Stack<Character>();
    HashSet<Character> rightPars = new HashSet<Character>();
    rightPars.add(')');
    rightPars.add('}');
    rightPars.add(']');
    rightPars.add('>');

    HashSet<Character> leftPars = new HashSet<Character>();
    leftPars.add('(');
    leftPars.add('{');
    leftPars.add('[');
    rightPars.add('<');

    char arr[] = s.toCharArray();

    for(int i = 0; i < s.length(); i++){
        char c = arr[i];
        if(leftPars.contains(c)){
            stack.push(c);
        }else{
            if(rightPars.contains(c)) {
                if (stack.empty())
                    return false;
                char l = stack.pop();
                if (!getLeft(c,l))
                    return false;
            }
        }
    }

    if(stack.empty())
        return true;
    else
        return false;
}*/

// private boolean getLeft(char right, char left){
//     if ((right == ')' && left!= '(' ) ||
//         (right == '}' && left != '{') ||
//         (right == ']' && left != '[')||
//         (right == '>' && left != '<'))
//         return false;
//     return true;
// }

function getLeft(right, left) {
    if ((right == ')' && left != '(' ) ||
        (right == '}' && left != '{') ||
        (right == ']' && left != '[') ||
        (right == '>' && left != '<'))
        return false;
    return true;
}

Array.prototype.empty=function(){
    if (this.length <= 0) {
        return true;
    }
    else {
        return false;
    }
};

function isValid(s) {



    if(s == null || s.length == 0)
        return true;

    var stack = [];
    var rightPars = [];
    rightPars.push(')');
    rightPars.push('}');
    rightPars.push(']');
    rightPars.push('>');

    var leftPars = [];
    leftPars.push('(');
    leftPars.push('{');
    leftPars.push('[');
    leftPars.push('<');

    for(var i = 0; i < s.length; i++) {
        var c = s[i];
        if(leftPars.includes(c)){
            stack.push(c);
        } else{
            if(rightPars.includes(c)) {
                if (stack.empty())
                    return false;
                var l = stack.pop();
                if (!getLeft(c,l))
                    return false;
            }
        }
    }

    if (stack.empty()) {
        return true;
    }
    else {
        return false;
    }
}

//examples

var s='(';
s="{ezequiel[desimone}]";//no
//s="{[}]";//no
s="[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"; //yes
//s="{}[]()"; //yes
s="[{ezequiel[desim]one}]";//yes

console.log(isValid(s));