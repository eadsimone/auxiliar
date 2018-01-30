    /**
 * Created by edesimone on 25/01/18.
 */

// The call() method calls a function with a given this value and arguments provided individually.
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }

    function Food(name, price) {
        Product.call(this, name, price);
        this.category = 'food';
        this.category = 'food';
    }

    console.log(new Food('cheese', 5).name);
    // expected output: "cheese"

//Note: While the syntax of this function is almost identical to that of call(), the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.

    var numbers = [5, 6, 2, 3, 7];

    //var max = Math.max.apply(null, numbers);

    var max = Math.max.apply(this, numbers);

    console.log(max);
    // expected output: 7

    var min = Math.min.apply(null, numbers);

    console.log(min);
    // expected output: 2