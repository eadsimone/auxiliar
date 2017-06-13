/**
 * Created by edesimone on 13/06/17.
 *
 *
 * sample input
 *
 *
 5
 5 4 3 2 1
 1 2 3 4 5
 */


process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function twinArrays(ar1, ar2,n){
    // Complete this function
    var contraintN = Math.pow(10, 5);
    if((n >= 2) && (n <= contraintN)){
        var arrayOfMinA = ar1.slice();
        var arrayOfMinB = ar2.slice();
        arrayOfMinA.sort(function(a, b) {
            return a - b;
        });
        arrayOfMinB.sort(function(a, b) {
            return a - b;
        });

        if (ar1.indexOf(arrayOfMinA[0]) === (ar2.indexOf(arrayOfMinB[0]))){
            if (arrayOfMinA[1] > arrayOfMinB[1]){
                return arrayOfMinB[1]+arrayOfMinA[0];
            } else {
                return arrayOfMinA[1]+arrayOfMinB[0];
            }
        } else {
            return arrayOfMinA[0] + arrayOfMinB[0];
        }
    }
}

function main() {
    var n = parseInt(readLine());
    ar1 = readLine().split(' ');
    ar1 = ar1.map(Number);
    ar2 = readLine().split(' ');
    ar2 = ar2.map(Number);

    var result = twinArrays(ar1, ar2,n);
    process.stdout.write("" + result + "\n");
}

var n = 4;
var ar1 = [1,5,3,4];
var ar2 = [1,6,8,2];

//case 1
// var n = 5;
// var ar1 = [5,4,3,2,1];
// var ar2 = [1,2,3,4,5];



var result = twinArrays(ar1, ar2,n);
process.stdout.write("" + result + "\n");
