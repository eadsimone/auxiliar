'use strict';

const incrementbutton = (e) =>{
    //using input
    // let incremente = parseInt(e.value);
    // incremente++;
    // e.value = incremente.toString();
    //using button
    let incremente = document.getElementById("btn").innerHTML;
    incremente++;
    document.getElementById("btn").innerHTML= incremente;
};