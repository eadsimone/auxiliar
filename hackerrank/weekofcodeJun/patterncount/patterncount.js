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

/*function patternCount(s){
 // Complete this function
 var max = s.length;
 var result = 0;
 var patt1 = /^10*1$/g;

 /!*
 var str = 'For more information, see Chapter 3.4.5.1';
 var re = /see (chapter \d+(\.\d)*)/i;
 var found = str.match(re);
 *!/
 var builString=[];
 var contunos=0;

 for(var i = 0; i < max; i++){

 if (s[i]==1)  {
 contunos++;
 }

 builString.push(s[i]);
 //var matchString = builString.toString();
 var matchString = builString.join("");

 if (matchString.match(patt1)){
 result++;
 builString=[];
 i=i-1;
 contunos=0;
 } else {
 if (contunos===2)  {
 builString=[];
 i=i-1;
 contunos=0;
 }
 }
 }

 return result;
 }*/


function patternCount(s){
    // Complete this function

    var max = s.length;
    var result = 0;
    var contunos=0;
    var sontodosceros=true;
    var path=/^[a-z0-9]*$/g;
    var patt1 = /^10+1$/g;
    var builString=[];

    if ( (max>=1) && (max<=2000) && (s.match(path))){
        for(var i = 0; i < max; i++){

            if (s[i]==="1")  {
                contunos++;
            } else if (s[i]!=="0") {
                sontodosceros = false;
            }

            builString.push(s[i]);
            var matchString = builString.join("");

            if (contunos===2) {
                if((sontodosceros) && (matchString.match(patt1))) {
                    result++;

                }
                builString=[];
                i=i-1;
                contunos=0;
                sontodosceros=true;
            }
        }
    }
    return result;
}


function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var s = readLine();
        var result = patternCount(s);
        process.stdout.write("" + result + "\n");
    }
}


var arS = ["100001abc101","1001ab010abc01001","1001010001","1101001"];
//var arS = ["1101001"];
var q= arS.length;

for(var a0 = 0; a0 < q; a0++){
    //var s = readLine();
    var s = arS[a0];
    var result = patternCount(s);
    process.stdout.write("" + result + "\n");
}