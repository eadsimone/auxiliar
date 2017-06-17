/**
 * Created by edesimone on 16/06/17.
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

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    var q = parseInt(n_temp[2]);
    for(var a0 = 0; a0 < m; a0++){
        var u_temp = readLine().split(' ');
        var u = parseInt(u_temp[0]);
        var v = parseInt(u_temp[1]);
    }
    for(var a0 = 0; a0 < q; a0++){
        var u_temp = readLine().split(' ');
        var u = parseInt(u_temp[0]);
        var v = parseInt(u_temp[1]);
        var w = parseInt(u_temp[2]);
    }

}
 main();