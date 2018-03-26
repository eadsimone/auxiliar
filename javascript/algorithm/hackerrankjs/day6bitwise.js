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
*	Return the largest value of any a & b < k in S (where a < b).
*
*	n: Set S is a sequence of distinct integers from 1 to n (i.e., {1, 2, ..., n}).
*	k: An integer.
*
*
3
5 2
8 5
2 2
*/
function getMaxLessThanK(n, k) {
    var solution=0;

    for (var a=k; a <= n; a++ ){
        for (var b=a+1; b <= n; b++ ){
            if(a < b){
                let BitwiseAND = a & b;
               solution = (BitwiseAND < k) ? Math.max(solution, BitwiseAND) : solution ;   //  20
            }
        }
    }
    return solution;

    //solution pass all test cases
    // var max = 0;
    // var bit_sum;
    // for(var i=k-1;i>0;i--){
    //     for(var j=n;j>i;j--){
    //         bit_sum = i&j;
    //         if(bit_sum>max && bit_sum<k) max = bit_sum;
    //         if(max==k-1) return max;
    //         if(max>i) return max;
    //     }
    // }
    //
    // return max;
}


function main() {
    const q = +(readLine());

    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);

        console.log(getMaxLessThanK(n, k));
    }
}

console.log(getMaxLessThanK(5, 2));
console.log(getMaxLessThanK(8, 5));
console.log(getMaxLessThanK(2, 2));

console.log('*************************');
console.log(getMaxLessThanK(9, 2));
console.log(getMaxLessThanK(8, 3));
console.log('*************************');
console.log(getMaxLessThanK(840,416));//415
console.log(getMaxLessThanK(165,114));//113
console.log(getMaxLessThanK(512,107));//106
console.log(getMaxLessThanK(123,68));//67
console.log(getMaxLessThanK(298,86));//85
console.log(getMaxLessThanK(160,77));//76
console.log(getMaxLessThanK(769,696));//695
console.log(getMaxLessThanK(198,131));//130
console.log(getMaxLessThanK(951,798));//797
console.log(getMaxLessThanK(172,102));//101
