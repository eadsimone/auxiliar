/**
 * Created by edesimone on 29/01/18.
 */

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels= /[aeiou]/g;
    let consonant = /[aeiou]/g;
    var arvowels= [],arconsonant = [];

    for (let i=0 ; i< s.length; i++){
        if (s[i].search(vowels)!= -1 ){
            arvowels.push(s[i]);
        }else {
            arconsonant.push(s[i]);
        }
    }

    let conclusion = arvowels.concat(arconsonant);

    for (let i=0;  i< conclusion.length; i++){
        console.log(conclusion[i]);
    }

}

function main() {
    //const s = readLine();
    let ss ="javascriptloops";
    vowelsAndConsonants(ss);
}
main();
