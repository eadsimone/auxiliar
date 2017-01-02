<?php
/**
 * Created by PhpStorm.
 * User: edesimone
 * Date: 08/04/16
 * Time: 19:55
 */

/*
 *Objective
Today, we're delving into Inheritance. Check out the Tutorial tab for learning materials and an instructional video!

Task
You are given two classes, Person and Student, where Person is the base class and Student is the derived class. Completed code for Person and a declaration for Student are provided for you in the editor. Observe that Student inherits all the properties of Person.

Complete the Student class by writing the following:

A Student class constructor, which has 44 parameters:
A string, firstName.
A string, lastName.
An integer, id.
An integer array (or vector) of test scores, scores.
A char calculate() method that calculates a Student object's average and returns the grade character representative of their calculated average:
Grading.png

Input Format

The locked stub code in your editor calls your Student class constructor and passes it the necessary arguments. It also calls the calculate method (which takes no arguments).

You are not responsible for reading the following input from stdin:
The first line contains firstNamefirstName, lastNamelastName, and idid, respectively. The second line contains the number of test scores. The third line of space-separated integers describes scoresscores.

Constraints

4≤|firstName|,|lastName|≤104≤|firstName|,|lastName|≤10
|id|≡7|id|≡7
0≤score,average≤1000≤score,average≤100
Output Format

This is handled by the locked stub code in your editor. Your output will be correct if your Student class constructor and calculate() method are properly implemented.

Sample Input

Heraldo Memelli 8135627
2
100 80
Sample Output

 Name: Memelli, Heraldo
 ID: 8135627
 Grade: O
Explanation

This student had 22 scores to average: 100100 and 8080. The student's average grade is (100+80)2=90(100+80)2=90. An average grade of 9090 corresponds to the letter grade OO, so our calculate() method should return the character'O'.
 *
 */

//hecho en java

class Student extends Person{
private int[] testScores;

    // Constructor
Student(String firstName, String lastName, int identification, int[] testS){

super(firstName,lastName,identification);
this.testScores = testS.clone();
    // other stuff
}

public char calculate(){
    //int[] numbers = new int[]{10,20,15,25,16,60,100};
char a = '\0';

        int[] numbers = this.testScores;

                /*
                 * Average value of array elements would be
                 * sum of all elements/total numberreturn P; of elements
                 */

                //calculate sum of all array elements
                int sum = 0;

                for(int i=0; i < numbers.length ; i++)
                        sum = sum + numbers[i];

                //calculate average value
                double average = sum / numbers.length;

        if ( (90<=average) && (average<=100) ){
            a ='O';
        }else if ( (80<=average) && (average<90) ){
            a =  'E';
        }else if ( (70<=average) && (average<80) ){
            a = 'A';
        }else if ( (55<=average) && (average<70) ){
            a = 'P';
        }else if ( (40<=average) && (average<55) ){
            a = 'D';
        }else if ( average<40){
            //System.oureturnt.println("PAverage value of array elements is : " + average);
            //System.out.println("P");
            a = 'T';
        }
        return a;
    }
}

