/**
 * Created by edesimone on 28/07/17.
 *
 * Arrow Function => in ES6
 */


var createGreetings = function (message, name) {
    return message + name;
    
}
//translate to arrow function

var arrowGreetings = (message, name) =>  message + name;

//----------------------------------------------------------------------------

//conventional javascript ES5
var deliveryBoy = {
    name:"jhon",

    handleMessage: function (message, handler) {
        handler(message);
    },

    receive: function () {
        var that=this;

        this.handleMessage("Hello", function (message) {
            that.name;//get the proper name
            console.log(message + that.name);
            
        })
        
    }
}

deliveryBoy.receive();

/*
* we are going to replace the including function in handle message
*
* Now, the arrow function actually helps handle this scenario. I'm going to delete the function keyword. I'll use the arrow function syntax. Then, that here can just become this. I can delete this line, delete that, and this now refers to the outer scope outside of this function because it's passing in this lexical scope that's coming in from above the function.
 This is no longer referring to the scope inside of the function. It's referring to the scope that's outside of the function.
 Again, if you'd prefer to do this in one line of code, we can delete this brace and bring everything up a line. We can delete the semicolon and delete the closing brace. We can remove the paren from here and handle this nicely in a simple one-liner.
 When I run this, you can see it prints out "Hello, John" because this is actually this handler right here and it's getting this message through here, which is coming from here. When the message goes here to here to here, down into our arrow function, I add it to this name, and this name is this name now...
* */

var deliveryBoy = {
    name:"jhon",

    handleMessage: function (message, handler) {
        handler(message);
    },

    receive: function () {

        this.handleMessage("Hello", (message) => console.log(message + this.name));

    }
}

deliveryBoy.receive();