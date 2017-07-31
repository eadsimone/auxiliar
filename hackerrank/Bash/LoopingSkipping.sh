#!/usr/bin/env bash
#Your task is to use for loops to display only odd natural numbers from  to .
#
#Input Format
#
#There is no input.
#
#Constraints
#
#-
#
#Output Format
#
#1
#3
#5
#.
#.
#.
#.
#.
#99
#Sample Input
#
#-
#
#Sample Output
#
#1
#3
#5
#.
#.
#.
#.
#.
#99
for i in {1..99}
do
    if (( ("$i" % 2) != "0" )) ; then
        echo "$i";
    fi
done