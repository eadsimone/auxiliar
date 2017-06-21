/**
 * Created by edesimone on 20/06/17.
 *
 * Given a string find longest palindromic subsequence in this string.
 *
 * Time complexity - O(n2)
 * Space complexity - O(n2
 *
 * Youtube link - https://youtu.be/_nCsPn7_OgI
 *
 * References
 * http://www.geeksforgeeks.org/dynamic-programming-set-12-longest-palindromic-subsequence/
 *
 * is “BBABCBCAB”, then the output should be 7 as “BABCBAB”
 */

Array.matrix = function(numrows, numcols, initial){
    var arr = [];
    for (var i = 0; i < numrows; ++i){
        var columns = [];
        for (var j = 0; j < numcols; ++j){
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}

class  LongestPalindromicSubsequence  {

    calculate1(str){
        //var T =[][];
        var T = Array.matrix(str.length,str.length,0);

        for(var i=0; i < str.length; i++){
            T[i][i] = 1;
        }
        for(var  l = 2; l <= str.length; l++){
            for(var i = 0; i < str.length-l + 1; i++){
                var j = i + l - 1;
                if(l == 2 && str[i] == str[j]){
                    T[i][j] = 2;
                }else if(str[i] == str[j]){
                    T[i][j] = T[i + 1][j-1] + 2;
                    //console.log(str[i]);
                }else{
                    T[i][j] = Math.max(T[i + 1][j], T[i][j - 1]);
                }
            }
        }
        return T[0][str.length-1];
    }

    calculateRecursive(str, start,len){
        if(len == 1){
            return 1;
        }
        if(len ==0){
            return 0;
        }
        if(str[start] == str[start+len-1]){
            return 2 + this.calculateRecursive(str,start+1,len-2);
        }else{
            return Math.max(this.calculateRecursive(str, start+1, len-1), this.calculateRecursive(str, start, len-1));
        }
    }
}


const lps = new LongestPalindromicSubsequence();
var str = "agbdba";
var str = "BBABCBCAB";

//var r1 = lps.calculateRecursive(str, 0, str.length);
var r2 = lps.calculate1(str);
console.log(" " + r2);
//console.log(r1 + " " + r2);
