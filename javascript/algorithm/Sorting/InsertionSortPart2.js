/*
* In Insertion Sort Part 1, you inserted one element into an array at its correct sorted position. Using the same approach repeatedly, can you sort an entire array?

Guideline: You already can place an element into a sorted array. How can you use that code to build up a sorted array, one element at a time? Note that in the first step, when you consider an array with just the first element, it is already sorted since there's nothing to compare it to.

In this challenge, print the array after each iteration of the insertion sort, i.e., whenever the next element has been inserted at its correct position. Since the array composed of just the first element is already sorted, begin printing after placing the second element.

Complete the insertionSort2 function below using the insertion sort algorithm to sort an array of integers. As each element is placed in its final position of an iteration, print the array as a string of space-separated integers on its own line.

Input Format

There will be two lines of input:

 - the size of the array
 space-separated integers that make up
Constraints



Output Format

On each line, output the entire array at every iteration.

Sample Input

6
1 4 3 5 6 2
Sample Output

1 4 3 5 6 2
1 3 4 5 6 2
1 3 4 5 6 2
1 3 4 5 6 2
1 2 3 4 5 6
Explanation

Skip testing  against itself at position . It is sorted.
Test position  against position : , no more to check, no change.
Print
Test position  against positions  and :

, new position may be . Keep checking.
, so insert  at position  and move others to the right.
Print
Test position  against positions  (as necessary): no change.
Print
Test position  against positions : no change.
Print
Test position  against positions , insert  at position  and move others to the right.
Print

*/

/*
i ← 1
while i < length(A)
    x ← A[i]
    j ← i - 1
    while j >= 0 and A[j] > x
        A[j+1] ← A[j]
        j ← j - 1
    end while
    A[j+1] ← x[4]
    i ← i + 1
end while

recursive
* function insertionSortR(array A, int n)
     if n>0
        insertionSortR(A,n-1)
        x ← A[n]
        j ← n-1
        while j >= 0 and A[j] > x
            A[j+1] ← A[j]
            j ← j-1
        end while
        A[j+1] ← x
     end if
 end function*/

function insertionSortR(A, n){
    if (n>0) {
        insertionSortR(A, n - 1);
        var x = A[n];
        var j = n - 1;
        while ((j >= 0) && (A[j] > x)){
            A[j + 1] = A[j];
            j = j - 1;
        }
        console.log(A.join(' '));
    }
}


function insertionSort2(n, arr) {
    // Complete this function
    if (n > 0) {
        insertionSort2(n - 1, arr );
        var x = arr[n];
        var j = n-1;
        while ((j >= 0) && (arr[j] > x)){
            arr[j + 1] = arr[j];
            j = j-1;
        }
        arr[j+1] = x;
        console.log(arr.join(' '));
    }

}

var n=6,
    arr = [1,4,3,5,6,2];
/*
Sample Output

1 4 3 5 6 2
1 3 4 5 6 2
1 3 4 5 6 2
1 3 4 5 6 2
1 2 3 4 5 6
*/


//
// var n=10,
//     arr = [2,3,4,5,6,7,8,9,10,1];
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


//insertionSort2( arr, (arr.length)-1);
insertionSort2((arr.length)-1, arr);
