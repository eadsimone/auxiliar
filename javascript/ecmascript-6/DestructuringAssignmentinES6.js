/**
 * Created by edesimone on 31/07/17.
 */
// var obj = {
//     color : 'gris'
// }
//
// console.log(obj.color);
//
// //-------------------------
//
// var {color,position} = {
//     color : 'blue',
//     name : 'John',
//     state: "New York",
//     position: "forward",
// }
//
// console.log(color);
// console.log(position);

//-------------------------

// function generaObj(){
//     return {
//         color : 'blue',
//         name : 'John',
//         state: "New York",
//         position: "forward",
//     }
// }
//
// var {name, state} =generaObj();
//
// console.log(name);
// console.log(state);

//-------------------------

// function generaObj(){
//     return {
//         color : 'blue',
//         name : 'John',
//         state: "New York",
//         position: "forward",
//     }
// }
//
// var {name: firstName, state: location} =generaObj();
//
// console.log(firstName);
// console.log(location);

//-------------------------
// Then when I say log the email of Skyler, and I run this, it logs out Skyler's email, which is right here, because it looks up the second item, names it Skyler.
// This is not looking up the name Skyler, it's just naming it Skyler from people.
// I'm logging Skyler's email, which is destructuring that Skyler object, and only taking the email off of it and logging out the email string, which is this.
// var [first,,,,fifth]= ["red","yellow","green","blue","orange"];
//
// console.log(first);
// console.log(fifth);

var people= [
    {
        "firstName":"Clicton",
        "lastName":"Ruiz",
        "phone":"1-403-985-0449",
        "email":"Clicton@gmail.com",
        "address":"AP #9898 8484",
    },
    {
        "firstName":"Skyler",
        "lastName":"Carrol",
        "phone":"1-403-985-0449",
        "email":"Skylerc@gmail.com",
        "address":"P.O. BOX 171. moreno st",

    },
    {
        "firstName":"Kyllyn",
        "lastName":"Garcia",
        "phone":"1-444-985-0449",
        "email":"GKyllyn@gmail.com",
        "address":"AP #9898 8484",
    },
    {
        "firstName":"Channey",
        "lastName":"Edwards",
        "phone":"1-403-985-0449",
        "email":"Edwards@gmail.com",
        "address":"AP #9898 8484",
    }
]

//------------------
/*
* I'll go through them with a four each, and then we'll pass on a function. I'll use the arrow syntax, so that's the arrow syntax for a function, and I'm going to destructure the parameter that comes in. This would typically be the person.
 I'll say I only want the "first name" off of it, so that when I log this out I can get the first name.
 I can run this and I can log out all of the first names of those people, because what happened is this function took in the destructured version of this, saying only give me the first name of all of these people that come in.
 Then I can log out just the first name.*/

//people.forEach(({firstName})=>console.log(firstName));

//------------------
/*Lastly, to combine a couple of these concepts, if I want to get Skyler, I can actually use that array syntax, and I'll just say ", "Skyler"" and assign that to people, meaning that this is going to skip the first one, look up the second one and name it Skyler.
Then I'll make a function which I'll call "log email", which will take a destructured of that object of just the email property, and we'll say "log email".
 Then when I say log the email of Skyler, and I run this, it logs out Skyler's email, which is right here, because it looks up the second item, names it Skyler.
 This is not looking up the name Skyler, it's just naming it Skyler from people.
 I'm logging Skyler's email, which is destructuring that Skyler object, and only taking the email off of it and logging out the email string, which is this.
* */

var [,Skyler] = people;

function logEmail({email}) {
    console.log(email);
}

logEmail(Skyler);

//todo review concept for that!!!