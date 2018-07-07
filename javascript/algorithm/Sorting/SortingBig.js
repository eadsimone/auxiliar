/*
* Consider an array of numeric strings, , where each string is a positive number with anywhere from  to  digits. Sort the array's elements in non-decreasing (i.e., ascending) order of their real-world integer values and print each element of the sorted array on a new line.

Input Format

The first line contains an integer, , denoting the number of strings in .
Each of the  subsequent lines contains a string of integers describing an element of the array.

Constraints

Each string is guaranteed to represent a positive integer without leading zeros.
The total number of digits across all strings in  is between  and  (inclusive).
Output Format

Print each element of the sorted array on a new line.

Sample Input 0

6
31415926535897932384626433832795
1
3
10
3
5
Sample Output 0

1
3
3
5
10
31415926535897932384626433832795
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
var Mergesort = (function() {

    /**
     * Sorts the array by breaking it down
     * into smaller chunks.
     *
     * @param {Array} array The array to sort
     */
    function sort(array) {

        var length = array.length,
            mid    = Math.floor(length * 0.5),
            left   = array.slice(0, mid),
            right  = array.slice(mid, length);

        if(length === 1) {
            return array;
        }

        return merge(sort(left), sort(right));

    }

    /**
     * Merges two sublists back together.
     * Shift either left or right onto
     * the result depending on which is
     * lower (assuming both exist), and simply
     * pushes on a list if the other doesn't
     * exist.
     *
     * @param {Array} left The left hand sublist
     * @param {Array} right The right hand sublist
     */
    function merge(left, right) {

        var result = [];

        while(left.length || right.length) {

            if(left.length && right.length) {

                if(parseInt(left[0]) < parseInt(right[0])) {
                    result.push(left.shift());
                } else {
                    result.push(right.shift());
                }

            } else if (left.length) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }

        }

        return result;

    }

    return {
        sort: sort
    };

})();


function bigSorting(arr) {
    // Complete this function
    // arr.sort(function(a, b) {
    //     return a - b;
    // });
    // //print number
    // //for(let i=0; i < arr.lenght; i++){
    // //    console.log(arr[i]+'\n');
    // //}
    // return arr;
    return Mergesort.sort(arr);
}

function main() {
    var n = parseInt(readLine());
    var arr = [];
    for(var arr_i = 0; arr_i < n; arr_i++){
        arr[arr_i] = readLine();
    }
    var result = bigSorting(arr);
    console.log(result.join("\n"));
}

var arr = ['31415926535897932384626433832795','1','3','10','3','5'];
var result = bigSorting(arr);
console.log(result.join("\n"));