/**
 * Created by edesimone on 30/01/18.
 */
// Task
//
// Complete the getSecondLargest function in the editor below. It has one parameter: an array, , of numbers. The function must find and return the second largest number in .
//
// Input Format
//
// Locked stub code in the editor reads the following input from stdin and passes it to the function:
// The first line contains an integer, n , denoting the size of the nums array.
//     The second line contains n space-separated numbers describing the elements in nums .

/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
    // Complete the function
    var max= nums[0],max2 = -1;
    for (let i=1; i < nums.length;i++){
        if (nums[i] > max ){
            if(max > max2){
                max2 = max;
            }
            max= nums[i];


        } else if((nums[i] !== max) && (nums[i] > max2) ){
            max2 = nums[i];
        }
    }
    return max2;
}


function main() {
    // const n = +(readLine());
    // const nums = readLine().split(' ').map(Number);

    var numss = [7,2,3,6,6,5];
    console.log(getSecondLargest(numss));
}
main();