<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 04/04/16
 * Time: 11:32
 */
/*

Write a Person class with an instance variable, age, and a constructor that takes an integer, initialAge, as a parameter.
The constructor must assign initialAge to age after confirming the argument passed as initialAge is not negative;
if a negative argument is passed as initialAge, the constructor should set age to 00 and print Age is not valid, setting age to 0.Age is not valid, setting age to 0..
In addition, you must write the following instance methods:

yearPasses() should increases the age instance variable by 11.
amIOld() should perform the following conditional actions:
If age<13, print You are young.You are young.
If age≥13 and age<18, print You are a teenager.
Otherwise, print You are old.
To help you learn by example and complete this challenge, much of the code is provided for you, but you'll be writing everything in the future. The code that creates each instance of your Person class is in the main method. Don't worry if you don't understand it all quite yet!

Note: Do not remove or alter the stub code in the editor.

Input Format

Input is handled for you by the stub code in the editor.

The first line contains an integer, TT (the number of test cases), and the TT subsequent lines each contain an integer denoting the age of a Person instance.

Constraints

1≤T≤4
−5≤age≤30
Output Format

Complete the method definitions provided in the editor so they meet the specifications outlined above; the code to test your work is already in the editor. If your methods are implemented correctly, each test case will print 22 or 33 lines (depending on whether or not a valid initiaAgeinitiaAge was passed to the constructor).

*/

class Person{
    public $age;
    public function __construct($initialAge){
        // Add some more code to run some checks on initialAge
        if (0 < $initialAge){
            $this->age= $initialAge;
        }else {
            $this->age= 0;
            echo "Age is not valid, setting age to 0.\n";
        }

    }
    public  function amIOld(){
        // Do some computations in here and print out the correct statement to the console
        if (($this->age < 13 ))  {
            echo "You are young.\n";
        }elseif (($this->age >= 13 ) && ($this->age < 18)) {
            echo"You are a teenager.\n";
        }else{
            echo"You are old.\n";
        }
    }

    public  function yearPasses(){
        // Increment the age of the person in here
        $this->age++;

    }
}