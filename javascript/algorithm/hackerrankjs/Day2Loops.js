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
    let arvowels,arconsonant = [];

    for (let i=0 ; i< s.length; i++){
        if (s[i].search(vowels)!= -1 ){
            arvowels.push(s[i]);
        }else {
            arconsonant.push(s[i]);
        }
    }

    let conclusion = arvowels.concat(arconsonant);

    for each (var item in conclusion) {
        console.log(item);
    }

}

function main() {
    const s = readLine();

    vowelsAndConsonants(s);
}

