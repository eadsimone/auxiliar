/**
 * Created by edesimone on 31/07/17.
 */
function greet(greeting, name= "jhon") {

    console.log(greeting+","+name);
}

greet("hello","jose");
//
// function receive(complete= () => console.log("comlete")) {
//     complete();
// }
//
// receive();

//now complete with arrow function

let  receive = (complete= () => console.log("comlete"));

receive();