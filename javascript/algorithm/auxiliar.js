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

                    if( left[0].length  < right[0].length ) {
                        result.push(left.shift());
                    } else if( left[0].length  < right[0].length ){
                        result.push(right.shift());
                    } else {
                        if(parseInt(left[0]) < parseInt(right[0])) {
                            result.push(left.shift());
                        } else {
                            result.push(right.shift());
                        }
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
    return  Mergesort.sort(arr);
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

var arr = ['31415926535897932384626433832795','1','3','10','3','5','41415926535897932384626433832795',
'69169555744334818274419023976430344618457850165626213664752217677003953150535166512918750203967357722676268582815611737574493112368939099342641215831991941425936342318448360572459066838021798674483556641910793580567662994288482928421874992068019644253231745544908467646686651014428257668031614237625352222610459805470837809628537835995896039694249263790552250989187451907746272587443898559731329666967855748420397162860992973751590164593525539665770721115378257127108902993309635248536600352007502406059781546310467929223715136275132732020561005626393441397947918820133717415072684122291041690415943682390767682016632719756094957582062932533126276920508195203270143581645201656516045876579'
];
var result = bigSorting(arr);
console.log(result.join("\n"));
