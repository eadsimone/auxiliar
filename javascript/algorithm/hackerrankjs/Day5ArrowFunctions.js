'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {

        return nums.map((currentValue, index, array)=> {
            // Elemento devuelto de nuevo_array
            if (currentValue % 2 === 0){
                //is even
                return currentValue * 2;
            }else {
                //is odd
                return currentValue * 3;
            }
        });

}
var nums = [1,2,3,4,5];

modifyArray(nums);

// function main() {
//     const n = +(readLine());
//     const a = readLine().split(' ').map(Number);
//
//     console.log(modifyArray(a).toString().split(',').join(' '));
// }