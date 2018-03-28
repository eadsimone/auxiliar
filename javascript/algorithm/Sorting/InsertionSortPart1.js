/*
* orting
One common task for computers is to sort data. For example, people might want to see all their files on a computer sorted by size. Since sorting is a simple problem with many different possible solutions, it is often used to introduce the study of algorithms.

Insertion Sort
These challenges will cover Insertion Sort, a simple and intuitive sorting algorithm. We will first start with an already sorted list.

Insert element into sorted list
Given a sorted list with an unsorted number  in the rightmost cell, can you write some simple code to insert into the array so that it remains sorted?

Print the array every time a value is shifted in the array until the array is fully sorted. The goal of this challenge is to follow the correct order of insertion sort.

Guideline: You can copy the value of  to a variable and consider its cell "empty". Since this leaves an extra cell empty on the right, you can shift everything over until  can be inserted. This will create a duplicate of each value, but when you reach the right spot, you can replace it with .

Input Format
There will be two lines of input:

 - the size of the array
 - the array containing  sorted integers and  unsorted integer  in the rightmost cell
Output Format
On each line, output the entire array every time an item is shifted in it.

Constraints


Sample Input

5
2 4 6 8 3
Sample Output

2 4 6 8 8
2 4 6 6 8
2 4 4 6 8
2 3 4 6 8
*/


/////////////// ignore above this line ////////////////////
function insertionSort1(n, arr) {
    // Complete this function
    //console.log(n);
    //console.log(arr);

        var valor = arr[n-1], max = n-1;

        for (var i=max; i >= 0 ; i--) {
            if (valor !== arr[i]){
                var currentv = arr[i];
                if ( currentv > valor){
                    arr[i+1] = currentv;
                }else {
                    arr[i+1] = valor;
                    i=-1;
                }
                console.log(arr.join(' '));
                if(i === 0 ){
                    arr[i] = valor;
                    console.log(arr.join(' '));
                }
            }
        }
}

var n=5,
    arr = [2,4,6,8,3];

//
var n=10,
    arr = [2,3,4,5,6,7,8,9,10,1];
//ouput
/*
2 3 4 5 6 7 8 9 10 10
2 3 4 5 6 7 8 9 9 10
2 3 4 5 6 7 8 8 9 10
2 3 4 5 6 7 7 8 9 10
2 3 4 5 6 6 7 8 9 10
2 3 4 5 5 6 7 8 9 10
2 3 4 4 5 6 7 8 9 10
2 3 3 4 5 6 7 8 9 10
2 2 3 4 5 6 7 8 9 10
1 2 3 4 5 6 7 8 9 10
*/


insertionSort1(n, arr);