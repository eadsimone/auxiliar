'use strict';

var res = [];

document.getElementById("btn0").addEventListener("click", function(){
    res.push(0);
    document.getElementById("res").innerHTML = res.join('');
});

document.getElementById("btn1").addEventListener("click", function(){
    res.push(1);

    document.getElementById("res").innerHTML = res.join('');
});

document.getElementById("btnClr").addEventListener("click", function(){
    res=[];

    document.getElementById("res").innerHTML = "";
});

document.getElementById("btnEql").addEventListener("click", function(){
    document.getElementById("res").innerHTML = 'igual';
});


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
