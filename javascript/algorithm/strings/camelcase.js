/**
 * Created by edesimone on 28/01/18.
 */
/*Alice wrote a sequence of words in CamelCase as a string of letters, , having the following properties:

 It is a concatenation of one or more words consisting of English letters.
 All letters in the first word are lowercase.
 For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
 Given , print the number of words in  on a new line.

 Input Format

 A single line containing string .

 Constraints

 Output Format

 Print the number of words in string .

 Sample Input

 saveChangesInTheEditor
 Sample Output

 5
 Explanation

 String  contains five words:

 save
 Changes
 In
 The
 Editor
 Thus, we print  on a new line.

 Need help? Try this problem first to get familiar with HackerRank environment.*/

function camelcase(s) {
    // Complete this function
    var reg = /[A-Z]/g,
        retA = s.split(new RegExp(reg));
    return retA.length;

    // var arrI=0,
    //     solution =[],
    //     word ='';
    //
    // for (let i=0;i < s.length; i++){
    //     if (s[i].match(reg) == null ){
    //         word+=s[i];
    //     } else {
    //         solution.push(word);
    //         word=s[i];
    //     }
    // }
    // solution.push(word);
    // //return solution;
    // return solution.length;
}

camelcase("saveChangesInTheEditor");
