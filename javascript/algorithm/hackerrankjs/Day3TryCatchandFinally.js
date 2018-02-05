/**
 * Created by edesimone on 30/01/18.
 */

var array1 = ['one', 'two', 'three'];
var reversed = array1.reverse();

function reverseString(s) {

    try {
        var arrayOfStrings = s.split("");
        console.log(arrayOfStrings.reverse().join(""));

    }
    catch (e) {
        console.log(e.message);
        console.log(s);
    }
}

function main() {
    //const s = eval(readLine());
    var ss =Number(1234);
    // var ss =[1,2,3];
    // var ss ="1234";
    reverseString(ss);
}
main();
