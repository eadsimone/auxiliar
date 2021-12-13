//pure function to parseint a string
const parint = (word) =>{

    var result=0;
    var max = word.length;
    var regex = /[A-Z]/g;
    var found = word.match(regex);

    for (let i=max-1; i >=0; i-- ) {
//        let found = word.match(regex);
        if (word.match(regex)) {
            result += word[i] * Math.pow(10, i);
        }else {
            i=0;
            return NaN;
        }
    }
    return result;
}

var palabra= '244';
var numero = parint(palabra);
console.log(typeof numero);