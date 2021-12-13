'use strict';

// innerHTML	id	Description/Behavior
// res	     Contains the result of button presses.
//           btns	A button container that displays all eight calculator buttons.
// 0	     btn0	A button expressing binary digit .
// 1	     btn1	A button expressing binary digit .
// C	     btnClr	A button to clear the contents of .
// =	     btnEql	A button to evaluate the contents of the expression in .
// +	     btnSum	A button for the addition operation.
// -	     btnSub	A button for the subtraction operation.
// *	     btnMul	A button for the multiplication operation.
// /	     btnDiv	A button for the integer division operation.

var res = [];
var currentOperator='';

// 0	     btn0	A button expressing binary digit .
document.getElementById("btn0").addEventListener("click", function(){
    res.push(0);
    document.getElementById("res").innerHTML = res.join('');
});

// 1	     btn1	A button expressing binary digit .
document.getElementById("btn1").addEventListener("click", function(){
    res.push(1);

    document.getElementById("res").innerHTML = res.join('');
});

// C	     btnClr	A button to clear the contents of .
document.getElementById("btnClr").addEventListener("click", function(){
    res=[];

    document.getElementById("res").innerHTML = "";
});

// =	     btnEql	A button to evaluate the contents of the expression in .
document.getElementById("btnEql").addEventListener("click", function(){

    var re = /[\+\*-\/]/;
    //var nameList = names.split(re);
    var str = res.join("").split(re);

   let value1 = binToDec(str[0]);
   let value2 = binToDec(str[1]);
   var total=0;

    switch (currentOperator) {
        case '+':
            total=value1+value2;
            break;
        case '-':
            total=value1-value2;
            break;
        case '*':
            total=value1*value2;
            // expected output: "Mangoes and papayas are $2.79 a pound."
            break;
        case '/':
            total= Math.floor(value1/value2);
            // expected output: "Mangoes and papayas are $2.79 a pound."
            break;
        default:
            console.log('Sorry, we are out of ' + currentOperator + '.');
    }

    var prtBin= decToBin(total);

    var link = document.getElementById('btnClr');

        link.click();
        res.push(prtBin);
    document.getElementById("res").innerHTML = prtBin;
});

//OPERATORS

// +	     btnSum	A button for the addition operation.
document.getElementById("btnSum").addEventListener("click", function(){
    currentOperator= '+';
    res.push('+');
    document.getElementById("res").innerHTML = res.join('');
});

// 	     -	     btnSub	A button for the subtraction operation.
document.getElementById("btnSub").addEventListener("click", function(){
    currentOperator= '-';
    res.push('-');
    document.getElementById("res").innerHTML = res.join('');
});

// *	     btnMul	A button for the multiplication operation.
document.getElementById("btnMul").addEventListener("click", function(){
    currentOperator= '*';
    res.push('*');
    document.getElementById("res").innerHTML = res.join('');
});
// /	     btnDiv	A button for the integer division operation.
document.getElementById("btnDiv").addEventListener("click", function(){
    currentOperator= '/';
    res.push('/');
    document.getElementById("res").innerHTML = res.join('');
});

const binToDec = (bin) => {
    var resultado=0;
    let max=bin.length;
    for (let i=0; i < max; i++){
        if (bin[i]=='1'){
            let exp=(max-1)-i;
            resultado+=Math.pow(2, exp);
        }

    }
    return resultado;
};

const decToBin = (dec) => {
    return parseInt(dec, 10).toString(2);
};

const incrementbutton = (e) =>{
    //using input
    // let incremente = parseInt(e.value);
    // incremente++;
    // e.value = incremente.toString();
    //using button
    const clock= ['btn1','btn2','btn3','btn6','btn9','btn8','btn7', 'btn4', 'btn1'];
    var preValue = document.getElementById(clock[0]).innerHTML;

    for(let i=1; i< clock.length; i++){

        let currentValue = document.getElementById(clock[i]).innerHTML;

        document.getElementById(clock[i]).innerHTML= preValue;//rewrite current value
        preValue = currentValue;
    }
};
